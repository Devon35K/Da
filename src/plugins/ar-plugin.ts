import { registerPlugin } from '@capacitor/core';

export interface ARPluginPlugin {
  checkARSupport(): Promise<{ supported: boolean; installed: boolean; error?: string }>;
  requestCameraPermission(): Promise<void>;
  checkCameraPermission(): Promise<{ granted: boolean }>;
  startARSession(): Promise<{ started: boolean; error?: string }>;
  stopARSession(): Promise<{ stopped: boolean; error?: string }>;
  getDetectedPlanes(): Promise<{ planes: Array<{ id: number; orientation: string; centerX: number; centerY: number; centerZ: number }>; cameraTracking?: boolean; error?: string }>;
}

const ARPlugin = registerPlugin<ARPluginPlugin>('ARPlugin');

export default ARPlugin;
