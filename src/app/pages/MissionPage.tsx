import { useNavigate } from 'react-router';
import WaveMap from '../components/WaveMap';
import { useState, useEffect, useMemo } from 'react';
import { Capacitor } from '@capacitor/core';
import ARPlugin from '../../plugins/ar-plugin';

function seededRand(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

type CheckStatus = 'idle' | 'checking' | 'ok' | 'fail';

interface ISystemCheck {
  label:    string;
  /** True if a failure here should block ENGAGE. Soft checks just warn. */
  critical: boolean;
  run:      () => Promise<void>;
}

const SYSTEM_CHECKS: ISystemCheck[] = [
  {
    label: 'CAMERA MODULE',
    critical: true,
    run: async () => {
      const isNative = Capacitor.isNativePlatform();
      const isAndroid = Capacitor.getPlatform() === 'android';
      
      if (isNative && isAndroid) {
        // Android: Skip camera check, will handle in AR plugin
        console.log('Android detected - skipping camera check');
        return;
      } else {
        // Web: Check camera access
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        stream.getTracks().forEach(t => t.stop());
      }
    },
  },
  {
    label: 'AR PLANE DETECT',
    critical: true,
    run: async () => {
      const isNative = Capacitor.isNativePlatform();
      const isAndroid = Capacitor.getPlatform() === 'android';
      console.log('AR Check - isNative:', isNative, 'isAndroid:', isAndroid);
      
      if (isNative && isAndroid) {
        // Android: Skip check for now, will debug in AR page
        console.log('Android detected - skipping AR check, will debug in AR page');
        return;
      } else {
        // Web: Check WebXR support
        console.log('Checking WebXR support...');
        if (!('xr' in navigator)) throw new Error('WebXR not supported');
        const supported = await (navigator as any).xr.isSessionSupported('immersive-ar');
        console.log('WebXR supported:', supported);
        if (!supported) throw new Error('AR not supported');
      }
    },
  },
  {
    label: 'CODEX LINK',
    critical: false,
    run: async () => {
      if (!navigator.onLine) throw new Error('No network');
    },
  },
  {
    label: 'ENEMY SCANNER',
    critical: false,
    run: async () => {
      if (!('DeviceOrientationEvent' in window)) throw new Error('No motion sensor');
      await new Promise(res => setTimeout(res, 500));
    },
  },
];

export default function MissionPage() {
  const navigate = useNavigate();
  const [statuses, setStatuses] = useState<CheckStatus[]>(SYSTEM_CHECKS.map(() => 'idle'));
  const [done, setDone] = useState(false);

  // Derived state — engage allowed only when all CRITICAL checks pass
  const passed   = statuses.filter(s => s === 'ok').length;
  const checking = statuses.filter(s => s === 'checking').length;
  const total    = SYSTEM_CHECKS.length;
  const criticalFailed = SYSTEM_CHECKS.some(
    (c, i) => c.critical && statuses[i] === 'fail',
  );
  const canEngage = done && !criticalFailed;
  const allPerfect = done && passed === total;

  useEffect(() => {
    let cancelled = false;

    const runChecks = async () => {
      for (let i = 0; i < SYSTEM_CHECKS.length; i++) {
        if (cancelled) return;
        setStatuses(prev => { const n = [...prev]; n[i] = 'checking'; return n; });
        try {
          await SYSTEM_CHECKS[i].run();
          if (!cancelled) setStatuses(prev => { const n = [...prev]; n[i] = 'ok'; return n; });
        } catch {
          if (!cancelled) setStatuses(prev => { const n = [...prev]; n[i] = 'fail'; return n; });
        }
      }
      if (!cancelled) setDone(true);
    };

    runChecks();
    return () => { cancelled = true; };
  }, []);

  const retryChecks = () => {
    setStatuses(SYSTEM_CHECKS.map(() => 'idle'));
    setDone(false);
    // Re-run after a tiny delay to give visual feedback
    setTimeout(async () => {
      for (let i = 0; i < SYSTEM_CHECKS.length; i++) {
        setStatuses(prev => { const n = [...prev]; n[i] = 'checking'; return n; });
        try {
          await SYSTEM_CHECKS[i].run();
          setStatuses(prev => { const n = [...prev]; n[i] = 'ok'; return n; });
        } catch {
          setStatuses(prev => { const n = [...prev]; n[i] = 'fail'; return n; });
        }
      }
      setDone(true);
    }, 100);
  };

  const stars = useMemo(() =>
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      x: seededRand(i * 6.17) * 100,
      y: seededRand(i * 4.23) * 100,
      size: seededRand(i * 2.71) > 0.8 ? 3 : 2,
      delay: `${seededRand(i * 3.91) * 4}s`,
      duration: `${1.5 + seededRand(i * 1.17) * 2}s`,
    })), []);

  return (
    <div className="min-h-screen w-full max-w-md mx-auto bg-[#0a0118] flex flex-col px-6 py-8 font-['Press_Start_2P',_monospace] relative overflow-hidden">

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 1; }
        }
        @keyframes radarSweep {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes radarPing {
          0%   { transform: scale(0.4); opacity: 0.9; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes blinkAnim {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes checkPop {
          0%   { transform: scale(0); }
          65%  { transform: scale(1.3); }
          100% { transform: scale(1); }
        }
        @keyframes engagePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(139,92,246,0.7); }
          50%       { box-shadow: 0 0 0 12px rgba(139,92,246,0); }
        }
        @keyframes blipBlink {
          0%, 100% { opacity: 1;   transform: scale(1); }
          50%       { opacity: 0.2; transform: scale(0.6); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-6px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes failShake {
          0%, 100% { transform: translateX(0); }
          25%      { transform: translateX(-3px); }
          75%      { transform: translateX(3px); }
        }
        @keyframes statusPillGlow {
          0%, 100% { box-shadow: 0 0 4px currentColor; }
          50%      { box-shadow: 0 0 12px currentColor, 0 0 2px currentColor; }
        }
        @keyframes engageReadyPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(236,72,153,0.65), 0 0 24px 0 rgba(139,92,246,0.45); }
          50%      { box-shadow: 0 0 0 14px rgba(236,72,153,0),    0 0 36px 4px rgba(139,92,246,0.65); }
        }
      `}</style>

      {/* Pixel Grid */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, rgba(139,92,246,.3) 25%, rgba(139,92,246,.3) 26%, transparent 27%, transparent 74%, rgba(139,92,246,.3) 75%, rgba(139,92,246,.3) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(139,92,246,.3) 25%, rgba(139,92,246,.3) 26%, transparent 27%, transparent 74%, rgba(139,92,246,.3) 75%, rgba(139,92,246,.3) 76%, transparent 77%, transparent)
        `,
        backgroundSize: '20px 20px',
      }} />

      {/* Twinkling Stars */}
      {stars.map(s => (
        <div
          key={`star-${s.id}`}
          className="absolute bg-white pointer-events-none"
          style={{
            left: `${s.x}%`, top: `${s.y}%`,
            width: `${s.size}px`, height: `${s.size}px`,
            animation: `twinkle ${s.duration} ${s.delay} ease-in-out infinite`,
            zIndex: 1,
          }}
        />
      ))}

      {/* ── Header: BACK + live status pill ── */}
      <div className="flex items-center justify-between mb-3 relative z-10">
        <button
          onClick={() => navigate('/')}
          className="text-[8px] text-[#a78bfa] hover:text-white transition-colors px-2 py-1 -ml-2"
        >
          ← BACK
        </button>
        {(() => {
          // Live status pill: COLOR + LABEL changes with check progress
          const pillColor =
            !done             ? '#facc15' :
            criticalFailed    ? '#ef4444' :
            allPerfect        ? '#10b981' :
                                '#f97316';
          const pillLabel =
            !done             ? `CHECKING ${passed}/${total}` :
            criticalFailed    ? `CRITICAL FAIL` :
            allPerfect        ? `ALL SYSTEMS GO` :
                                `READY · ${passed}/${total}`;
          return (
            <div
              className="text-[7px] border-2 px-2 py-1 relative tracking-widest"
              style={{
                color:       pillColor,
                borderColor: pillColor,
                animation:   !done ? 'statusPillGlow 1.2s ease-in-out infinite' : 'none',
              }}
            >
              <div className="absolute top-0 left-0  w-1 h-1 bg-[#0a0118]" />
              <div className="absolute top-0 right-0 w-1 h-1 bg-[#0a0118]" />
              <div className="absolute bottom-0 left-0  w-1 h-1 bg-[#0a0118]" />
              <div className="absolute bottom-0 right-0 w-1 h-1 bg-[#0a0118]" />
              {pillLabel}
            </div>
          );
        })()}
      </div>

      {/* ── Title ── */}
      <div className="text-center mb-4 relative z-10">
        <h2 className="text-[12px] text-[#8b5cf6] tracking-widest mb-1"
          style={{ textShadow: '0 0 8px #8b5cf6aa' }}>
          MISSION BRIEF
        </h2>
        <p className="text-[6px] text-white/40 tracking-widest">
          PREPARE FOR DEPLOYMENT
        </p>
      </div>

      {/* ── Radar (bigger + dramatic glow halo) ── */}
      <div className="flex flex-col items-center mb-4 relative z-10">
        <div
          className="relative w-36 h-36"
          style={{ filter: done && !criticalFailed ? 'drop-shadow(0 0 14px #10b98155)' : 'drop-shadow(0 0 8px #facc1544)' }}
        >
          {/* Concentric rings */}
          <div className="absolute inset-0 rounded-full border-2 border-[#10b981]/20" />
          <div className="absolute inset-[18%] rounded-full border border-[#10b981]/30" />
          <div className="absolute inset-[36%] rounded-full border border-[#10b981]/40" />
          <div className="absolute inset-[54%] rounded-full border-2 border-[#10b981]/70" />

          {/* Ping rings */}
          <div
            className="absolute inset-0 rounded-full border-2 border-[#10b981]/50"
            style={{ animation: 'radarPing 2s 0s ease-out infinite' }}
          />
          <div
            className="absolute inset-0 rounded-full border-2 border-[#10b981]/30"
            style={{ animation: 'radarPing 2s 0.9s ease-out infinite' }}
          />

          {/* Rotating sweep */}
          <div
            className="absolute inset-0 overflow-hidden rounded-full"
            style={{ animation: 'radarSweep 3s linear infinite' }}
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  'conic-gradient(rgba(16,185,129,0) 0deg, rgba(16,185,129,0.18) 60deg, rgba(16,185,129,0) 90deg, transparent 360deg)',
              }}
            />
            <div
              className="absolute top-1/2 origin-left"
              style={{
                left: '50%', width: '50%', height: '1px',
                background: 'linear-gradient(to right, rgba(16,185,129,0.95), rgba(16,185,129,0.05))',
                transform: 'translateY(-50%)',
              }}
            />
          </div>

          {/* Cross-hair */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-[#10b981]/15" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#10b981]/15" />

          {/* Center dot */}
          <div
            className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-[#10b981]"
            style={{ boxShadow: '0 0 8px #10b981' }}
          />

          {/* Enemy blips — appear once checks complete (only if engage is allowed) */}
          {canEngage && (
            <>
              <div
                className="absolute w-1.5 h-1.5 bg-[#ec4899]"
                style={{ top: '24%', left: '61%', boxShadow: '0 0 6px #ec4899', animation: 'blipBlink 1.1s ease-in-out infinite' }}
              />
              <div
                className="absolute w-1.5 h-1.5 bg-[#facc15]"
                style={{ top: '66%', left: '27%', boxShadow: '0 0 5px #facc15', animation: 'blipBlink 0.9s 0.35s ease-in-out infinite' }}
              />
              <div
                className="absolute w-1.5 h-1.5 bg-[#f97316]"
                style={{ top: '47%', left: '75%', boxShadow: '0 0 5px #f97316', animation: 'blipBlink 1.3s 0.7s ease-in-out infinite' }}
              />
              <div
                className="absolute w-1.5 h-1.5 bg-[#a78bfa]"
                style={{ top: '78%', left: '60%', boxShadow: '0 0 5px #a78bfa', animation: 'blipBlink 1.0s 1.1s ease-in-out infinite' }}
              />
            </>
          )}
        </div>
      </div>

      {/* ── System Status (2-col grid) ── */}
      <div className="bg-[#1a0a2e] border-4 border-[#8b5cf6] p-3 mb-3 relative z-10">
        <div className="absolute top-0 left-0  w-2 h-2 bg-[#0a0118]" />
        <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118]" />
        <div className="absolute bottom-0 left-0  w-2 h-2 bg-[#0a0118]" />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]" />

        <div className="flex items-center justify-between mb-2.5">
          <p className="text-[7px] text-[#a78bfa] tracking-widest">SYSTEM CHECK</p>
          {/* Inline progress bar */}
          <div className="flex gap-1">
            {SYSTEM_CHECKS.map((_, i) => {
              const s = statuses[i];
              const c = s === 'ok' ? '#10b981' : s === 'fail' ? '#ef4444' : s === 'checking' ? '#facc15' : '#1f2937';
              return (
                <div
                  key={i}
                  className="w-2 h-2 transition-colors duration-200"
                  style={{ backgroundColor: c, boxShadow: s !== 'idle' ? `0 0 4px ${c}` : 'none' }}
                />
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-2">
          {SYSTEM_CHECKS.map((check, i) => {
            const s = statuses[i];
            const borderColor = s === 'ok' ? '#10b981' : s === 'fail' ? '#ef4444' : s === 'checking' ? '#facc15' : '#1f2937';
            const textColor   = s === 'ok' ? '#10b981' : s === 'fail' ? '#ef4444' : s === 'checking' ? '#facc15' : '#374151';
            const animation   = s === 'fail' ? 'failShake 0.4s ease-out, slideIn 0.25s ease-out' :
                                (s === 'ok' ? 'slideIn 0.25s ease-out' : undefined);
            return (
              <div key={i} className="flex items-center gap-2 min-w-0" style={animation ? { animation } : undefined}>
                <div
                  className="w-4 h-4 border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                  style={{
                    borderColor,
                    backgroundColor: s === 'ok' ? '#10b981' : s === 'fail' ? '#ef4444' : 'transparent',
                  }}
                >
                  {s === 'ok' && (
                    <span className="text-[#0a0118] leading-none" style={{ fontSize: '8px', animation: 'checkPop 0.25s ease-out' }}>✓</span>
                  )}
                  {s === 'fail' && (
                    <span className="text-[#0a0118] leading-none" style={{ fontSize: '8px', animation: 'checkPop 0.25s ease-out' }}>✕</span>
                  )}
                  {s === 'checking' && (
                    <span className="text-[#facc15] leading-none" style={{ fontSize: '6px', animation: 'blinkAnim 0.5s ease-in-out infinite' }}>■</span>
                  )}
                </div>
                <span
                  className="text-[7px] tracking-wide truncate transition-colors duration-200"
                  style={{ color: textColor }}
                  title={check.label}
                >
                  {check.label}
                </span>
                {!check.critical && s === 'fail' && (
                  <span className="text-[5px] text-[#facc1599] ml-auto" title="Optional check">OPT</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Mission Objective (real lore, replaces fake target word) ── */}
      <div className="bg-[#1a0a2e] border-4 border-[#ec4899] p-3 mb-4 relative z-10">
        <div className="absolute top-0 left-0  w-2 h-2 bg-[#0a0118]" />
        <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118]" />
        <div className="absolute bottom-0 left-0  w-2 h-2 bg-[#0a0118]" />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]" />

        <p className="text-[7px] text-[#a78bfa] mb-2 tracking-widest">▸ OBJECTIVE</p>

        <p className="text-[7px] text-white/85 leading-[13px] mb-2.5">
          Smash <span className="text-[#f97316]">red asteroids</span>, collect letters, solve <span className="text-[#facc15]">Wordle seals</span> to advance.
        </p>

        <div className="flex items-center justify-between gap-2 text-[6px] tracking-widest pt-2 border-t-2 border-[#ec4899]/30">
          <div className="flex flex-col items-center">
            <span className="text-white/40">WAVE TIMER</span>
            <span className="text-[#10b981] mt-1">60s</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white/40">BOSS AT</span>
            <span className="text-[#facc15] mt-1">WAVE 10</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white/40">FINAL SEAL</span>
            <span className="text-[#ec4899] mt-1">RIFTS</span>
          </div>
        </div>
      </div>

      {/* ── Wave Route Map ── */}
      <WaveMap />

      {/* ── Saved checkpoint indicator ── */}
      {(() => {
        const sv = parseInt(localStorage.getItem('arwordle.savedWave') ?? '1', 10);
        return sv > 1 ? (
          <div className="flex items-center justify-center gap-2 mb-2">
            <div
              className="text-[6px] tracking-widest border px-3 py-1"
              style={{
                color:           '#10b981',
                borderColor:     '#10b98155',
                backgroundColor: '#10b98111',
              }}
            >
              ▸ CHECKPOINT: WAVE {sv}
            </div>
          </div>
        ) : null;
      })()}

      {/* ── Engage / Retry Button ── */}
      {criticalFailed ? (
        <div className="space-y-2 relative z-10">
          <p className="text-[6px] text-[#ef4444] tracking-widest text-center">
            CAMERA OR AR UNAVAILABLE · GRANT PERMISSIONS THEN RETRY
          </p>
          <button
            onClick={retryChecks}
            className="w-full py-4 px-6 text-[10px] border-4 border-[#ef4444] bg-[#1a0a2e] text-[#ef4444] relative hover:bg-[#2a1a3e] transition-colors active:translate-y-1"
          >
            <div className="absolute top-0 left-0  w-2 h-2 bg-[#0a0118]" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118]" />
            <div className="absolute bottom-0 left-0  w-2 h-2 bg-[#0a0118]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]" />
            ↻ RETRY CHECKS
          </button>
        </div>
      ) : (
        <button
          disabled={!canEngage}
          onClick={() => canEngage && navigate('/ar')}
          className="w-full py-4 px-6 text-[10px] border-4 relative transition-all duration-300 z-10"
          style={{
            backgroundColor: canEngage ? '#8b5cf6' : '#1a0a2e',
            borderColor:     canEngage ? '#ec4899' : '#1f2937',
            color:           canEngage ? '#ffffff' : '#374151',
            cursor:          canEngage ? 'pointer' : 'not-allowed',
            animation:       canEngage ? 'engageReadyPulse 2s ease-in-out infinite' : 'none',
          }}
        >
          <div className="absolute top-0 left-0  w-2 h-2 bg-[#0a0118]" />
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118]" />
          <div className="absolute bottom-0 left-0  w-2 h-2 bg-[#0a0118]" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]" />
          {!done
            ? <span style={{ animation: 'blinkAnim 1.2s ease-in-out infinite' }}>RUNNING DIAGNOSTICS · {checking ? 'CHECKING' : `${passed}/${total}`}</span>
            : canEngage
              ? <>&gt; ENGAGE MISSION &lt;</>
              : 'BLOCKED'
          }
        </button>
      )}

    </div>
  );
}
