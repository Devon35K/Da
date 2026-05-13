import { useNavigate } from 'react-router';
import { useMemo, useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import iconImage from '../../imports/iconaws.png';
import { useSettings } from '../hooks/useSettings';
import SettingsModal from '../components/SettingsModal';

function seededRand(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const WORDLE_LETTERS = ['W', 'O', 'R', 'D', 'L', 'E', 'G', 'R', 'U'];

// Each step gets its own accent color + icon so the modal scans visually,
// not just a number list. Body covers the actual game mechanics in v1.
type HowToStep = {
  num:    string;
  title:  string;
  color:  string;
  icon:   string;
  body?:  string;
  /** Optional list-of-(label, value) for compact bullet-style detail rows. */
  bullets?: ReadonlyArray<{ label: string; value: string; color?: string }>;
  /** When set, shows the Wordle color legend + a demo 5-tile row. */
  wordleDemo?: { word: string; colors: ReadonlyArray<'green' | 'yellow' | 'gray'> };
};

const HOW_TO_PLAY_STEPS: ReadonlyArray<HowToStep> = [
  {
    num:   '1',
    title: 'SCAN A SURFACE',
    color: '#10b981',
    icon:  '◉',
    body:  'Point your camera at a flat floor or table. The Warden auto-locks an origin after a few seconds even if your device cannot detect planes.',
  },
  {
    num:   '2',
    title: 'TAP RED ROCKS ONLY',
    color: '#ef4444',
    icon:  '◬',
    body:  'Asteroids charge before they strike — they glow RED. Tap red rocks to smash them. Drifting (still) rocks are invulnerable; tapping them just kicks up dust.',
  },
  {
    num:   '3',
    title: 'COLLECT LETTERS',
    color: '#facc15',
    icon:  '✦',
    body:  'Each smashed rock drops a letter onto your keyboard inventory. Numbers below each key show how many copies you carry.',
  },
  {
    num:   '4',
    title: 'BEAT THE 60s TIMER',
    color: '#60a5fa',
    icon:  '◷',
    body:  'Each wave runs for 60 seconds. When the clock hits zero a Wordle puzzle slides up — solve it to advance. Asteroids freeze instantly when the timer ends.',
  },
  {
    num:   '5',
    title: 'SOLVE THE SEAL',
    color: '#8b5cf6',
    icon:  '▦',
    body:  'Type a 5-letter word using your collected letters. You get 6 attempts.',
    wordleDemo: {
      word:   'BLAZE',
      colors: ['green', 'gray', 'yellow', 'gray', 'gray'],
    },
  },
  {
    num:   '6',
    title: 'DEFEAT THE OVERLORD',
    color: '#ec4899',
    icon:  '★',
    body:  'Every 10th wave is a boss fight. The Rift Overlord attacks every 8 seconds — break all his seals before HP runs out. The final seal is RIFTS.',
    bullets: [
      { label: 'WAVE TIMER', value: '60s',  color: '#10b981' },
      { label: 'BOSS AT',    value: 'WAVE 10', color: '#facc15' },
      { label: 'FINAL',      value: 'RIFTS',  color: '#ec4899' },
    ],
  },
] as const;

export default function HomePage() {
  const navigate = useNavigate();
  const [showHowTo,    setShowHowTo]    = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { settings, setSetting, resetSettings } = useSettings();

  const stars = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: seededRand(i * 7.31) * 100,
      y: seededRand(i * 3.71) * 100,
      size: seededRand(i * 5.13) > 0.8 ? 3 : 2,
      delay: `${seededRand(i * 2.91) * 4}s`,
      duration: `${1.5 + seededRand(i * 1.33) * 2.5}s`,
    })), []);

  const letters = useMemo(() =>
    WORDLE_LETTERS.map((char, i) => ({
      id: i,
      char,
      x: seededRand(i * 11.71) * 82 + 5,
      y: seededRand(i * 8.31) * 75 + 5,
      color: (['#10b981', '#facc15', '#a78bfa'] as const)[i % 3],
      border: (['#10b981', '#facc15', '#8b5cf6'] as const)[i % 3],
      delay: `${seededRand(i * 6.71) * 4}s`,
      duration: `${5 + seededRand(i * 9.11) * 4}s`,
      drift: `${(seededRand(i * 4.11) - 0.5) * 40}px`,
    })), []);

  const meteors = useMemo(() =>
    Array.from({ length: 7 }, (_, i) => ({
      id: i,
      x: seededRand(i * 13.11) * 88 + 3,
      size: Math.floor(4 + seededRand(i * 5.91) * 6),
      delay: `${seededRand(i * 7.71) * 7}s`,
      duration: `${3 + seededRand(i * 2.31) * 3}s`,
      xDrift: `${(seededRand(i * 3.71) - 0.5) * 50}px`,
    })), []);

  const embers = useMemo(() =>
    Array.from({ length: 14 }, (_, i) => ({
      id: i,
      x: seededRand(i * 17.31) * 85 + 5,
      color: seededRand(i * 6.31) > 0.5 ? '#f97316' : '#facc15',
      size: Math.floor(2 + seededRand(i * 3.91) * 3),
      delay: `${seededRand(i * 4.91) * 6}s`,
      duration: `${2 + seededRand(i * 8.11) * 2.5}s`,
    })), []);

  const sparks = useMemo(() =>
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: seededRand(i * 9.31) * 80 + 10,
      y: seededRand(i * 6.11) * 70 + 15,
      delay: `${seededRand(i * 3.51) * 6}s`,
      duration: `${0.4 + seededRand(i * 7.11) * 0.5}s`,
    })), []);

  return (
    <div className="min-h-screen w-full max-w-md mx-auto bg-[#0a0118] flex flex-col items-center justify-between px-6 py-12 font-['Press_Start_2P',_monospace] relative overflow-hidden">

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 1; }
        }
        @keyframes letterFloat {
          0%   { transform: translateY(0px) translateX(0px) rotate(-2deg); opacity: 0.7; }
          33%  { transform: translateY(-16px) translateX(var(--drift)) rotate(2deg); opacity: 1; }
          66%  { transform: translateY(-6px) translateX(calc(var(--drift) * -0.4)) rotate(-1deg); opacity: 0.9; }
          100% { transform: translateY(0px) translateX(0px) rotate(-2deg); opacity: 0.7; }
        }
        @keyframes meteorFall {
          0%   { transform: translateY(-20px) translateX(0px) rotate(0deg); opacity: 1; }
          85%  { opacity: 0.6; }
          100% { transform: translateY(110vh) translateX(var(--x-drift)) rotate(270deg); opacity: 0; }
        }
        @keyframes emberRise {
          0%   { transform: translateY(0px) scale(1); opacity: 0.9; }
          60%  { opacity: 0.7; }
          100% { transform: translateY(-90px) scale(0.3); opacity: 0; }
        }
        @keyframes electricSpark {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          45%, 55% { opacity: 1; transform: scale(1) rotate(45deg); }
        }
        @keyframes backdropFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { transform: translateY(110%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes stepFadeIn {
          from { transform: translateX(-12px); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
        @keyframes headerSlideDown {
          from { transform: translateY(-10px); opacity: 0; }
          to   { transform: translateY(0);     opacity: 1; }
        }
        @keyframes iconGlow {
          0%, 100% {
            box-shadow: 0 0 8px #8b5cf6, 0 0 22px #8b5cf6aa, 0 0 48px #8b5cf644, inset 0 0 12px #8b5cf611;
          }
          33% {
            box-shadow: 0 0 10px #ec4899, 0 0 28px #ec4899aa, 0 0 55px #ec489944, inset 0 0 14px #ec489911;
          }
          66% {
            box-shadow: 0 0 10px #60a5fa, 0 0 26px #60a5faaa, 0 0 52px #60a5fa44, inset 0 0 12px #60a5fa11;
          }
        }
        @keyframes ringRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes tileFlip {
          0%   { transform: rotateX(0); background-color: #1a0a2e; color: #facc15; border-color: #8b5cf6; }
          50%  { transform: rotateX(90deg); }
          51%  { background-color: var(--reveal-bg); color: var(--reveal-fg); border-color: var(--reveal-bg); }
          100% { transform: rotateX(0); background-color: var(--reveal-bg); color: var(--reveal-fg); border-color: var(--reveal-bg); }
        }
        @keyframes titleEnter {
          from { transform: translateY(-12px); opacity: 0; letter-spacing: 0.4em; }
          to   { transform: translateY(0); opacity: 1; letter-spacing: normal; }
        }
        @keyframes ctaShimmer {
          0%, 100% { box-shadow: 0 0 0 0 rgba(236,72,153,0), 0 0 24px 0 rgba(139,92,246,0.45); }
          50%      { box-shadow: 0 0 0 12px rgba(236,72,153,0), 0 0 36px 4px rgba(139,92,246,0.7); }
        }
      `}</style>

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

      {/* Floating Wordle Letter Tiles */}
      {letters.map(l => (
        <div
          key={`letter-${l.id}`}
          className="absolute flex items-center justify-center pointer-events-none select-none"
          style={{
            left: `${l.x}%`, top: `${l.y}%`,
            width: '22px', height: '22px',
            border: `2px solid ${l.border}`,
            backgroundColor: '#1a0a2e',
            color: l.color,
            fontSize: '8px',
            fontFamily: "'Press Start 2P', monospace",
            textShadow: `0 0 8px ${l.color}`,
            boxShadow: `0 0 6px ${l.border}55, inset 0 0 4px ${l.border}22`,
            ['--drift' as string]: l.drift,
            animation: `letterFloat ${l.duration} ${l.delay} ease-in-out infinite`,
            zIndex: 2,
          }}
        >
          {l.char}
        </div>
      ))}

      {/* Falling Meteor Shards */}
      {meteors.map(m => (
        <div
          key={`meteor-${m.id}`}
          className="absolute pointer-events-none"
          style={{
            left: `${m.x}%`, top: '-12px',
            width: `${m.size}px`, height: `${m.size}px`,
            backgroundColor: '#78716c',
            boxShadow: `1px 1px 0 #a8a29e, 0 0 4px #f97316`,
            ['--x-drift' as string]: m.xDrift,
            animation: `meteorFall ${m.duration} ${m.delay} linear infinite`,
            zIndex: 2,
          }}
        />
      ))}

      {/* Rising Fire Embers */}
      {embers.map(e => (
        <div
          key={`ember-${e.id}`}
          className="absolute pointer-events-none"
          style={{
            left: `${e.x}%`, bottom: '8px',
            width: `${e.size}px`, height: `${e.size}px`,
            backgroundColor: e.color,
            boxShadow: `0 0 4px ${e.color}, 0 0 8px ${e.color}88`,
            animation: `emberRise ${e.duration} ${e.delay} ease-out infinite`,
            zIndex: 2,
          }}
        />
      ))}

      {/* Blue Electric Sparks */}
      {sparks.map(s => (
        <div
          key={`spark-${s.id}`}
          className="absolute pointer-events-none"
          style={{
            left: `${s.x}%`, top: `${s.y}%`,
            width: '4px', height: '4px',
            backgroundColor: '#60a5fa',
            boxShadow: '0 0 6px #3b82f6, 0 0 14px #93c5fd, 2px -2px 0 #bfdbfe, -2px 2px 0 #bfdbfe',
            animation: `electricSpark ${s.duration} ${s.delay} ease-in-out infinite`,
            zIndex: 2,
          }}
        />
      ))}

      {/* Pixel Grid Background — pointer-events-none so it doesn't swallow taps */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, rgba(139, 92, 246, .3) 25%, rgba(139, 92, 246, .3) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, .3) 75%, rgba(139, 92, 246, .3) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(139, 92, 246, .3) 25%, rgba(139, 92, 246, .3) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, .3) 75%, rgba(139, 92, 246, .3) 76%, transparent 77%, transparent)
        `,
        backgroundSize: '20px 20px'
      }}></div>

      {/* Header Section */}
      <div className="flex flex-col items-center mt-8 relative z-10">
        <div
          className="w-32 h-32 mb-6 relative border-4 border-[#8b5cf6] bg-[#1a0a2e] p-2"
          style={{ imageRendering: 'pixelated', animation: 'iconGlow 4s ease-in-out infinite' }}
        >
          <ImageWithFallback
            src={iconImage}
            alt="AR Wordle Smasher Icon"
            className="w-full h-full object-contain"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>

        <h1 className="text-xl text-center mb-4 leading-relaxed tracking-wide">
          <span className="text-[#10b981]">AR</span>{' '}
          <span className="text-[#8b5cf6]">WORDLE</span>
          <br />
          <span className="text-[#ec4899]">SMASHER</span>
        </h1>

        <p className="text-[8px] text-[#a78bfa] text-center mb-2 tracking-wider uppercase leading-relaxed">
          The Warden's Codex
        </p>
      </div>

      {/* Middle Content */}
      <div className="flex flex-col items-center space-y-6 flex-grow justify-center relative z-10 w-full">
        <div className="bg-[#1a0a2e] border-4 border-[#8b5cf6] p-4 w-full relative">
          <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"></div>

          <p className="text-[9px] text-white/90 text-center leading-[16px]">
            Smash meteors in AR, collect letters, and solve puzzles to defeat the{' '}
            <span className="text-[#ec4899]">Rift Overlord</span>
          </p>
        </div>
      </div>

      {/* CTA Section — z-30 so it sits above all decorative layers */}
      <div className="w-full space-y-4 mb-8 relative z-30">
        <button type="button" style={{ touchAction: 'manipulation' }}
          onClick={() => navigate('/mission')}
          className="w-full bg-[#8b5cf6] border-4 border-[#ec4899] text-white py-4 px-6 text-[10px] relative hover:bg-[#a78bfa] transition-colors active:translate-y-1"
        >
          <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"></div>
          &gt; START MISSION &lt;
        </button>

        <button type="button" style={{ touchAction: 'manipulation' }}
          onClick={() => navigate('/codex')}
          className="w-full bg-[#1a0a2e] border-4 border-[#10b981] text-[#10b981] py-3 px-6 text-[9px] relative hover:bg-[#2a1a3e] transition-colors active:translate-y-1"
        >
          <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"></div>
          &gt; CODEX DICTIONARY &lt;
        </button>

        <div className="grid grid-cols-2 gap-3">
          <button type="button" style={{ touchAction: 'manipulation' }}
            onClick={() => setShowSettings(true)}
            className="bg-[#1a0a2e] border-4 border-[#facc15] text-[#facc15] py-3 px-2 text-[8px] relative hover:bg-[#2a1a3e] transition-colors active:translate-y-1 flex items-center justify-center gap-1.5"
          >
            <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"></div>
            <span style={{ filter: 'drop-shadow(0 0 4px #facc1599)' }}>⚙</span>
            <span>SETTINGS</span>
          </button>

          <button type="button" style={{ touchAction: 'manipulation' }}
            onClick={() => setShowHowTo(true)}
            className="bg-[#1a0a2e] border-4 border-white/30 text-white/90 py-3 px-2 text-[8px] relative hover:bg-[#2a1a3e] transition-colors active:translate-y-1"
          >
            <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"></div>
            How to Play
          </button>
        </div>
      </div>

      {/* ── How to Play Modal ── */}
      {showHowTo && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center px-4 pb-0"
          style={{ backgroundColor: 'rgba(10,1,24,0.85)', animation: 'backdropFadeIn 0.25s ease-out' }}
          onClick={() => setShowHowTo(false)}
        >
          <div
            className="w-full max-w-md bg-[#0a0118] border-4 border-[#8b5cf6] relative overflow-y-auto"
            style={{ maxHeight: '88vh', animation: 'modalSlideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1)' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none" />

            {/* Modal header */}
            <div
              className="bg-[#1a0a2e] border-b-4 border-[#8b5cf6] px-5 py-4 flex items-center justify-between"
              style={{ animation: 'headerSlideDown 0.3s 0.15s ease-out both' }}
            >
              <div>
                <p className="text-[10px] text-[#8b5cf6] tracking-widest">HOW TO PLAY</p>
                <p className="text-[6px] text-white/40 tracking-widest mt-1">FIELD MANUAL · v1</p>
              </div>
              <button
                onClick={() => setShowHowTo(false)}
                className="w-7 h-7 flex items-center justify-center border-2 border-[#a78bfa] text-[#a78bfa] hover:text-white hover:border-white text-[9px] transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Steps */}
            <div className="px-4 py-4 space-y-4">
              {HOW_TO_PLAY_STEPS.map((step, i) => (
                <div
                  key={step.num}
                  className="relative bg-[#0d0220] border-2 px-3 py-3"
                  style={{
                    borderColor: `${step.color}66`,
                    animation:   `stepFadeIn 0.3s ${0.2 + i * 0.07}s ease-out both`,
                    boxShadow:   `inset 0 0 12px ${step.color}1a`,
                  }}
                >
                  {/* Pixel corner accents */}
                  <div className="absolute top-0 left-0  w-1.5 h-1.5" style={{ backgroundColor: step.color }} />
                  <div className="absolute top-0 right-0 w-1.5 h-1.5" style={{ backgroundColor: step.color }} />
                  <div className="absolute bottom-0 left-0  w-1.5 h-1.5" style={{ backgroundColor: step.color }} />
                  <div className="absolute bottom-0 right-0 w-1.5 h-1.5" style={{ backgroundColor: step.color }} />

                  <div className="flex gap-3">
                    {/* Icon + number tile */}
                    <div className="flex flex-col items-center gap-1 flex-shrink-0">
                      <div
                        className="w-9 h-9 flex items-center justify-center border-2 bg-[#1a0a2e] text-[14px]"
                        style={{
                          borderColor: step.color,
                          color:       step.color,
                          textShadow:  `0 0 6px ${step.color}`,
                          boxShadow:   `0 0 8px ${step.color}55, inset 0 0 4px ${step.color}33`,
                        }}
                      >
                        {step.icon}
                      </div>
                      <span
                        className="text-[6px] tracking-widest"
                        style={{ color: `${step.color}cc` }}
                      >
                        STEP {step.num}
                      </span>
                    </div>

                    {/* Title + body */}
                    <div className="flex-1 min-w-0 pt-0.5">
                      <p
                        className="text-[8px] tracking-widest mb-1.5"
                        style={{ color: step.color }}
                      >
                        {step.title}
                      </p>
                      {step.body && (
                        <p className="text-[7px] text-white/75 leading-[14px]">{step.body}</p>
                      )}

                      {/* Wordle demo: tile row + 3-color legend */}
                      {step.wordleDemo && (() => {
                        const tileBg = (c: 'green' | 'yellow' | 'gray') =>
                          c === 'green' ? '#10b981' : c === 'yellow' ? '#facc15' : '#374151';
                        const tileFg = (c: 'green' | 'yellow' | 'gray') =>
                          c === 'gray' ? '#9ca3af' : '#0a0118';
                        return (
                          <div className="mt-3 space-y-2">
                            <div className="flex gap-1 justify-center">
                              {step.wordleDemo.word.split('').map((ch, idx) => {
                                const c = step.wordleDemo!.colors[idx];
                                return (
                                  <div
                                    key={idx}
                                    className="w-6 h-6 flex items-center justify-center border-2"
                                    style={{
                                      backgroundColor: tileBg(c),
                                      borderColor:     tileBg(c),
                                      color:           tileFg(c),
                                      fontSize:        '10px',
                                      fontWeight:      'bold',
                                      boxShadow:       `0 0 4px ${tileBg(c)}88`,
                                    }}
                                  >
                                    {ch}
                                  </div>
                                );
                              })}
                            </div>
                            <div className="space-y-1 pt-1 border-t border-[#8b5cf6]/20">
                              {([
                                ['#10b981', 'GREEN',  'right letter, right slot'],
                                ['#facc15', 'YELLOW', 'right letter, wrong slot'],
                                ['#374151', 'GRAY',   'letter not in word'],
                              ] as const).map(([col, name, desc]) => (
                                <div key={name} className="flex items-center gap-2">
                                  <div className="w-2.5 h-2.5 flex-shrink-0" style={{ backgroundColor: col, boxShadow: `0 0 3px ${col}` }} />
                                  <span className="text-[6px] tracking-widest" style={{ color: col }}>{name}</span>
                                  <span className="text-[6px] text-white/50 leading-[10px]">{desc}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })()}

                      {/* Inline bullet rows — labeled stat tiles */}
                      {step.bullets && (
                        <div className="mt-3 grid grid-cols-3 gap-1.5">
                          {step.bullets.map(b => (
                            <div
                              key={b.label}
                              className="text-center border border-white/10 bg-[#0a0118]/50 py-1.5"
                            >
                              <p className="text-[5px] text-white/40 tracking-widest">{b.label}</p>
                              <p
                                className="text-[7px] mt-0.5 tracking-widest"
                                style={{ color: b.color ?? step.color }}
                              >
                                {b.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Got It button */}
            <div className="px-5 pb-5 pt-1">
              <button type="button" style={{ touchAction: 'manipulation' }}
                onClick={() => setShowHowTo(false)}
                className="w-full bg-[#8b5cf6] border-4 border-[#ec4899] text-white py-3 px-6 text-[10px] relative hover:bg-[#a78bfa] transition-colors active:translate-y-1 tracking-widest"
              >
                <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none" />
                &gt; GOT IT &lt;
              </button>
            </div>

            <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none" />
          </div>
        </div>
      )}

    </div>
  );
}
