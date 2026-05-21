package com.figma.wordlesmasher.ar;

import android.opengl.GLES11Ext;
import android.opengl.GLES20;
import android.util.Log;

import com.google.ar.core.Coordinates2d;
import com.google.ar.core.Frame;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.FloatBuffer;

/**
 * Draws the ARCore camera feed onto a full-screen quad using an OES external
 * texture. GLES 2.0 only — no third-party GL helpers, just hand-written
 * vertex/fragment shaders + a 4-vertex strip.
 *
 * Lifecycle:
 *   1. On the GL thread: call {@link #createOnGlThread()} once.
 *   2. {@link #getTextureId()} must be passed to {@code Session.setCameraTextureName(...)}
 *      so ARCore renders camera frames into our texture.
 *   3. Every frame, on the GL thread, after {@code session.update()}, call
 *      {@link #draw(Frame)}.
 */
public class CameraBackgroundRenderer {
    private static final String TAG = "CameraBgRenderer";

    private static final String VERT_SRC =
            "attribute vec4 a_Position;\n" +
            "attribute vec2 a_TexCoord;\n" +
            "varying vec2 v_TexCoord;\n" +
            "void main() {\n" +
            "  gl_Position = a_Position;\n" +
            "  v_TexCoord = a_TexCoord;\n" +
            "}\n";

    private static final String FRAG_SRC =
            "#extension GL_OES_EGL_image_external : require\n" +
            "precision mediump float;\n" +
            "uniform samplerExternalOES u_Texture;\n" +
            "varying vec2 v_TexCoord;\n" +
            "void main() {\n" +
            "  gl_FragColor = texture2D(u_Texture, v_TexCoord);\n" +
            "}\n";

    // Full-screen triangle strip in clip space (-1..1)
    private static final float[] QUAD_NDC = {
            -1f, -1f,
             1f, -1f,
            -1f,  1f,
             1f,  1f,
    };

    private int textureId = -1;
    private int program;
    private int aPosition;
    private int aTexCoord;
    private int uTexture;
    private FloatBuffer ndcBuffer;
    private FloatBuffer texBuffer;
    private FloatBuffer ndcSrc;     // reused source buffer for transformCoordinates2d

    /** OES_external texture id; pass to {@code Session.setCameraTextureName}. */
    public int getTextureId() {
        return textureId;
    }

    public void createOnGlThread() {
        // External OES texture for the camera feed
        int[] textures = new int[1];
        GLES20.glGenTextures(1, textures, 0);
        textureId = textures[0];
        int target = GLES11Ext.GL_TEXTURE_EXTERNAL_OES;
        GLES20.glBindTexture(target, textureId);
        GLES20.glTexParameteri(target, GLES20.GL_TEXTURE_WRAP_S,    GLES20.GL_CLAMP_TO_EDGE);
        GLES20.glTexParameteri(target, GLES20.GL_TEXTURE_WRAP_T,    GLES20.GL_CLAMP_TO_EDGE);
        GLES20.glTexParameteri(target, GLES20.GL_TEXTURE_MIN_FILTER, GLES20.GL_LINEAR);
        GLES20.glTexParameteri(target, GLES20.GL_TEXTURE_MAG_FILTER, GLES20.GL_LINEAR);

        // Shaders + program
        int vs = compileShader(GLES20.GL_VERTEX_SHADER,   VERT_SRC);
        int fs = compileShader(GLES20.GL_FRAGMENT_SHADER, FRAG_SRC);
        program = GLES20.glCreateProgram();
        GLES20.glAttachShader(program, vs);
        GLES20.glAttachShader(program, fs);
        GLES20.glLinkProgram(program);
        int[] linkStatus = new int[1];
        GLES20.glGetProgramiv(program, GLES20.GL_LINK_STATUS, linkStatus, 0);
        if (linkStatus[0] == 0) {
            Log.e(TAG, "Program link failed: " + GLES20.glGetProgramInfoLog(program));
        }
        aPosition = GLES20.glGetAttribLocation(program,  "a_Position");
        aTexCoord = GLES20.glGetAttribLocation(program,  "a_TexCoord");
        uTexture  = GLES20.glGetUniformLocation(program, "u_Texture");

        // Vertex buffer (NDC quad — never changes)
        ndcBuffer = allocFloatBuffer(QUAD_NDC.length);
        ndcBuffer.put(QUAD_NDC).position(0);

        // Source NDC buffer reused on each transformCoordinates2d call
        ndcSrc = allocFloatBuffer(QUAD_NDC.length);
        ndcSrc.put(QUAD_NDC).position(0);

        // Texcoord buffer — filled per-frame; init to identity (camera-flipped, doesn't matter)
        texBuffer = allocFloatBuffer(QUAD_NDC.length);
        texBuffer.put(new float[]{ 0f, 1f,  1f, 1f,  0f, 0f,  1f, 0f }).position(0);
    }

