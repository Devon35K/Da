import { useEffect } from 'react';
import type { Attempt } from '../hooks/useWaveGame';
import type { LetterColor } from '../data/wardenCodex';

const KEYBOARD_ROWS = [
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L'],
  ['Z','X','C','V','B','N','M'],
] as const;

interface Props {
  /** Heading (e.g. "WAVE 3 CLEARED" or "BOSS FIGHT") */
  title:        string;
  /** Sub-line beneath the heading (e.g. "Solve to advance" or "3 / 5 seals") */
  subtitle?:    string;
  /** Color of the title — default purple, pink for boss */
  variant?:     'normal' | 'boss';
  /** Word length (always 5 in this game) */
  wordLength?:  number;
  /** Current in-progress guess */
  guess:        string;
  /** Past attempts with color feedback */
  attempts:     Attempt[];
  /** Letters the player has collected from asteroid drops (for keyboard highlighting) */
  collectedLetters: string[];
  /** Max number of attempts allowed */
  maxAttempts?: number;
  /** Number of guesses remaining */
  guessesRemaining: number;
  /** Boss-only: words still required to defeat the boss */
  bossWordsLeft?:  number;
  bossWordsTotal?: number;
  /** Player HP (shown in boss fights) */
  hp?:    number;
  maxHp?: number;
  /** Hint text to show, if any */
  hint?:        string | null;
  hintLoading?: boolean;
  // Callbacks
  onAddLetter:    (letter: string) => void;
  onBackspace:    () => void;
  onSubmit:       () => void;
  onRequestHint?: () => void;
}

