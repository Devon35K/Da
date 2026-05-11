import { useNavigate } from 'react-router';
import { useMemo, useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import iconImage from '../../imports/iconaws.png';

function seededRand(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const WORDLE_LETTERS = ['W', 'O', 'R', 'D', 'L', 'E', 'G', 'R', 'U'];

const HOW_TO_PLAY_STEPS = [
  {
    num: '1',
    title: 'Setup AR Mode',
    body: 'Point your camera at a flat surface and wait for plane detection.',
  },
  {
    num: '2',
    title: 'Smash Asteroids',
    body: 'Tap on 3D asteroids to shatter them and collect falling letters.',
  },
  {
    num: '3',
    title: 'Solve Words',
    body: "Arrange letters to complete 5-letter words from the Warden's Codex.",
  },
  {
    num: '4',
    title: 'Color Feedback',
    body: null,
    feedback: [
      { dot: '#10b981', label: 'Green',  desc: 'Correct letter, correct position' },
      { dot: '#facc15', label: 'Yellow', desc: 'Correct letter, wrong position' },
      { dot: '#6b7280', label: 'Gray',   desc: 'Letter not in word' },
    ],
  },
  {
    num: '5',
    title: 'Defeat the Boss',
    body: 'Survive enemy attacks and complete the Final Seal word to defeat the Rift Overlord.',
  },
] as const;

export default function HomePage() {
  const navigate = useNavigate();
  const [showHowTo, setShowHowTo] = useState(false);

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

      {/* Pixel Grid Background */}
      <div className="absolute inset-0 opacity-10" style={{
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
          <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"></div>

          <p className="text-[9px] text-white/90 text-center leading-[16px]">
            Smash meteors in AR, collect letters, and solve puzzles to defeat the{' '}
            <span className="text-[#ec4899]">Rift Overlord</span>
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full space-y-4 mb-8 relative z-10">
        <button
          onClick={() => navigate('/mission')}
          className="w-full bg-[#8b5cf6] border-4 border-[#ec4899] text-white py-4 px-6 text-[10px] relative hover:bg-[#a78bfa] transition-colors active:translate-y-1"
        >
          <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"></div>
          &gt; START MISSION &lt;
        </button>

        <button
          onClick={() => setShowHowTo(true)}
          className="w-full bg-[#1a0a2e] border-4 border-white/30 text-white/90 py-3 px-6 text-[9px] relative hover:bg-[#2a1a3e] transition-colors active:translate-y-1"
        >
          <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"></div>
          How to Play
        </button>
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
            <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0118]" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118]" />

            {/* Modal header */}
            <div
              className="bg-[#1a0a2e] border-b-4 border-[#8b5cf6] px-5 py-4 flex items-center justify-between"
              style={{ animation: 'headerSlideDown 0.3s 0.15s ease-out both' }}
            >
              <p className="text-[10px] text-[#8b5cf6] tracking-widest">HOW TO PLAY</p>
              <button
                onClick={() => setShowHowTo(false)}
                className="text-[#a78bfa] hover:text-white text-[9px] transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Steps */}
            <div className="px-5 py-4 space-y-5">
              {HOW_TO_PLAY_STEPS.map((step, i) => (
                <div
                  key={step.num}
                  className="flex gap-3"
                  style={{ animation: `stepFadeIn 0.3s ${0.2 + i * 0.07}s ease-out both` }}
                >
                  <div
                    className="w-6 h-6 flex-shrink-0 flex items-center justify-center border-2 border-[#ec4899] bg-[#1a0a2e]"
                    style={{ fontSize: '8px', color: '#ec4899' }}
                  >
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <p className="text-[8px] text-[#facc15] mb-1 tracking-wide">{step.title}</p>
                    {'body' in step && step.body && (
                      <p className="text-[7px] text-white/70 leading-[14px]">{step.body}</p>
                    )}
                    {'feedback' in step && step.feedback && (
                      <div className="space-y-1.5 mt-1">
                        {step.feedback.map(f => (
                          <div key={f.label} className="flex items-center gap-2">
                            <div
                              className="w-3 h-3 flex-shrink-0"
                              style={{ backgroundColor: f.dot, boxShadow: `0 0 4px ${f.dot}` }}
                            />
                            <span className="text-[7px] leading-[13px]" style={{ color: f.dot }}>
                              {f.label}:
                            </span>
                            <span className="text-[7px] text-white/60 leading-[13px]">{f.desc}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Got It button */}
            <div className="px-5 pb-5">
              <button
                onClick={() => setShowHowTo(false)}
                className="w-full bg-[#8b5cf6] border-4 border-[#ec4899] text-white py-3 px-6 text-[10px] relative hover:bg-[#a78bfa] transition-colors active:translate-y-1"
              >
                <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0118]" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118]" />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]" />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]" />
                Got It!
              </button>
            </div>

            <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]" />
          </div>
        </div>
      )}

    </div>
  );
}
