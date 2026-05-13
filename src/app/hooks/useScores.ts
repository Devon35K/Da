import { useCallback, useEffect, useState } from 'react';

// ── API base ────────────────────────────────────────────────────────────────
// Override at build time with VITE_API_BASE in .env or .env.local, e.g.:
//   VITE_API_BASE=http://192.168.1.42:8000
// Falls back to localhost:8000 for desktop dev.
const API_BASE: string =
  (import.meta as any).env?.VITE_API_BASE ?? 'http://localhost:8000';

// ── Types ───────────────────────────────────────────────────────────────────
export interface Score {
  id:                number;
  player_name:       string;
  score:             number;
  wave_reached:      number;
  words_solved:      number;
  asteroids_smashed: number;
  duration_seconds:  number;
  created_at:        string;
}

export interface ScoreSubmission {
  player_name:       string;
  score:             number;
  wave_reached?:     number;
  words_solved?:     number;
  asteroids_smashed?: number;
  duration_seconds?: number;
}

// ── Hook ────────────────────────────────────────────────────────────────────
/**
 * useScores — fetch the top leaderboard and submit new scores.
 *
 * Example:
 *   const { topScores, loading, submitScore, refresh } = useScores(10);
 *   submitScore({ player_name: 'Cascade', score: 1240, wave_reached: 5 });
 */
export function useScores(limit = 10) {
  const [topScores, setTopScores] = useState<Score[]>([]);
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/api/scores/top/?limit=${limit}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: Score[] = await res.json();
      setTopScores(data);
    } catch (err: any) {
      setError(err?.message ?? 'Failed to fetch scores');
    } finally {
      setLoading(false);
    }
  }, [limit]);

  const submitScore = useCallback(async (s: ScoreSubmission): Promise<Score | null> => {
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/api/scores/`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(s),
      });
      if (!res.ok) {
        const detail = await res.text();
        throw new Error(`HTTP ${res.status}: ${detail}`);
      }
      const saved: Score = await res.json();
      // Optimistic refresh
      refresh();
      return saved;
    } catch (err: any) {
      setError(err?.message ?? 'Failed to submit score');
      return null;
    }
  }, [refresh]);

  // Auto-fetch on mount
  useEffect(() => { refresh(); }, [refresh]);

  return { topScores, loading, error, refresh, submitScore };
}
