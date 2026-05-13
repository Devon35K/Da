import { useCallback, useState } from 'react';
import { pickRandomWord } from '../data/wardenCodex';

const API_BASE: string =
  (import.meta as any).env?.VITE_API_BASE ?? 'http://localhost:8000';

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
      const fallback = 'The Codex is silent… trust your instincts, Warden.';
      setHint(fallback);
      return fallback;
    } finally {
      setHintLoading(false);
    }
  }, []);

  const clearHint = useCallback(() => setHint(null), []);

  return { fetchWord, fetchHint, clearHint, hint, hintLoading };
}
