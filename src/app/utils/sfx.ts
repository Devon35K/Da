/**
 * sfx.ts — Sound effects.
 * Destroy uses the real MP3; dash is synthesised via Web Audio API.
 */
import destroyMp3 from '../../music/effect/finntastico-asteroid-hitting-something-152511.mp3';
import damageMp3  from '../../music/effect/bannythecoolio-impactful-damage-425132.mp3';

// Web Audio context for synthesised effects (dash whoosh).
let _ctx: AudioContext | null = null;
function getCtx(): AudioContext {
  if (!_ctx) _ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
  if (_ctx.state === 'suspended') _ctx.resume();
  return _ctx;
}

// Pre-load both SFX once so first plays have no latency.
const _destroyBase = new Audio(destroyMp3 as string);
_destroyBase.preload = 'auto';

const _damageBase = new Audio(damageMp3 as string);
_damageBase.preload = 'auto';

/** Play the asteroid-hit MP3. Uses cloneNode so hits can overlap. */
export function sfxDestroy(vol = 0.75) {
  try {
    const a = _destroyBase.cloneNode() as HTMLAudioElement;
    a.volume = Math.min(1, Math.max(0, vol));
    a.play().catch(() => {});
  } catch { /* silently ignore */ }
}

/** Player-hit impact sound. */
export function sfxDamage(vol = 0.8) {
  try {
    const a = _damageBase.cloneNode() as HTMLAudioElement;
    a.volume = Math.min(1, Math.max(0, vol));
    a.play().catch(() => {});
  } catch { /* silently ignore */ }
}

/** Sawtooth frequency sweep downward — dash / dodge whoosh. */
export function sfxDash(vol = 0.38) {
  try {
    const c = getCtx();
    const duration = 0.18;

    const osc = c.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(920, c.currentTime);
    osc.frequency.exponentialRampToValueAtTime(85, c.currentTime + duration);

    const gain = c.createGain();
    gain.gain.setValueAtTime(vol, c.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + duration);

    osc.connect(gain);
    gain.connect(c.destination);
    osc.start();
    osc.stop(c.currentTime + duration + 0.02);
  } catch { /* silently ignore */ }
}
