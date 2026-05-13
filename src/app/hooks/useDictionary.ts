import { useEffect, useState } from 'react';
import { WARDEN_DICTIONARY } from '../data/wardenDictionary';

// Default to relative ('') so fetches go through the Vite dev proxy (configured
// in vite.config.ts). This avoids HTTPS-frontend / HTTP-backend mixed-content
// blocking when accessing the dev server over HTTPS.
const API_BASE: string = (import.meta as any).env?.VITE_API_BASE ?? '';

export interface DictionaryEntry {
  word:           string;
  ipa:            string;
  syllables:      string;
  pos:            string;          // part of speech
  definition:     string;
  example:        string;
  is_final_seal?: boolean;
}

interface DictionaryResponse {
  entries: DictionaryEntry[];
  count:   number;
}

// ── Embedded fallback (works fully offline) ──────────────────────────────────
// All 47 lore entries are mirrored in `src/app/data/wardenDictionary.ts` so the
// Codex page is fully usable even when the Django backend is unreachable.
const _OFFLINE_FALLBACK: DictionaryEntry[] = WARDEN_DICTIONARY;

/**
 * useDictionary — fetches the full Warden's Codex dictionary from the backend.
 * Falls back to a small embedded list if the backend is unreachable.
 */
export function useDictionary() {
  const [entries, setEntries] = useState<DictionaryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/codex/dictionary/`, {
          signal: AbortSignal.timeout(4000),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: DictionaryResponse = await res.json();
        if (!cancelled) {
          setEntries(data.entries);
          setError(null);
        }
      } catch (err: any) {
        if (!cancelled) {
          setEntries(_OFFLINE_FALLBACK);
          setError('Backend offline — showing limited offline entries.');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return { entries, loading, error };
}

/**
 * Speak a word using the browser's built-in speech synthesis.
 * No external API needed. Voice quality varies by OS.
 */
export function speakWord(word: string): void {
  try {
    const synth = window.speechSynthesis;
    if (!synth) return;
    synth.cancel();
    const utter = new SpeechSynthesisUtterance(word.toLowerCase());
    utter.rate   = 0.85;
    utter.pitch  = 1;
    utter.volume = 1;
    utter.lang   = 'en-US';
    synth.speak(utter);
  } catch {
    /* speech synthesis not available */
  }
}
