package com.figma.wordlesmasher.ar;

import android.content.Context;
import android.hardware.display.DisplayManager;
import android.view.Display;
import android.view.WindowManager;

import com.google.ar.core.Session;

/**
 * Tracks the current display rotation and surface size and pushes them into
 * the ARCore Session via {@code Session.setDisplayGeometry(...)} when needed.
 *
 * Lifecycle:
 *   - {@link #onResume()} / {@link #onPause()} register/unregister a
 *     DisplayListener for orientation changes.
 *   - {@link #onSurfaceChanged(int, int)} from the GLSurfaceView callback.
 *   - {@link #updateSessionIfNeeded(Session)} on the GL thread before each
 *     {@code session.update()}.
 */
public class DisplayRotationHelper implements DisplayManager.DisplayListener {
    private boolean viewportChanged;
    private int viewportWidth;
    private int viewportHeight;
    private final Context context;
    private final Display display;

    public DisplayRotationHelper(Context context) {
        this.context = context;
        WindowManager wm = (WindowManager) context.getSystemService(Context.WINDOW_SERVICE);
        this.display = wm.getDefaultDisplay();
    }

    public void onResume() {
        DisplayManager dm = (DisplayManager) context.getSystemService(Context.DISPLAY_SERVICE);
        dm.registerDisplayListener(this, null);
    }

    public void onPause() {
        DisplayManager dm = (DisplayManager) context.getSystemService(Context.DISPLAY_SERVICE);
        dm.unregisterDisplayListener(this);
    }

    public void onSurfaceChanged(int width, int height) {
        viewportWidth = width;
        viewportHeight = height;
        viewportChanged = true;
    }

    public void updateSessionIfNeeded(Session session) {
        if (viewportChanged) {
            session.setDisplayGeometry(display.getRotation(), viewportWidth, viewportHeight);
            viewportChanged = false;
        }
    }

    public int getRotation() { return display.getRotation(); }

    @Override public void onDisplayAdded(int displayId) {}
    @Override public void onDisplayRemoved(int displayId) {}
    @Override public void onDisplayChanged(int displayId) { viewportChanged = true; }
}
