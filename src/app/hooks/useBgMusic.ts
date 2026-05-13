import { useEffect, useRef } from 'react';

export function useBgMusic(src: string) {
  const audioRef   = useRef<HTMLAudioElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const audio = new Audio();
    audio.src         = src;
    audio.loop        = true;
    audio.volume      = 0.35;
    audio.preload     = 'auto';
    audioRef.current  = audio;

    // Silently swallow benign media errors (file 404, decode fail, etc.)
    // so they don't spam the console / trigger Vite's error overlay.
    const onError = () => { /* no-op */ };
    audio.addEventListener('error', onError);

    const start = () => {
      if (startedRef.current) return;
      audio.play().then(() => { startedRef.current = true; }).catch(() => {});
    };

    // Try immediate autoplay (works if browser allows it)
    audio.play().then(() => {
      startedRef.current = true;
    }).catch(() => {
      // Autoplay blocked \u2014 wait for any user gesture
      document.addEventListener('click',      start, { once: true });
      document.addEventListener('touchstart', start, { once: true });
      document.addEventListener('keydown',    start, { once: true });
    });

    return () => {
      audio.pause();
      audio.removeEventListener('error', onError);
      audio.src = '';
      document.removeEventListener('click',      start);
      document.removeEventListener('touchstart', start);
      document.removeEventListener('keydown',    start);
    };
  }, [src]);
}
