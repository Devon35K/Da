// Warden's Codex — 5-letter words for the AR Wordle Smasher puzzle game.
// Players smash asteroids to collect letters and arrange them into these words.

export const WARDEN_CODEX: readonly string[] = [
  // Combat & magic
  'BLAZE', 'STORM', 'FROST', 'FLAME', 'SPELL
  // Creatures & realms
  'GHOST', 'BEAST', 'DEMON',
  // Elements & states
  'EARTH', 'ETHER', 'NIGHT', 'LIGHT',
];

// The boss word — completing this defeats the Rift Overlord
export const FINAL_SEAL = 'RIFT' + 'S'; // 5 letters: 'RIFTS'

export type LetterColor = 'green' | 'yellow' | 'gray';

/**
 * Score a guess against the target using standard Wordle rules:
 *   green  = correct letter, correct position
 *   yellow = correct letter, wrong position (and not already counted)
 *   gray   = letter not in target (or already counted)
 *
 * Handles duplicate letters correctly: e.g. guess 'EERIE' vs target 'ELDER'
 * gives only one green/yellow E even though guess has 3 Es.
 */
export function scoreGuess(guess: string, target: string): LetterColor[] {
  const g = guess.toUpperCase();
  const t = target.toUpperCase();
  const len = t.length;
  const result: LetterColor[] = new Array(len).fill('gray');
  const targetChars: (string | null)[] = t.split('');

  // First pass: mark greens, consume target slots
  for (let i = 0; i < len; i++) {
    if (g[i] === t[i]) {
      result[i] = 'green';
      targetChars[i] = null;
    }
  }
  // Second pass: mark yellows from remaining target letters
  for (let i = 0; i < len; i++) {
    if (result[i] === 'green') continue;
    const idx = targetChars.indexOf(g[i]);
    if (idx !== -1) {
      result[i] = 'yellow';
      targetChars[idx] = null;
    }
  }
  return result;
}

/** Pick a random word from the codex (not equal to last word, if provided) */
export function pickRandomWord(exclude?: string): string {
  let w: string;
  do {
    w = WARDEN_CODEX[Math.floor(Math.random() * WARDEN_CODEX.length)];
  } while (exclude && w === exclude && WARDEN_CODEX.length > 1);
  return w;
}

/** Pick a letter for an asteroid drop — biased toward letters in the target word */
export function pickDropLetter(target: string | null, bias = 0.6): string {
  if (target && Math.random() < bias) {
    return target[Math.floor(Math.random() * target.length)].toUpperCase();
  }
  // Otherwise random uppercase letter (excluding rare ones for fairness)
  const common = 'AEIOUSTRLNCDMHPGBFKWYV';
  return common[Math.floor(Math.random() * common.length)];
}
