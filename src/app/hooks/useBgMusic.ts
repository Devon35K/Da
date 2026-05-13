import { useEffect, useRef } from 'react';

export function useBgMusic(src: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      audio.play().catch(() => {});
    };

    audio.play().then(() => {
      startedRef.current = true;
    }).catch(() => {
      document.addEventListener('click', start, { once: true });
      document.addEventListener('touchstart', start, { once: true });
      document.addEventListener('keydown', start, { once: true });
    });

    return () => {
      audio.pause();
      audio.src = '';
      document.removeEventListener('click', start);
      document.removeEventListener('touchstart', start);
      document.removeEventListener('keydown', start);
    };
  }, [src]);
}
