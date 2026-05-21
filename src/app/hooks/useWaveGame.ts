import { useCallback, useEffect, useRef, useState } from 'react';
import { pickRandomWord, scoreGuess, FINAL_SEAL, type LetterColor } from '../data/wardenCodex';

// ── Tunables ────────────────────────────────────────────────────────────────
export const WAVE_DURATION_MS    = 60_000;   // 60 seconds per wave
export const MAX_GUESSES         = 6;        // Wordle attempts per puzzle
export const BOSS_ATTACK_INTERVAL_MS = 8_000;  // boss hits player every 8s
export const BOSS_ATTACK_DAMAGE  = 18;       // damage per boss attack
export const WRONG_GUESS_DAMAGE  = 8;        // boss extra damage when player misses

// Boss appears every Nth wave
export const BOSS_WAVE_INTERVAL  = 10;

// Boss "HP" expressed as words required to defeat it; scales with wave number.
export function bossWordsRequired(wave: number): number {
  return 3 + Math.floor((wave - BOSS_WAVE_INTERVAL) / BOSS_WAVE_INTERVAL);
}

export type MetaPhase =
  | 'idle'           // before first wave starts
  | 'wave-active'    // wave running, asteroids attacking, timer counting
  | 'intermission'   // wave ended, Wordle puzzle to advance to next wave
  | 'boss-fight'     // boss wave: solve Wordle puzzles, boss attacks on timer
  | 'victory'        // player won
  | 'defeat';        // delegated from useARGame.phase === 'game-over'

export interface Attempt {
  word:   string;
  colors: LetterColor[];
}

export interface UseWaveGameOptions {
  /** Called when boss attacks during a boss-fight. Pass to useARGame.damagePlayer. */
  onBossAttack:  (damage: number) => void;
  /** Called when a wave starts (active gameplay should resume). */
  onWaveStart?:  (wave: number) => void;
  /** Called when a wave ends (active gameplay should pause for Wordle/boss). */
  onWaveEnd?:    (wave: number, isBossWave: boolean) => void;
  /** True only while the AR scene is rendering and the player is alive. */
  enabled:       boolean;
}

export interface UseWaveGameResult {
  metaPhase:        MetaPhase;
  wave:             number;
  timeRemainingMs:  number;
  // Wordle state
  targetWord:       string;
  guess:            string;
  attempts:         Attempt[];
  guessesRemaining: number;
  // Boss state (only meaningful during boss-fight)
  bossActive:       boolean;
  bossWordsLeft:    number;
  bossWordsTotal:   number;
  // Stats
  wordsSolved:      number;
  // Actions
  startGame:        (fromWave?: number) => void;
  addLetter:        (letter: string) => void;
  backspace:        () => void;
  submitGuess:      () => SubmitGuessResult;
  reset:            () => void;
}

export type WinEvent = 'wave-cleared' | 'seal-broken' | 'boss-defeated';

export interface SubmitGuessResult {
  ok:           boolean;
  result:       'win' | 'lose' | 'continue';
  /** Set on any correct answer. Tells the UI which celebration to play. */
  event:        WinEvent | null;
  /** The word that was just solved (only set when correct). */
  solvedWord:   string | null;
  /** How many guesses it took to solve (only set when correct). */
  attemptsUsed: number;
}

/**
 * useWaveGame — orchestrates the wave / Wordle gate / boss-fight meta-state machine.
 *
 * - Each wave runs for {WAVE_DURATION_MS}.
 * - When the timer expires, the player must solve a Wordle puzzle to advance.
 * - Every {BOSS_WAVE_INTERVAL}th wave is a boss fight: the boss attacks the player
 *   on a timer, and the player damages the boss by solving Wordle puzzles.
 *
 * This hook is intentionally INDEPENDENT of useARGame so it can be tested in isolation.
 * The host component bridges the two via the callbacks.
 */
