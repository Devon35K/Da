import { useRef, useState, useCallback, useEffect } from 'react';

export type ARStatus =
  | 'checking-support'
  | 'unsupported'
  | 'idle'
  | 'starting'
  | 'active'
  | 'plane-found'
  | 'error';

export interface DetectedPlane {
  id: string;
  orientation: 'horizontal' | 'vertical' | 'unknown';
  vertexCount: number;
}

export interface UseARPlaneDetectionResult {
  status: ARStatus;
  planes: DetectedPlane[];
  errorMsg: string;
  isSupported: boolean;
  startAR: (overlayEl?: HTMLElement) => Promise<void>;
  stopAR: () => void;
}

export function useARPlaneDetection(): UseARPlaneDetectionResult {
  const [status, setStatus] = useState<ARStatus>('checking-support');
  const [planes, setPlanes] = useState<DetectedPlane[]>([]);
  const [errorMsg, setErrorMsg] = useState('');

  const sessionRef = useRef<any>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // ── 1. Check WebXR AR support on mount ──────────────────────────────────
  useEffect(() => {
    const xr = (navigator as any).xr;
    if (!xr) {
      setStatus('unsupported');
      return;
    }
    xr.isSessionSupported('immersive-ar')
      .then((ok: boolean) => setStatus(ok ? 'idle' : 'unsupported'))
      .catch(() => setStatus('unsupported'));
  }, []);

  // ── 2. Stop session helper ───────────────────────────────────────────────
  const stopAR = useCallback(() => {
    if (sessionRef.current) {
      sessionRef.current.end().catch(() => {});
      sessionRef.current = null;
    }
    canvasRef.current?.remove();
    canvasRef.current = null;
    glRef.current = null;
  }, []);

  // ── 3. Start AR session with plane-detection ─────────────────────────────
  const startAR = useCallback(async (overlayEl?: HTMLElement) => {
    const xr = (navigator as any).xr;
    if (!xr) { setStatus('unsupported'); return; }

    setStatus('starting');
    setErrorMsg('');
    setPlanes([]);

    try {
      // Build session init — dom-overlay is optional so the page HTML can
      // appear on top of the camera feed.
      const sessionInit: Record<string, any> = {
        requiredFeatures: ['plane-detection'],
        optionalFeatures: ['hit-test', 'local-floor', 'dom-overlay'],
      };
      if (overlayEl) sessionInit.domOverlay = { root: overlayEl };

      const session: any = await xr.requestSession('immersive-ar', sessionInit);
      sessionRef.current = session;

      // ── WebGL context bound to the XR session ──
      const canvas = document.createElement('canvas');
      canvasRef.current = canvas;
      const gl = canvas.getContext('webgl', { xrCompatible: true }) as any;
      glRef.current = gl;
      await gl.makeXRCompatible();

      const baseLayer = new (window as any).XRWebGLLayer(session, gl);
      await session.updateRenderState({ baseLayer });

      // ── Reference space ──
      let refSpace: any = null;
      try {
        refSpace = await session.requestReferenceSpace('local-floor');
      } catch {
        refSpace = await session.requestReferenceSpace('local');
      }

      setStatus('active');

      // ── Per-frame render + plane detection loop ──
      const onFrame = (_time: number, frame: any) => {
        if (!sessionRef.current) return;

        // Clear the WebGL framebuffer so camera passthrough is visible
        const fb = session.renderState.baseLayer?.framebuffer ?? null;
        gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // Read detected planes from the XRFrame
        const rawPlanes: Set<any> = frame.detectedPlanes ?? new Set();

        if (rawPlanes.size > 0) {
          const mapped: DetectedPlane[] = [];
          rawPlanes.forEach((p: any) => {
            mapped.push({
              id: String(p),
              orientation: p.orientation ?? 'unknown',
              vertexCount: p.polygon?.length ?? 0,
            });
          });
          setPlanes(mapped);
          setStatus('plane-found');
        }

        sessionRef.current.requestAnimationFrame(onFrame);
      };

      session.requestAnimationFrame(onFrame);

      // Clean up when the session ends (user pressed browser back, etc.)
      session.addEventListener('end', () => {
        sessionRef.current = null;
        canvasRef.current?.remove();
        canvasRef.current = null;
        setStatus('idle');
        setPlanes([]);
      });

    } catch (err: any) {
      stopAR();
      setStatus('error');
      setErrorMsg(err?.message ?? 'Failed to start AR session');
    }
  }, [stopAR]);

  // Cleanup on unmount
  useEffect(() => () => stopAR(), [stopAR]);

  return {
    status,
    planes,
    errorMsg,
    isSupported: status !== 'unsupported' && status !== 'checking-support',
    startAR,
    stopAR,
  };
}
