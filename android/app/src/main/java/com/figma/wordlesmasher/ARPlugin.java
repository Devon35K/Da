package com.figma.wordlesmasher;

import android.Manifest;
import android.content.pm.PackageManager;
import android.opengl.GLSurfaceView;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.view.ViewGroup;

import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.google.ar.core.ArCoreApk;
import com.google.ar.core.HitResult;
import com.google.ar.core.Plane;
import com.google.ar.core.Session;
import com.google.ar.core.Config;
import com.google.ar.core.Frame;
import com.google.ar.core.Camera;
import com.google.ar.core.Point;
import com.google.ar.core.Pose;
import com.google.ar.core.TrackingState;

import java.util.ArrayList;
import java.util.List;

import javax.microedition.khronos.egl.EGLConfig;
import javax.microedition.khronos.opengles.GL10;

import com.figma.wordlesmasher.ar.CameraBackgroundRenderer;
import com.figma.wordlesmasher.ar.DisplayRotationHelper;

/**
 * Hybrid ARCore plugin for Android.
 *
 * Owns a GLSurfaceView that renders the ARCore camera feed (OES external texture)
 * behind the transparent Capacitor WebView. Emits per-frame "arFrame" events with
 * projection/view matrices, plane polygons, and light intensity. Also provides
 * hit-test for tap-to-place (not currently used but available for extensions).
 *
 * Permission handling is async via Capacitor's @Permission annotation.
 */
@CapacitorPlugin(
    name = "ARPlugin",
    permissions = { @Permission(alias = "camera", strings = { Manifest.permission.CAMERA }) }
)
public class ARPlugin extends Plugin implements GLSurfaceView.Renderer {
    private static final String TAG = "ARPlugin";

    private Session arSession;
    private GLSurfaceView glSurfaceView;
    private CameraBackgroundRenderer bgRenderer;
    private DisplayRotationHelper displayRotationHelper;
    private boolean sessionRunning = false;
    private boolean surfaceCreated = false;
    private int viewportWidth = 0;
    private int viewportHeight = 0;

    // Latest frame data (captured on GL thread, emitted to JS)
    private float[] projectionMatrix = new float[16];
    private float[] viewMatrix = new float[16];
    private float[] cameraPosition = new float[3]; // x, y, z
    private boolean cameraTracking = false;
    private float lightIntensity = 1.0f;
    private List<PlaneData> latestPlanes = new ArrayList<>();

    private static class PlaneData {
        int id;
        String orientation;
        float centerX, centerY, centerZ;
        float[] poseMatrix = new float[16]; // 4x4 transform
        float[] polygonXZ; // local plane polygon in XZ (flattened)
    }

    // ── Lifecycle: permission & AR support ─────────────────────────────────────

    @PluginMethod
    public void checkARSupport(PluginCall call) {
        JSObject result = new JSObject();
        try {
            ArCoreApk.Availability availability = ArCoreApk.getInstance().checkAvailability(getActivity());
            if (availability == ArCoreApk.Availability.SUPPORTED_INSTALLED) {
                result.put("supported", true);
                result.put("installed", true);
            } else if (availability == ArCoreApk.Availability.SUPPORTED_NOT_INSTALLED) {
                result.put("supported", true);
                result.put("installed", false);
            } else {
                result.put("supported", false);
                result.put("installed", false);
            }
            call.resolve(result);
        } catch (Exception e) {
            result.put("supported", false);
            result.put("installed", false);
            result.put("error", e.getMessage());
            call.resolve(result);
        }
    }

    @PluginMethod
    public void requestCameraPermission(PluginCall call) {
        // Use Capacitor's built-in permission handling via @Permission annotation
        // This method is now a passthrough to the framework's permission request
        requestPermissionForAlias("camera", call, "cameraPermissionCallback");
    }

    @PluginMethod
    public void checkCameraPermission(PluginCall call) {
        JSObject result = new JSObject();
        boolean granted = ContextCompat.checkSelfPermission(getActivity(), Manifest.permission.CAMERA)
                == PackageManager.PERMISSION_GRANTED;
        result.put("granted", granted);
        call.resolve(result);
    }

    // ── Session lifecycle ───────────────────────────────────────────────────────

