import { useState, useCallback, useEffect } from 'react';

// AR functionality is now handled by WebXR directly in useARGame hook
// This hook provides a simplified interface for AR plane detection status

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
  poseMatrix: number[];
  polygonXZ: number[];
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
  const [isSupported, setIsSupported] = useState(true); // WebXR is supported in modern browsers

  // Check WebXR support
  useEffect(() => {
    if ('xr' in navigator && (navigator as any).xr?.isSessionSupported) {
      (navigator as any).xr.isSessionSupported('immersive-ar').then((supported: boolean) => {
        setIsSupported(supported);
        if (!supported) {
          setErrorMsg('WebXR not supported on this device');
        }
      }).catch(() => {
        setIsSupported(false);
        setErrorMsg('WebXR not available');
      });
    }
  }, []);

  // Stop AR session
  const stopAR = useCallback(() => {
    setStatus('idle');
    setPlanes([]);
    setErrorMsg('');
  }, []);

  // Start AR session (WebXR is handled by useARGame hook)
  const startAR = useCallback(async (overlayEl?: HTMLElement) => {
    setStatus('starting');
    setErrorMsg('');
    setPlanes([]);

    if (!isSupported) {
      setStatus('error');
      setErrorMsg('WebXR not supported');
      return;
    }

    // WebXR session is handled by useARGame hook
    // This hook just provides status for UI feedback
    setStatus('active');

    // Simulate plane detection for UI feedback
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
  }, [isSupported]);

  return {
    status,
    planes,
    errorMsg,
    isSupported,
    startAR,
    stopAR,
  };
}
