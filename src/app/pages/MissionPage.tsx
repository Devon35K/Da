import { useNavigate } from 'react-router';
import { useState, useEffect, useMemo } from 'react';

function seededRand(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

type CheckStatus = 'idle' | 'checking' | 'ok' | 'fail';

interface ISystemCheck {
  label: string;
  run: () => Promise<void>;
}

const SYSTEM_CHECKS: ISystemCheck[] = [
  {
    label: 'CAMERA MODULE',
    run: async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach(t => t.stop());
    },
  },
  {
    label: 'AR PLANE DETECT',
    run: async () => {
      if (!('xr' in navigator)) throw new Error('WebXR not supported');
      const supported = await (navigator as any).xr.isSessionSupported('immersive-ar');
      if (!supported) throw new Error('AR not supported');
    },
  },
  {
    label: 'CODEX LINK',
    run: async () => {
      if (!navigator.onLine) throw new Error('No network');
    },
  },
  {
    label: 'ENEMY SCANNER',
    run: async () => {
      if (!('DeviceOrientationEvent' in window)) throw new Error('No motion sensor');
      await new Promise(res => setTimeout(res, 500));
    },
  },
];

export default function MissionPage() {
  const navigate = useNavigate();
  const [statuses, setStatuses] = useState<CheckStatus[]>(SYSTEM_CHECKS.map(() => 'idle'));
  const [ready, setReady] = useState(false);

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
      if (!cancelled) setReady(true);
    };

    runChecks();
    return () => { cancelled = true; };
  }, []);

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

      {/* ── Header ── */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <button
          onClick={() => navigate('/')}
          className="text-[8px] text-[#a78bfa] hover:text-white transition-colors"
        >
          ← BACK
        </button>
        <div className="text-[7px] text-[#10b981] border-2 border-[#10b981] px-2 py-1 relative">
          <div className="absolute top-0 left-0 w-1 h-1 bg-[#0a0118]" />
          <div className="absolute top-0 right-0 w-1 h-1 bg-[#0a0118]" />
          <div className="absolute bottom-0 left-0 w-1 h-1 bg-[#0a0118]" />
          <div className="absolute bottom-0 right-0 w-1 h-1 bg-[#0a0118]" />
          WAVE 01
        </div>
      </div>

      <h2 className="text-[11px] text-[#8b5cf6] text-center mb-5 tracking-widest relative z-10">
        MISSION BRIEF
      </h2>

      {/* ── Radar ── */}
      <div className="flex flex-col items-center mb-5 relative z-10">
        <div className="relative w-32 h-32">
          {/* Concentric rings */}
          <div className="absolute inset-0 rounded-full border-2 border-[#10b981]/20" />
          <div className="absolute inset-[22%] rounded-full border border-[#10b981]/30" />
          <div className="absolute inset-[44%] rounded-full border-2 border-[#10b981]/60" />

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
                  'conic-gradient(rgba(16,185,129,0) 0deg, rgba(16,185,129,0.13) 60deg, rgba(16,185,129,0) 90deg, transparent 360deg)',
              }}
            />
            <div
              className="absolute top-1/2 origin-left"
              style={{
                left: '50%',
                width: '50%',
                height: '1px',
                background: 'linear-gradient(to right, rgba(16,185,129,0.9), rgba(16,185,129,0.05))',
                transform: 'translateY(-50%)',
              }}
            />
          </div>

          {/* Center dot */}
          <div
            className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-[#10b981]"
            style={{ boxShadow: '0 0 6px #10b981' }}
          />

          {/* Enemy blips — appear once ready */}
          {ready && (
            <>
              <div
                className="absolute w-1.5 h-1.5 bg-[#ec4899]"
                style={{ top: '24%', left: '61%', boxShadow: '0 0 5px #ec4899', animation: 'blipBlink 1.1s ease-in-out infinite' }}
              />
              <div
                className="absolute w-1.5 h-1.5 bg-[#facc15]"
                style={{ top: '66%', left: '27%', boxShadow: '0 0 4px #facc15', animation: 'blipBlink 0.9s 0.35s ease-in-out infinite' }}
              />
              <div
                className="absolute w-1.5 h-1.5 bg-[#f97316]"
                style={{ top: '47%', left: '75%', boxShadow: '0 0 4px #f97316', animation: 'blipBlink 1.3s 0.7s ease-in-out infinite' }}
              />
            </>
          )}
        </div>

        <p
          className="text-[7px] mt-3 tracking-wider"
          style={{
            color: ready ? '#10b981' : '#a78bfa',
            animation: ready ? 'none' : 'blinkAnim 1s ease-in-out infinite',
          }}
        >
          {ready ? 'SURFACE DETECTED ✓' : 'SCANNING SURFACE...'}
        </p>
      </div>

      {/* ── System Status ── */}
      <div className="bg-[#1a0a2e] border-2 border-[#8b5cf6] p-3 mb-4 relative z-10">
        <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0118]" />
        <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118]" />
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]" />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]" />

        <p className="text-[7px] text-[#a78bfa] mb-3 tracking-widest">SYSTEM STATUS</p>

        <div className="space-y-2">
          {SYSTEM_CHECKS.map((check, i) => {
            const s = statuses[i];
            const borderColor = s === 'ok' ? '#10b981' : s === 'fail' ? '#ef4444' : s === 'checking' ? '#facc15' : '#1f2937';
            const textColor   = s === 'ok' ? '#10b981' : s === 'fail' ? '#ef4444' : s === 'checking' ? '#facc15' : '#374151';
            return (
              <div
                key={i}
                className="flex items-center gap-2"
                style={s === 'ok' || s === 'fail' ? { animation: 'slideIn 0.25s ease-out' } : {}}
              >
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
                <span className="text-[7px] tracking-wide transition-colors duration-200" style={{ color: textColor }}>
                  {check.label}
                </span>
                {s === 'fail' && (
                  <span className="text-[6px] text-[#ef444499] ml-auto">FAILED</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Mission Target ── */}
      <div className="bg-[#1a0a2e] border-2 border-[#ec4899] p-3 mb-5 relative z-10">
        <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0118]" />
        <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118]" />
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]" />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]" />

        <p className="text-[7px] text-[#a78bfa] mb-2 tracking-widest">TARGET WORD</p>
        <p className="text-[7px] text-white/70 mb-3 leading-[14px]">
          HINT: <span className="text-[#facc15]">A CELESTIAL BODY</span>
        </p>

        <div className="flex gap-2 justify-center">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              className="w-9 h-9 border-2 border-white/20 bg-[#0a0118] flex items-center justify-center"
            >
              <span className="text-white/15 text-[8px]">?</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Engage Button ── */}
      <button
        disabled={!ready}
        onClick={() => ready && navigate('/ar')}
        className="w-full py-4 px-6 text-[10px] border-4 relative transition-all duration-300"
        style={{
          backgroundColor: ready ? '#8b5cf6' : '#1a0a2e',
          borderColor: ready ? '#ec4899' : '#1f2937',
          color: ready ? '#ffffff' : '#374151',
          cursor: ready ? 'pointer' : 'not-allowed',
          animation: ready ? 'engagePulse 2s ease-in-out infinite' : 'none',
        }}
      >
        <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0118]" />
        <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118]" />
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]" />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]" />
        {ready ? '> ENGAGE MISSION <' : 'INITIALIZING...'}
      </button>

    </div>
  );
}
