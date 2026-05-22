import { registerPlugin } from '@capacitor/core';

export interface ARPluginPlugin {
  checkARSupport(): Promise<{ supported: boolean; installed: boolean; error?: string }>;
  requestCameraPermission(): Promise<{ granted: boolean }>;
  checkCameraPermission(): Promise<{ granted: boolean }>;
  startARSession(): Promise<{ started: boolean; error?: string }>;
  stopARSession(): Promise<{ stopped: boolean; error?: string }>;
  addListener(eventName: string, listenerFunc: any): Promise<void>;
  removeListener(eventName: string, listenerFunc: any): Promise<void>;
  removeAllListeners(): Promise<void>;
}

export interface ARFrameData {
  projectionMatrix: number[];
  viewMatrix: number[];
  cameraPosition: number[];
  cameraTracking: boolean;
  lightIntensity: number;
  planes: ARPlane[];
}

export interface ARPlane {
  id: number;
  orientation: string;
  centerX: number;
  centerY: number;
  centerZ: number;
  poseMatrix: number[];
  polygonXZ: number[];
}

const ARPlugin = registerPlugin<ARPluginPlugin>('ARPlugin');

export default ARPlugin;
