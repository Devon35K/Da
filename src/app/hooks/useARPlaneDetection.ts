import { useState, useCallback, useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import ARPlugin from '../../plugins/ar-plugin';

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
  const [status, setStatus] = useState<ARStatus>('idle');
  const [planes, setPlanes] = useState<DetectedPlane[]>([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSupported, setIsSupported] = useState(false);
  const [pollInterval, setPollInterval] = useState<NodeJS.Timeout | null>(null);

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
    if (pollInterval) {
      clearInterval(pollInterval);
      setPollInterval(null);
    }
    
    if (isNative && isAndroid) {
      ARPlugin.stopARSession().catch(console.error);
    }
    
    setStatus('idle');
    setPlanes([]);
    setErrorMsg('');
  }, [pollInterval, isNative, isAndroid]);

  // ── Poll for planes on Android ──────────────────────────────────────────
  const startPlanePolling = useCallback(() => {
    const interval = setInterval(async () => {
      try {
        const result = await ARPlugin.getDetectedPlanes();
        if (result.planes && result.planes.length > 0) {
          const detectedPlanes: DetectedPlane[] = result.planes.map((p: any) => ({
            id: String(p.id),
            orientation: p.orientation || 'unknown',
            centerX: p.centerX || 0,
            centerY: p.centerY || 0,
            centerZ: p.centerZ || 0,
          }));
          setPlanes(detectedPlanes);
          setStatus('plane-found');
        } else {
          setPlanes([]);
          setStatus('active');
        }
      } catch (err) {
        console.error('Error polling planes:', err);
      }
    }, 500); // Poll every 500ms
    setPollInterval(interval);
  }, []);

  // ── Start AR session ────────────────────────────────────────────────────
  const startAR = useCallback(async (overlayEl?: HTMLElement) => {
    setStatus('starting');
    setErrorMsg('');
    setPlanes([]);

    if (isNative && isAndroid) {
      try {
        // Request camera permission first
        await ARPlugin.requestCameraPermission();
        
        // Start AR session
        const sessionResult = await ARPlugin.startARSession();
        if (!sessionResult.started) {
          throw new Error(sessionResult.error || 'Failed to start AR session');
        }
        
        setStatus('active');
        startPlanePolling();
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
          }
        ]);
        setStatus('plane-found');
      }, 500);
    }
  }, [isNative, isAndroid, startPlanePolling]);

  return {
    status,
    planes,
    errorMsg,
    isSupported,
    startAR,
    stopAR,
  };
}
