/// <reference types="vite/client" />

declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.jpeg' {
  const src: string;
  export default src;
}
declare module '*.svg' {
  const src: string;
  export default src;
}
declare module '*.webp' {
  const src: string;
  export default src;
}
declare module '*.mp3' {
  const src: string;
  export default src;
}

declare module 'canvas-confetti' {
  interface ConfettiOptions {
    particleCount?: number;
    angle?:         number;
    spread?:        number;
    startVelocity?: number;
    decay?:         number;
    gravity?:       number;
    drift?:         number;
    ticks?:         number;
    origin?:        { x?: number; y?: number };
    colors?:        string[];
    shapes?:        string[];
    scalar?:        number;
    zIndex?:        number;
    disableForReducedMotion?: boolean;
  }
  const confetti: (opts?: ConfettiOptions) => Promise<null> | null;
  export default confetti;
}
