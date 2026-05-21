import React from 'react';
import type { MetaPhase } from '../hooks/useWaveGame';

const BOSS_WAVE   = 10;
const TOTAL_WAVES = 10;

type NodeState = 'upcoming' | 'active' | 'cleared' | 'boss-active';

function getState(
  wave: number,
  currentWave: number | undefined,
  metaPhase:   MetaPhase | undefined,
): NodeState {
  if (currentWave === undefined) return 'upcoming';
  if (wave < currentWave) return 'cleared';
  if (wave === currentWave) {
    if (metaPhase === 'intermission') return 'cleared';
    if (metaPhase === 'boss-fight')   return wave === BOSS_WAVE ? 'boss-active' : 'active';
    return wave === BOSS_WAVE ? 'boss-active' : 'active';
  }
  return 'upcoming';
}

// ── FULL node (MissionPage) ───────────────────────────────────────────────────

function Node({
  wave,
  state,
}: {
  wave:  number;
  state: NodeState;
}) {
  const isBoss = wave === BOSS_WAVE;

  const style: Record<NodeState, { border: string; bg: string; glow: string; label: string; anim: string }> = {
    upcoming:    { border: '#4c1d9966', bg: 'rgba(10,1,24,0.4)',          glow: 'none',                              label: '#4c1d9999', anim: 'none' },
    active:      { border: '#8b5cf6',   bg: 'rgba(139,92,246,0.15)',      glow: '0 0 14px #8b5cf699',               label: '#c4b5fd',   anim: 'wmActivePulse 1.6s ease-in-out infinite' },
    cleared:     { border: '#10b981',   bg: 'rgba(16,185,129,0.12)',      glow: '0 0 8px #10b98155',                label: '#6ee7b7',   anim: 'none' },
    'boss-active':{ border: '#ef4444',  bg: 'rgba(239,68,68,0.14)',       glow: '0 0 18px #ef444488',               label: '#fca5a5',   anim: 'wmBossPulse 1.2s ease-in-out infinite' },
  };
  const s     = style[state];
  const icon  = state === 'cleared'
    ? '✓'
    : isBoss
    ? '☠'
    : state === 'active'
    ? '⚡'
    : '☄';
  const label = isBoss ? 'BOSS' : `W${String(wave).padStart(2, '0')}`;
  const dim   = state === 'upcoming' ? 0.45 : 1;

  return (
    <div
      className="w-11 h-11 flex flex-col items-center justify-center relative border-2 flex-shrink-0"
      style={{
        borderColor:     s.border,
        backgroundColor: s.bg,
        boxShadow:       s.glow,
        animation:       s.anim,
        opacity:         dim,
      }}
    >
      <div className="absolute top-0 left-0   w-1.5 h-1.5 bg-[#0a0118]" />
      <div className="absolute top-0 right-0  w-1.5 h-1.5 bg-[#0a0118]" />
      <div className="absolute bottom-0 left-0   w-1.5 h-1.5 bg-[#0a0118]" />
      <div className="absolute bottom-0 right-0  w-1.5 h-1.5 bg-[#0a0118]" />
      <span style={{ fontSize: isBoss ? 13 : 11, lineHeight: 1, color: s.label }}>{icon}</span>
      <span className="text-[5px] mt-0.5 tracking-wider" style={{ color: s.label }}>{label}</span>
    </div>
  );
}

function HLine({ reverse = false, dim = false }: { reverse?: boolean; dim?: boolean }) {
  return (
    <div
      className="flex-1 h-0.5"
      style={{
        background: `linear-gradient(to ${reverse ? 'left' : 'right'}, #4c1d9533, #8b5cf666, #4c1d9533)`,
        minWidth: 6,
        alignSelf: 'center',
        opacity: dim ? 0.3 : 1,
      }}
    />
  );
}

// ── COMPACT node (ARPage HUD strip) ──────────────────────────────────────────

function CompactNode({ wave, state }: { wave: number; state: NodeState }) {
  const isBoss = wave === BOSS_WAVE;

  const colors: Record<NodeState, string> = {
    upcoming:      '#4c1d9966',
    active:        '#8b5cf6',
    cleared:       '#10b981',
    'boss-active': '#ef4444',
  };
  const col  = colors[state];
  const icon = state === 'cleared' ? '✓' : isBoss ? '☠' : String(wave);
  const anim =
    state === 'active'      ? 'wmActivePulse 1.6s ease-in-out infinite' :
    state === 'boss-active' ? 'wmBossPulse   1.2s ease-in-out infinite' : 'none';

  return (
    <div
      className="w-6 h-6 flex items-center justify-center relative border flex-shrink-0"
      style={{
        borderColor:     col,
        backgroundColor: state === 'upcoming' ? 'rgba(10,1,24,0.5)' : `${col}22`,
        boxShadow:       state !== 'upcoming' ? `0 0 6px ${col}77` : 'none',
        animation:       anim,
        opacity:         state === 'upcoming' ? 0.4 : 1,
      }}
    >
      <span style={{ fontSize: isBoss && state !== 'cleared' ? 9 : 7, color: col, lineHeight: 1 }}>
        {icon}
      </span>
    </div>
  );
}

