import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import type { Settings } from '../hooks/useSettings';

interface Props {
  open:           boolean;
  settings:       Settings;
  setSetting:     <K extends keyof Settings>(key: K, value: Settings[K]) => void;
  resetSettings:  () => void;
  onClose:        () => void;
}

interface ToggleProps {
  label:       string;
  description: string;
  value:       boolean;
  onChange:    (v: boolean) => void;
  color?:      string;
}

function Toggle({ label, description, value, onChange, color = '#10b981' }: ToggleProps) {
  return (
    <div className="flex items-center justify-between gap-3 py-2 border-b-2 border-[#8b5cf6]/20 last:border-b-0">
      <div className="flex-1 min-w-0">
        <p className="text-[8px] text-white tracking-widest mb-1">{label}</p>
        <p className="text-[6px] text-white/50 leading-[10px]">{description}</p>
      </div>
      <button
        onClick={() => onChange(!value)}
        className="flex-shrink-0 relative w-12 h-6 border-2 transition-colors"
        style={{
          backgroundColor: value ? color : '#1a0a2e',
          borderColor:     value ? color : '#3a2a4e',
          boxShadow:       value ? `0 0 8px ${color}88` : 'none',
        }}
        aria-pressed={value}
      >
        <div
          className="absolute top-0.5 w-4 h-4 transition-all"
          style={{
            left: value ? '24px' : '2px',
            backgroundColor: value ? '#0a0118' : '#a78bfa',
          }}
        />
      </button>
    </div>
  );
}

interface SliderProps {
  label:       string;
  description: string;
  value:       number;
  onChange:    (v: number) => void;
  min?:        number;
  max?:        number;
  step?:       number;
  format?:     (v: number) => string;
  color?:      string;
}

function Slider({
  label, description, value, onChange,
  min = 0, max = 1, step = 0.05,
  format = (v) => `${Math.round(v * 100)}%`,
  color = '#8b5cf6',
}: SliderProps) {
  return (
    <div className="py-2 border-b-2 border-[#8b5cf6]/20 last:border-b-0">
      <div className="flex items-center justify-between mb-1">
        <p className="text-[8px] text-white tracking-widest">{label}</p>
        <span className="text-[7px] tracking-widest" style={{ color }}>
          {format(value)}
        </span>
      </div>
      <p className="text-[6px] text-white/50 leading-[10px] mb-2">{description}</p>
      <input
        type="range"
        min={min} max={max} step={step}
        value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        className="w-full"
        style={{ accentColor: color }}
      />
    </div>
  );
}

export default function SettingsModal({
  open, settings, setSetting, resetSettings, onClose,
}: Props) {
  // Lock body scroll while modal is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  if (!open) return null;

  // Backdrop only closes on a tap that BEGAN on the backdrop. This avoids the
  // common mobile bug where the same tap that opened the modal also closes it.
  const handleBackdropMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Render via portal so the modal escapes any parent stacking context / overflow.
  return createPortal((
    <div
      className="fixed inset-0 z-[9999] flex items-end justify-center px-4 pb-0 font-['Press_Start_2P',_monospace]"
      style={{ backgroundColor: 'rgba(10,1,24,0.85)', animation: 'backdropFadeIn 0.25s ease-out' }}
      onMouseDown={handleBackdropMouseDown}
    >
      <style>{`
        @keyframes backdropFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalSlideUp   { from { transform: translateY(110%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes headerSlideDown { from { transform: translateY(-10px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>

      <div
        className="w-full max-w-md bg-[#0a0118] border-4 border-[#facc15] relative overflow-y-auto"
        style={{ maxHeight: '88vh', animation: 'modalSlideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Pixel corners */}
        <div className="absolute top-0 left-0  w-2 h-2 bg-[#0a0118]" />
        <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118]" />
        <div className="absolute bottom-0 left-0  w-2 h-2 bg-[#0a0118]" />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]" />

        {/* Header */}
        <div
          className="bg-[#1a0a2e] border-b-4 border-[#facc15] px-5 py-4 flex items-center justify-between"
          style={{ animation: 'headerSlideDown 0.3s 0.15s ease-out both' }}
        >
          <p className="text-[10px] text-[#facc15] tracking-widest">⚙ SETTINGS</p>
          <button
            onClick={onClose}
            className="text-[#a78bfa] hover:text-white text-[9px] transition-colors"
            aria-label="Close settings"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="px-5 py-3 space-y-3">

          {/* Audio section */}
          <section>
            <p className="text-[7px] text-[#a78bfa] tracking-widest mb-1">🎵 AUDIO</p>
            <Toggle
              label="MUSIC"
              description="Loop the background soundtrack."
              value={settings.musicEnabled}
              onChange={v => setSetting('musicEnabled', v)}
              color="#10b981"
            />
            <Slider
              label="MUSIC VOLUME"
              description="Loud or whisper-quiet, your call."
              value={settings.musicVolume}
              onChange={v => setSetting('musicVolume', v)}
              color="#10b981"
            />
          </section>

          {/* Haptics section */}
          <section>
            <p className="text-[7px] text-[#a78bfa] tracking-widest mb-1">📳 HAPTICS</p>
            <Toggle
              label="VIBRATION"
              description="Buzz on damage and impact (mobile only)."
              value={settings.vibrationEnabled}
              onChange={v => setSetting('vibrationEnabled', v)}
              color="#ec4899"
            />
          </section>

          {/* AI section */}
          <section>
            <p className="text-[7px] text-[#a78bfa] tracking-widest mb-1">🤖 AI</p>
            <Toggle
              label="AI HINTS"
              description="Use the Warden's AI for cryptic Wordle hints. Off uses preset hints."
              value={settings.aiHintsEnabled}
              onChange={v => setSetting('aiHintsEnabled', v)}
              color="#60a5fa"
            />
            <Toggle
              label="BOSS TAUNTS"
              description="Live AI-generated taunts from the Rift Overlord. Off uses preset lines."
              value={settings.bossTauntsEnabled}
              onChange={v => setSetting('bossTauntsEnabled', v)}
              color="#60a5fa"
            />
          </section>

          {/* AR section */}
          <section>
            <p className="text-[7px] text-[#a78bfa] tracking-widest mb-1">👁 AR</p>
            <Toggle
              label="SHOW PLANES"
              description="Render detected surfaces by default. Toggle anytime in pause menu."
              value={settings.showPlanesDefault}
              onChange={v => setSetting('showPlanesDefault', v)}
              color="#a78bfa"
            />
            <Toggle
              label="REDUCE MOTION"
              description="Tone down screen shake and flashing animations."
              value={settings.reduceMotion}
              onChange={v => setSetting('reduceMotion', v)}
              color="#a78bfa"
            />
          </section>
        </div>

        {/* Footer */}
        <div className="px-5 pb-5 pt-2 space-y-2 border-t-2 border-[#facc15]/30">
          <button
            onClick={() => {
              if (confirm('Reset all settings to defaults?')) resetSettings();
            }}
            className="w-full py-2.5 text-[8px] border-2 border-[#ef4444]/60 text-[#ef4444] hover:bg-[#ef4444]/10 transition-colors tracking-widest"
          >
            RESET TO DEFAULTS
          </button>
          <button
            onClick={onClose}
            className="w-full bg-[#facc15] border-4 border-[#ec4899] text-[#0a0118] py-3 px-6 text-[10px] relative hover:opacity-90 transition-opacity active:translate-y-1"
          >
            <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0118]" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]" />
            DONE
          </button>
        </div>
      </div>
    </div>
  ), document.body);
}