    /**
     * Updates the texture coordinate buffer if ARCore reports the display
     * geometry changed (rotation, surface resize). Cheap no-op otherwise.
     */
    public void updateTexCoordsIfNeeded(Frame frame) {
        if (frame.hasDisplayGeometryChanged()) {
            ndcSrc.position(0);
            texBuffer.position(0);
            frame.transformCoordinates2d(
                    Coordinates2d.OPENGL_NORMALIZED_DEVICE_COORDINATES, ndcSrc,
                    Coordinates2d.TEXTURE_NORMALIZED, texBuffer);
            texBuffer.position(0);
        }
    }

    public void draw(Frame frame) {
        updateTexCoordsIfNeeded(frame);

        // Camera background → no depth, no blending, replace
        GLES20.glDisable(GLES20.GL_DEPTH_TEST);
        GLES20.glDepthMask(false);

        GLES20.glUseProgram(program);

        GLES20.glActiveTexture(GLES20.GL_TEXTURE0);
        GLES20.glBindTexture(GLES11Ext.GL_TEXTURE_EXTERNAL_OES, textureId);
        GLES20.glUniform1i(uTexture, 0);

        ndcBuffer.position(0);
        GLES20.glVertexAttribPointer(aPosition, 2, GLES20.GL_FLOAT, false, 0, ndcBuffer);
        texBuffer.position(0);
        GLES20.glVertexAttribPointer(aTexCoord, 2, GLES20.GL_FLOAT, false, 0, texBuffer);

        GLES20.glEnableVertexAttribArray(aPosition);
        GLES20.glEnableVertexAttribArray(aTexCoord);

        GLES20.glDrawArrays(GLES20.GL_TRIANGLE_STRIP, 0, 4);

        GLES20.glDisableVertexAttribArray(aPosition);
        GLES20.glDisableVertexAttribArray(aTexCoord);

        // Restore depth state for any subsequent renderers (we don't draw any
        // other GL content here; Three.js renders into the WebView above us)
        GLES20.glDepthMask(true);
        GLES20.glEnable(GLES20.GL_DEPTH_TEST);
    }

    private static FloatBuffer allocFloatBuffer(int floatCount) {
        return ByteBuffer
                .allocateDirect(floatCount * Float.BYTES)
                .order(ByteOrder.nativeOrder())
                .asFloatBuffer();
    }

    private static int compileShader(int type, String src) {
        int shader = GLES20.glCreateShader(type);
        GLES20.glShaderSource(shader, src);
        GLES20.glCompileShader(shader);
        int[] status = new int[1];
        GLES20.glGetShaderiv(shader, GLES20.GL_COMPILE_STATUS, status, 0);
        if (status[0] == 0) {
            Log.e(TAG, "Shader compile failed: " + GLES20.glGetShaderInfoLog(shader));
            GLES20.glDeleteShader(shader);
            return 0;
        }
        return shader;
    }
}
