import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export type CelebrationKind = 'wave-cleared' | 'seal-broken' | 'boss-defeated';

interface Props {
  kind:           CelebrationKind;
  /** Solved word, displayed in the modal */
  word:           string;
  /** Wave number for context */
  wave:           number;
  /** Number of attempts taken (for stats line) */
  attemptsUsed:   number;
  /** Boss-only: seals broken so far / total */
  sealsBroken?:   number;
  sealsTotal?:    number;
  /** Auto-dismiss duration in ms (default 2500) */
  duration?:      number;
  onDismiss:      () => void;
}

const KIND_CONFIG: Record<CelebrationKind, {
  title:        string;
  subtitle:     string;
  color:        string;
  borderColor:  string;
  confettiColors: string[];
  emoji:        string;
}> = {
  'wave-cleared': {
    title:          'WAVE CLEARED',
    subtitle:       'The path opens. Onward, Warden.',
    color:          '#10b981',
    borderColor:    '#10b981',
    confettiColors: ['#10b981', '#a78bfa', '#ec4899', '#facc15'],
    emoji:          '✦',
  },
  'seal-broken': {
    title:          'SEAL BROKEN',
    subtitle:       'The Overlord weakens.',
    color:          '#facc15',
    borderColor:    '#facc15',
    confettiColors: ['#facc15', '#ec4899', '#ef4444', '#a78bfa'],
    emoji:          '⚡',
  },
  'boss-defeated': {
    title:          'BOSS DEFEATED',
    subtitle:       'The Rift retreats. For now.',
    color:          '#ec4899',
    borderColor:    '#ec4899',
    confettiColors: ['#ec4899', '#facc15', '#10b981', '#a78bfa', '#60a5fa'],
    emoji:          '★',
  },
};

export default function CelebrationModal({
  kind, word, wave, attemptsUsed,
  sealsBroken, sealsTotal,
  duration = 2500,
  onDismiss,
}: Props) {
  const cfg = KIND_CONFIG[kind];

  // Fire confetti on mount + auto-dismiss timer
  useEffect(() => {
    // Big burst from top-center
    const burst = (count: number, spread: number, startVelocity: number) => {
      try {
        confetti({
          particleCount: count,
          spread,
          startVelocity,
          origin:        { x: 0.5, y: 0.35 },
          colors:        cfg.confettiColors,
          zIndex:        100,
          ticks:         200,
        });
      } catch { /* canvas-confetti not available */ }
    };

    burst(80, 65, 35);
    if (kind === 'boss-defeated') {
      // Extra confetti for boss kill
      setTimeout(() => burst(60, 90, 45), 250);
      setTimeout(() => burst(60, 90, 45), 500);
    }

    const t = setTimeout(onDismiss, duration);
    return () => clearTimeout(t);
  }, [kind, duration, onDismiss, cfg.confettiColors]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center px-6 font-['Press_Start_2P',_monospace]"
      style={{
        backgroundColor: 'rgba(10,1,24,0.7)',
        animation: 'celebFadeIn 0.2s ease-out',
      }}
      onClick={onDismiss}
    >
      <style>{`
        @keyframes celebFadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes celebPopIn   { 0% { transform: scale(0.6) rotate(-2deg); opacity: 0; } 60% { transform: scale(1.08) rotate(1deg); opacity: 1; } 100% { transform: scale(1) rotate(0); opacity: 1; } }
        @keyframes celebGlow    { 0%, 100% { filter: drop-shadow(0 0 8px var(--c, #10b981)) drop-shadow(0 0 18px var(--c, #10b981)); } 50% { filter: drop-shadow(0 0 14px var(--c, #10b981)) drop-shadow(0 0 28px var(--c, #10b981)); } }
        @keyframes celebSparkle { 0%, 100% { transform: scale(1) rotate(0); opacity: 0.9; } 50% { transform: scale(1.2) rotate(15deg); opacity: 1; } }
        @keyframes celebStripe  { 0% { background-position: 0 0; } 100% { background-position: 40px 0; } }
      `}</style>

      <div
        className="relative w-full max-w-sm bg-[#0a0118] border-4 px-6 py-7 text-center"
        style={{
          borderColor: cfg.borderColor,
          animation: 'celebPopIn 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
          boxShadow: `0 0 24px ${cfg.borderColor}99, 0 0 60px ${cfg.borderColor}55`,
          ['--c' as string]: cfg.color,
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Pixel corners */}
        <div className="absolute top-0 left-0  w-2 h-2 bg-[#0a0118]" />
        <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118]" />
        <div className="absolute bottom-0 left-0  w-2 h-2 bg-[#0a0118]" />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]" />

        {/* Animated diagonal stripes background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, ${cfg.color} 0, ${cfg.color} 2px, transparent 2px, transparent 14px)`,
            animation: 'celebStripe 1.2s linear infinite',
          }}
        />

        <div className="relative">
          {/* Big icon */}
          <div
            className="text-5xl mb-2"
            style={{
              color: cfg.color,
              animation: 'celebSparkle 1.6s ease-in-out infinite, celebGlow 2s ease-in-out infinite',
            }}
          >
            {cfg.emoji}
          </div>

          {/* Title */}
          <p
            className="text-[14px] tracking-widest mb-1"
            style={{ color: cfg.color, textShadow: `0 0 8px ${cfg.color}` }}
          >
            {cfg.title}
          </p>

          {/* Subtitle */}
          <p className="text-[7px] text-white/70 leading-relaxed mb-4 px-2">
            {cfg.subtitle}
          </p>

          {/* Solved word — big tile-style display */}
          <div className="flex items-center justify-center gap-1 mb-4">
            {word.split('').map((ch, i) => (
              <div
                key={i}
                className="flex items-center justify-center"
                style={{
                  width:  '32px',
                  height: '32px',
                  backgroundColor: cfg.color,
                  border:  `2px solid ${cfg.color}`,
                  color:   '#0a0118',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  animation: `celebPopIn 0.4s ${0.15 + i * 0.05}s cubic-bezier(0.22, 1, 0.36, 1) both`,
                  boxShadow: `0 0 6px ${cfg.color}88`,
                }}
              >
                {ch}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-4 text-[6px] tracking-widest mb-3">
            <span className="text-white/50">
              WAVE <span className="text-white">{wave}</span>
            </span>
            <span className="text-white/30">·</span>
            <span className="text-white/50">
              {attemptsUsed} <span className="text-white">{attemptsUsed === 1 ? 'TRY' : 'TRIES'}</span>
            </span>
            {sealsTotal !== undefined && sealsBroken !== undefined && (
              <>
                <span className="text-white/30">·</span>
                <span className="text-white/50">
                  SEAL <span style={{ color: cfg.color }}>{sealsBroken}/{sealsTotal}</span>
                </span>
              </>
            )}
          </div>

          {/* Tap to continue hint */}
          <p className="text-[6px] text-white/30 tracking-widest" style={{ animation: 'celebFadeIn 0.5s 0.6s ease-out both' }}>
            TAP TO CONTINUE
          </p>
        </div>
      </div>
    </div>
  );
}
