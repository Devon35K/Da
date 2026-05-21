import { registerPlugin } from '@capacitor/core';

export interface ARPluginPlugin {
  checkARSupport(): Promise<{ supported: boolean; installed: boolean; error?: string }>;
  requestCameraPermission(): Promise<{ granted: boolean }>;
  checkCameraPermission(): Promise<{ granted: boolean }>;
  startARSession(): Promise<{ started: boolean; error?: string }>;
  stopARSession(): Promise<{ stopped: boolean; error?: string }>;
  hitTest(x: number, y: number): Promise<{ found: boolean; pose?: { tx: number; ty: number; tz: number; qx: number; qy: number; qz: number; qw: number }; error?: string }>;
  addListener(eventName: 'arFrame', listenerFunc: (data: ARFrameData) => void): Promise<void>;
  removeListener(eventName: 'arFrame', listenerFunc: (data: ARFrameData) => void): Promise<void>;
  removeAllListeners(): Promise<void>;
}

export interface ARFrameData {
  projectionMatrix: number[];        // 16 floats, column-major
  viewMatrix: number[];             // 16 floats, column-major
  cameraPosition: number[];         // 3 floats [x, y, z]
  cameraTracking: boolean;
  lightIntensity: number;
  planes: ARPlane[];
}

export interface ARPlane {
  id: number;
  orientation: string;              // 'HORIZONTAL_UPWARD_FACING', 'VERTICAL', etc.
  centerX: number;
  centerY: number;
  centerZ: number;
  poseMatrix: number[];             // 16 floats, column-major transform
  polygonXZ: number[];              // flat array [x0, z0, x1, z1, ...] in plane-local space
}

const ARPlugin = registerPlugin<ARPluginPlugin>('ARPlugin');

export default ARPlugin;
