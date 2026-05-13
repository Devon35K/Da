import { useRef, useState, useCallback, useEffect } from 'react';
import * as THREE from 'three';

// ── Types ────────────────────────────────────────────────────────────────────
export type GamePhase =
  | 'checking'
  | 'unsupported'
  | 'idle'
  | 'starting'
  | 'scanning'
  | 'plane-found'
  | 'loading'
  | 'playing'
  | 'error';

interface ParticleSystem {
  points: THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial>;
  velocities: THREE.Vector3[];
  frame: number;
}

export interface UseARGameResult {
  phase: GamePhase;
  smashed: number;
  total: number;
  errorMsg: string;
  isSupported: boolean;
  startAR: (overlayEl?: HTMLElement) => Promise<void>;
  startGame: () => Promise<void>;
  stopAR: () => void;
}

// ── Constants ─────────────────────────────────────────────────────────────────
const ASTEROID_COUNT = 5;
const SPAWN_RADIUS   = 0.45;
const FLOAT_HEIGHT   = 0.35;
const FBX_PATH       = '/models/asteroid.fbx';

// ── Hook ──────────────────────────────────────────────────────────────────────
export function useARGame(): UseARGameResult {
  const [phaseState,  setPhaseState]  = useState<GamePhase>('checking');
  const [smashed,     setSmashed]     = useState(0);
  const [total,       setTotal]       = useState(0);
  const [errorMsg,    setErrorMsg]    = useState('');

  // Ref mirror keeps animation-loop callbacks from going stale
  const phaseRef    = useRef<GamePhase>('checking');
  const smashedRef  = useRef(0);

  const setPhase = (p: GamePhase) => { phaseRef.current = p; setPhaseState(p); };

  // Three.js / WebXR refs
  const rendererRef         = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef            = useRef<THREE.Scene | null>(null);
  const cameraRef           = useRef<THREE.PerspectiveCamera | null>(null);
  const sessionRef          = useRef<any>(null);
  const refSpaceRef         = useRef<any>(null);
  const asteroidTemplateRef = useRef<THREE.Object3D | null>(null);
  const asteroidsRef        = useRef<THREE.Object3D[]>([]);
  const particlesRef        = useRef<ParticleSystem[]>([]);
  const planePositionRef    = useRef<THREE.Vector3 | null>(null);
  const raycasterRef        = useRef(new THREE.Raycaster());
  const canvasRef           = useRef<HTMLCanvasElement | null>(null);

  // ── 1. Check WebXR AR support ───────────────────────────────────────────────
  useEffect(() => {
    const xr = (navigator as any).xr;
    if (!xr) { setPhase('unsupported'); return; }
    xr.isSessionSupported('immersive-ar')
      .then((ok: boolean) => setPhase(ok ? 'idle' : 'unsupported'))
      .catch(() => setPhase('unsupported'));
  }, []);

  // ── 2. Procedural fallback asteroid ────────────────────────────────────────
  const buildFallbackAsteroid = (): THREE.Object3D => {
    const group = new THREE.Group();
    const geo   = new THREE.IcosahedronGeometry(1, 1);
    const pos   = geo.attributes.position.array as Float32Array;
    for (let i = 0; i < pos.length; i += 3) {
      const n = 0.78 + Math.random() * 0.44;
      pos[i] *= n; pos[i + 1] *= n; pos[i + 2] *= n;
    }
    geo.attributes.position.needsUpdate = true;
    geo.computeVertexNormals();
    group.add(new THREE.Mesh(
      geo,
      new THREE.MeshStandardMaterial({ color: 0x6b5a3e, roughness: 0.95, metalness: 0.05 })
    ));
    return group;
  };

  // ── 3. Load FBX (falls back to procedural if file missing) ─────────────────
  const loadAsteroidModel = async (): Promise<THREE.Object3D> => {
    try {
      const { FBXLoader } = await import('three/examples/jsm/loaders/FBXLoader.js');
      const loader = new FBXLoader();
      return await new Promise<THREE.Object3D>((resolve, reject) => {
        loader.load(
          FBX_PATH,
          (fbx) => {
            fbx.traverse((c) => {
              if ((c as THREE.Mesh).isMesh) {
                (c as THREE.Mesh).material = new THREE.MeshStandardMaterial({
                  color: 0x8b7355, roughness: 0.9, metalness: 0.1,
                });
              }
            });
            resolve(fbx);
          },
          undefined,
          reject
        );
      });
    } catch {
      return buildFallbackAsteroid();
    }
  };

  // ── 4. Particle burst on smash ──────────────────────────────────────────────
  const spawnParticles = (position: THREE.Vector3) => {
    const scene = sceneRef.current;
    if (!scene) return;
    const count = 22;
    const geom  = new THREE.BufferGeometry();
    const pos   = new Float32Array(count * 3);
    const vels: THREE.Vector3[] = [];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = position.x; pos[i * 3 + 1] = position.y; pos[i * 3 + 2] = position.z;
      vels.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.025,
        0.008 + Math.random() * 0.018,
        (Math.random() - 0.5) * 0.025,
      ));
    }
    geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat    = new THREE.PointsMaterial({ color: 0xf97316, size: 0.025, transparent: true, opacity: 1 });
    const points = new THREE.Points(geom, mat);
    scene.add(points);
    particlesRef.current.push({ points, velocities: vels, frame: 0 });
  };

  // ── 5. Smash an asteroid ────────────────────────────────────────────────────
  const smashAsteroid = (asteroid: THREE.Object3D) => {
    const scene = sceneRef.current;
    if (!scene) return;
    spawnParticles(asteroid.position.clone());
    scene.remove(asteroid);
    asteroidsRef.current = asteroidsRef.current.filter(a => a !== asteroid);
    smashedRef.current++;
    setSmashed(smashedRef.current);
  };

  // ── 6. Touch → raycast → smash ─────────────────────────────────────────────
  const handleTap = useCallback((e: TouchEvent) => {
    if (phaseRef.current !== 'playing') return;
    const renderer = rendererRef.current;
    const scene    = sceneRef.current;
    if (!renderer || !scene || asteroidsRef.current.length === 0) return;

    const touch = e.touches[0];
    const x =  (touch.clientX / window.innerWidth)  * 2 - 1;
    const y = -(touch.clientY / window.innerHeight) * 2 + 1;

    const xrCam = renderer.xr.getCamera();
    const cam   = (xrCam as any).cameras?.length > 0
      ? (xrCam as any).cameras[0] as THREE.PerspectiveCamera
      : (cameraRef.current as THREE.PerspectiveCamera);

    raycasterRef.current.setFromCamera(new THREE.Vector2(x, y), cam);
    const hits = raycasterRef.current.intersectObjects(asteroidsRef.current, true);
    if (hits.length > 0) {
      let root: THREE.Object3D = hits[0].object;
      while (root.parent && root.parent !== scene) root = root.parent;
      smashAsteroid(root);
    }
  }, []);

  // ── 7. Spawn asteroids above the detected plane ─────────────────────────────
  const spawnAsteroids = (template: THREE.Object3D) => {
    const scene    = sceneRef.current;
    const planePos = planePositionRef.current;
    if (!scene || !planePos) return;

    const spawned: THREE.Object3D[] = [];
    for (let i = 0; i < ASTEROID_COUNT; i++) {
      const clone = template.clone(true);
      const angle = (i / ASTEROID_COUNT) * Math.PI * 2;
      clone.position.set(
        planePos.x + Math.cos(angle) * SPAWN_RADIUS,
        planePos.y + FLOAT_HEIGHT + Math.random() * 0.2,
        planePos.z + Math.sin(angle) * SPAWN_RADIUS,
      );
      const s = 0.06 + Math.random() * 0.04;
      clone.scale.setScalar(s);
      clone.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      scene.add(clone);
      spawned.push(clone);
    }
    asteroidsRef.current = spawned;
    setTotal(ASTEROID_COUNT);
  };

  // ── 8. Start game (load model → spawn) ─────────────────────────────────────
  const startGame = async () => {
    setPhase('loading');
    try {
      const template = await loadAsteroidModel();
      asteroidTemplateRef.current = template;
      spawnAsteroids(template);
      document.addEventListener('touchstart', handleTap, { passive: true });
      setPhase('playing');
    } catch (err: any) {
      setPhase('error');
      setErrorMsg(err?.message ?? 'Failed to load model');
    }
  };

  // ── 9. Stop AR ──────────────────────────────────────────────────────────────
  const stopAR = useCallback(() => {
    document.removeEventListener('touchstart', handleTap);
    rendererRef.current?.setAnimationLoop(null);
    sessionRef.current?.end().catch(() => {});
    sessionRef.current = null;
    canvasRef.current?.remove();
    canvasRef.current = null;
    asteroidsRef.current = [];
    particlesRef.current = [];
    planePositionRef.current = null;
  }, [handleTap]);

  // ── 10. Start AR session ────────────────────────────────────────────────────
  const startAR = async (overlayEl?: HTMLElement) => {
    setPhase('starting');
    setErrorMsg('');
    setSmashed(0);
    smashedRef.current = 0;
    setTotal(0);

    try {
      // Canvas for Three.js / WebXR
      const canvas = document.createElement('canvas');
      canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;z-index:1;pointer-events:none;';
      document.body.appendChild(canvas);
      canvasRef.current = canvas;

      // Three.js renderer
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.xr.enabled = true;
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      rendererRef.current = renderer;

      // Scene + lighting
      const scene = new THREE.Scene();
      scene.add(new THREE.AmbientLight(0xffffff, 2));
      const dir = new THREE.DirectionalLight(0xffffff, 3);
      dir.position.set(1, 3, 2);
      scene.add(dir);
      sceneRef.current = scene;

      // Camera (Three.js manages pose in XR)
      const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 100);
      cameraRef.current = camera;

      // Request immersive-ar session
      const xr = (navigator as any).xr;
      const sessionInit: Record<string, any> = {
        requiredFeatures: ['plane-detection'],
        optionalFeatures: ['hit-test', 'local-floor', 'dom-overlay'],
      };
      if (overlayEl) sessionInit.domOverlay = { root: overlayEl };

      const session = await xr.requestSession('immersive-ar', sessionInit);
      sessionRef.current = session;
      await renderer.xr.setSession(session);

      // Reference space
      let refSpace: any;
      try   { refSpace = await session.requestReferenceSpace('local-floor'); }
      catch { refSpace = await session.requestReferenceSpace('local'); }
      refSpaceRef.current = refSpace;

      setPhase('scanning');

      // ── Animation loop ──────────────────────────────────────────────────────
      renderer.setAnimationLoop((_time: number, frame: any) => {
        if (!frame) return;

        // Plane detection (only while scanning)
        if (phaseRef.current === 'scanning') {
          const planes: Set<any> = (frame as any).detectedPlanes ?? new Set();
          if (planes.size > 0) {
            const plane = [...planes][0];
            const pose  = frame.getPose(plane.planeSpace, refSpace);
            if (pose) {
              const p = pose.transform.position;
              planePositionRef.current = new THREE.Vector3(p.x, p.y, p.z);
              setPhase('plane-found');
            }
          }
        }

        // Animate asteroids + particles (only while playing)
        if (phaseRef.current === 'playing') {
          const t = performance.now() * 0.001;
          asteroidsRef.current.forEach((a, i) => {
            a.rotation.y += 0.009;
            a.rotation.x += 0.005;
            a.position.y += Math.sin(t * 0.8 + i * 1.3) * 0.0004;
          });

          particlesRef.current = particlesRef.current.filter(ps => {
            ps.frame++;
            if (ps.frame > 45) { scene.remove(ps.points); return false; }
            const arr = ps.points.geometry.attributes.position.array as Float32Array;
            for (let i = 0; i < ps.velocities.length; i++) {
              arr[i * 3]     += ps.velocities[i].x;
              arr[i * 3 + 1] += ps.velocities[i].y - 0.0004 * ps.frame;
              arr[i * 3 + 2] += ps.velocities[i].z;
            }
            ps.points.geometry.attributes.position.needsUpdate = true;
            ps.points.material.opacity = Math.max(0, 1 - ps.frame / 45);
            return true;
          });
        }

        renderer.render(scene, camera);
      });

      session.addEventListener('end', () => {
        renderer.setAnimationLoop(null);
        canvas.remove();
        canvasRef.current  = null;
        sessionRef.current = null;
        asteroidsRef.current = [];
        particlesRef.current = [];
        setPhase('idle');
        setSmashed(0);
        smashedRef.current = 0;
      });

    } catch (err: any) {
      stopAR();
      setPhase('error');
      setErrorMsg(err?.message ?? 'Failed to start AR');
    }
  };

  useEffect(() => () => stopAR(), [stopAR]);

  return {
    phase:       phaseState,
    smashed,
    total,
    errorMsg,
    isSupported: phaseState !== 'unsupported' && phaseState !== 'checking',
    startAR,
    startGame,
    stopAR,
  };
}
