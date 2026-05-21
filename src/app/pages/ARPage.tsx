import { useNavigate } from 'react-router';
import { useRef, useEffect, useState } from 'react';
import { Capacitor } from '@capacitor/core';
import { useARGame, GamePhase } from '../hooks/useARGame';
import { useWaveGame, WAVE_DURATION_MS, BOSS_WAVE_INTERVAL } from '../hooks/useWaveGame';
import { useCodex } from '../hooks/useCodex';
import WordlePuzzle from '../components/WordlePuzzle';
import CelebrationModal, { type CelebrationKind } from '../components/CelebrationModal';
import { fetchTaunt } from '../services/bossApi';
import WaveMap from '../components/WaveMap';
import { useScores } from '../hooks/useScores';
import ARPlugin from '../../plugins/ar-plugin';

interface CelebrationData {
  kind:         CelebrationKind;
  word:         string;
  wave:         number;
  attemptsUsed: number;
  sealsBroken?: number;
  sealsTotal?:  number;
}

const STATUS_LABEL: Record<GamePhase, string> = {
  'checking':    'CHECKING DEVICE...',
  'unsupported': 'AR NOT SUPPORTED',
  'idle':        'READY TO SCAN',
  'starting':    'INITIALIZING AR...',
  'scanning':    'SCANNING SURFACE...',
  'plane-found': 'SURFACE LOCKED ✓',
  'loading':     'LOADING MODELS...',
  'playing':     'COMBAT ACTIVE',
  'game-over':   'DEFEATED',
  'error':       'SESSION ERROR',
};

const STATUS_COLOR: Record<GamePhase, string> = {
  'checking':    '#a78bfa',
  'unsupported': '#ef4444',
  'idle':        '#a78bfa',
  'starting':    '#facc15',
  'scanning':    '#facc15',
  'plane-found': '#10b981',
  'loading':     '#a78bfa',
  'playing':     '#ec4899',
  'game-over':   '#ef4444',
  'error':       '#ef4444',
};

