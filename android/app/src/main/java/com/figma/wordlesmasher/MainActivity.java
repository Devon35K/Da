package com.figma.wordlesmasher;

import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.graphics.Color;
import android.graphics.PixelFormat;
import android.view.View;
import android.view.Window;
import android.webkit.PermissionRequest;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.google.ar.core.ArCoreApk;

public class MainActivity extends BridgeActivity {
    private static final int CAMERA_PERMISSION_REQUEST_CODE = 100;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        // Register our custom ARPlugin BEFORE super.onCreate so Capacitor can find it
        registerPlugin(ARPlugin.class);
        // Make window transparent BEFORE super.onCreate so the GLSurfaceView camera shows through
        getWindow().setFormat(PixelFormat.TRANSLUCENT);
        super.onCreate(savedInstanceState);
        requestCameraPermission();

        // Configure WebView for WebXR support and transparency for ARCore camera
        try {
            WebView webView = this.getBridge().getWebView();
            if (webView != null) {
                webView.getSettings().setDomStorageEnabled(true);
                webView.getSettings().setJavaScriptEnabled(true);
                webView.getSettings().setMediaPlaybackRequiresUserGesture(false);
                webView.setWebChromeClient(new WebChromeClient() {
                    @Override
                    public void onPermissionRequest(final PermissionRequest request) {
                        // Auto-grant camera/microphone permission requests from getUserMedia in WebView
                        runOnUiThread(() -> request.grant(request.getResources()));
                    }
                });

                // Make WebView transparent so ARCore camera feed shows through
                webView.setBackgroundColor(Color.TRANSPARENT);
                webView.setLayerType(View.LAYER_TYPE_HARDWARE, null);
            }
        } catch (Exception e) {
            // WebView configuration failed
        }
    }

    @Override
    public void onResume() {
        super.onResume();
        // ARCore Session needs to be resumed here
        try {
            ArCoreApk.getInstance().requestInstall(this, true);
        } catch (Exception e) {
            // ARCore not available
        }
    }

    @Override
    public void onPause() {
        super.onPause();
        // ARCore Session should be paused here
    }

    private void requestCameraPermission() {
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA)
                != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this,
                    new String[]{Manifest.permission.CAMERA},
                    CAMERA_PERMISSION_REQUEST_CODE);
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == CAMERA_PERMISSION_REQUEST_CODE) {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                // Permission granted
            }
        }
    }
}
