import { useNavigate } from 'react-router';
import { useRef } from 'react';
import { useARGame, GamePhase } from '../hooks/useARGame';

const STATUS_LABEL: Record<GamePhase, string> = {
  'checking':    'CHECKING DEVICE...',
  'unsupported': 'AR NOT SUPPORTED',
  'idle':        'READY TO SCAN',
  'starting':    'INITIALIZING AR...',
  'scanning':    'SCANNING SURFACE...',
  'plane-found': 'SURFACE LOCKED ✓',
  'loading':     'LOADING MODELS...',
  'playing':     'SMASH THE ROCKS!',
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
  'error':       '#ef4444',
};

export default function ARPage() {
  const navigate    = useNavigate();
  const overlayRef  = useRef<HTMLDivElement>(null);
  const { phase, smashed, total, errorMsg, startAR, startGame, stopAR } = useARGame();

  const color       = STATUS_COLOR[phase];
  const label       = STATUS_LABEL[phase];
  const isARLive    = phase === 'scanning' || phase === 'plane-found' || phase === 'loading' || phase === 'playing';
  const isStartable = phase === 'idle' || phase === 'error';
  const showStart   = phase === 'plane-found';
  const isPlaying   = phase === 'playing';
  const isLoading   = phase === 'loading' || phase === 'starting';

  const handleStartAR  = () => startAR(overlayRef.current ?? undefined);
  const handleExit     = () => { stopAR(); navigate('/mission'); };

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

        <div className="text-[7px] px-2 py-1 border" style={{
          color, borderColor: color,
          animation: (isARLive && phase !== 'plane-found' && !isPlaying) ? 'blink 1s ease-in-out infinite' : 'none',
        }}>{label}</div>

        {isPlaying
          ? <div className="text-[7px] text-[#ec4899]">{smashed}/{total}</div>
          : <div className="text-[7px]" style={{ color: isARLive ? '#10b981' : '#374151' }}>WAVE 01</div>
        }
      </div>

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
              <p className="text-[7px] text-[#ef444488] leading-loose max-w-xs text-center">{errorMsg}</p>
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
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-14 h-14 border-2 border-[#facc15] mx-auto"
                    style={{ boxShadow:'0 0 12px #facc1544', animation:'blink 1s ease-in-out infinite' }}/>
                  <p className="text-[7px] text-[#facc15] mt-2 tracking-widest">SCANNING...</p>
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
          {isPlaying && (
            <>
              <div className="absolute bottom-10 inset-x-0 text-center"
                style={{ zIndex:30, animation:'fadeSlide .3s ease-out' }}>
                <p className="text-[8px] text-[#ec4899] tracking-widest"
                  style={{ animation:'blink 2s ease-in-out infinite' }}>
                  TAP ROCKS TO SMASH
                </p>
              </div>
              {smashed === total && total > 0 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                  style={{ zIndex:40, backgroundColor:'rgba(10,1,24,.75)', animation:'fadeSlide .5s ease-out' }}>
                  <p className="text-[14px] text-[#10b981] tracking-widest">CLEARED!</p>
                  <p className="text-[8px] text-white/60">All {total} rocks smashed</p>
                  <button onClick={handleExit}
                    className="mt-4 py-3 px-6 text-[9px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors">
                    &gt; RETURN &lt;
                  </button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
