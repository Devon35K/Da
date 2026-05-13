import { useRef, useState, useCallback, useEffect } from 'react';
import { HandLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';

// ── MediaPipe assets (downloaded once, ~10 MB) ──────────────────────────────
const WASM_CDN  = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm';
const MODEL_URL = 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task';

export interface HandLandmark { x: number; y: number; z: number; }

export interface UseHandDetectionResult {
  ready:         boolean;
  loading:       boolean;
  handCount:     number;
  error:         string;
  landmarksRef:  React.MutableRefObject<HandLandmark[][]>;  // live, mutated every frame
  start:         () => Promise<void>;
  stop:          () => void;
}

// Detection runs at ~20 FPS (every 50 ms) — MediaPipe on mobile GPU is fast
const DETECT_INTERVAL_MS = 50;

export function useHandDetection(): UseHandDetectionResult {
  const [ready,     setReady]     = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [handCount, setHandCount] = useState(0);
  const [error,     setError]     = useState('');

  const landmarksRef   = useRef<HandLandmark[][]>([]);
  const landmarkerRef  = useRef<HandLandmarker | null>(null);
  const videoRef       = useRef<HTMLVideoElement | null>(null);
  const streamRef      = useRef<MediaStream | null>(null);
  const activeRef      = useRef(false);
  const lastDetectRef  = useRef(0);

  const loop = useCallback(() => {
    if (!activeRef.current) return;

    const lm    = landmarkerRef.current;
    const video = videoRef.current;
    const now   = performance.now();

    if (lm && video && video.readyState >= 2 && (now - lastDetectRef.current) >= DETECT_INTERVAL_MS) {
      lastDetectRef.current = now;
      try {
        const results = lm.detectForVideo(video, now);
        // Front camera gives mirrored X — flip so "right side of screen" matches user's right hand
        landmarksRef.current = results.landmarks.map(hand =>
          hand.map(p => ({ x: 1 - p.x, y: p.y, z: p.z }))
        );
        setHandCount(results.landmarks.length);
      } catch {
        // swallow transient errors (e.g. video frame not ready)
      }
    }
    requestAnimationFrame(loop);
  }, []);

  const start = useCallback(async () => {
    if (activeRef.current) return;
    setLoading(true);
    setError('');

    try {
      // 1. Initialise MediaPipe HandLandmarker
      const vision = await FilesetResolver.forVisionTasks(WASM_CDN);
      const landmarker = await HandLandmarker.createFromOptions(vision, {
        baseOptions: { modelAssetPath: MODEL_URL, delegate: 'GPU' },
        runningMode: 'VIDEO',
        numHands:    2,
      });
      landmarkerRef.current = landmarker;

      // 2. Grab the FRONT camera (back camera is owned by WebXR)
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: 640, height: 480 },
        audio: false,
      });
      streamRef.current = stream;

      // 3. Invisible <video> element to drive MediaPipe
      const video = document.createElement('video');
      video.srcObject   = stream;
      video.playsInline = true;
      video.autoplay    = true;
      video.muted       = true;
      video.style.cssText = 'position:fixed;width:1px;height:1px;top:-2px;left:-2px;opacity:0;pointer-events:none;z-index:-1;';
      document.body.appendChild(video);
      videoRef.current = video;

      await new Promise<void>((resolve) => {
        video.onloadedmetadata = () => { video.play().catch(() => {}); resolve(); };
      });

      activeRef.current = true;
      setReady(true);
      requestAnimationFrame(loop);
    } catch (err: any) {
      setError(err?.message ?? 'Hand detection init failed');
      // Cleanup whatever was created
      streamRef.current?.getTracks().forEach(t => t.stop());
      videoRef.current?.remove();
      landmarkerRef.current?.close();
      streamRef.current    = null;
      videoRef.current     = null;
      landmarkerRef.current = null;
    } finally {
      setLoading(false);
    }
  }, [loop]);

  const stop = useCallback(() => {
    activeRef.current = false;
    streamRef.current?.getTracks().forEach(t => t.stop());
    streamRef.current = null;
    videoRef.current?.remove();
    videoRef.current = null;
    landmarkerRef.current?.close();
    landmarkerRef.current = null;
    landmarksRef.current = [];
    setHandCount(0);
    setReady(false);
  }, []);

  useEffect(() => () => stop(), [stop]);

  return { ready, loading, handCount, error, landmarksRef, start, stop };
}