    @PluginMethod
    public void startARSession(PluginCall call) {
        try {
            // Ensure ARCore is installed
            ArCoreApk.getInstance().requestInstall(getActivity(), true);

            // Create session if needed
            if (arSession == null) {
                arSession = new Session(getActivity());
            }

            // Configure: horizontal + vertical planes, depth if available, light estimation
            Config config = new Config(arSession);
            config.setPlaneFindingMode(Config.PlaneFindingMode.HORIZONTAL_AND_VERTICAL);
            if (arSession.isDepthModeSupported(Config.DepthMode.AUTOMATIC)) {
                config.setDepthMode(Config.DepthMode.AUTOMATIC);
            }
            config.setLightEstimationMode(Config.LightEstimationMode.ENVIRONMENTAL_HDR);
            arSession.configure(config);

            // Create GL helpers
            if (bgRenderer == null) {
                bgRenderer = new CameraBackgroundRenderer();
            }
            if (displayRotationHelper == null) {
                displayRotationHelper = new DisplayRotationHelper(getActivity());
            }

            // Create and attach GLSurfaceView behind the WebView
            if (glSurfaceView == null) {
                glSurfaceView = new GLSurfaceView(getActivity());
                glSurfaceView.setPreserveEGLContextOnPause(true);
                glSurfaceView.setEGLContextClientVersion(2);
                glSurfaceView.setEGLConfigChooser(8, 8, 8, 8, 16, 0);
                glSurfaceView.setRenderer(this);
                glSurfaceView.setRenderMode(GLSurfaceView.RENDERMODE_CONTINUOUSLY);
            }

            // Insert at index 0 of the root content view (behind WebView)
            ViewGroup root = (ViewGroup) getActivity().findViewById(android.R.id.content);
            if (glSurfaceView.getParent() == null) {
                root.addView(glSurfaceView, 0, new ViewGroup.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    ViewGroup.LayoutParams.MATCH_PARENT
                ));
            }

            // Resume session and rotation helper
            arSession.resume();
            displayRotationHelper.onResume();

            // Set camera texture name now that session is ready and GL context exists
            if (bgRenderer != null && surfaceCreated) {
                arSession.setCameraTextureName(bgRenderer.getTextureId());
            }

            sessionRunning = true;

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

    @PluginMethod
    public void stopARSession(PluginCall call) {
        try {
            sessionRunning = false;
            if (arSession != null) {
                arSession.pause();
            }
            if (displayRotationHelper != null) {
                displayRotationHelper.onPause();
            }
            if (glSurfaceView != null) {
                glSurfaceView.onPause();
                ViewGroup root = (ViewGroup) getActivity().findViewById(android.R.id.content);
                root.removeView(glSurfaceView);
                glSurfaceView = null;
            }
            surfaceCreated = false;

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

    // ── Hit test (for future tap-to-place features) ──────────────────────────────

    @PluginMethod
    public void hitTest(PluginCall call) {
        JSObject result = new JSObject();
        try {
            // JS sends normalized coordinates (0-1), convert to pixels
            float xNorm = call.getNumber("x", 0.5).floatValue();
            float yNorm = call.getNumber("y", 0.5).floatValue();
            // Clamp to valid range
            xNorm = Math.max(0f, Math.min(1f, xNorm));
            yNorm = Math.max(0f, Math.min(1f, yNorm));

            if (arSession == null || !sessionRunning || viewportWidth == 0 || viewportHeight == 0) {
                result.put("found", false);
                call.resolve(result);
                return;
            }

            // Convert to pixel coordinates
            float x = xNorm * viewportWidth;
            float y = yNorm * viewportHeight;

            Frame frame = arSession.update();
            List<HitResult> hits = frame.hitTest(x, y);

            if (!hits.isEmpty()) {
                HitResult hit = hits.get(0);
                Pose pose = hit.getHitPose();
                JSObject poseObj = new JSObject();
                poseObj.put("tx", pose.tx());
                poseObj.put("ty", pose.ty());
                poseObj.put("tz", pose.tz());
                poseObj.put("qx", pose.qx());
                poseObj.put("qy", pose.qy());
                poseObj.put("qz", pose.qz());
                poseObj.put("qw", pose.qw());
                result.put("found", true);
                result.put("pose", poseObj);
            } else {
                result.put("found", false);
            }
            call.resolve(result);
        } catch (Exception e) {
            Log.e(TAG, "Error hit testing", e);
            result.put("found", false);
            result.put("error", e.getMessage());
            call.resolve(result);
        }
    }

    // ── GLSurfaceView.Renderer callbacks (run on GL thread) ─────────────────────

    @Override
    public void onSurfaceCreated(GL10 gl, EGLConfig config) {
        bgRenderer.createOnGlThread();
        // Pass texture ID to ARCore (session might not be ready yet, will set in startARSession)
        surfaceCreated = true;
    }

    @Override
    public void onSurfaceChanged(GL10 gl, int width, int height) {
        viewportWidth = width;
        viewportHeight = height;
        displayRotationHelper.onSurfaceChanged(width, height);
    }

    @Override
    public void onDrawFrame(GL10 gl) {
        if (!sessionRunning || arSession == null) return;

        // Update display geometry if rotation/size changed
        displayRotationHelper.updateSessionIfNeeded(arSession);

        // Get latest frame
        Frame frame = arSession.update();

        // Render camera background
        bgRenderer.draw(frame);

        // Extract camera state
        Camera camera = frame.getCamera();
        cameraTracking = camera.getTrackingState() == TrackingState.TRACKING;

        // Extract projection and view matrices
        camera.getProjectionMatrix(projectionMatrix, 0, 0.1f, 100.0f);
        camera.getViewMatrix(viewMatrix, 0);

        // Camera position (inverse view matrix translation)
        // For simplicity, extract from camera.getPose()
        Pose camPose = camera.getPose();
        cameraPosition[0] = camPose.tx();
        cameraPosition[1] = camPose.ty();
        cameraPosition[2] = camPose.tz();

        // Light estimation
        lightIntensity = frame.getLightEstimate().getPixelIntensity();

        // Extract planes (include TRACKING and PAUSED)
        latestPlanes.clear();
        for (Plane plane : arSession.getAllTrackables(Plane.class)) {
            if (plane.getTrackingState() != TrackingState.TRACKING &&
                plane.getTrackingState() != TrackingState.PAUSED) {
                continue;
            }
            PlaneData pd = new PlaneData();
            pd.id = plane.hashCode();
            pd.orientation = plane.getType().name();
            Pose centerPose = plane.getCenterPose();
            pd.centerX = centerPose.tx();
            pd.centerY = centerPose.ty();
            pd.centerZ = centerPose.tz();
            centerPose.toMatrix(pd.poseMatrix, 0);

            // Polygon (local plane space, XZ only)
            com.google.ar.core.Point[] poly = plane.getPolygon();
            pd.polygonXZ = new float[poly.length * 2];
            for (int i = 0; i < poly.length; i++) {
                pd.polygonXZ[i * 2] = poly[i].x;
                pd.polygonXZ[i * 2 + 1] = poly[i].z;
            }
            latestPlanes.add(pd);
        }

        // Emit frame event to JS (Capacitor posts to UI thread automatically)
        emitFrameEvent();
    }

    // ── Event emission (called from GL thread) ─────────────────────────────────

    private void emitFrameEvent() {
        JSObject data = new JSObject();

        // Matrices as flat arrays
        JSArray projArr = new JSArray();
        for (float v : projectionMatrix) projArr.put(v);
        data.put("projectionMatrix", projArr);

        JSArray viewArr = new JSArray();
        for (float v : viewMatrix) viewArr.put(v);
        data.put("viewMatrix", viewArr);

        // Camera position
        JSArray camPosArr = new JSArray();
        camPosArr.put(cameraPosition[0]);
        camPosArr.put(cameraPosition[1]);
        camPosArr.put(cameraPosition[2]);
        data.put("cameraPosition", camPosArr);

        data.put("cameraTracking", cameraTracking);
        data.put("lightIntensity", lightIntensity);

        // Planes
        JSArray planesArr = new JSArray();
        for (PlaneData pd : latestPlanes) {
            JSObject planeObj = new JSObject();
            planeObj.put("id", pd.id);
            planeObj.put("orientation", pd.orientation);
            planeObj.put("centerX", pd.centerX);
            planeObj.put("centerY", pd.centerY);
            planeObj.put("centerZ", pd.centerZ);

            // Pose matrix
            JSArray poseArr = new JSArray();
            for (float v : pd.poseMatrix) poseArr.put(v);
            planeObj.put("poseMatrix", poseArr);

            // Polygon XZ
            JSArray polyArr = new JSArray();
            for (float v : pd.polygonXZ) polyArr.put(v);
            planeObj.put("polygonXZ", polyArr);

            planesArr.put(planeObj);
        }
        data.put("planes", planesArr);

        notifyListeners("arFrame", data);
    }

    // ── Activity lifecycle hooks ─────────────────────────────────────────────────

    @Override
    protected void handleOnResume() {
        super.handleOnResume();
        if (glSurfaceView != null) {
            glSurfaceView.onResume();
        }
        if (displayRotationHelper != null) {
            displayRotationHelper.onResume();
        }
        if (arSession != null && sessionRunning) {
            arSession.resume();
        }
    }

    @Override
    protected void handleOnPause() {
        super.handleOnPause();
        sessionRunning = false;
        if (arSession != null) {
            arSession.pause();
        }
        if (displayRotationHelper != null) {
            displayRotationHelper.onPause();
        }
        if (glSurfaceView != null) {
            glSurfaceView.onPause();
        }
    }

    // ── Permission callback ─────────────────────────────────────────────────────

    @PluginMethod
    public void cameraPermissionCallback(PluginCall call) {
        JSObject result = new JSObject();
        boolean granted = ContextCompat.checkSelfPermission(getActivity(), Manifest.permission.CAMERA)
                == PackageManager.PERMISSION_GRANTED;
        result.put("granted", granted);
        call.resolve(result);
    }
}
