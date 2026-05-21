package com.figma.wordlesmasher;

import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.google.ar.core.ArCoreApk;
import com.google.ar.core.Session;
import com.google.ar.core.Config;
import com.google.ar.core.Frame;
import com.google.ar.core.Plane;
import com.google.ar.core.Camera;

@CapacitorPlugin(name = "ARPlugin")
public class ARPlugin extends Plugin {
    private static final String TAG = "ARPlugin";
    private static final int CAMERA_PERMISSION_REQUEST_CODE = 200;
    
    private Session arSession = null;
    private boolean sessionRunning = false;
    private long lastFrameTime = 0;
    private Handler frameUpdateHandler;
    private Runnable frameUpdateRunnable;

    @PluginMethod
    public void checkARSupport(PluginCall call) {
        JSObject result = new JSObject();
        
        try {
            ArCoreApk.Availability availability = ArCoreApk.getInstance().checkAvailability(getActivity());
            
            if (availability == ArCoreApk.Availability.SUPPORTED_INSTALLED) {
                result.put("supported", true);
                result.put("installed", true);
                call.resolve(result);
            } else if (availability == ArCoreApk.Availability.SUPPORTED_NOT_INSTALLED) {
                result.put("supported", true);
                result.put("installed", false);
                call.resolve(result);
            } else {
                result.put("supported", false);
                result.put("installed", false);
                call.resolve(result);
            }
        } catch (Exception e) {
            result.put("supported", false);
            result.put("installed", false);
            result.put("error", e.getMessage());
            call.resolve(result);
        }
    }

    @PluginMethod
    public void requestCameraPermission(PluginCall call) {
        if (ContextCompat.checkSelfPermission(getActivity(), Manifest.permission.CAMERA)
                != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(
                getActivity(),
                new String[]{Manifest.permission.CAMERA},
                CAMERA_PERMISSION_REQUEST_CODE
            );
            call.resolve();
        } else {
            JSObject result = new JSObject();
            result.put("granted", true);
            call.resolve(result);
        }
    }

    @PluginMethod
    public void checkCameraPermission(PluginCall call) {
        JSObject result = new JSObject();
        boolean granted = ContextCompat.checkSelfPermission(getActivity(), Manifest.permission.CAMERA)
                == PackageManager.PERMISSION_GRANTED;
        result.put("granted", granted);
        call.resolve(result);
    }

    @PluginMethod
    public void startARSession(PluginCall call) {
        try {
            // Install ARCore if needed
            ArCoreApk.getInstance().requestInstall(getActivity(), true);
            
            if (arSession == null) {
                arSession = new Session(getActivity());
            }
            
            Config config = new Config(arSession);
            config.setPlaneFindingMode(Config.PlaneFindingMode.HORIZONTAL);
            config.setLightEstimationMode(Config.LightEstimationMode.ENVIRONMENTAL_HDR);
            arSession.configure(config);
            
            sessionRunning = true;
            arSession.resume();
            lastFrameTime = System.nanoTime();
            
            // Start continuous frame updates for plane detection
            startFrameUpdates();
            
            JSObject result = new JSObject();
            result.put("started", true);
            call.resolve(result);
        } catch (Exception e) {
            Log.e(TAG, "Error starting AR session", e);
            JSObject result = new JSObject();
            result.put("started", false);
            result.put("error", e.getMessage());
            call.resolve(result);
        }
    }
    
    private void startFrameUpdates() {
        frameUpdateHandler = new Handler(Looper.getMainLooper());
        frameUpdateRunnable = new Runnable() {
            @Override
            public void run() {
                if (sessionRunning && arSession != null) {
                    try {
                        arSession.update();
                        frameUpdateHandler.postDelayed(this, 33); // ~30fps
                    } catch (Exception e) {
                        Log.e(TAG, "Error updating frame", e);
                    }
                }
            }
        };
        frameUpdateHandler.post(frameUpdateRunnable);
    }
    
    private void stopFrameUpdates() {
        if (frameUpdateHandler != null && frameUpdateRunnable != null) {
            frameUpdateHandler.removeCallbacks(frameUpdateRunnable);
            frameUpdateHandler = null;
            frameUpdateRunnable = null;
        }
    }

    @PluginMethod
    public void stopARSession(PluginCall call) {
        try {
            stopFrameUpdates();
            
            if (arSession != null && sessionRunning) {
                arSession.pause();
                sessionRunning = false;
            }
            
            JSObject result = new JSObject();
            result.put("stopped", true);
            call.resolve(result);
        } catch (Exception e) {
            Log.e(TAG, "Error stopping AR session", e);
            JSObject result = new JSObject();
            result.put("stopped", false);
            result.put("error", e.getMessage());
            call.resolve(result);
        }
    }

    @PluginMethod
    public void getDetectedPlanes(PluginCall call) {
        JSObject result = new JSObject();
        JSArray planesArray = new JSArray();
        
        try {
            if (arSession == null || !sessionRunning) {
                result.put("planes", planesArray);
                result.put("cameraTracking", false);
                call.resolve(result);
                return;
            }
            
            // Get latest frame
            Frame frame = arSession.update();
            
            // Check if camera is tracking
            Camera camera = frame.getCamera();
            boolean isTracking = camera.getTrackingState() == com.google.ar.core.TrackingState.TRACKING;
            
            result.put("cameraTracking", isTracking);
            
            // Get all tracked planes (even if camera not fully tracking yet)
            Iterable<com.google.ar.core.Plane> planes = arSession.getAllTrackables(com.google.ar.core.Plane.class);
            
            int planeCount = 0;
            for (com.google.ar.core.Plane plane : planes) {
                // Include both TRACKING and PAUSED planes
                if (plane.getTrackingState() == com.google.ar.core.TrackingState.TRACKING ||
                    plane.getTrackingState() == com.google.ar.core.TrackingState.PAUSED) {
                    JSObject planeObj = new JSObject();
                    planeObj.put("id", plane.hashCode());
                    planeObj.put("orientation", plane.getType().name());
                    planeObj.put("centerX", plane.getCenterPose().tx());
                    planeObj.put("centerY", plane.getCenterPose().ty());
                    planeObj.put("centerZ", plane.getCenterPose().tz());
                    planesArray.put(planeObj);
                    planeCount++;
                }
            }
            
            Log.d(TAG, "Found " + planeCount + " planes (tracking: " + isTracking + ")");
            result.put("planes", planesArray);
            call.resolve(result);
        } catch (Exception e) {
            Log.e(TAG, "Error getting planes", e);
            result.put("planes", planesArray);
            result.put("error", e.getMessage());
            call.resolve(result);
        }
    }
}
