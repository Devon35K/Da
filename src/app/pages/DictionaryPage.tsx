import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDictionary, speakWord, type DictionaryEntry } from '../hooks/useDictionary';

type FilterKey = 'all' | 'noun' | 'adjective' | 'seal';

export default function DictionaryPage() {
  const navigate = useNavigate();
  const { entries, loading, error } = useDictionary();
  const [query,    setQuery]    = useState('');
  const [filter,   setFilter]   = useState<FilterKey>('all');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo<DictionaryEntry[]>(() => {
    const q = query.trim().toUpperCase();
    return entries.filter(e => {
      if (q && !e.word.includes(q) && !e.definition.toUpperCase().includes(q)) return false;
      if (filter === 'noun'      && !e.pos.startsWith('noun'))      return false;
      if (filter === 'adjective' && !e.pos.startsWith('adjective')) return false;
      if (filter === 'seal'      && !e.is_final_seal)               return false;
      return true;
    });
  }, [entries, query, filter]);

  return (
    <div className="min-h-screen w-full max-w-md mx-auto bg-[#0a0118] flex flex-col font-['Press_Start_2P',_monospace] relative">
      <style>{`
        @keyframes fadeInUp {
          from { transform: translateY(8px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 6px #8b5cf6, 0 0 14px #8b5cf6aa; }
          50%      { box-shadow: 0 0 10px #ec4899, 0 0 22px #ec4899aa; }
        }
        .codex-grid {
          background-image:
            linear-gradient(0deg,  transparent 24%, rgba(139,92,246,.18) 25%, rgba(139,92,246,.18) 26%, transparent 27%, transparent 74%, rgba(139,92,246,.18) 75%, rgba(139,92,246,.18) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(139,92,246,.18) 25%, rgba(139,92,246,.18) 26%, transparent 27%, transparent 74%, rgba(139,92,246,.18) 75%, rgba(139,92,246,.18) 76%, transparent 77%, transparent);
          background-size: 20px 20px;
        }
      `}</style>

      <div className="absolute inset-0 codex-grid opacity-30 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 bg-[#1a0a2e] border-b-4 border-[#8b5cf6] px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="text-[8px] text-[#a78bfa] hover:text-white px-2 py-1 border-2 border-[#8b5cf6] bg-[#0a0118] active:translate-y-0.5"
        >
          &lt; BACK
        </button>
        <p className="text-[10px] text-[#8b5cf6] tracking-widest">CODEX</p>
        <div className="w-[60px]" />{/* spacer */}
      </div>

      {/* Search + filters */}
      <div className="relative z-10 px-4 py-3 space-y-2 border-b-2 border-[#8b5cf6]/40 bg-[#0a0118]/95">
        <input
          type="text"
          placeholder="SEARCH..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full bg-[#1a0a2e] border-2 border-[#8b5cf6] text-white text-[9px] px-3 py-2 placeholder-[#a78bfa]/50 focus:border-[#ec4899] focus:outline-none tracking-widest"
          style={{ fontFamily: "'Press Start 2P', monospace" }}
        />
        <div className="flex gap-1.5">
          {(['all', 'noun', 'adjective', 'seal'] as FilterKey[]).map(k => (
            <button
              key={k}
              onClick={() => setFilter(k)}
              className={`flex-1 text-[7px] py-1.5 border-2 tracking-widest transition-colors ${
                filter === k
                  ? 'bg-[#8b5cf6] border-[#ec4899] text-white'
                  : 'bg-[#1a0a2e] border-[#8b5cf6]/40 text-[#a78bfa] hover:border-[#8b5cf6]'
              }`}
            >
              {k.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Status messages */}
      {loading && (
        <div className="relative z-10 text-center py-10 text-[8px] text-[#a78bfa] tracking-widest animate-pulse">
          LOADING CODEX...
        </div>
      )}
      {error && !loading && (
        <div className="relative z-10 mx-4 mt-3 text-[7px] text-[#facc15] border-2 border-[#facc15]/50 bg-[#facc15]/10 px-3 py-2 leading-relaxed">
          {error}
        </div>
      )}

      {/* Entry list */}
      <div className="relative z-10 flex-1 overflow-y-auto px-4 py-3 space-y-2 pb-20">
        {!loading && filtered.length === 0 && (
          <p className="text-center text-[8px] text-[#a78bfa]/60 py-8 tracking-widest">
            NO ENTRIES FOUND
          </p>
        )}

        {filtered.map((e, i) => {
          const open = expanded === e.word;
          return (
            <div
              key={e.word}
              className={`bg-[#1a0a2e] border-2 ${
                e.is_final_seal ? 'border-[#ec4899]' : 'border-[#8b5cf6]'
              } relative`}
              style={{
                animation: `fadeInUp 0.25s ${Math.min(i, 12) * 0.03}s ease-out both`,
                ...(e.is_final_seal && { animation: `pulseGlow 2s ease-in-out infinite, fadeInUp 0.25s ease-out both` }),
              }}
            >
              {/* Pixel corners */}
              <div className="absolute top-0 left-0  w-1.5 h-1.5 bg-[#0a0118]" />
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#0a0118]" />
              <div className="absolute bottom-0 left-0  w-1.5 h-1.5 bg-[#0a0118]" />
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#0a0118]" />

              <button
                onClick={() => setExpanded(open ? null : e.word)}
                className="w-full text-left px-3 py-2.5 flex items-center justify-between hover:bg-[#2a1a3e]/60 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={`text-[12px] tracking-widest ${
                      e.is_final_seal ? 'text-[#ec4899]' : 'text-[#10b981]'
                    }`}
                  >
                    {e.word}
                  </span>
                  <span className="text-[7px] text-[#a78bfa] truncate">{e.ipa}</span>
                </div>
                <span className="text-[#a78bfa] text-[8px] flex-shrink-0">
                  {open ? '▼' : '▶'}
                </span>
              </button>

              {open && (
                <div
                  className="px-3 pb-3 pt-1 space-y-2 border-t-2 border-[#8b5cf6]/30"
                  style={{ animation: 'fadeInUp 0.18s ease-out' }}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[7px] text-[#facc15] tracking-widest">
                      {e.pos.toUpperCase()}
                      {e.is_final_seal && (
                        <span className="ml-2 text-[#ec4899]">★ FINAL SEAL</span>
                      )}
                    </p>
                    <button
                      onClick={() => speakWord(e.word)}
                      className="text-[6px] px-2 py-1 border-2 border-[#60a5fa] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-[#0a0118] tracking-widest"
                      title="Hear pronunciation"
                    >
                      ♪ SAY
                    </button>
                  </div>

                  <div className="flex gap-2 text-[7px] leading-relaxed">
                    <span className="text-[#a78bfa] flex-shrink-0">SYL:</span>
                    <span className="text-white/90 tracking-wider">{e.syllables}</span>
                  </div>

                  <div className="flex gap-2 text-[7px] leading-[14px]">
                    <span className="text-[#a78bfa] flex-shrink-0">DEF:</span>
                    <span className="text-white/90">{e.definition}</span>
                  </div>

                  <div className="flex gap-2 text-[7px] leading-[14px] italic">
                    <span className="text-[#a78bfa] flex-shrink-0 not-italic">EX:</span>
                    <span className="text-white/70">"{e.example}"</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {!loading && (
          <p className="text-center text-[7px] text-[#a78bfa]/50 pt-3 tracking-widest">
            {filtered.length} / {entries.length} ENTRIES
          </p>
        )}
      </div>
    </div>
  );
}
