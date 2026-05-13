import { useCallback, useEffect, useState } from 'react';

// ── Settings shape ──────────────────────────────────────────────────────────
export interface Settings {
  musicEnabled:     boolean;   // background music on/off
  musicVolume:      number;    // 0..1
  vibrationEnabled: boolean;   // navigator.vibrate gate
  aiHintsEnabled:   boolean;   // OpenAI hints (off = only fallback canned hints)
  bossTauntsEnabled: boolean;  // OpenAI boss narrative
  showPlanesDefault: boolean;  // initial plane-visibility in AR
  reduceMotion:     boolean;   // shorten / disable some animations (a11y)
}

export const DEFAULT_SETTINGS: Settings = {
  musicEnabled:      true,
  musicVolume:       0.35,
  vibrationEnabled:  true,
  aiHintsEnabled:    true,
  bossTauntsEnabled: true,
  showPlanesDefault: true,
  reduceMotion:      false,
};

const STORAGE_KEY = 'arwordle.settings.v1';
const EVENT_NAME  = 'arwordle:settings-change';

// ── Internal: read from localStorage with safe defaults ──────────────────────
function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_SETTINGS };
    const parsed = JSON.parse(raw);
    // Merge to handle missing keys after future schema additions
    return { ...DEFAULT_SETTINGS, ...parsed };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

function saveSettings(s: Settings): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    // Notify all useSettings() instances in the page
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: s }));
  } catch {
    /* localStorage full or unavailable — still works in-memory for this tab */
  }
}

// ── Hook ────────────────────────────────────────────────────────────────────
/**
 * useSettings — global settings store backed by localStorage.
 * Multiple components calling this hook will all stay in sync via a CustomEvent.
 *
 *   const { settings, setSetting, resetSettings } = useSettings();
 *   <button onClick={() => setSetting('musicEnabled', !settings.musicEnabled)}/>
 */
export function useSettings() {
  const [settings, setSettings] = useState<Settings>(() => loadSettings());

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<Settings>).detail;
      if (detail) setSettings(detail);
    };
    window.addEventListener(EVENT_NAME, handler);
    // Also listen to storage events from OTHER tabs
    const storageHandler = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setSettings(loadSettings());
    };
    window.addEventListener('storage', storageHandler);
    return () => {
      window.removeEventListener(EVENT_NAME, handler);
      window.removeEventListener('storage', storageHandler);
    };
  }, []);

  const setSetting = useCallback(<K extends keyof Settings>(key: K, value: Settings[K]) => {
    setSettings(prev => {
      const next = { ...prev, [key]: value };
      saveSettings(next);
      return next;
    });
  }, []);

  const resetSettings = useCallback(() => {
    saveSettings({ ...DEFAULT_SETTINGS });
    setSettings({ ...DEFAULT_SETTINGS });
  }, []);

  return { settings, setSetting, resetSettings };
}

// ── Helpers (for non-React code) ────────────────────────────────────────────
export function getSettings(): Settings {
  return loadSettings();
}

/** Vibrate ONLY if the user has enabled it. Use this everywhere instead of navigator.vibrate. */
export function safeVibrate(pattern: number | number[]): void {
  try {
    if (!loadSettings().vibrationEnabled) return;
    if ((navigator as any).vibrate) (navigator as any).vibrate(pattern);
  } catch {
    /* not supported */
  }
}
