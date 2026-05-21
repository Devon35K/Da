import { useState, useCallback, useEffect, useRef } from 'react';
import { Capacitor } from '@capacitor/core';
import ARPlugin, { ARFrameData, ARPlane } from '../../plugins/ar-plugin';

export type ARStatus =
  | 'idle'
  | 'starting'
  | 'active'
  | 'plane-found'
  | 'error';

export interface DetectedPlane {
  id: string;
  orientation: 'horizontal' | 'vertical' | 'unknown';
  centerX: number;
  centerY: number;
  centerZ: number;
  poseMatrix: number[];           // 4x4 transform from plane-local to world
  polygonXZ: number[];            // [x0, z0, x1, z1, ...] in plane-local space
}

export interface UseARPlaneDetectionResult {
  status: ARStatus;
  planes: DetectedPlane[];
  errorMsg: string;
  isSupported: boolean;
  latestFrame: ARFrameData | null; // Exposed for useARGame to consume matrices
  startAR: (overlayEl?: HTMLElement) => Promise<void>;
  stopAR: () => void;
}

export function useARPlaneDetection(): UseARPlaneDetectionResult {
  const [status, setStatus] = useState<ARStatus>('idle');
  const [planes, setPlanes] = useState<DetectedPlane[]>([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSupported, setIsSupported] = useState(false);
  const [latestFrame, setLatestFrame] = useState<ARFrameData | null>(null);

  const frameListenerRef = useRef<((data: ARFrameData) => void) | null>(null);

  const isNative = Capacitor.isNativePlatform();
  const isAndroid = Capacitor.getPlatform() === 'android';

  // ── Check AR support on native ───────────────────────────────────────────
  useEffect(() => {
    if (isNative && isAndroid) {
      ARPlugin.checkARSupport().then(result => {
        setIsSupported(result.supported);
        if (!result.supported) {
          setErrorMsg('ARCore not supported or not installed');
        }
      }).catch(err => {
        setErrorMsg(err.message || 'Failed to check AR support');
      });
    } else {
      setIsSupported(true); // WebXR support checked elsewhere
    }
  }, [isNative, isAndroid]);

  // ── Stop session helper ───────────────────────────────────────────────
  const stopAR = useCallback(() => {
    if (frameListenerRef.current) {
      ARPlugin.removeListener('arFrame', frameListenerRef.current).catch(console.error);
      frameListenerRef.current = null;
    }

    if (isNative && isAndroid) {
      ARPlugin.stopARSession().catch(console.error);
    }

    setStatus('idle');
    setPlanes([]);
    setErrorMsg('');
    setLatestFrame(null);
  }, [isNative, isAndroid]);

  // ── Start AR session ────────────────────────────────────────────────────
  const startAR = useCallback(async (overlayEl?: HTMLElement) => {
    setStatus('starting');
    setErrorMsg('');
    setPlanes([]);
    setLatestFrame(null);

    if (isNative && isAndroid) {
      try {
        // Request camera permission first
        const permResult = await ARPlugin.requestCameraPermission();
        if (!permResult.granted) {
          throw new Error('Camera permission denied');
        }

        // Start AR session (this creates the GLSurfaceView and starts rendering)
        const sessionResult = await ARPlugin.startARSession();
        if (!sessionResult.started) {
          throw new Error(sessionResult.error || 'Failed to start AR session');
        }

        setStatus('active');

        // Listen to arFrame events
        frameListenerRef.current = (data: ARFrameData) => {
          setLatestFrame(data);

          // Convert ARPlane[] to DetectedPlane[]
          if (data.planes && data.planes.length > 0) {
            const detectedPlanes: DetectedPlane[] = data.planes.map((p: ARPlane) => ({
              id: String(p.id),
              orientation: p.orientation.toLowerCase().includes('horizontal')
                ? 'horizontal'
                : p.orientation.toLowerCase().includes('vertical')
                ? 'vertical'
                : 'unknown',
              centerX: p.centerX,
              centerY: p.centerY,
              centerZ: p.centerZ,
              poseMatrix: p.poseMatrix,
              polygonXZ: p.polygonXZ,
            }));
            setPlanes(detectedPlanes);
            setStatus('plane-found');
          } else {
            setPlanes([]);
            setStatus('active');
          }
        };

        await ARPlugin.addListener('arFrame', frameListenerRef.current);
      } catch (err: any) {
        setErrorMsg(err.message || 'Failed to start AR');
        setStatus('error');
      }
    } else {
      // Web: Use virtual plane fallback (WebXR handled in useARGame)
      setStatus('active');
      setErrorMsg('Virtual plane mode active');

      setTimeout(() => {
        setPlanes([
          {
            id: 'virtual-plane-1',
            orientation: 'horizontal',
            centerX: 0,
            centerY: 0,
            centerZ: -1.5,
            poseMatrix: [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,-1.5,1],
            polygonXZ: [-1, -1, 1, -1, 1, 1, -1, 1],
          }
        ]);
        setStatus('plane-found');
      }, 500);
    }
  }, [isNative, isAndroid]);

  return {
    status,
    planes,
    errorMsg,
    isSupported,
    latestFrame,
    startAR,
    stopAR,
  };
}