function CompactLine({ state }: { state: 'done' | 'pending' }) {
  return (
    <div
      className="flex-1 h-px"
      style={{
        background: state === 'done' ? '#10b981aa' : '#4c1d9944',
        minWidth: 4,
        alignSelf: 'center',
      }}
    />
  );
}

// ── Props ─────────────────────────────────────────────────────────────────────

interface WaveMapProps {
  /** Which wave the player is currently on (1–10). Omit for static preview. */
  currentWave?: number;
  /** MetaPhase from useWaveGame – used to decide active vs cleared for currentWave. */
  metaPhase?: MetaPhase;
  /** Render a compact horizontal strip instead of the full 2-row map. */
  compact?: boolean;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function WaveMap({ currentWave, metaPhase, compact = false }: WaveMapProps) {
  const waves = Array.from({ length: TOTAL_WAVES }, (_, i) => i + 1);
  const states = waves.map(w => getState(w, currentWave, metaPhase));

  // ── Compact strip (ARPage HUD) ────────────────────────────────────────────
  if (compact) {
    return (
      <div
        className="flex items-center gap-0 px-3 py-2 font-['Press_Start_2P',_monospace]"
        style={{ background: 'rgba(10,1,24,0.88)', borderBottom: '1px solid #8b5cf633' }}
      >
        <span className="text-[5px] text-[#a78bfa] tracking-widest mr-2 flex-shrink-0">ROUTE</span>
        {waves.map((w, i) => (
          <React.Fragment key={w}>
            <CompactNode wave={w} state={states[i]} />
            {i < TOTAL_WAVES - 1 && (
              <CompactLine state={states[i] === 'cleared' ? 'done' : 'pending'} />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }

  // ── Full map (MissionPage) ────────────────────────────────────────────────
  const row1 = [1, 2, 3, 4, 5];
  const row2 = [10, 9, 8, 7, 6];

  const clearedCount = states.filter(s => s === 'cleared').length;

  return (
    <div className="bg-[#1a0a2e] border-4 border-[#8b5cf6] p-3 mb-4 relative">
      <style>{`
        @keyframes wmActivePulse {
          0%, 100% { box-shadow: 0 0 8px #8b5cf644; }
          50%       { box-shadow: 0 0 18px #8b5cf6aa, 0 0 6px #8b5cf677; }
        }
        @keyframes wmBossPulse {
          0%, 100% { box-shadow: 0 0 8px #ef444444; }
          50%       { box-shadow: 0 0 22px #ef444499, 0 0 8px #ef444477; }
        }
      `}</style>

      <div className="absolute top-0 left-0   w-2 h-2 bg-[#0a0118]" />
      <div className="absolute top-0 right-0  w-2 h-2 bg-[#0a0118]" />
      <div className="absolute bottom-0 left-0   w-2 h-2 bg-[#0a0118]" />
      <div className="absolute bottom-0 right-0  w-2 h-2 bg-[#0a0118]" />

      <div className="flex items-center justify-between mb-3">
        <p className="text-[7px] text-[#a78bfa] tracking-widest">▸ WAVE ROUTE</p>
        {currentWave !== undefined
          ? <p className="text-[6px] text-[#10b981] tracking-widest">{clearedCount}/{TOTAL_WAVES} CLEARED</p>
          : <p className="text-[6px] text-white/30 tracking-widest">10 WAVES</p>
        }
      </div>

      {/* Row 1: Waves 1 → 5 */}
      <div className="flex items-center">
        {row1.map((w, i) => (
          <React.Fragment key={w}>
            <Node wave={w} state={states[w - 1]} />
            {i < 4 && <HLine dim={states[w] === 'upcoming'} />}
          </React.Fragment>
        ))}
      </div>

      {/* Vertical connector: right side, wave 5 ↓ wave 6 */}
      <div className="flex" style={{ justifyContent: 'flex-end', paddingRight: 21 }}>
        <div
          className="w-0.5 h-5"
          style={{ background: 'linear-gradient(to bottom, #8b5cf677, #6d28d944)' }}
        />
      </div>

      {/* Row 2: 10 ← 9 ← 8 ← 7 ← 6 */}
      <div className="flex items-center">
        {row2.map((w, i) => (
          <React.Fragment key={w}>
            <Node wave={w} state={states[w - 1]} />
            {i < 4 && <HLine reverse dim={states[row2[i + 1] - 1] === 'upcoming'} />}
          </React.Fragment>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#8b5cf633]">
        <div className="flex items-center gap-1">
          <span style={{ fontSize: 9, color: '#10b981' }}>✓</span>
          <span className="text-[6px] text-[#10b981] tracking-wide">CLEARED</span>
        </div>
        <div className="flex items-center gap-1">
          <span style={{ fontSize: 9, color: '#8b5cf6' }}>⚡</span>
          <span className="text-[6px] text-white/40 tracking-wide">ACTIVE</span>
        </div>
        <div className="flex items-center gap-1">
          <span style={{ fontSize: 9, color: '#ef4444' }}>☠</span>
          <span className="text-[6px] text-[#ef4444] tracking-wide">BOSS</span>
        </div>
      </div>
    </div>
  );
}
