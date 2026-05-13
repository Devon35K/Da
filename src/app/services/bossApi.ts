/**
 * bossApi — fire-and-forget calls to the Rift Overlord boss narrative endpoint.
 *
 * Usage:
 *   import { fetchTaunt, BossEvent } from '../services/bossApi';
 *   const taunt = await fetchTaunt('word_solved', 'Player solved BLAZE in 3 tries');
 */

const API_BASE: string =
  (import.meta as any).env?.VITE_API_BASE ?? 'http://localhost:8000';

export type BossEvent =
  | 'asteroid_smashed'
  | 'word_solved'
  | 'wave_start'
  | 'wave_cleared'
  | 'game_over'
  | 'player_hurt'
  | 'hint_requested';

const _FALLBACK_TAUNTS: Record<BossEvent, string[]> = {
  asteroid_smashed: ["Another fragment falls… you cannot stop the Rift.", "Destroy all you wish — the void is infinite."],
  word_solved:      ["The seal weakens… but the Overlord is eternal.", "One word closer to your doom."],
  wave_start:       ["A new wave descends upon you. Brace yourself.", "My sentinels multiply. You will not."],
  wave_cleared:     ["Impossible. My asteroids… defeated?", "One wave falls. Ten more await."],
  game_over:        ["The Rift swallows you whole. As it always will.", "Fade into the void, Warden. Fade."],
  player_hurt:      ["Feel the weight of the cosmos, little Warden.", "Pain is a reminder that you are mortal."],
  hint_requested:   ["You need guidance? How… pathetically human.", "Seek your hint. It will not save you."],
};

function _randomFallback(event: BossEvent): string {
  const pool = _FALLBACK_TAUNTS[event] ?? ["The Rift watches. Always."];
  return pool[Math.floor(Math.random() * pool.length)];
}

/**
 * Fetch a live AI taunt from the backend.
 * Returns a fallback string immediately if the network call fails.
 */
export async function fetchTaunt(
  event: BossEvent,
  context = '',
): Promise<string> {
  try {
    const res = await fetch(`${API_BASE}/api/boss/taunt/`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ event, context }),
      signal:  AbortSignal.timeout(5000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data.taunt as string;
  } catch {
    return _randomFallback(event);
  }
}