export default function ARPage() {
  const navigate    = useNavigate();
  const overlayRef    = useRef<HTMLDivElement>(null);
  const waveSnapshot  = useRef(1);
  const prevWaveRef   = useRef(0);

  // Restore progress from last session (cleared on fresh-start, kept on exit)
  const [savedWave] = useState(() => {
    const v = parseInt(localStorage.getItem('arwordle.savedWave') ?? '1', 10);
    return isNaN(v) || v < 1 ? 1 : v;
  });
  const [waveCountdown, setWaveCountdown] = useState<number | null>(null);

  const {
    phase, smashed, hp, maxHp, damageTick, errorMsg,
    paused, showPlane, collectedLetters,
    startAR, startGame, stopAR,
    pause, resume, togglePlane,
    setWaveTo, damagePlayer,
    clearActiveAsteroids, respawnWave,
    resetWaveSpeedTimer, speedTier, dodge,
    consumeLetters,
  } = useARGame();

  // Wordle hint via Django AI endpoint
  const { fetchHint, hint, hintLoading, clearHint } = useCodex();
  const { submitScore, topScores, refresh } = useScores();

  // Wave / Wordle / Boss meta-state machine
  const game = useWaveGame({
    enabled:      phase === 'playing',
    onBossAttack: (dmg) => damagePlayer(dmg),
    onWaveStart:  (waveNum) => {
      clearHint();
      localStorage.setItem('arwordle.savedWave', String(waveNum));
      resetWaveSpeedTimer();
      // Spawn fresh asteroids with a 6-second grace period before first attack.
      // Wave 1 pool was already seeded by useARGame.startGame; skip re-spawn.
      if (waveNum > 1) respawnWave(undefined, 6_000);
      resume();
    },
    onWaveEnd:    (_w, isBoss) => {
      // Stop the asteroids attacking THE INSTANT the timer expires.
      clearActiveAsteroids();
      pause();
      clearHint();
      if (isBoss) fetchTaunt('wave_start', `Boss wave begins`).then(setBossTaunt);
    },
  });

  const wave = game.wave;
  const [bossTaunt,   setBossTaunt]   = useState<string | null>(null);
  const [celebration, setCelebration] = useState<CelebrationData | null>(null);
  const [deathWave,   setDeathWave]   = useState(1);
  const [wordFailed,  setWordFailed]  = useState<{ word: string } | null>(null);
  const [dodgeFlash,  setDodgeFlash]  = useState(false);
  const [deathWordsSolved, setDeathWordsSolved] = useState(0);
  const [playerName,   setPlayerName]   = useState('WARDEN');
  const [scoreSubmitted, setScoreSubmitted] = useState(false);
  const [durationSeconds, setDurationSeconds] = useState(0);
  const [isVirtualMode, setIsVirtualMode] = useState(false);
  const swipeRef = useRef<{ x: number; y: number; t: number } | null>(null);
  const wordsSolvedRef    = useRef(0);
  const gameStartTimeRef  = useRef<number | null>(null);
  useEffect(() => { wordsSolvedRef.current = game.wordsSolved; }, [game.wordsSolved]);
  useEffect(() => {
    if (phase === 'playing' && game.metaPhase !== 'idle' && gameStartTimeRef.current === null)
      gameStartTimeRef.current = Date.now();
  }, [phase, game.metaPhase]);

  // ── Bridge: kick off from saved checkpoint the moment AR play begins ──
  useEffect(() => {
    if (phase === 'playing' && game.metaPhase === 'idle') game.startGame(savedWave);
  }, [phase, game.metaPhase, game.startGame, savedWave]);

  // ── Bridge: keep AR's wave display in sync with wave hook ──
  useEffect(() => { setWaveTo(game.wave); }, [game.wave, setWaveTo]);

  // ── Keep a ref snapshot of the current wave (for game-over capture) ──
  useEffect(() => { waveSnapshot.current = game.wave; }, [game.wave]);

  // ── Check AR support on native Android to enable virtual mode fallback ──
  useEffect(() => {
    if (Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'android') {
      ARPlugin.checkARSupport().then(result => {
        if (!result.supported) {
          setIsVirtualMode(true);
        }
      }).catch(() => {
        setIsVirtualMode(true);
      });
    }
  }, []);

  // ── 3-2-1 countdown after each wave transition (not on initial start) ──
  useEffect(() => {
    const prev = prevWaveRef.current;
    prevWaveRef.current = game.wave;
    if (game.metaPhase !== 'wave-active' || prev === 0) return;

    setWaveCountdown(3);
    const t1 = setTimeout(() => setWaveCountdown(2), 1_000);
    const t2 = setTimeout(() => setWaveCountdown(1), 2_000);
    const t3 = setTimeout(() => setWaveCountdown(null), 3_000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [game.wave, game.metaPhase]);

  // ── Bridge: clean up wave state when player dies ──
  useEffect(() => {
    if (phase === 'game-over') {
      setDeathWave(waveSnapshot.current); // capture before reset wipes it
      setDeathWordsSolved(wordsSolvedRef.current);
      setDurationSeconds(gameStartTimeRef.current ? Math.floor((Date.now() - gameStartTimeRef.current) / 1000) : 0);
      gameStartTimeRef.current = null;
      setScoreSubmitted(false);
      game.reset();
      setBossTaunt(null);
      fetchTaunt('game_over').then(setBossTaunt);
    }
  }, [phase, game.reset]);

  // ── Bridge: handle victory ──
  useEffect(() => {
    if (game.metaPhase !== 'victory') return;
    setDurationSeconds(gameStartTimeRef.current ? Math.floor((Date.now() - gameStartTimeRef.current) / 1000) : 0);
    gameStartTimeRef.current = null;
    setScoreSubmitted(false);
    clearActiveAsteroids();
    pause();
  }, [game.metaPhase, clearActiveAsteroids, pause]);

  const color       = STATUS_COLOR[phase];
  const label       = STATUS_LABEL[phase];
  const isARLive    = phase === 'scanning' || phase === 'plane-found' || phase === 'loading' ||
                      phase === 'playing'  || phase === 'game-over';
  const isStartable = phase === 'idle' || phase === 'error';
  const showStart   = phase === 'plane-found';
  const isPlaying   = phase === 'playing';
  const isLoading   = phase === 'loading' || phase === 'starting';
  const isEnd       = phase === 'game-over';
  const isVictory   = isPlaying && game.metaPhase === 'victory';
  const hpPct       = Math.max(0, Math.min(100, (hp / maxHp) * 100));
  const hpColor     = hpPct > 60 ? '#10b981' : hpPct > 30 ? '#facc15' : '#ef4444';

  // Damage flash
  const [flashing, setFlashing] = useState(false);
  useEffect(() => {
    if (damageTick === 0) return;
    setFlashing(true);
    const t = setTimeout(() => setFlashing(false), 350);
    return () => clearTimeout(t);
  }, [damageTick]);

  const handleStartAR = () => startAR(overlayRef.current ?? undefined);
  const handleExit    = () => { stopAR(); navigate('/mission'); };

  // ── Swipe → dodge detection (touchstart records start; touchend fires the dodge) ──
  useEffect(() => {
    if (!isPlaying) return;
    const onStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) swipeRef.current = { x: t.clientX, y: t.clientY, t: Date.now() };
    };
    const onEnd = (e: TouchEvent) => {
      const start = swipeRef.current;
      swipeRef.current = null;
      const t = e.changedTouches[0];
      if (!start || !t) return;
      const dx = Math.abs(t.clientX - start.x);
      const dy = Math.abs(t.clientY - start.y);
      const dt = Date.now() - start.t;
      if (dx > 65 && dx > dy * 1.8 && dt < 280) {
        dodge();
        setDodgeFlash(true);
        setTimeout(() => setDodgeFlash(false), 380);
      }
    };
    document.addEventListener('touchstart', onStart, { passive: true });
    document.addEventListener('touchend',   onEnd,   { passive: true });
    return () => {
      document.removeEventListener('touchstart', onStart);
      document.removeEventListener('touchend',   onEnd);
    };
  }, [isPlaying, dodge]);

  const handleWordFailedRestart = () => {
    localStorage.removeItem('arwordle.savedWave');
    setWordFailed(null);
    game.reset();
    stopAR();
    navigate('/mission');
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 font-['Press_Start_2P',_monospace] select-none"
      style={{ backgroundColor: isARLive ? 'transparent' : '#0a0118', zIndex: 100 }}
    >
      <style>{`
        @keyframes scanLine  { 0% { transform:translateY(-5%);opacity:.7 } 100% { transform:translateY(105vh);opacity:0 } }
        @keyframes pulseRing { 0% { transform:scale(.8);opacity:1 } 100% { transform:scale(2.2);opacity:0 } }
        @keyframes blink     { 0%,100% { opacity:1 } 50% { opacity:.15 } }
        @keyframes fadeSlide { from { opacity:0;transform:translateY(10px) } to { opacity:1;transform:translateY(0) } }
        @keyframes corner    { 0%,100% { opacity:1 } 50% { opacity:.25 } }
        @keyframes spin      { to { transform:rotate(360deg) } }
        @keyframes floorPulse { 0%,100% { opacity:.5;transform:perspective(90px) rotateX(42deg) scale(1) } 50% { opacity:1;transform:perspective(90px) rotateX(42deg) scale(1.06) } }
        @keyframes scanDot      { 0%,66%,100% { opacity:.2;transform:scale(.8) } 33% { opacity:1;transform:scale(1.15) } }
        @keyframes wmActivePulse { 0%,100% { box-shadow:0 0 8px #8b5cf644 } 50% { box-shadow:0 0 18px #8b5cf6aa,0 0 6px #8b5cf677 } }
        @keyframes wmBossPulse   { 0%,100% { box-shadow:0 0 8px #ef444444 } 50% { box-shadow:0 0 22px #ef444499,0 0 8px #ef444477 } }
      `}</style>

      {/* Scan line */}
      {isARLive && (
        <div className="pointer-events-none absolute inset-x-0 h-0.5"
          style={{ background:`linear-gradient(to right,transparent,${color}88,transparent)`, animation:'scanLine 3.5s linear infinite', zIndex:10 }}
        />
      )}

      {/* Corner brackets */}
      {(['tl','tr','bl','br'] as const).map(c => (
        <div key={c} className="absolute pointer-events-none" style={{
          top:    c[0]==='t' ? 14 : undefined, bottom: c[0]==='b' ? 14 : undefined,
          left:   c[1]==='l' ? 14 : undefined, right:  c[1]==='r' ? 14 : undefined,
          width:28, height:28,
          borderTop:    c[0]==='t' ? `3px solid ${color}` : undefined,
          borderBottom: c[0]==='b' ? `3px solid ${color}` : undefined,
          borderLeft:   c[1]==='l' ? `3px solid ${color}` : undefined,
          borderRight:  c[1]==='r' ? `3px solid ${color}` : undefined,
          animation:'corner 2s ease-in-out infinite', zIndex:20,
        }}/>
      ))}

      {/* Top bar */}
      <div className="absolute top-0 inset-x-0 flex items-center justify-between px-10 py-4" style={{ zIndex:30 }}>
        <button onClick={handleExit} className="text-[8px] transition-colors"
          style={{ color: isARLive ? '#ffffffcc' : '#a78bfa' }}>← EXIT</button>

        <div className="flex items-center gap-2">
          <div className="text-[7px] px-2 py-1 border" style={{
            color, borderColor: color,
            animation: (isARLive && phase !== 'plane-found' && !isPlaying) ? 'blink 1s ease-in-out infinite' : 'none',
          }}>{label}</div>
          {isVirtualMode && isARLive && (
            <div className="text-[6px] px-1.5 py-0.5 border border-[#a78bfa] text-[#a78bfa]">
              VIRTUAL
            </div>
          )}
        </div>

        {(isPlaying || isEnd)
          ? <div className="text-[7px] text-[#ec4899]">KILLS {smashed}</div>
          : <div className="text-[7px]" style={{ color: isARLive ? '#10b981' : '#374151' }}>WAVE 01</div>
        }
      </div>

      {/* ── Wave Timer + Letter Inventory (during active wave) ── */}
      {isPlaying && game.metaPhase === 'wave-active' && (
        <div className="absolute top-24 inset-x-0 px-10" style={{ zIndex: 30 }}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[6px] text-white/60 tracking-widest">TIME</span>
            <span className="text-[6px] tracking-widest" style={{
              color: game.timeRemainingMs < 10_000 ? '#ef4444' : '#a78bfa',
              animation: game.timeRemainingMs < 10_000 ? 'blink 0.6s ease-in-out infinite' : 'none',
            }}>
              {Math.ceil(game.timeRemainingMs / 1000)}s
              {wave % BOSS_WAVE_INTERVAL === 0 && ' → BOSS'}
            </span>
            <span className="text-[6px] text-[#10b981] tracking-widest">
              ☕ {collectedLetters.length}
            </span>
          </div>
          <div className="w-full h-1.5 bg-[#1a0a2e]/80 border border-white/10">
            <div
              className="h-full transition-all"
              style={{
                width: `${(game.timeRemainingMs / WAVE_DURATION_MS) * 100}%`,
                backgroundColor: game.timeRemainingMs < 10_000 ? '#ef4444' : '#8b5cf6',
                boxShadow: `0 0 6px ${game.timeRemainingMs < 10_000 ? '#ef4444' : '#8b5cf6'}`,
              }}
            />
          </div>
        </div>
      )}

      {/* ── HP Bar + Wave indicator (during combat) ── */}
      {(isPlaying || isEnd) && (
        <div className="absolute top-14 inset-x-0 px-10" style={{ zIndex: 30 }}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[6px] text-white/60 tracking-widest">HP</span>
            <span className="text-[6px] text-[#facc15] tracking-widest">WAVE {String(wave).padStart(2,'0')}</span>
            <span className="text-[6px]" style={{ color: hpColor }}>{hp}/{maxHp}</span>
          </div>
          <div className="w-full h-2 bg-[#1a0a2e]/80 border border-white/20">
            <div
              className="h-full transition-all duration-300 ease-out"
              style={{
                width: `${hpPct}%`,
                backgroundColor: hpColor,
                boxShadow: `0 0 8px ${hpColor}`,
              }}
            />
          </div>
        </div>
      )}

      {/* ── Damage flash ── */}
      {flashing && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundColor: 'rgba(239,68,68,0.35)',
            boxShadow: 'inset 0 0 120px 40px rgba(239,68,68,0.6)',
            animation: 'fadeSlide .35s ease-out',
            zIndex: 45,
          }}
        />
      )}

      {/* ── Pause button — bottom-right corner, away from HUD and centred hint text ── */}
      {isPlaying && !paused && game.metaPhase === 'wave-active' && (
        <button
          onClick={pause}
          className="absolute bottom-6 right-4 w-11 h-11 flex items-center justify-center border-2 border-[#a78bfa] bg-[#0a0118]/85 active:scale-95 hover:bg-[#1a0a2e]"
          style={{ zIndex: 35, boxShadow: '0 0 12px #8b5cf677, 0 0 4px #0a0118' }}
          aria-label="Pause"
        >
          <div className="flex gap-1">
            <div className="w-1.5 h-4 bg-[#a78bfa]" />
            <div className="w-1.5 h-4 bg-[#a78bfa]" />
          </div>
        </button>
      )}

      {/* ── Pause Menu (only shown when manually paused mid-wave) ── */}
      {isPlaying && paused && game.metaPhase === 'wave-active' && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-8"
          style={{ zIndex: 60, backgroundColor: 'rgba(10,1,24,0.85)', animation: 'fadeSlide .25s ease-out' }}
        >
          <p className="text-[18px] tracking-widest text-[#a78bfa]">PAUSED</p>

          <div className="flex flex-col gap-3 w-full max-w-xs">
            <button
              onClick={resume}
              className="py-4 text-[10px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors"
            >
              &gt; RESUME &lt;
            </button>

            <button
              onClick={togglePlane}
              className="py-3 text-[9px] border-2 transition-colors"
              style={{
                borderColor: showPlane ? '#10b981' : '#facc15',
                color:       showPlane ? '#10b981' : '#facc15',
              }}
            >
              PLANE: {showPlane ? 'VISIBLE' : 'HIDDEN'}
            </button>

            <button
              onClick={async () => { resume(); stopAR(); await new Promise(r => setTimeout(r, 80)); handleStartAR(); }}
              className="py-3 text-[9px] border-2 border-white/40 text-white/80 hover:text-white transition-colors"
            >
              RESTART
            </button>

            <button
              onClick={handleExit}
              className="py-3 text-[9px] border-2 border-white/20 text-white/60 hover:text-white/90 transition-colors"
            >
              EXIT TO MISSION
            </button>
          </div>

          <p className="text-[6px] text-white/40 tracking-widest mt-2">
            KILLS {smashed} · WAVE {wave} · HP {hp}/{maxHp}
          </p>
        </div>
      )}

      {/* ── PRE-AR screen ── */}
      {!isARLive && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-7 px-8"
          style={{ zIndex:20, animation:'fadeSlide .4s ease-out' }}>

          {/* Reticle / spinner */}
          <div className="relative flex items-center justify-center w-36 h-36">
            <div className="absolute w-full h-full rounded-full border-2" style={{ borderColor:color, opacity:.18 }}/>
            <div className="absolute w-24 h-24 rounded-full border"       style={{ borderColor:color, opacity:.35 }}/>
            {isLoading && (
              <div className="absolute w-full h-full rounded-full border-t-2"
                style={{ borderColor:color, animation:'spin .9s linear infinite' }}/>
            )}
            {!isLoading && (phase === 'idle' || phase === 'error') && (
              <>
                <div className="absolute w-full h-full rounded-full border-2"
                  style={{ borderColor:color, animation:'pulseRing 1.6s ease-out infinite' }}/>
                <div className="absolute w-full h-full rounded-full border-2"
                  style={{ borderColor:color, animation:'pulseRing 1.6s .8s ease-out infinite' }}/>
              </>
            )}
            <span className="text-3xl">
              {phase==='unsupported' ? '🚫' : phase==='error' ? '⚠️' : '📷'}
            </span>
          </div>

          {/* Text */}
          <div className="text-center space-y-2">
            <p className="text-[10px] tracking-widest" style={{ color }}>{label}</p>
            {phase === 'unsupported' && (
              <p className="text-[7px] text-white/40 leading-loose">
                WebXR immersive-ar not<br/>supported on this device.
              </p>
            )}
            {phase === 'error' && (
              <pre
                className="text-[7px] text-[#ef444488] leading-relaxed max-w-xs text-left whitespace-pre-wrap break-words px-3 py-2 border border-[#ef444444] bg-[#ef44440a]"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                {errorMsg}
              </pre>
            )}
            {phase === 'idle' && (
              <p className="text-[7px] text-white/40 leading-loose">
                Point camera at a flat surface<br/>then tap START AR.
              </p>
            )}
          </div>

          {isStartable && (
            <button onClick={handleStartAR}
              className="relative py-4 px-8 text-[10px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors active:translate-y-0.5">
              <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"/>
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"/>
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"/>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"/>
              {phase === 'error' ? '> RETRY AR <' : '> START AR <'}
            </button>
          )}
        </div>
      )}

      {/* ── LIVE AR HUD ── */}
      {isARLive && (
        <>
          {/* Centre reticle */}
          {!isPlaying && (
            <div className="absolute pointer-events-none"
              style={{ top:'50%', left:'50%', transform:'translate(-50%,-50%)', zIndex:20 }}>
              {phase === 'plane-found' ? (
                <div className="text-center">
                  <div className="w-20 h-20 border-4 border-[#10b981] mx-auto"
                    style={{ boxShadow:'0 0 24px #10b98166' }}/>
                  <p className="text-[7px] text-[#10b981] mt-2 tracking-widest"
                    style={{ animation:'blink 1.5s ease-in-out infinite' }}>SURFACE LOCKED</p>
                  {isVirtualMode && (
                    <p className="text-[6px] text-[#a78bfa] mt-1 tracking-widest">(VIRTUAL MODE)</p>
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  {/* Perspective floor-scan grid */}
                  <div className="relative flex items-center justify-center" style={{ width:150, height:68 }}>
                    {[0, 0.55, 1.1].map(d => (
                      <div key={d} className="absolute border rounded-sm"
                        style={{
                          width:  55 + d*32, height: 24 + d*14,
                          borderColor: '#facc1555',
                          transform: 'perspective(90px) rotateX(42deg)',
                          animation: `pulseRing 2.2s ${d}s ease-out infinite`,
                        }}
                      />
                    ))}
                    <div style={{
                      width:100, height:42,
                      border:'2px solid #facc15',
                      transform:'perspective(90px) rotateX(42deg)',
                      boxShadow:'0 0 16px #facc1566, inset 0 0 12px #facc1511',
                      animation:'floorPulse 1.6s ease-in-out infinite',
                    }}>
                      {/* inner cross-hairs */}
                      <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
                        <div style={{ width:'100%', height:1, backgroundColor:'#facc1433', position:'absolute' }}/>
                        <div style={{ width:1, height:'100%', backgroundColor:'#facc1433', position:'absolute' }}/>
                      </div>
                    </div>
                  </div>

                  <p className="text-[8px] text-[#facc15] tracking-widest"
                    style={{ animation:'blink 1s ease-in-out infinite' }}>
                    SCANNING HORIZONTAL SURFACE
                  </p>
                  <p className="text-[6px] text-white/50 tracking-widest">TILT DOWN · AIM AT FLOOR OR TABLE</p>

                  {/* Scan progress dots */}
                  <div className="flex gap-2">
                    {[0, 0.3, 0.6, 0.9].map(d => (
                      <div key={d} style={{
                        width:6, height:6, borderRadius:'50%',
                        backgroundColor:'#facc15',
                        animation:`scanDot 1.2s ${d}s ease-in-out infinite`,
                      }}/>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Scanning guidance banner (bottom) */}
          {phase === 'scanning' && (
            <div
              className="absolute inset-x-0 flex flex-col items-center justify-center px-8 gap-3"
              style={{ bottom:'5rem', zIndex:30 }}
            >
              <div
                className="border px-5 py-2 text-center pointer-events-none"
                style={{
                  borderColor:'#facc1555',
                  backgroundColor:'rgba(250,204,21,0.05)',
                  animation:'fadeSlide .5s ease-out',
                }}
              >
                <p className="text-[6px] text-[#facc15]/80 tracking-widest">
                  ▼ HORIZONTAL SURFACES ONLY · MOVE DEVICE SLOWLY ▼
                </p>
              </div>

              {/* Virtual mode indicator - fallback happens automatically after 1.5s */}
              {isVirtualMode && (
                <div
                  className="px-4 py-2 text-[8px] border border-[#a78bfa] bg-[#a78bfa]/20 text-[#a78bfa]"
                  style={{ animation:'fadeSlide .5s ease-out' }}
                >
                  ℹ️ AUTO-FALLBACK: Placing virtual surface in 1.5s...
                </div>
              )}
            </div>
          )}

          {/* START GAME button — appears when plane is locked */}
          {showStart && (
            <div className="absolute bottom-10 inset-x-0 flex justify-center px-8"
              style={{ zIndex:30, animation:'fadeSlide .4s ease-out' }}>
              <button onClick={startGame}
                className="w-full max-w-xs py-5 text-[11px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors active:translate-y-0.5"
                style={{ boxShadow:'0 0 32px #8b5cf677' }}>
                &gt; START GAME &lt;
              </button>
            </div>
          )}

          {/* In-game HUD */}
          {isPlaying && game.metaPhase === 'wave-active' && (
            <div className="absolute bottom-10 inset-x-0 text-center"
              style={{ zIndex:30, animation:'fadeSlide .3s ease-out' }}>
              <p className="text-[8px] text-[#ec4899] tracking-widest"
                style={{ animation:'blink 2.2s ease-in-out infinite' }}>
                TAP ONLY RED ROCKS · WAIT TO STRIKE
              </p>
            </div>
          )}

          {/* ── Dodge flash overlay ── */}
          {dodgeFlash && (
            <div
              className="absolute inset-0 pointer-events-none flex items-center justify-center"
              style={{ zIndex: 50 }}
            >
              <p
                style={{
                  fontFamily: '"Press Start 2P", monospace',
                  fontSize: 20,
                  color: '#10b981',
                  textShadow: '0 0 14px #10b981, 0 0 28px #10b98188',
                  animation: 'fadeSlide .18s ease-out',
                  letterSpacing: '0.2em',
                }}
              >
                DODGE!
              </p>
            </div>
          )}

          {/* ── Wave countdown 3-2-1 overlay ── */}
          {isPlaying && waveCountdown !== null && (
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ zIndex: 45 }}
            >
              <div className="text-center">
                <p className="text-[8px] text-[#a78bfa] tracking-widest mb-3"
                   style={{ fontFamily: '"Press Start 2P", monospace' }}>
                  WAVE {game.wave} INCOMING
                </p>
                <p
                  style={{
                    fontFamily: '"Press Start 2P", monospace',
                    fontSize: 52,
                    lineHeight: 1,
                    color: '#ec4899',
                    textShadow: '0 0 20px #ec4899, 0 0 40px #8b5cf6',
                    animation: 'wmBossPulse 0.7s ease-in-out infinite',
                  }}
                >
                  {waveCountdown}
                </p>
              </div>
            </div>
          )}

          {/* ── Speed-tier indicator ── */}
          {isPlaying && game.metaPhase === 'wave-active' && speedTier > 0 && (
            <div
              className="absolute inset-x-0 flex justify-center"
              style={{ top: '3.5rem', zIndex: 30, animation: 'fadeSlide .25s ease-out' }}
            >
              <div
                className="px-3 py-1 border-2 text-[7px] tracking-widest"
                style={{
                  borderColor:     '#ef4444',
                  backgroundColor: 'rgba(239,68,68,0.15)',
                  color:           '#fca5a5',
                  boxShadow:       '0 0 10px #ef444466',
                  animation:       'wmBossPulse 1s ease-in-out infinite',
                }}
              >
                {'⚡'.repeat(speedTier)}&nbsp;SPEED UP
              </div>
            </div>
          )}

          {/* ── Compact wave route strip (intermission / boss-fight) ── */}
          {isPlaying && (game.metaPhase === 'intermission' || game.metaPhase === 'boss-fight') && (
            <div className="absolute top-0 inset-x-0" style={{ zIndex: 50 }}>
              <WaveMap
                compact
                currentWave={wave}
                metaPhase={game.metaPhase}
              />
            </div>
          )}

          {/* ── Wordle puzzle overlay (intermission OR boss-fight) ── */}
          {isPlaying && (game.metaPhase === 'intermission' || game.metaPhase === 'boss-fight') && (
            <WordlePuzzle
              variant={game.metaPhase === 'boss-fight' ? 'boss' : 'normal'}
              title={
                game.metaPhase === 'boss-fight'
                  ? `BOSS · WAVE ${wave}`
                  : `WAVE ${wave} CLEARED`
              }
              subtitle={
                game.metaPhase === 'boss-fight'
                  ? (bossTaunt ?? 'The Rift Overlord blocks your path. Solve the seals!')
                  : 'Solve to advance to the next wave'
              }
              guess={game.guess}
              attempts={game.attempts}
              guessesRemaining={game.guessesRemaining}
              collectedLetters={collectedLetters}
              bossWordsLeft={game.bossWordsLeft}
              bossWordsTotal={game.bossWordsTotal}
              hp={game.metaPhase === 'boss-fight' ? hp : undefined}
              maxHp={game.metaPhase === 'boss-fight' ? maxHp : undefined}
              hint={hint}
              hintLoading={hintLoading}
              onAddLetter={game.addLetter}
              onBackspace={game.backspace}
              onSubmit={() => {
                // Capture seal counts BEFORE submit (the hook mutates these on win)
                const totalBefore  = game.bossWordsTotal;
                const leftBefore   = game.bossWordsLeft;
                const failedWord   = game.targetWord;   // snapshot before hook resets it
                const guessSnapshot = game.guess;
                const r = game.submitGuess();
                if (r.ok) consumeLetters(guessSnapshot.split(''));
                if (r.result === 'lose') {
                  setWordFailed({ word: failedWord });
                  localStorage.removeItem('arwordle.savedWave');
                }
                if (r.event) {
                  setCelebration({
                    kind:         r.event,
                    word:         r.solvedWord ?? '',
                    wave:         wave,
                    attemptsUsed: r.attemptsUsed,
                    // Show seal progress for boss events
                    sealsTotal:   totalBefore || undefined,
                    sealsBroken:  totalBefore
                      ? totalBefore - leftBefore + 1   // +1 for the seal just broken
                      : undefined,
                  });
                  // Fire a matching boss taunt for AI flavor
                  if (r.event === 'seal-broken' || r.event === 'boss-defeated') {
                    fetchTaunt('word_solved', `Solved ${r.solvedWord} in ${r.attemptsUsed}`).then(setBossTaunt);
                  }
                }
              }}
              onRequestHint={() => {
                fetchHint(
                  game.targetWord,
                  game.attempts.map(a => ({ guess: a.word, colors: a.colors })),
                );
                fetchTaunt(
                  'hint_requested',
                  `Wave ${wave}, attempt ${game.attempts.length + 1}`,
                ).then(setBossTaunt);
              }}
            />
          )}

          {/* ── Word-Failed modal — player exhausted all guesses ── */}
          {wordFailed && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-8"
              style={{
                zIndex: 80,
                backgroundColor: 'rgba(10,1,24,0.96)',
                animation: 'fadeSlide .3s ease-out',
              }}
            >
              <div className="text-4xl" style={{ animation: 'blink 1.5s ease-in-out infinite' }}>&#x2620;</div>

              <div className="text-center space-y-1">
                <p className="text-[13px] tracking-widest text-[#ef4444]">SEAL UNBROKEN</p>
                <p className="text-[6px] text-white/40 tracking-widest">THE WARDEN HAS FALLEN</p>
              </div>

              <div
                className="w-full max-w-xs px-8 py-5 border-2 text-center"
                style={{ borderColor: '#ef444466', backgroundColor: '#ef44440a' }}
              >
                <p className="text-[6px] text-white/40 tracking-widest mb-3">THE WORD WAS</p>
                <p
                  className="text-[24px] tracking-[0.35em]"
                  style={{ color: '#ef4444', textShadow: '0 0 22px #ef444488' }}
                >
                  {wordFailed.word}
                </p>
              </div>

              <p className="text-[6px] text-white/30 tracking-widest text-center leading-relaxed">
                THE MISSION HAS BEEN COMPROMISED<br/>PROGRESS HAS BEEN RESET
              </p>

              <button
                onClick={handleWordFailedRestart}
                className="w-full max-w-xs py-4 text-[10px] border-4 border-[#ef4444] text-[#ef4444] hover:bg-[#ef4444] hover:text-white transition-colors active:translate-y-0.5"
                style={{ boxShadow: '0 0 24px #ef444444' }}
              >
                <div className="relative">
                  <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0118]" />
                  <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118]" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]" />
                  &gt; RESTART MISSION &lt;
                </div>
              </button>
            </div>
          )}

          {/* ── Celebration modal — shown briefly when a Wordle is solved ── */}
          {celebration && (
            <CelebrationModal
              kind={celebration.kind}
              word={celebration.word}
              wave={celebration.wave}
              attemptsUsed={celebration.attemptsUsed}
              sealsBroken={celebration.sealsBroken}
              sealsTotal={celebration.sealsTotal}
              onDismiss={() => setCelebration(null)}
            />
          )}

          {/* Game-over overlay */}
          {isEnd && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8"
              style={{ zIndex:50, backgroundColor:'rgba(10,1,24,.82)', animation:'fadeSlide .5s ease-out' }}>
              <p className="text-[22px] tracking-widest text-[#ef4444]">DEFEATED</p>
              <div className="text-center space-y-2">
                <p className="text-[10px] text-[#ec4899] tracking-widest">KILLS: {smashed}</p>
                <p className="text-[8px] text-[#facc15] tracking-widest">WAVE REACHED: {deathWave}</p>
              </div>
              <WaveMap currentWave={deathWave} metaPhase="defeat" />

              {!scoreSubmitted ? (
                <div className="w-full max-w-xs space-y-2">
                  <input
                    value={playerName}
                    onChange={e => setPlayerName(e.target.value.toUpperCase().slice(0, 12))}
                    className="w-full bg-[#1a0a2e] border-2 border-[#a78bfa] text-white text-[9px] px-3 py-2 text-center tracking-widest focus:border-[#ec4899] focus:outline-none"
                    style={{ fontFamily: "'Press Start 2P', monospace" }}
                    placeholder="YOUR NAME"
                    maxLength={12}
                  />
                  <button
                    onClick={async () => {
                      const score = smashed * 50 + (deathWave - 1) * 200 + deathWordsSolved * 300;
                      await submitScore({
                        player_name: playerName.trim() || 'WARDEN',
                        score,
                        wave_reached: deathWave,
                        words_solved: deathWordsSolved,
                        asteroids_smashed: smashed,
                        duration_seconds: durationSeconds,
                      });
                      await refresh();
                      setScoreSubmitted(true);
                    }}
                    className="w-full py-2 text-[8px] border-2 border-[#facc15] text-[#facc15] hover:bg-[#facc15]/10 transition-colors tracking-widest"
                  >
                    ▶ SUBMIT SCORE
                  </button>
                </div>
              ) : (
                <div className="w-full max-w-xs space-y-1">
                  <p className="text-[7px] text-[#10b981] tracking-widest text-center mb-2">✓ SCORE SUBMITTED</p>
                  {topScores.slice(0, 5).map((s, i) => (
                    <div key={s.id} className="flex justify-between text-[6px] px-1 py-0.5 border-b border-white/10">
                      <span style={{ color: i === 0 ? '#facc15' : '#a78bfa' }}>#{i + 1} {s.player_name}</span>
                      <span className="text-white/60">{s.score.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              )}

              <button onClick={async () => { stopAR(); await new Promise(r=>setTimeout(r,80)); handleStartAR(); }}
                className="mt-2 py-3 px-6 text-[9px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors relative">
                <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"/>
                <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"/>
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"/>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"/>
                &gt; RETRY &lt;
              </button>
              <button onClick={handleExit}
                className="py-2 px-5 text-[8px] border-2 border-white/30 text-white/70 hover:text-white transition-colors">
                EXIT TO MISSION
              </button>
            </div>
          )}

          {/* ── Victory overlay ── */}
          {isVictory && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 overflow-y-auto py-6"
              style={{ zIndex:50, backgroundColor:'rgba(10,1,24,.95)', animation:'fadeSlide .5s ease-out' }}>
              <div className="text-5xl" style={{ color:'#facc15', animation:'blink 1.8s ease-in-out infinite' }}>★</div>
              <p className="text-[18px] tracking-widest text-[#facc15]" style={{ textShadow:'0 0 20px #facc15' }}>MISSION COMPLETE</p>
              <p className="text-[7px] text-white/50 tracking-widest text-center">The Rift retreats. The Codex is sealed.</p>
              <div className="text-center space-y-1">
                <p className="text-[9px] text-[#10b981] tracking-widest">KILLS: {smashed}</p>
                <p className="text-[8px] text-[#a78bfa] tracking-widest">WORDS SOLVED: {game.wordsSolved}</p>
                <p className="text-[8px] text-[#facc15] tracking-widest">
                  TIME: {Math.floor(durationSeconds / 60)}:{String(durationSeconds % 60).padStart(2, '0')}
                </p>
              </div>
              <WaveMap currentWave={11} metaPhase={game.metaPhase} />
              {!scoreSubmitted ? (
                <div className="w-full max-w-xs space-y-2">
                  <input
                    value={playerName}
                    onChange={e => setPlayerName(e.target.value.toUpperCase().slice(0, 12))}
                    className="w-full bg-[#1a0a2e] border-2 border-[#facc15] text-white text-[9px] px-3 py-2 text-center tracking-widest focus:outline-none"
                    style={{ fontFamily: "'Press Start 2P', monospace" }}
                    placeholder="YOUR NAME"
                    maxLength={12}
                  />
                  <button
                    onClick={async () => {
                      const score = smashed * 50 + game.wave * 200 + game.wordsSolved * 300 + 5_000;
                      await submitScore({
                        player_name: playerName.trim() || 'WARDEN',
                        score,
                        wave_reached: game.wave,
                        words_solved: game.wordsSolved,
                        asteroids_smashed: smashed,
                        duration_seconds: durationSeconds,
                      });
                      await refresh();
                      setScoreSubmitted(true);
                    }}
                    className="w-full py-2 text-[8px] border-2 border-[#facc15] text-[#facc15] hover:bg-[#facc15]/10 transition-colors tracking-widest"
                  >
                    ▶ SUBMIT SCORE
                  </button>
                </div>
              ) : (
                <div className="w-full max-w-xs space-y-1">
                  <p className="text-[7px] text-[#10b981] tracking-widest text-center mb-2">✓ SCORE SUBMITTED</p>
                  {topScores.slice(0, 5).map((s, i) => (
                    <div key={s.id} className="flex justify-between text-[6px] px-1 py-0.5 border-b border-white/10">
                      <span style={{ color: i === 0 ? '#facc15' : '#a78bfa' }}>#{i + 1} {s.player_name}</span>
                      <span className="text-white/60">{s.score.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              )}
              <button
                onClick={() => { stopAR(); localStorage.removeItem('arwordle.savedWave'); navigate('/mission'); }}
                className="w-full max-w-xs py-3 text-[9px] border-4 border-[#facc15] bg-[#1a0a2e] text-[#facc15] hover:bg-[#facc15]/10 transition-colors relative"
              >
                <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"/>
                <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"/>
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"/>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"/>
                &gt; BACK TO MISSION &lt;
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
