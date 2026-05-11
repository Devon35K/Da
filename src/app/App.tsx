import { ImageWithFallback } from './components/figma/ImageWithFallback';
import iconImage from '../imports/iconaws.png';

export default function App() {
  return (
    <div className="min-h-screen w-full max-w-md mx-auto bg-[#0a0118] flex flex-col items-center justify-between px-6 py-12 font-['Press_Start_2P',_monospace] relative overflow-hidden">
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
        <div className="w-32 h-32 mb-6 relative border-4 border-[#8b5cf6] bg-[#1a0a2e] p-2" style={{ imageRendering: 'pixelated' }}>
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
          {/* Corner pixels */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"></div>

          <p className="text-[9px] text-white/90 text-center leading-[16px]">
            Smash meteors in AR, collect letters, and solve puzzles to defeat the{' '}
            <span className="text-[#ec4899]">Rift Overlord</span>
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 w-full">
          <div className="bg-[#1a0a2e] border-4 border-[#10b981] p-3 text-center relative">
            <div className="absolute top-0 left-0 w-1 h-1 bg-[#0a0118]"></div>
            <div className="absolute top-0 right-0 w-1 h-1 bg-[#0a0118]"></div>
            <div className="absolute bottom-0 left-0 w-1 h-1 bg-[#0a0118]"></div>
            <div className="absolute bottom-0 right-0 w-1 h-1 bg-[#0a0118]"></div>
            <div className="text-xl mb-2">🎯</div>
            <p className="text-[7px] text-[#10b981]">SMASH</p>
          </div>
          <div className="bg-[#1a0a2e] border-4 border-[#8b5cf6] p-3 text-center relative">
            <div className="absolute top-0 left-0 w-1 h-1 bg-[#0a0118]"></div>
            <div className="absolute top-0 right-0 w-1 h-1 bg-[#0a0118]"></div>
            <div className="absolute bottom-0 left-0 w-1 h-1 bg-[#0a0118]"></div>
            <div className="absolute bottom-0 right-0 w-1 h-1 bg-[#0a0118]"></div>
            <div className="text-xl mb-2">📝</div>
            <p className="text-[7px] text-[#8b5cf6]">SOLVE</p>
          </div>
          <div className="bg-[#1a0a2e] border-4 border-[#ec4899] p-3 text-center relative">
            <div className="absolute top-0 left-0 w-1 h-1 bg-[#0a0118]"></div>
            <div className="absolute top-0 right-0 w-1 h-1 bg-[#0a0118]"></div>
            <div className="absolute bottom-0 left-0 w-1 h-1 bg-[#0a0118]"></div>
            <div className="absolute bottom-0 right-0 w-1 h-1 bg-[#0a0118]"></div>
            <div className="text-xl mb-2">🛡️</div>
            <p className="text-[7px] text-[#ec4899]">DEFEND</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full space-y-4 mb-8 relative z-10">
        <button className="w-full bg-[#8b5cf6] border-4 border-[#ec4899] text-white py-4 px-6 text-[10px] relative hover:bg-[#a78bfa] transition-colors active:translate-y-1">
          <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"></div>
          &gt; START MISSION &lt;
        </button>

        <button className="w-full bg-[#1a0a2e] border-4 border-white/30 text-white/90 py-3 px-6 text-[9px] relative hover:bg-[#2a1a3e] transition-colors active:translate-y-1">
          <div className="absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"></div>
          How to Play
        </button>
      </div>

     
    </div>
  );
}