export function useWaveGame(opts: UseWaveGameOptions): UseWaveGameResult {
  const { onBossAttack, onWaveStart, onWaveEnd, enabled } = opts;

  const [metaPhase,       setMetaPhase]       = useState<MetaPhase>('idle');
  const [wave,            setWave]            = useState(1);
  const [timeRemainingMs, setTimeRemainingMs] = useState(WAVE_DURATION_MS);

  const [targetWord,   setTargetWord]   = useState<string>(() => pickRandomWord());
  const [guess,        setGuess]        = useState('');
  const [attempts,     setAttempts]     = useState<Attempt[]>([]);
  const [wordsSolved,  setWordsSolved]  = useState(0);

  const [bossWordsLeft,  setBossWordsLeft]  = useState(0);
  const [bossWordsTotal, setBossWordsTotal] = useState(0);

  // Refs mirror the volatile state for interval callbacks
  const metaPhaseRef = useRef<MetaPhase>('idle');
  const waveRef      = useRef(1);
  useEffect(() => { metaPhaseRef.current = metaPhase; }, [metaPhase]);
  useEffect(() => { waveRef.current = wave; }, [wave]);

  // ── Wave countdown timer ─────────────────────────────────────────────────
  useEffect(() => {
    if (!enabled || metaPhase !== 'wave-active') return;
    const startedAt = performance.now();
    const startedRemaining = timeRemainingMs;
    const tick = () => {
      const elapsed = performance.now() - startedAt;
      const remaining = Math.max(0, startedRemaining - elapsed);
      setTimeRemainingMs(remaining);
      if (remaining <= 0) {
        // Wave timer hit zero → enter intermission OR boss-fight
        const w = waveRef.current;
        const isBoss = w % BOSS_WAVE_INTERVAL === 0;
        if (isBoss) {
          const total = bossWordsRequired(w);
          setBossWordsLeft(total);
          setBossWordsTotal(total);
          setMetaPhase('boss-fight');
        } else {
          setMetaPhase('intermission');
        }
        // Fresh puzzle for the gate
        setTargetWord(pickRandomWord(targetWord));
        setGuess('');
        setAttempts([]);
        onWaveEnd?.(w, isBoss);
        return;
      }
    };
    const id = window.setInterval(tick, 100);
    return () => window.clearInterval(id);
    // intentionally NOT depending on timeRemainingMs (would restart timer constantly)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, metaPhase]);

  // ── Boss attack timer ────────────────────────────────────────────────────
  useEffect(() => {
    if (!enabled || metaPhase !== 'boss-fight') return;
    const id = window.setInterval(() => {
      onBossAttack(BOSS_ATTACK_DAMAGE);
    }, BOSS_ATTACK_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [enabled, metaPhase, onBossAttack]);

  // ── Actions ──────────────────────────────────────────────────────────────
  const startGame = useCallback((fromWave = 1) => {
    const w = Math.max(1, Math.floor(fromWave));
    setWave(w);
    waveRef.current = w;
    setTargetWord(pickRandomWord());
    setGuess('');
    setAttempts([]);
    setWordsSolved(0);
    setBossWordsLeft(0);
    setBossWordsTotal(0);
    setTimeRemainingMs(WAVE_DURATION_MS);
    setMetaPhase('wave-active');
    onWaveStart?.(w);
  }, [onWaveStart]);

  const reset = useCallback(() => {
    setMetaPhase('idle');
    setWave(1);
    setGuess('');
    setAttempts([]);
    setWordsSolved(0);
    setBossWordsLeft(0);
    setBossWordsTotal(0);
    setTimeRemainingMs(WAVE_DURATION_MS);
  }, []);

  const addLetter = useCallback((letter: string) => {
    if (metaPhaseRef.current !== 'intermission' && metaPhaseRef.current !== 'boss-fight') return;
    const L = letter.toUpperCase();
    if (!/^[A-Z]$/.test(L)) return;
    setGuess(g => (g.length >= 5 ? g : g + L));
  }, []);

  const backspace = useCallback(() => {
    setGuess(g => g.slice(0, -1));
  }, []);

  const advanceToNextWave = useCallback(() => {
    const next = waveRef.current + 1;
    if (next > BOSS_WAVE_INTERVAL) {
      // All waves cleared — victory!
      setBossWordsLeft(0);
      setBossWordsTotal(0);
      setMetaPhase('victory');
      return;
    }
    setWave(next);
    waveRef.current = next;
    setGuess('');
    setAttempts([]);
    setBossWordsLeft(0);
    setBossWordsTotal(0);
    setTargetWord(pickRandomWord(targetWord));
    setTimeRemainingMs(WAVE_DURATION_MS);
    setMetaPhase('wave-active');
    onWaveStart?.(next);
  }, [onWaveStart, targetWord]);

  const submitGuess = useCallback((): SubmitGuessResult => {
    const blank: SubmitGuessResult = {
      ok: false, result: 'continue', event: null, solvedWord: null, attemptsUsed: 0,
    };
    if (guess.length !== 5) return blank;
    const phase = metaPhaseRef.current;
    if (phase !== 'intermission' && phase !== 'boss-fight') return blank;

    const colors  = scoreGuess(guess, targetWord);
    const correct = guess.toUpperCase() === targetWord.toUpperCase();
    const newAttempts = [...attempts, { word: guess.toUpperCase(), colors }];
    setAttempts(newAttempts);
    setGuess('');

    if (correct) {
      const solvedWord   = targetWord.toUpperCase();
      const attemptsUsed = newAttempts.length;
      setWordsSolved(n => n + 1);
      if (phase === 'boss-fight') {
        const left = bossWordsLeft - 1;
        setBossWordsLeft(left);
        if (left <= 0) {
          // Boss defeated → next wave
          advanceToNextWave();
          return { ok: true, result: 'win', event: 'boss-defeated', solvedWord, attemptsUsed };
        } else {
          // More words required to finish boss
          // Last remaining seal is always FINAL_SEAL (the Final Seal)
          setTargetWord(left === 1 ? FINAL_SEAL : pickRandomWord(targetWord));
          setAttempts([]);
          return { ok: true, result: 'continue', event: 'seal-broken', solvedWord, attemptsUsed };
        }
      } else {
        // Intermission solved → advance
        advanceToNextWave();
        return { ok: true, result: 'win', event: 'wave-cleared', solvedWord, attemptsUsed };
      }
    }

    // Wrong guess
    if (phase === 'boss-fight') {
      // Boss exploits failure — minor punishment
      onBossAttack(WRONG_GUESS_DAMAGE);
    }

    if (newAttempts.length >= MAX_GUESSES) {
      // Out of guesses — reveal answer and force-advance (intermission) or take big hit (boss)
      if (phase === 'boss-fight') {
        onBossAttack(BOSS_ATTACK_DAMAGE);
      }
      // Reset puzzle to keep play going
      setTargetWord(pickRandomWord(targetWord));
      setAttempts([]);
      return { ok: true, result: 'lose', event: null, solvedWord: null, attemptsUsed: 0 };
    }

    return { ok: true, result: 'continue', event: null, solvedWord: null, attemptsUsed: 0 };
  }, [guess, targetWord, attempts, metaPhaseRef, bossWordsLeft, advanceToNextWave, onBossAttack]);

  return {
    metaPhase,
    wave,
    timeRemainingMs,
    targetWord,
    guess,
    attempts,
    guessesRemaining: MAX_GUESSES - attempts.length,
    bossActive:       metaPhase === 'boss-fight',
    bossWordsLeft,
    bossWordsTotal,
    wordsSolved,
    startGame,
    addLetter,
    backspace,
    submitGuess,
    reset,
  };
}