export default function WordlePuzzle({
  title,
  subtitle,
  variant = 'normal',
  wordLength = 5,
  guess,
  attempts,
  collectedLetters,
  maxAttempts = 6,
  guessesRemaining,
  bossWordsLeft,
  bossWordsTotal,
  hp,
  maxHp,
  hint,
  hintLoading,
  onAddLetter,
  onBackspace,
  onSubmit,
  onRequestHint,
}: Props) {
  // Physical keyboard support (desktop dev convenience)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Enter') { e.preventDefault(); onSubmit(); }
      else if (e.key === 'Backspace') { e.preventDefault(); onBackspace(); }
      else if (/^[a-zA-Z]$/.test(e.key)) { e.preventDefault(); onAddLetter(e.key.toUpperCase()); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onSubmit, onBackspace, onAddLetter]);

  // Build inventory map: { 'A': 3, 'B': 0, ... }
  const inv: Record<string, number> = {};
  for (const l of collectedLetters) inv[l.toUpperCase()] = (inv[l.toUpperCase()] || 0) + 1;

  // Build map of best color seen for each letter from past attempts (for keyboard tinting)
  const bestColor: Record<string, LetterColor> = {};
  const rank: Record<LetterColor, number> = { gray: 0, yellow: 1, green: 2 };
  attempts.forEach(a => {
    a.word.split('').forEach((ch, i) => {
      const c = a.colors[i];
      if (!bestColor[ch] || rank[c] > rank[bestColor[ch]]) bestColor[ch] = c;
    });
  });

  const titleColor = variant === 'boss' ? '#ec4899' : '#a78bfa';
  const borderClr  = variant === 'boss' ? 'border-[#ec4899]' : 'border-[#8b5cf6]';

  // Build the rows: completed attempts + current row + empty rows
  const rows: Array<{ letters: string[]; colors: LetterColor[]; locked: boolean; isCurrent: boolean }> = [];
  attempts.forEach(a => rows.push({ letters: a.word.split(''), colors: a.colors, locked: true, isCurrent: false }));
  if (rows.length < maxAttempts) {
    rows.push({
      letters: guess.padEnd(wordLength, ' ').split('').slice(0, wordLength),
      colors:  Array(wordLength).fill('gray') as LetterColor[],
      locked:  false,
      isCurrent: true,
    });
  }
  while (rows.length < maxAttempts) {
    rows.push({
      letters: Array(wordLength).fill(' '),
      colors:  Array(wordLength).fill('gray') as LetterColor[],
      locked:  false,
      isCurrent: false,
    });
  }

  return (
    <div
      className="fixed inset-0 z-40 flex items-end justify-center px-2 pb-2"
      style={{ backgroundColor: 'rgba(10,1,24,0.92)', animation: 'wpFadeIn 0.25s ease-out' }}
    >
      <style>{`
        @keyframes wpFadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes wpSlideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes wpFlip    { 0% { transform: rotateX(0); } 50% { transform: rotateX(90deg); } 100% { transform: rotateX(0); } }
        @keyframes wpBossPulse { 0%, 100% { box-shadow: 0 0 8px #ec4899, 0 0 18px #ec4899aa; } 50% { box-shadow: 0 0 14px #ec4899, 0 0 30px #ec4899; } }
      `}</style>

      <div
        className={`w-full max-w-md bg-[#0a0118] border-4 ${borderClr} relative font-['Press_Start_2P',_monospace]`}
        style={{
          maxHeight: '96vh',
          overflowY: 'auto',
          animation: `wpSlideUp 0.32s cubic-bezier(0.22, 1, 0.36, 1)${variant === 'boss' ? ', wpBossPulse 2.2s ease-in-out infinite' : ''}`,
        }}
      >
        {/* Pixel corners */}
        <div className="absolute top-0 left-0  w-2 h-2 bg-[#0a0118]" />
        <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118]" />
        <div className="absolute bottom-0 left-0  w-2 h-2 bg-[#0a0118]" />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]" />

        {/* Header */}
        <div className={`bg-[#1a0a2e] border-b-4 ${borderClr} px-4 py-3 text-center`}>
          <p className="text-[10px] tracking-widest" style={{ color: titleColor }}>
            {title}
          </p>
          {subtitle && <p className="text-[7px] text-white/70 mt-1 tracking-wider">{subtitle}</p>}

          {/* Boss seal progress bar */}
          {variant === 'boss' && bossWordsTotal !== undefined && (
            <div className="mt-2 flex items-center justify-center gap-1">
              {Array.from({ length: bossWordsTotal }).map((_, i) => {
                const broken = i < (bossWordsTotal - (bossWordsLeft ?? 0));
                return (
                  <div
                    key={i}
                    className="w-3 h-3 border-2"
                    style={{
                      borderColor: broken ? '#10b981' : '#ec4899',
                      backgroundColor: broken ? '#10b981' : 'transparent',
                      boxShadow: broken ? '0 0 6px #10b981' : '0 0 4px #ec489988',
                    }}
                  />
                );
              })}
              <span className="text-[7px] text-[#ec4899] ml-2 tracking-widest">
                {(bossWordsTotal - (bossWordsLeft ?? 0))} / {bossWordsTotal} SEALS
              </span>
            </div>
          )}

          {/* HP bar (boss fight) */}
          {variant === 'boss' && hp !== undefined && maxHp !== undefined && (
            <div className="mt-2 flex items-center justify-center gap-2">
              <span className="text-[6px] text-[#facc15] tracking-widest">HP</span>
              <div className="w-32 h-2 bg-[#1a0a2e] border border-[#facc15]/50 relative">
                <div
                  className="h-full transition-all"
                  style={{
                    width: `${(hp / maxHp) * 100}%`,
                    backgroundColor: hp > maxHp * 0.5 ? '#10b981' : hp > maxHp * 0.25 ? '#facc15' : '#ef4444',
                  }}
                />
              </div>
              <span className="text-[7px] text-white/80">{hp}</span>
            </div>
          )}
        </div>

        {/* Wordle grid */}
        <div className="px-3 py-3 flex flex-col items-center gap-1">
          {rows.map((row, ri) => (
            <div key={ri} className="flex gap-1">
              {row.letters.map((ch, ci) => {
                const bg =
                  row.locked ? (
                    row.colors[ci] === 'green'  ? '#10b981' :
                    row.colors[ci] === 'yellow' ? '#facc15' :
                                                  '#3a2a4e'
                  ) : '#1a0a2e';
                const border =
                  row.locked ? bg :
                  row.isCurrent && ch !== ' ' ? '#a78bfa' : '#3a2a4e';
                const textColor = row.locked && row.colors[ci] === 'yellow' ? '#0a0118' : '#ffffff';
                return (
                  <div
                    key={ci}
                    className="flex items-center justify-center"
                    style={{
                      width:  '38px',
                      height: '38px',
                      backgroundColor: bg,
                      border:  `2px solid ${border}`,
                      color:   textColor,
                      fontSize: '14px',
                      fontWeight: 'bold',
                      animation: row.locked ? `wpFlip 0.4s ${ci * 0.08}s ease-in-out both` : 'none',
                    }}
                  >
                    {ch.trim() || ''}
                  </div>
                );
              })}
            </div>
          ))}

          <p className="text-[7px] text-[#a78bfa]/70 mt-1 tracking-widest">
            {guessesRemaining} TRIES LEFT
          </p>
        </div>

        {/* Hint */}
        {(hint || hintLoading) && (
          <div className="mx-3 mb-2 px-3 py-2 border-2 border-[#60a5fa] bg-[#60a5fa]/10">
            <p className="text-[6px] text-[#60a5fa] tracking-widest mb-1">⚡ WARDEN'S HINT</p>
            <p className="text-[7px] text-white/90 leading-[12px] italic">
              {hintLoading ? 'Consulting the codex...' : hint}
            </p>
          </div>
        )}

        {/* Inventory + hint button */}
        <div className="px-3 py-2 border-t-2 border-[#8b5cf6]/30 flex items-center justify-between">
          <p className="text-[6px] text-[#a78bfa] tracking-widest">
            COLLECTED: <span className="text-[#10b981]">{collectedLetters.length}</span>
          </p>
          {onRequestHint && (
            <button
              onClick={onRequestHint}
              disabled={hintLoading || !!hint}
              className="text-[6px] px-2 py-1 border-2 border-[#60a5fa] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-[#0a0118] disabled:opacity-40 disabled:cursor-not-allowed tracking-widest"
            >
              {hint ? 'HINT USED' : 'HINT?'}
            </button>
          )}
        </div>

        {/* Keyboard */}
        <div className="px-2 pb-3 pt-1 space-y-1">
          {KEYBOARD_ROWS.map((row, ri) => (
            <div key={ri} className="flex gap-1 justify-center">
              {ri === 2 && (
                <button
                  onClick={onSubmit}
                  disabled={guess.length !== 5}
                  className="px-2 text-[7px] bg-[#10b981] text-white border-2 border-[#10b981] hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed tracking-widest"
                  style={{ minWidth: '42px' }}
                >
                  ENT
                </button>
              )}
              {row.map(letter => {
                const have = (inv[letter] ?? 0) > 0;
                const c = bestColor[letter];
                let bg = have ? '#1a0a2e' : '#0a0118';
                let bd = have ? '#8b5cf6' : '#3a2a4e';
                let txt = have ? '#ffffff' : '#6b7280';
                if (c === 'green')  { bg = '#10b981'; bd = '#10b981'; txt = '#ffffff'; }
                if (c === 'yellow') { bg = '#facc15'; bd = '#facc15'; txt = '#0a0118'; }
                if (c === 'gray')   { bg = '#1f1530'; bd = '#3a2a4e'; txt = '#6b7280'; }
                return (
                  <button
                    key={letter}
                    onClick={() => onAddLetter(letter)}
                    className="text-[9px] active:translate-y-px relative"
                    style={{
                      minWidth:    '24px',
                      height:      '32px',
                      backgroundColor: bg,
                      border:      `2px solid ${bd}`,
                      color:       txt,
                      fontFamily:  "'Press Start 2P', monospace",
                    }}
                    title={have ? `${inv[letter]} in inventory` : 'Not yet collected'}
                  >
                    {letter}
                    {have && (
                      <span
                        className="absolute -top-1 -right-1 text-[5px] px-0.5"
                        style={{
                          backgroundColor: '#ec4899',
                          color: '#0a0118',
                          fontFamily: "'Press Start 2P', monospace",
                        }}
                      >
                        {inv[letter]}
                      </span>
                    )}
                  </button>
                );
              })}
              {ri === 2 && (
                <button
                  onClick={onBackspace}
                  className="px-2 text-[7px] bg-[#ef4444] text-white border-2 border-[#ef4444] hover:opacity-90 tracking-widest"
                  style={{ minWidth: '42px' }}
                >
                  ⌫
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
