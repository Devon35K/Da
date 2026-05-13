import { useEffect, useRef } from 'react';
import { useSettings } from './useSettings';

export function useBgMusic(src: string) {
  const audioRef   = useRef<HTMLAudioElement | null>(null);
  const startedRef = useRef(false);
  const { settings } = useSettings();

  // ── Mount: build the <audio> element once ────────────────────────────────
  useEffect(() => {
    const audio = new Audio();
    audio.src         = src;
    audio.loop        = true;
    audio.volume      = settings.musicVolume;
    audio.preload     = 'auto';
    audioRef.current  = audio;

    // Silently swallow benign media errors so they don't spam the console.
    const onError = () => { /* no-op */ };
    audio.addEventListener('error', onError);

    const start = () => {
      if (startedRef.current || !audioRef.current) return;
      // Re-check settings at the moment of the gesture
      audioRef.current.play()
        .then(() => { startedRef.current = true; })
        .catch(() => {});
    };

    // Only attempt autoplay if music is enabled
    if (settings.musicEnabled) {
      audio.play().then(() => {
        startedRef.current = true;
      }).catch(() => {
        // Autoplay blocked — wait for any user gesture
        document.addEventListener('click',      start, { once: true });
        document.addEventListener('touchstart', start, { once: true });
        document.addEventListener('keydown',    start, { once: true });
      });
    }

    return () => {
      audio.pause();
      audio.removeEventListener('error', onError);
      audio.src = '';
      document.removeEventListener('click',      start);
      document.removeEventListener('touchstart', start);
      document.removeEventListener('keydown',    start);
      audioRef.current = null;
      startedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  // ── React to live settings changes ───────────────────────────────────────
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = settings.musicVolume;
    if (settings.musicEnabled) {
      if (audio.paused) {
        audio.play().then(() => { startedRef.current = true; }).catch(() => {});
      }
    } else {
      audio.pause();
    }
  }, [settings.musicEnabled, settings.musicVolume]);
}
