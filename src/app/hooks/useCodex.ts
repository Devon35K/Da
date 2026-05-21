import { useCallback, useState } from 'react';
import { pickRandomWord } from '../data/wardenCodex';
import { getSettings } from './useSettings';

const _VITE_OAI_KEY   = (import.meta as any).env?.VITE_OPENAI_API_KEY  as string | undefined;
const _VITE_OAI_MODEL = (import.meta as any).env?.VITE_OPENAI_MODEL    as string | undefined;

/**
 * Direct OpenAI call — used when the Django backend is unreachable but
 * VITE_OPENAI_API_KEY is set in .env.local.
 */
async function fetchOpenAIHint(word: string, attempts: HintAttempt[]): Promise<string | null> {
  if (!_VITE_OAI_KEY) return null;
  const attemptsText = attempts.map(a =>
    a.guess.split('').map((l, i) => `${l}(${a.colors[i][0].toUpperCase()})`).join(' ')
  ).join('\n') || '(no attempts yet)';
  const prompt =
    `You are the Warden, a cosmic entity guarding the Rift Codex.\n` +
    `The player is solving the secret 5-letter word: "${word}".\n` +
    `Attempts so far (G=correct, Y=wrong-position, X=not-in-word):\n${attemptsText}\n` +
    `Give ONE cryptic dramatic hint (max 20 words) WITHOUT spelling the word. Be poetic. No quotes.`;
  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method:  'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${_VITE_OAI_KEY}`,
      },
      body: JSON.stringify({
        model:      _VITE_OAI_MODEL ?? 'gpt-4o-mini',
        messages:   [{ role: 'user', content: prompt }],
        max_tokens: 60,
        temperature: 0.85,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return (data.choices?.[0]?.message?.content as string)?.trim() ?? null;
  } catch {
    return null;
  }
}

/** Generate a real hint from attempt color feedback without spoiling the word. */
function buildLocalHint(word: string, attempts: HintAttempt[]): string {
  const W = word.toUpperCase();

  if (attempts.length === 0) {
    const v = W.split('').filter(l => 'AEIOU'.includes(l)).length;
    return `The seal-word holds ${v} vowel${v !== 1 ? 's' : ''}. Start there, Warden.`;
  }

  const greens:  { letter: string; pos: number }[] = [];
  const yellows: string[] = [];
  const usedG = new Set<string>();
  const usedY = new Set<string>();

  for (const a of attempts) {
    a.colors.forEach((c, i) => {
      const L = a.guess[i]?.toUpperCase() ?? '';
      if (c === 'green') {
        const key = `${L}${i}`;
        if (!usedG.has(key)) { usedG.add(key); greens.push({ letter: L, pos: i + 1 }); }
      } else if (c === 'yellow') {
        if (!usedY.has(L)) { usedY.add(L); yellows.push(L); }
      }
    });
  }

  if (greens.length > 0) {
    const g = greens[greens.length - 1];
    return `'${g.letter}' is locked at position ${g.pos}. Keep it — shift the rest.`;
  }
  if (yellows.length > 0) {
    const y = yellows[Math.floor(Math.random() * yellows.length)];
    return `'${y}' is in the word — move it to a different position.`;
  }
  if (attempts.length >= 3) {
    return `The seal-word begins with '${W[0]}'. Build from there.`;
  }
  const v = W.split('').filter(l => 'AEIOU'.includes(l)).length;
  return `${v} vowel${v !== 1 ? 's' : ''} are woven into the seal. Try centering them.`;
}

// See useDictionary.ts — relative default routes through Vite proxy.
const API_BASE: string = (import.meta as any).env?.VITE_API_BASE ?? '';

export interface HintAttempt {
  guess:  string;
  colors: Array<'green' | 'yellow' | 'gray'>;
}

/**
 * useCodex — fetch Wordle words and AI hints from the Django backend.
 *
 * Automatically falls back to the local wardenCodex.ts list when the backend
 * is unreachable, so the game always works offline / during dev.
 */
export function useCodex() {
  const [hint,        setHint]        = useState<string | null>(null);
  const [hintLoading, setHintLoading] = useState(false);

  /** Fetch a random word from the backend. Falls back to local list. */
  const fetchWord = useCallback(async (exclude?: string): Promise<string> => {
    try {
      const params = exclude ? `?exclude=${encodeURIComponent(exclude)}` : '';
      const res = await fetch(`${API_BASE}/api/codex/word/${params}`, {
        signal: AbortSignal.timeout(3000),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      return (data.word as string).toUpperCase();
    } catch {
      // Backend unreachable — use local fallback
      return pickRandomWord(exclude);
    }
  }, []);

  /**
   * Ask the backend AI for a hint.
   * Stores result in `hint` state; also returns it directly.
   */
  const fetchHint = useCallback(async (
    word: string,
    attempts: HintAttempt[],
  ): Promise<string> => {
    // Settings gate — skip the network call entirely if user disabled AI hints
    if (!getSettings().aiHintsEnabled) {
      const local = buildLocalHint(word, attempts);
      setHint(local);
      return local;
    }
    setHintLoading(true);
    setHint(null);
    try {
      const res = await fetch(`${API_BASE}/api/codex/hint/`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ word, attempts }),
        signal:  AbortSignal.timeout(8000),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const h = data.hint as string;
      setHint(h);
      return h;
    } catch {
      // Second tier: direct OpenAI if VITE_OPENAI_API_KEY is configured
      const ai = await fetchOpenAIHint(word, attempts);
      const fallback = ai ?? buildLocalHint(word, attempts);
      setHint(fallback);
      return fallback;
    } finally {
      setHintLoading(false);
    }
  }, []);

  const clearHint = useCallback(() => setHint(null), []);

  return { fetchWord, fetchHint, clearHint, hint, hintLoading };
}
