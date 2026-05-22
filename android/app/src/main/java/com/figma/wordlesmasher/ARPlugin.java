package com.figma.wordlesmasher;

import android.Manifest;
import android.content.pm.PackageManager;
import android.opengl.GLSurfaceView;
import android.opengl.GLES20;
import android.util.Log;
import android.view.ViewGroup;

import androidx.core.content.ContextCompat;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.google.ar.core.ArCoreApk;
import com.google.ar.core.HitResult;
import com.google.ar.core.Plane;
import com.google.ar.core.Session;
import com.google.ar.core.Config;
import com.google.ar.core.Frame;
import com.google.ar.core.Camera;
import com.google.ar.core.Pose;
import com.google.ar.core.TrackingState;

import com.figma.wordlesmasher.ar.CameraBackgroundRenderer;
import com.figma.wordlesmasher.ar.DisplayRotationHelper;

import org.json.JSONException;

import javax.microedition.khronos.egl.EGLConfig;
import javax.microedition.khronos.opengles.GL10;
import java.nio.FloatBuffer;

@CapacitorPlugin(name = "ARPlugin")
public class ARPlugin extends Plugin implements GLSurfaceView.Renderer {
    private static final String TAG = "ARPlugin";

    private Session arSession;
    private CameraBackgroundRenderer bgRenderer;
    private DisplayRotationHelper displayRotationHelper;
    private GLSurfaceView glSurfaceView;

    private boolean sessionRunning = false;
    private boolean surfaceCreated = false;

    private float[] projectionMatrix = new float[16];
    private float[] viewMatrix = new float[16];
    private float[] cameraPosition = new float[3];
    private boolean cameraTracking = false;
    private float lightIntensity = 1.0f;

    private static class PlaneData {
        int id;
        String orientation;
        float centerX, centerY, centerZ;
        float[] poseMatrix = new float[16];
        float[] polygonXZ;
    }

    public ARPlugin() {
        Log.d(TAG, "ARPlugin constructor called");
    }

    @PluginMethod
    public void checkARSupport(PluginCall call) {
        try {
            boolean available = ArCoreApk.getInstance().checkAvailability(getActivity()) == ArCoreApk.Availability.SUPPORTED_INSTALLED;
            JSObject result = new JSObject();
            result.put("supported", available);
            result.put("installed", available);
            call.resolve(result);
        } catch (Exception e) {
            JSObject result = new JSObject();
            result.put("supported", false);
            result.put("installed", false);
            result.put("error", e.getMessage());
            call.resolve(result);
        }
    }

    @PluginMethod
    public void requestCameraPermission(PluginCall call) {
        if (ContextCompat.checkSelfPermission(getActivity(), Manifest.permission.CAMERA) == PackageManager.PERMISSION_GRANTED) {
            JSObject result = new JSObject();
            result.put("granted", true);
            call.resolve(result);
        } else {
            JSObject result = new JSObject();
            result.put("granted", false);
            call.resolve(result);
        }
    }

    @PluginMethod
    public void checkCameraPermission(PluginCall call) {
        boolean granted = ContextCompat.checkSelfPermission(getActivity(), Manifest.permission.CAMERA) == PackageManager.PERMISSION_GRANTED;
        JSObject result = new JSObject();
        result.put("granted", granted);
        call.resolve(result);
    }

    @PluginMethod
    public void startARSession(PluginCall call) {
        // Camera is now rendered in WebView via getUserMedia. ARCore would fight
        // for exclusive camera access, so we skip native AR entirely and rely on
        // the JS virtual-surface fallback for spatial tracking.
        sessionRunning = true;
        JSObject result = new JSObject();
        result.put("started", true);
        call.resolve(result);
    }

    @PluginMethod
    public void stopARSession(PluginCall call) {
        try {
            sessionRunning = false;
            if (arSession != null) {
                arSession.pause();
            }
            if (glSurfaceView != null) {
                glSurfaceView.onPause();
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

    @Override
    public void onSurfaceCreated(GL10 gl, EGLConfig config) {
        bgRenderer.createOnGlThread();
        surfaceCreated = true;
        if (arSession != null && sessionRunning) {
            arSession.setCameraTextureName(bgRenderer.getTextureId());
        }
    }

    @Override
    public void onSurfaceChanged(GL10 gl, int width, int height) {
        displayRotationHelper.onSurfaceChanged(width, height);
    }

    @Override
    public void onDrawFrame(GL10 gl) {
        if (!sessionRunning || arSession == null) return;

        try {
            displayRotationHelper.updateSessionIfNeeded(arSession);
            Frame frame = arSession.update();
            bgRenderer.draw(frame);

            Camera camera = frame.getCamera();
            cameraTracking = camera.getTrackingState() == TrackingState.TRACKING;

            camera.getProjectionMatrix(projectionMatrix, 0, 0.1f, 100.0f);
            camera.getViewMatrix(viewMatrix, 0);

            Pose camPose = camera.getPose();
            cameraPosition[0] = camPose.tx();
            cameraPosition[1] = camPose.ty();
            cameraPosition[2] = camPose.tz();

            lightIntensity = frame.getLightEstimate().getPixelIntensity();

            emitFrameEvent();
        } catch (Exception e) {
            Log.e(TAG, "Error in onDrawFrame", e);
        }
    }

    private void emitFrameEvent() {
        try {
            JSObject data = new JSObject();
            JSArray projArr = new JSArray();
            for (float v : projectionMatrix) projArr.put(v);
            data.put("projectionMatrix", projArr);

            JSArray viewArr = new JSArray();
            for (float v : viewMatrix) viewArr.put(v);
            data.put("viewMatrix", viewArr);

            JSArray camPosArr = new JSArray();
            for (float v : cameraPosition) camPosArr.put(v);
            data.put("cameraPosition", camPosArr);

            data.put("cameraTracking", cameraTracking);
            data.put("lightIntensity", lightIntensity);

            JSArray planesArr = new JSArray();
            data.put("planes", planesArr);

            notifyListeners("arFrame", data);
        } catch (JSONException e) {
            Log.e(TAG, "Error emitting frame event", e);
        }
    }

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
            try {
                arSession.resume();
            } catch (Exception e) {
                Log.e(TAG, "Error resuming AR session", e);
            }
        }
    }

    @Override
    protected void handleOnPause() {
        super.handleOnPause();
        sessionRunning = false;
        if (arSession != null) {
            arSession.pause();
        }
        if (glSurfaceView != null) {
            glSurfaceView.onPause();
        }
        if (displayRotationHelper != null) {
            displayRotationHelper.onPause();
        }
    }
}
