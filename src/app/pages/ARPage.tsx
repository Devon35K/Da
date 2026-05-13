import { useNavigate } from 'react-router';
import { useRef } from 'react';
import { useARPlaneDetection, ARStatus } from '../hooks/useARPlaneDetection';

const STATUS_LABEL: Record<ARStatus, string> = {
  'checking-support': 'CHECKING DEVICE...',
  'unsupported':      'AR NOT SUPPORTED',
  'idle':             'READY TO SCAN',
  'starting':         'INITIALIZING AR...',
  'active':           'SCANNING SURFACE...',
  'plane-found':      'SURFACE LOCKED ✓',
  'error':            'SESSION ERROR',
};

const STATUS_COLOR: Record<ARStatus, string> = {
  'checking-support': '#a78bfa',
  'unsupported':      '#ef4444',
  'idle':             '#a78bfa',
  'starting':         '#facc15',
  'active':           '#facc15',
  'plane-found':      '#10b981',
  'error':            '#ef4444',
};

export default function ARPage() {
  const navigate = useNavigate();
  const overlayRef = useRef<HTMLDivElement>(null);
  const { status, planes, errorMsg, isSupported, startAR, stopAR } = useARPlaneDetection();

  const isARLive    = status === 'active' || status === 'plane-found';
  const planeFound  = status === 'plane-found';
  const isStartable = status === 'idle' || status === 'error';

  const handleStartAR = () => {
    startAR(overlayRef.current ?? undefined);
  };

  const handleExit = () => {
    stopAR();
    navigate('/mission');
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 font-['Press_Start_2P',_monospace]"
      style={{
        backgroundColor: isARLive ? 'transparent' : '#0a0118',
        zIndex: 100,
      }}
    >
      <style>{`
        @keyframes scanLine {
          0%   { transform: translateY(-100%); opacity: 0.6; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes pulseRing {
          0%   { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.2; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cornerPing {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
      `}</style>

      {/* ── Scan line overlay (active AR only) ── */}
      {isARLive && (
        <div
          className="pointer-events-none absolute inset-x-0 h-px"
          style={{
            background: 'linear-gradient(to right, transparent, #10b981aa, transparent)',
            animation: 'scanLine 3s linear infinite',
            zIndex: 10,
          }}
        />
      )}

      {/* ── Corner brackets ── */}
      {(['tl','tr','bl','br'] as const).map(c => (
        <div
          key={c}
          className="absolute pointer-events-none"
          style={{
            top:    c.startsWith('t') ? 16 : undefined,
            bottom: c.startsWith('b') ? 16 : undefined,
            left:   c.endsWith('l')   ? 16 : undefined,
            right:  c.endsWith('r')   ? 16 : undefined,
            width: 24, height: 24,
            borderTop:    c.startsWith('t') ? `3px solid ${STATUS_COLOR[status]}` : undefined,
            borderBottom: c.startsWith('b') ? `3px solid ${STATUS_COLOR[status]}` : undefined,
            borderLeft:   c.endsWith('l')   ? `3px solid ${STATUS_COLOR[status]}` : undefined,
            borderRight:  c.endsWith('r')   ? `3px solid ${STATUS_COLOR[status]}` : undefined,
            animation: 'cornerPing 2s ease-in-out infinite',
            zIndex: 20,
          }}
        />
      ))}

      {/* ── Top bar ── */}
      <div
        className="absolute top-0 inset-x-0 flex items-center justify-between px-10 py-4"
        style={{ zIndex: 30 }}
      >
        <button
          onClick={handleExit}
          className="text-[8px] transition-colors"
          style={{ color: isARLive ? '#ffffff' : '#a78bfa' }}
        >
          ← EXIT
        </button>

        <div
          className="text-[7px] px-2 py-1 border"
          style={{
            color: STATUS_COLOR[status],
            borderColor: STATUS_COLOR[status],
            animation: isARLive && !planeFound ? 'blink 1s ease-in-out infinite' : 'none',
          }}
        >
          {STATUS_LABEL[status]}
        </div>

        <div className="text-[7px]" style={{ color: isARLive ? '#10b981' : '#374151' }}>
          WAVE 01
        </div>
      </div>

      {/* ── Pre-AR content (not in session) ── */}
      {!isARLive && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-8"
          style={{ zIndex: 20, animation: 'fadeIn 0.4s ease-out' }}
        >
          {/* Status / reticle */}
          <div className="relative flex items-center justify-center w-36 h-36">
            <div
              className="absolute w-full h-full rounded-full border-2"
              style={{ borderColor: STATUS_COLOR[status], opacity: 0.2 }}
            />
            <div
              className="absolute w-24 h-24 rounded-full border"
              style={{ borderColor: STATUS_COLOR[status], opacity: 0.4 }}
            />
            {(status === 'starting' || status === 'checking-support') && (
              <>
                <div
                  className="absolute w-full h-full rounded-full border-2"
                  style={{ borderColor: STATUS_COLOR[status], animation: 'pulseRing 1.5s ease-out infinite' }}
                />
                <div
                  className="absolute w-full h-full rounded-full border-2"
                  style={{ borderColor: STATUS_COLOR[status], animation: 'pulseRing 1.5s 0.75s ease-out infinite' }}
                />
              </>
            )}
            <span className="text-3xl">
              {status === 'unsupported' ? '🚫' : status === 'error' ? '⚠️' : '📷'}
            </span>
          </div>

          {/* Status text */}
          <div className="text-center space-y-2">
            <p
              className="text-[10px] tracking-widest"
              style={{ color: STATUS_COLOR[status] }}
            >
              {STATUS_LABEL[status]}
            </p>
            {status === 'unsupported' && (
              <p className="text-[7px] text-white/50 leading-relaxed">
                WebXR immersive-ar is not<br />supported on this device.
              </p>
            )}
            {status === 'error' && (
              <p className="text-[7px] text-[#ef4444aa] leading-relaxed max-w-xs text-center">
                {errorMsg}
              </p>
            )}
            {status === 'idle' && (
              <p className="text-[7px] text-white/50 leading-relaxed">
                Point camera at a flat surface<br />and tap START AR.
              </p>
            )}
          </div>

          {/* Start AR button */}
          {isStartable && (
            <button
              onClick={handleStartAR}
              className="relative py-4 px-8 text-[10px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors active:translate-y-0.5"
            >
              <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0118]" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118]" />
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]" />
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]" />
              {status === 'error' ? '> RETRY AR <' : '> START AR <'}
            </button>
          )}
        </div>
      )}

      {/* ── Live AR HUD (session active) ── */}
      {isARLive && (
        <>
          {/* Centre reticle */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 20,
            }}
          >
            {planeFound ? (
              <div style={{ textAlign: 'center' }}>
                <div
                  className="w-16 h-16 border-4 border-[#10b981] rounded-sm mx-auto"
                  style={{ boxShadow: '0 0 20px #10b98188' }}
                />
                <p className="text-[7px] text-[#10b981] mt-2 tracking-widest"
                  style={{ animation: 'blink 1.5s ease-in-out infinite' }}>
                  SURFACE LOCKED
                </p>
              </div>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <div
                  className="w-12 h-12 border-2 border-[#facc15] mx-auto"
                  style={{
                    boxShadow: '0 0 10px #facc1566',
                    animation: 'blink 1s ease-in-out infinite',
                  }}
                />
                <p className="text-[7px] text-[#facc15] mt-2 tracking-widest">
                  SCANNING...
                </p>
              </div>
            )}
          </div>

          {/* Plane list */}
          {planes.length > 0 && (
            <div
              className="absolute bottom-24 inset-x-0 flex flex-col items-center gap-1"
              style={{ zIndex: 30, animation: 'fadeIn 0.3s ease-out' }}
            >
              <p className="text-[6px] text-[#10b981] tracking-widest mb-1">
                {planes.length} SURFACE{planes.length > 1 ? 'S' : ''} DETECTED
              </p>
              {planes.map((p, i) => (
                <div key={i} className="text-[6px] text-white/60">
                  [{i + 1}] {p.orientation.toUpperCase()} — {p.vertexCount} VERTICES
                </div>
              ))}
            </div>
          )}

          {/* Engage game button (once plane found) */}
          {planeFound && (
            <div
              className="absolute bottom-8 inset-x-0 flex justify-center px-8"
              style={{ zIndex: 30, animation: 'fadeIn 0.4s ease-out' }}
            >
              <button
                className="w-full max-w-xs py-4 text-[10px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors relative active:translate-y-0.5"
                style={{ boxShadow: '0 0 24px #8b5cf666' }}
              >
                <div className="absolute top-0 left-0 w-2 h-2 bg-transparent" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-transparent" />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-transparent" />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-transparent" />
                &gt; SMASH ASTEROIDS &lt;
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
