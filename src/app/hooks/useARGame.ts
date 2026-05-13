import { useRef, useState, useCallback, useEffect } from 'react';
import * as THREE from 'three';
import {
  pickRandomWord, pickDropLetter, scoreGuess,
  type LetterColor,
} from '../data/wardenCodex';
// GLB assets — Vite resolves these to URL strings at build time
import asteroidUrl          from '../../3dmodel/asteroid.glb?url';
import asteroid01Url        from '../../3dmodel/asteroid_01.glb?url';
import asteroidLowPolyUrl   from '../../3dmodel/asteroid_low_poly.glb?url';
import yorpAsteroidUrl      from '../../3dmodel/54509-yorp_asteroid_potential_earth_impactor.glb?url';
import metalAsteroidUrl     from '../../3dmodel/metal_asteroid.glb?url';
import giantPurpleAUrl      from '../../3dmodel/giant_asteroid_with_purple_accents.glb?url';
import giantPurpleBUrl      from '../../3dmodel/giant_asteroid_with_purple_accents (1).glb?url';

const ASTEROID_MODEL_URLS = [
  asteroidUrl,
  asteroid01Url,
  asteroidLowPolyUrl,
  yorpAsteroidUrl,
  metalAsteroidUrl,
  giantPurpleAUrl,
  giantPurpleBUrl,
];

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
  | 'game-over'
  | 'error';

type AsteroidState     = 'drift' | 'charging' | 'attacking';
type AsteroidBehaviour = 'straight' | 'curve' | 'orbit-strike';

interface ParticleSystem {
  points:     THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial>;
  velocities: THREE.Vector3[];
  frame:      number;
  life:       number;
}

interface GameAsteroid {
  obj:             THREE.Object3D;
  baseMat:         THREE.MeshStandardMaterial;
  state:           AsteroidState;
  behaviour:       AsteroidBehaviour;
  velocity:        THREE.Vector3;
  angularVel:      THREE.Vector3;
  nextAttackTime:  number;
  stateTimer:      number;
  orbitCenter:     THREE.Vector3;
  orbitAngle:      number;
  orbitRadius:     number;
  spawnHeight:     number;
  alive:           boolean;
}

interface TrackedPlane {
  center:       THREE.Vector3;
  area:         number;
  orientation:  string;
  worldPolygon: THREE.Vector3[];   // polygon corners in world space
}

export interface UseARGameResult {
  phase:       GamePhase;
  smashed:     number;
  wave:        number;
  hp:          number;
  maxHp:       number;
  damageTick:  number;
  errorMsg:    string;
  isSupported: boolean;
  paused:      boolean;
  showPlane:   boolean;
  // Wordle state
  targetWord:        string;
  collectedLetters:  string[];
  currentGuess:      string;
  attempts:          Array<{ word: string; colors: LetterColor[] }>;
  wordsSolved:       number;
  lastResult:        'win' | 'lose' | null;
  // Wordle actions
  addLetterToGuess: (letter: string) => void;
  backspaceGuess:   () => void;
  submitGuess:      () => void;
  newWordRound:     () => void;
  startAR:     (overlayEl?: HTMLElement) => Promise<void>;
  startGame:   () => Promise<void>;
  stopAR:      () => void;
  pause:       () => void;
  resume:      () => void;
  togglePlane: () => void;
}

// ── Tunables ─────────────────────────────────────────────────────────────────
const WAVE_INITIAL_COUNT    = 3;       // simultaneous asteroids (was 8 — lag fix)
const ASTEROID_POOL_SIZE    = 6;       // pre-built pool: 3 active + 3 spare (zero alloc mid-game)
const RESPAWN_DELAY_MS      = 2500;   // new asteroid appears after a kill
const SPAWN_RADIUS_MIN      = 0.55;
const SPAWN_RADIUS_MAX      = 1.10;
const SPAWN_HEIGHT_BASE     = 0.35;
const SPAWN_HEIGHT_RANGE    = 0.45;

const MAX_HP                = 100;
const DAMAGE_PER_HIT        = 18;
const ATTACK_HIT_DIST       = 0.33;
const MIN_ATTACK_DELAY_MS   = 4000;
const MAX_ATTACK_DELAY_MS   = 8500;
const FIRST_ATTACK_DELAY_MS = 3000;
const CHARGE_TELEGRAPH_MS   = 600;    // red glow / pause before lunging

// Physics
const GRAVITY               = 0.0002;           // mild downward pull (m/frame²)
const DRAG                  = 0.985;            // air resistance
const ATTACK_ACCEL          = 0.00075;          // acceleration toward player
const MAX_SPEED             = 0.022;            // m/frame (~1.3 m/s @ 60fps)
const CURVE_FORCE           = 0.00055;

// (Old FBX + 1K texture pipeline removed — now using single low-poly GLB)

// ─────────────────────────────────────────────────────────────────────────────
export function useARGame(): UseARGameResult {
  const [phaseState, setPhaseState] = useState<GamePhase>('checking');
  const [smashed,    setSmashed]    = useState(0);
  const [wave,       setWave]       = useState(1);
  const [hp,         setHp]         = useState(MAX_HP);
  const [damageTick, setDamageTick] = useState(0);
  const [errorMsg,   setErrorMsg]   = useState('');
  const [paused,     setPausedState] = useState(false);
  const [showPlane,  setShowPlaneState] = useState(true);

  // ── Wordle state ──
  const [targetWord,       setTargetWord]       = useState<string>(() => pickRandomWord());
  const [collectedLetters, setCollectedLetters] = useState<string[]>([]);
  const [currentGuess,     setCurrentGuess]     = useState<string>('');
  const [attempts,         setAttempts]         = useState<Array<{ word: string; colors: LetterColor[] }>>([]);
  const [wordsSolved,      setWordsSolved]      = useState(0);
  const [lastResult,       setLastResult]       = useState<'win' | 'lose' | null>(null);

  const targetWordRef       = useRef<string>('');
  const collectedLettersRef = useRef<string[]>([]);
  useEffect(() => { targetWordRef.current = targetWord; }, [targetWord]);

  const pausedRef     = useRef(false);
  const showPlaneRef  = useRef(true);
  const frameCountRef = useRef(0);

  // Refs mirror state for the animation-loop closure
  const phaseRef   = useRef<GamePhase>('checking');
  const smashedRef = useRef(0);
  const hpRef      = useRef(MAX_HP);
  const setPhase = (p: GamePhase) => { phaseRef.current = p; setPhaseState(p); };

  // Three.js / WebXR refs
  const rendererRef         = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef            = useRef<THREE.Scene | null>(null);
  const cameraRef           = useRef<THREE.PerspectiveCamera | null>(null);
  const sessionRef          = useRef<any>(null);
  const refSpaceRef         = useRef<any>(null);
  const asteroidTemplatesRef = useRef<THREE.Object3D[]>([]);   // pool of rock-mesh templates (picked randomly per spawn)
  const asteroidsRef        = useRef<GameAsteroid[]>([]);
  const asteroidPoolRef     = useRef<GameAsteroid[]>([]);   // ALL preallocated instances (active + spare)
  const particlesRef        = useRef<ParticleSystem[]>([]);
  // Letter drop sprites (each asteroid kill spawns one)
  const letterDropsRef      = useRef<Array<{
    sprite:   THREE.Sprite;
    velocity: THREE.Vector3;
    letter:   string;
    life:     number;
    maxLife:  number;
  }>>([]);
  const trackedPlanesRef    = useRef<Map<any, TrackedPlane>>(new Map());
  const planeMeshesRef      = useRef<Map<any, { outline: THREE.LineLoop; fill: THREE.Mesh }>>(new Map());
  const bestPlaneRef        = useRef<TrackedPlane | null>(null);
  const worldOriginRef      = useRef<THREE.Vector3 | null>(null);
  const originLockedRef     = useRef(false);
  const raycasterRef        = useRef(new THREE.Raycaster());
  const canvasRef           = useRef<HTMLCanvasElement | null>(null);
  const camPosRef           = useRef(new THREE.Vector3());

  // 1. Support check -----------------------------------------------------------
  useEffect(() => {
    const xr = (navigator as any).xr;
    if (!xr) { setPhase('unsupported'); return; }
    xr.isSessionSupported('immersive-ar')
      .then((ok: boolean) => setPhase(ok ? 'idle' : 'unsupported'))
      .catch(() => setPhase('unsupported'));
  }, []);

  // 2. Fallback procedural asteroid -------------------------------------------
  const buildFallbackAsteroid = (): THREE.Object3D => {
    const group = new THREE.Group();
    const geo   = new THREE.IcosahedronGeometry(1, 2);
    const pos   = geo.attributes.position.array as Float32Array;
    for (let i = 0; i < pos.length; i += 3) {
      const n = 0.72 + Math.random() * 0.56;
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

  // 3. GLB (asteroids) --------------------------------------------------------
  // Loads ALL asteroid GLB variants in parallel; every mesh found becomes a
  // separate template, picked randomly per spawn for maximum visual variety.
  // Individual GLB failures are tolerated — we just skip and continue.
  const loadAsteroidModels = async (): Promise<THREE.Object3D[]> => {
    try {
      const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
      const loader = new GLTFLoader();

      const results = await Promise.allSettled(
        ASTEROID_MODEL_URLS.map(url => loader.loadAsync(url))
      );

      const rocks: THREE.Object3D[] = [];
      results.forEach(res => {
        if (res.status !== 'fulfilled') return;
        res.value.scene.traverse((c) => {
          const mesh = c as THREE.Mesh;
          if (mesh.isMesh) {
            mesh.position.set(0, 0, 0);
            mesh.rotation.set(0, 0, 0);
            mesh.scale.setScalar(1);
            if (!mesh.material) {
              mesh.material = new THREE.MeshStandardMaterial({
                color: 0x8a8579, roughness: 0.95, metalness: 0.05,
              });
            }
            rocks.push(mesh);
          }
        });
      });

      if (rocks.length === 0) return [buildFallbackAsteroid()];
      return rocks;
    } catch {
      return [buildFallbackAsteroid()];
    }
  };

  // 4. Particle burst / trail ------------------------------------------------
  // mode='burst' → outward+up explosion (smash). mode='trail' → small falling embers (attack trail).
  const spawnParticles = (
    position: THREE.Vector3,
    color = 0xf97316,
    count = 26,
    mode: 'burst' | 'trail' = 'burst',
  ) => {
    const scene = sceneRef.current;
    if (!scene) return;
    const geom = new THREE.BufferGeometry();
    const pos  = new Float32Array(count * 3);
    const vels: THREE.Vector3[] = [];
    const isBurst = mode === 'burst';
    for (let i = 0; i < count; i++) {
      pos[i*3]=position.x; pos[i*3+1]=position.y; pos[i*3+2]=position.z;
      if (isBurst) {
        vels.push(new THREE.Vector3(
          (Math.random()-0.5)*0.04,
          0.012+Math.random()*0.022,
          (Math.random()-0.5)*0.04,
        ));
      } else {
        // Trail: tiny lateral drift + slow fall
        vels.push(new THREE.Vector3(
          (Math.random()-0.5)*0.015,
          -0.002 - Math.random()*0.006,
          (Math.random()-0.5)*0.015,
        ));
      }
    }
    geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const points = new THREE.Points(geom, new THREE.PointsMaterial({
      color,
      size:        isBurst ? 0.03 : 0.018,
      transparent: true,
      opacity:     1,
    }));
    scene.add(points);
    particlesRef.current.push({ points, velocities: vels, frame: 0, life: isBurst ? 55 : 28 });
  };

  // 4z. Letter sprite (Canvas-based texture) -------------------------------
  // Produces a small floating 3D label that always faces the camera. Used as
  // the visible reward dropped when a player smashes an asteroid.
  const makeLetterSprite = (letter: string): THREE.Sprite => {
    const size = 128;
    const canvas = document.createElement('canvas');
    canvas.width = size; canvas.height = size;
    const ctx = canvas.getContext('2d')!;
    // Background (dark purple, slightly transparent)
    ctx.fillStyle = 'rgba(10,1,24,0.78)';
    ctx.fillRect(0, 0, size, size);
    // Glowing border
    ctx.strokeStyle = '#a78bfa';
    ctx.lineWidth = 6;
    ctx.strokeRect(6, 6, size - 12, size - 12);
    // Letter
    ctx.fillStyle = '#ec4899';
    ctx.font = 'bold 78px "Press Start 2P", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(letter, size / 2, size / 2 + 4);

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    const mat = new THREE.SpriteMaterial({
      map:         tex,
      transparent: true,
      depthWrite:  false,
    });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(0.10, 0.10, 0.10);
    return sprite;
  };

  // Spawn a letter drop at a position (called from killAsteroid on player kill)
  const spawnLetterDrop = (position: THREE.Vector3) => {
    const scene = sceneRef.current;
    if (!scene) return;
    const letter = pickDropLetter(targetWordRef.current);
    const sprite = makeLetterSprite(letter);
    sprite.position.copy(position);
    scene.add(sprite);
    letterDropsRef.current.push({
      sprite,
      letter,
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.012,
        0.018 + Math.random() * 0.010,    // initial upward burst
        (Math.random() - 0.5) * 0.012,
      ),
      life:    0,
      maxLife: 140,                          // ~2.3s @ 60fps
    });
  };

  // Per-frame: integrate physics, auto-collect into inventory when life expires
  const updateLetterDrops = () => {
    const scene = sceneRef.current;
    if (!scene) return;
    const collectedThisFrame: string[] = [];
    letterDropsRef.current = letterDropsRef.current.filter(d => {
      d.life++;
      d.velocity.y -= GRAVITY * 0.7;
      d.velocity.multiplyScalar(0.992);
      d.sprite.position.add(d.velocity);
      // Subtle pulse on opacity for sparkle
      (d.sprite.material as THREE.SpriteMaterial).opacity =
        0.75 + 0.25 * Math.sin(d.life * 0.18);

      if (d.life >= d.maxLife) {
        // Auto-collect
        collectedThisFrame.push(d.letter);
        scene.remove(d.sprite);
        (d.sprite.material as THREE.SpriteMaterial).map?.dispose();
        (d.sprite.material as THREE.SpriteMaterial).dispose();
        return false;
      }
      return true;
    });
    if (collectedThisFrame.length > 0) {
      collectedLettersRef.current.push(...collectedThisFrame);
      setCollectedLetters([...collectedLettersRef.current]);
    }
  };

  // 4a. Dust emission — small dirty/rocky particles falling off drifting asteroids.
  // Used in 'drift' state to make asteroids feel weathered and alive.
  const spawnDust = (position: THREE.Vector3, count = 3) => {
    const scene = sceneRef.current;
    if (!scene) return;
    const geom = new THREE.BufferGeometry();
    const pos  = new Float32Array(count * 3);
    const vels: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      // Slight offset around the asteroid (3-5 cm radius)
      const offsetR = 0.025 + Math.random() * 0.025;
      const offsetA = Math.random() * Math.PI * 2;
      pos[i*3]   = position.x + Math.cos(offsetA) * offsetR;
      pos[i*3+1] = position.y - 0.02 - Math.random() * 0.03;   // just below
      pos[i*3+2] = position.z + Math.sin(offsetA) * offsetR;

      // Gentle fall + minimal drift
      vels.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.004,
        -0.001 - Math.random() * 0.003,
        (Math.random() - 0.5) * 0.004,
      ));
    }
    geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));

    // Earthy dirt tones (gray-brown variation)
    const r = Math.random();
    const dustColor = r < 0.4 ? 0x6b5a3e : r < 0.75 ? 0x8a7860 : 0x5a4a36;

    const points = new THREE.Points(geom, new THREE.PointsMaterial({
      color:       dustColor,
      size:        0.012,
      transparent: true,
      opacity:     0.7,
      depthWrite:  false,
    }));
    scene.add(points);
    particlesRef.current.push({ points, velocities: vels, frame: 0, life: 40 });
  };

  // 4b. Flame emission — used when asteroid is red (charging / attacking).
  // Particles fly TOWARD the player (matching the asteroid's intent) with
  // a slight upward bias so they look like rising fire.
  const spawnFlame = (
    position: THREE.Vector3,
    toward: THREE.Vector3,    // unnormalized direction vector (asteroid → player)
    count = 5,
  ) => {
    const scene = sceneRef.current;
    if (!scene) return;
    const dir = toward.clone();
    if (dir.lengthSq() > 0.0001) dir.normalize(); else dir.set(0, 1, 0);

    const geom = new THREE.BufferGeometry();
    const pos  = new Float32Array(count * 3);
    const vels: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      pos[i*3]   = position.x;
      pos[i*3+1] = position.y;
      pos[i*3+2] = position.z;

      // Base velocity toward player + random spread + slight heat-rise
      const v = dir.clone().multiplyScalar(0.013 + Math.random() * 0.018);
      v.x += (Math.random() - 0.5) * 0.010;
      v.y += (Math.random() - 0.25) * 0.012;   // bias upward like fire
      v.z += (Math.random() - 0.5) * 0.010;
      vels.push(v);
    }
    geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));

    // Random flame tint per puff: yellow / orange / deep red
    const r = Math.random();
    const flameColor = r < 0.33 ? 0xffd24a : r < 0.7 ? 0xff7a22 : 0xff3311;

    const points = new THREE.Points(geom, new THREE.PointsMaterial({
      color:       flameColor,
      size:        0.032,
      transparent: true,
      opacity:     0.95,
      depthWrite:  false,
    }));
    scene.add(points);
    particlesRef.current.push({ points, velocities: vels, frame: 0, life: 22 });
  };

  // 5. Build a single asteroid instance ---------------------------------------
  const buildAsteroidInstance = (now: number): GameAsteroid | null => {
    const templates = asteroidTemplatesRef.current;
    const scene     = sceneRef.current;
    const origin    = worldOriginRef.current;
    if (templates.length === 0 || !scene || !origin) return null;

    // Pick a random rock variant from the GLB
    const template = templates[Math.floor(Math.random() * templates.length)];
    const clone    = template.clone(true);

    // Clone material so each asteroid glows independently
    let baseMat: THREE.MeshStandardMaterial | null = null;
    clone.traverse(c => {
      const mesh = c as THREE.Mesh;
      if (mesh.isMesh) {
        const cloned = (mesh.material as THREE.MeshStandardMaterial).clone();
        mesh.material = cloned;
        if (!baseMat) baseMat = cloned;
      }
    });
    if (!baseMat) return null;

    // Auto-scale to realistic 20-35cm diameter using THIS rock's bounding box
    const box  = new THREE.Box3().setFromObject(clone);
    const size = new THREE.Vector3(); box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const targetDiameter = 0.20 + Math.random() * 0.15;
    clone.scale.setScalar(targetDiameter / maxDim);

    // Pick a random point INSIDE the detected plane polygon (fallback: donut around origin)
    const planePt = samplePointOnPlane();
    const angle  = Math.random() * Math.PI * 2;
    let spawnHeight: number;
    if (planePt) {
      clone.position.set(planePt.x, planePt.y, planePt.z);
      spawnHeight = planePt.y;
    } else {
      const radius = SPAWN_RADIUS_MIN + Math.random() * (SPAWN_RADIUS_MAX - SPAWN_RADIUS_MIN);
      spawnHeight = origin.y + SPAWN_HEIGHT_BASE + Math.random() * SPAWN_HEIGHT_RANGE;
      clone.position.set(
        origin.x + Math.cos(angle) * radius,
        spawnHeight,
        origin.z + Math.sin(angle) * radius,
      );
    }
    clone.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI);
    scene.add(clone);

    // Pick an AI behaviour
    const roll = Math.random();
    const behaviour: AsteroidBehaviour =
      roll < 0.5 ? 'straight' : roll < 0.8 ? 'curve' : 'orbit-strike';

    return {
      obj:            clone,
      baseMat,
      state:          'drift',
      behaviour,
      velocity:       new THREE.Vector3(),
      angularVel:     new THREE.Vector3(
                        (Math.random()-0.5)*0.02,
                        (Math.random()-0.5)*0.024,
                        (Math.random()-0.5)*0.016,
                      ),
      nextAttackTime: now + FIRST_ATTACK_DELAY_MS + Math.random()*(MAX_ATTACK_DELAY_MS-MIN_ATTACK_DELAY_MS),
      stateTimer:     0,
      // Bob in place near spawn (tiny orbit so it stays on the plane)
      orbitCenter:    clone.position.clone(),
      orbitAngle:     angle,
      orbitRadius:    0.04 + Math.random() * 0.06,   // 4-10 cm gentle wobble
      spawnHeight,
      alive:          true,
    };
  };

  // 5b. Recycle: reset a pool instance to a fresh state on the plane ---------
  const resetAsteroid = (a: GameAsteroid, now: number): boolean => {
    const planePt = samplePointOnPlane();
    const origin  = worldOriginRef.current;
    let height: number;

    if (planePt) {
      a.obj.position.set(planePt.x, planePt.y, planePt.z);
      height = planePt.y;
    } else if (origin) {
      const angle  = Math.random() * Math.PI * 2;
      const radius = SPAWN_RADIUS_MIN + Math.random() * (SPAWN_RADIUS_MAX - SPAWN_RADIUS_MIN);
      height = origin.y + SPAWN_HEIGHT_BASE + Math.random() * SPAWN_HEIGHT_RANGE;
      a.obj.position.set(
        origin.x + Math.cos(angle) * radius,
        height,
        origin.z + Math.sin(angle) * radius,
      );
    } else {
      return false;
    }

    a.obj.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI);
    a.obj.visible = true;

    a.state      = 'drift';
    a.velocity.set(0, 0, 0);
    a.angularVel.set(
      (Math.random()-0.5)*0.02,
      (Math.random()-0.5)*0.024,
      (Math.random()-0.5)*0.016,
    );

    const roll = Math.random();
    a.behaviour = roll < 0.5 ? 'straight' : roll < 0.8 ? 'curve' : 'orbit-strike';

    a.orbitCenter.copy(a.obj.position);
    a.orbitAngle  = Math.random() * Math.PI * 2;
    a.orbitRadius = 0.04 + Math.random() * 0.06;
    a.spawnHeight = height;

    a.nextAttackTime = now + MIN_ATTACK_DELAY_MS + Math.random()*(MAX_ATTACK_DELAY_MS - MIN_ATTACK_DELAY_MS);
    a.stateTimer    = 0;
    a.alive         = true;

    a.baseMat.emissive.setHex(0x000000);
    a.baseMat.emissiveIntensity = 0;
    return true;
  };

  // 5c. Pull a free instance from the pool and activate it -------------------
  const spawnFromPool = (now: number): boolean => {
    const idle = asteroidPoolRef.current.find(a => !a.alive);
    if (!idle) return false;
    if (!resetAsteroid(idle, now)) return false;
    asteroidsRef.current.push(idle);
    return true;
  };

  // 6. Smash (recycle to pool, NOT scene.remove) -----------------------------
  const killAsteroid = (a: GameAsteroid, byPlayer: boolean) => {
    if (!a.alive) return;
    a.alive = false;
    spawnParticles(a.obj.position.clone(), byPlayer ? 0xf97316 : 0xff2200);
    a.obj.visible = false;        // hide instead of remove (kept in scene + pool)
    asteroidsRef.current = asteroidsRef.current.filter(x => x !== a);

    if (byPlayer) {
      smashedRef.current++;
      setSmashed(smashedRef.current);
      // Drop a letter for the Wordle puzzle
      spawnLetterDrop(a.obj.position.clone());
      if (smashedRef.current > 0 && smashedRef.current % WAVE_INITIAL_COUNT === 0) {
        setWave(w => w + 1);
      }
    }

    // Respawn from pool after delay (zero allocation)
    setTimeout(() => {
      if (phaseRef.current !== 'playing') return;
      spawnFromPool(performance.now());
    }, RESPAWN_DELAY_MS);
  };

  // 7. Damage -----------------------------------------------------------------
  const damagePlayer = () => {
    hpRef.current = Math.max(0, hpRef.current - DAMAGE_PER_HIT);
    setHp(hpRef.current);
    setDamageTick(x => x + 1);
    if ((navigator as any).vibrate) (navigator as any).vibrate(200);
    if (hpRef.current <= 0) setPhase('game-over');
  };

  // 8. Tap → raycast → smash --------------------------------------------------
  const handleTap = useCallback((e: TouchEvent) => {
    if (phaseRef.current !== 'playing') return;
    const renderer = rendererRef.current;
    const scene    = sceneRef.current;
    if (!renderer || !scene || asteroidsRef.current.length === 0) return;

    const touch = e.touches[0];
    if (!touch) return;
    const x =  (touch.clientX / window.innerWidth)  * 2 - 1;
    const y = -(touch.clientY / window.innerHeight) * 2 + 1;

    const xrCam = renderer.xr.getCamera();
    const cam   = (xrCam as any).cameras?.length > 0
      ? (xrCam as any).cameras[0] as THREE.PerspectiveCamera
      : (cameraRef.current as THREE.PerspectiveCamera);

    raycasterRef.current.setFromCamera(new THREE.Vector2(x, y), cam);
    const meshTargets = asteroidsRef.current.map(a => a.obj);
    const hits = raycasterRef.current.intersectObjects(meshTargets, true);
    if (hits.length > 0) {
      let root: THREE.Object3D = hits[0].object;
      while (root.parent && root.parent !== scene) root = root.parent;
      const target = asteroidsRef.current.find(a => a.obj === root);
      if (target) killAsteroid(target, true);
    }
  }, []);

  // 9. Continuous plane tracking (XROrigin-style) -----------------------------
  const updatePlaneTracking = (frame: any, refSpace: any) => {
    const scene = sceneRef.current;
    if (!scene) return;

    const planes: Set<any> = frame.detectedPlanes ?? new Set();
    const still = new Set<any>();
    // Dim the plane visualization once we're actively in combat
    const visOpacity = phaseRef.current === 'playing' ? 0.25 : 0.85;

    planes.forEach((xrPlane: any) => {
      still.add(xrPlane);
      const pose = frame.getPose(xrPlane.planeSpace, refSpace);
      if (!pose) return;
      const p = pose.transform.position;
      const center = new THREE.Vector3(p.x, p.y, p.z);

      // Polygon points (plane-local X/Z; Y=0 in plane space)
      const poly: Array<{ x: number; z: number }> = xrPlane.polygon ?? [];
      if (poly.length < 3) return;

      // Shoelace area for "best plane" selection
      let area = 0;
      for (let i = 0; i < poly.length; i++) {
        const A = poly[i];
        const B = poly[(i + 1) % poly.length];
        area += A.x * B.z - B.x * A.z;
      }
      area = Math.abs(area) / 2;

      // Transform polygon points to world space using the plane's pose
      const poseMat = new THREE.Matrix4().fromArray(pose.transform.matrix);
      const worldPolygon: THREE.Vector3[] = poly.map(pt => {
        const v = new THREE.Vector3(pt.x, 0, pt.z);
        v.applyMatrix4(poseMat);
        return v;
      });

      trackedPlanesRef.current.set(xrPlane, {
        center, area,
        orientation: (xrPlane.orientation as string) ?? 'unknown',
        worldPolygon,
      });

      // ── Build/refresh visual mesh for THIS plane ──
      let visual = planeMeshesRef.current.get(xrPlane);
      const pts3 = poly.map(pt => new THREE.Vector3(pt.x, 0, pt.z));
      if (!visual) {
        // Outline (LineLoop along polygon)
        const outlineGeo = new THREE.BufferGeometry().setFromPoints(pts3);
        const outlineMat = new THREE.LineBasicMaterial({
          color: 0x10b981, transparent: true, opacity: visOpacity,
        });
        const outline = new THREE.LineLoop(outlineGeo, outlineMat);

        // Filled triangle fan (using first vertex as fan apex)
        const fillGeo = new THREE.BufferGeometry();
        const positions = new Float32Array(pts3.length * 3);
        pts3.forEach((v, i) => { positions[i*3]=v.x; positions[i*3+1]=v.y; positions[i*3+2]=v.z; });
        fillGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const indices: number[] = [];
        for (let i = 1; i < pts3.length - 1; i++) indices.push(0, i, i + 1);
        fillGeo.setIndex(indices);
        fillGeo.computeVertexNormals();
        const fillMat = new THREE.MeshBasicMaterial({
          color: 0x10b981, transparent: true, opacity: visOpacity * 0.18,
          side: THREE.DoubleSide, depthWrite: false,
        });
        const fill = new THREE.Mesh(fillGeo, fillMat);

        scene.add(outline);
        scene.add(fill);
        visual = { outline, fill };
        planeMeshesRef.current.set(xrPlane, visual);
      } else {
        // Perf: only allocate new buffers when vertex count CHANGES.
        // Same count → in-place write (zero GC pressure).
        const outArr = visual.outline.geometry.attributes.position.array as Float32Array;
        if (outArr.length === pts3.length * 3) {
          for (let i = 0; i < pts3.length; i++) {
            outArr[i*3]   = pts3[i].x;
            outArr[i*3+1] = pts3[i].y;
            outArr[i*3+2] = pts3[i].z;
          }
          visual.outline.geometry.attributes.position.needsUpdate = true;

          const fillArr = visual.fill.geometry.attributes.position.array as Float32Array;
          for (let i = 0; i < pts3.length; i++) {
            fillArr[i*3]   = pts3[i].x;
            fillArr[i*3+1] = pts3[i].y;
            fillArr[i*3+2] = pts3[i].z;
          }
          visual.fill.geometry.attributes.position.needsUpdate = true;
        } else {
          // Vertex count changed → must reallocate + reindex
          const positions = new Float32Array(pts3.length * 3);
          pts3.forEach((v, i) => { positions[i*3]=v.x; positions[i*3+1]=v.y; positions[i*3+2]=v.z; });
          visual.outline.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
          visual.fill.geometry.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3));
          const indices: number[] = [];
          for (let i = 1; i < pts3.length - 1; i++) indices.push(0, i, i + 1);
          visual.fill.geometry.setIndex(indices);
        }
      }

      // Apply plane pose matrix to both meshes (plane-local → world)
      const m = new THREE.Matrix4().fromArray(pose.transform.matrix);
      visual.outline.matrix.copy(m); visual.outline.matrixAutoUpdate = false; visual.outline.updateMatrixWorld(true);
      visual.fill.matrix.copy(m);    visual.fill.matrixAutoUpdate    = false; visual.fill.updateMatrixWorld(true);

      // Visibility (toggle) + opacity for current phase
      visual.outline.visible = showPlaneRef.current;
      visual.fill.visible    = showPlaneRef.current;
      (visual.outline.material as THREE.LineBasicMaterial).opacity = visOpacity;
      (visual.fill.material    as THREE.MeshBasicMaterial).opacity = visOpacity * 0.18;
    });

    // Drop tracked + visual entries for planes that vanished
    trackedPlanesRef.current.forEach((_, key) => {
      if (!still.has(key)) trackedPlanesRef.current.delete(key);
    });
    planeMeshesRef.current.forEach((vis, key) => {
      if (!still.has(key)) {
        scene.remove(vis.outline);
        scene.remove(vis.fill);
        vis.outline.geometry.dispose();
        vis.fill.geometry.dispose();
        (vis.outline.material as THREE.Material).dispose();
        (vis.fill.material    as THREE.Material).dispose();
        planeMeshesRef.current.delete(key);
      }
    });

    // Pick best horizontal plane (largest area)
    let best: TrackedPlane | null = null;
    trackedPlanesRef.current.forEach(tp => {
      if (tp.orientation !== 'horizontal' && tp.orientation !== 'unknown') return;
      if (!best || tp.area > best.area) best = tp;
    });

    if (best) {
      const b = best as TrackedPlane;
      // Always keep bestPlaneRef updated so asteroid spawns use latest polygon
      bestPlaneRef.current = b;
      if (!originLockedRef.current) {
        worldOriginRef.current = b.center.clone();
        if (phaseRef.current === 'scanning') setPhase('plane-found');
      }
    }
  };

  // 9b. Random point INSIDE the detected plane polygon (XZ), with hover height
  const samplePointOnPlane = (): { x: number; y: number; z: number } | null => {
    const plane = bestPlaneRef.current;
    if (!plane || plane.worldPolygon.length < 3) return null;
    const poly = plane.worldPolygon;

    // Bounding box in XZ
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
    for (const p of poly) {
      if (p.x < minX) minX = p.x; if (p.x > maxX) maxX = p.x;
      if (p.z < minZ) minZ = p.z; if (p.z > maxZ) maxZ = p.z;
    }

    // Rejection sampling — try up to 40 attempts
    for (let attempt = 0; attempt < 40; attempt++) {
      const x = minX + Math.random() * (maxX - minX);
      const z = minZ + Math.random() * (maxZ - minZ);

      // Point-in-polygon (ray casting)
      let inside = false;
      for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        const xi = poly[i].x, zi = poly[i].z;
        const xj = poly[j].x, zj = poly[j].z;
        if (((zi > z) !== (zj > z)) && (x < (xj - xi) * (z - zi) / (zj - zi) + xi)) {
          inside = !inside;
        }
      }
      if (inside) {
        return { x, y: plane.center.y + SPAWN_HEIGHT_BASE + Math.random() * SPAWN_HEIGHT_RANGE, z };
      }
    }
    // Fallback: plane centroid
    return { x: plane.center.x, y: plane.center.y + SPAWN_HEIGHT_BASE, z: plane.center.z };
  };

  // 10. Physics / AI update ---------------------------------------------------
  const updateAsteroids = (frame: any, refSpace: any, now: number, t: number) => {
    // Player position from XRViewerPose
    const vp = frame.getViewerPose(refSpace);
    if (vp) {
      const p = vp.transform.position;
      camPosRef.current.set(p.x, p.y, p.z);
    }
    const camPos = camPosRef.current;

    asteroidsRef.current.forEach((a, idx) => {
      // Always tumble
      a.obj.rotation.x += a.angularVel.x;
      a.obj.rotation.y += a.angularVel.y;
      a.obj.rotation.z += a.angularVel.z;

      if (a.state === 'drift') {
        // Orbit / bob
        a.orbitAngle += 0.004;
        const desired = new THREE.Vector3(
          a.orbitCenter.x + Math.cos(a.orbitAngle) * a.orbitRadius,
          a.spawnHeight + Math.sin(t * 0.9 + a.orbitAngle) * 0.03,
          a.orbitCenter.z + Math.sin(a.orbitAngle) * a.orbitRadius,
        );
        // Lerp toward desired (gives a physicsy feel)
        a.obj.position.lerp(desired, 0.08);
        // Damp any leftover velocity
        a.velocity.multiplyScalar(0.9);

        // Dirty/dusty particles falling off the asteroid every ~25 frames,
        // staggered per-asteroid so they don't all puff at the same time.
        if ((frameCountRef.current + idx * 7) % 25 === 0) {
          spawnDust(a.obj.position, 2);
        }

        if (now > a.nextAttackTime) {
          a.state        = 'charging';
          a.stateTimer   = now;
          a.baseMat.emissive.setHex(0xff2200);
          a.baseMat.emissiveIntensity = 1.0;
          a.angularVel.multiplyScalar(2.4);
        }
      }

      else if (a.state === 'charging') {
        // Shake + pulse in place then launch
        const k = (now - a.stateTimer) / CHARGE_TELEGRAPH_MS;
        a.baseMat.emissiveIntensity = 0.7 + Math.sin(t * 32) * 0.4;
        a.obj.position.x += (Math.random() - 0.5) * 0.004;
        a.obj.position.y += (Math.random() - 0.5) * 0.004;
        a.obj.position.z += (Math.random() - 0.5) * 0.004;
        // Charge-up flames every ~5 frames (small puffs toward player)
        if ((frameCountRef.current % 5) === 0) {
          const toward = camPos.clone().sub(a.obj.position);
          spawnFlame(a.obj.position, toward, 3);
        }

        if (k >= 1) {
          // Initial impulse toward player
          const dir = camPos.clone().sub(a.obj.position).normalize();
          a.velocity.copy(dir).multiplyScalar(0.01);
          a.state = 'attacking';
        }
      }

      else if (a.state === 'attacking') {
        // Steering force toward player
        const toPlayer = camPos.clone().sub(a.obj.position);
        const dist = toPlayer.length();
        toPlayer.normalize();
        a.velocity.addScaledVector(toPlayer, ATTACK_ACCEL);

        // Behaviour-specific modifiers
        if (a.behaviour === 'curve') {
          const perp = new THREE.Vector3(-toPlayer.z, 0, toPlayer.x);
          a.velocity.addScaledVector(perp, Math.sin(t * 5) * CURVE_FORCE);
        } else if (a.behaviour === 'orbit-strike') {
          const perp = new THREE.Vector3(-toPlayer.z, 0, toPlayer.x);
          a.velocity.addScaledVector(perp, CURVE_FORCE * 0.6);
        }

        // Gravity + drag (physics)
        a.velocity.y -= GRAVITY;
        a.velocity.multiplyScalar(DRAG);

        // Clamp speed
        if (a.velocity.length() > MAX_SPEED) a.velocity.setLength(MAX_SPEED);

        // Integrate position
        a.obj.position.add(a.velocity);

        // Pulse emissive
        a.baseMat.emissiveIntensity = 0.6 + Math.sin(t * 22) * 0.4;

        // Flame trail toward player while lunging (every 3 frames)
        if ((frameCountRef.current % 3) === 0) {
          // Note: a.velocity points toward the player while attacking, so we
          // use it directly — flames stream forward in the direction of travel.
          spawnFlame(a.obj.position, a.velocity, 6);
        }

        // Hit check → damage
        if (dist < ATTACK_HIT_DIST) {
          damagePlayer();
          killAsteroid(a, false);
        }

        // If flung way off (miss) → reset to drift
        const fromOrigin = worldOriginRef.current
          ? a.obj.position.distanceTo(worldOriginRef.current) : 0;
        if (fromOrigin > 3.5) {
          // Re-insert at a fresh orbit slot
          a.state = 'drift';
          a.baseMat.emissive.setHex(0x000000);
          a.baseMat.emissiveIntensity = 0;
          a.velocity.set(0, 0, 0);
          a.angularVel.multiplyScalar(1 / 2.4);
          // Sample a fresh plane point so missed attackers reset onto the plane
          const resetPt = samplePointOnPlane();
          if (resetPt) {
            a.obj.position.set(resetPt.x, resetPt.y, resetPt.z);
            a.orbitCenter.set(resetPt.x, resetPt.y, resetPt.z);
            a.spawnHeight = resetPt.y;
          } else {
            a.spawnHeight = (worldOriginRef.current?.y ?? 0) + SPAWN_HEIGHT_BASE + Math.random() * SPAWN_HEIGHT_RANGE;
          }
          a.orbitAngle     = Math.random() * Math.PI * 2;
          a.orbitRadius    = 0.04 + Math.random() * 0.06;
          a.nextAttackTime = now + MIN_ATTACK_DELAY_MS + Math.random() * (MAX_ATTACK_DELAY_MS - MIN_ATTACK_DELAY_MS);
        }
      }
    });
  };

  // 11. Particle update -------------------------------------------------------
  const updateParticles = (scene: THREE.Scene) => {
    particlesRef.current = particlesRef.current.filter(ps => {
      ps.frame++;
      if (ps.frame > ps.life) { scene.remove(ps.points); return false; }
      const arr = ps.points.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < ps.velocities.length; i++) {
        arr[i*3]   += ps.velocities[i].x;
        arr[i*3+1] += ps.velocities[i].y - 0.0004 * ps.frame;
        arr[i*3+2] += ps.velocities[i].z;
      }
      ps.points.geometry.attributes.position.needsUpdate = true;
      ps.points.material.opacity = Math.max(0, 1 - ps.frame / ps.life);
      return true;
    });
  };

  // 12. Start game ------------------------------------------------------------
  const startGame = async () => {
    setPhase('loading');
    hpRef.current = MAX_HP;  smashedRef.current = 0;
    setHp(MAX_HP); setSmashed(0); setWave(1);
    originLockedRef.current = true;  // freeze origin for stable spawning

    try {
      const templates = await loadAsteroidModels();
      asteroidTemplatesRef.current = templates;

      const now = performance.now();

      // Build the FULL pool up front — all FBX clones + material clones happen
      // during the loading screen, so gameplay is allocation-free.
      for (let i = 0; i < ASTEROID_POOL_SIZE; i++) {
        const inst = buildAsteroidInstance(now);
        if (inst) {
          inst.obj.visible = false;
          inst.alive       = false;
          asteroidPoolRef.current.push(inst);
        }
      }

      // Activate the initial wave from the pool
      for (let i = 0; i < WAVE_INITIAL_COUNT; i++) {
        spawnFromPool(now);
      }

      document.addEventListener('touchstart', handleTap, { passive: true });
      setPhase('playing');
    } catch (err: any) {
      setPhase('error');
      setErrorMsg(err?.message ?? 'Failed to load model');
    }
  };

  // Dispose all plane visualization meshes
  const clearPlaneMeshes = () => {
    const scene = sceneRef.current;
    planeMeshesRef.current.forEach(vis => {
      scene?.remove(vis.outline);
      scene?.remove(vis.fill);
      vis.outline.geometry.dispose();
      vis.fill.geometry.dispose();
      (vis.outline.material as THREE.Material).dispose();
      (vis.fill.material    as THREE.Material).dispose();
    });
    planeMeshesRef.current.clear();
  };

  // 13. Stop ------------------------------------------------------------------
  const stopAR = useCallback(() => {
    document.removeEventListener('touchstart', handleTap);
    rendererRef.current?.setAnimationLoop(null);
    sessionRef.current?.end().catch(() => {});
    sessionRef.current   = null;
    canvasRef.current?.remove();
    canvasRef.current    = null;
    asteroidPoolRef.current.forEach(a => sceneRef.current?.remove(a.obj));
    asteroidPoolRef.current = [];
    asteroidsRef.current = [];
    particlesRef.current = [];
    trackedPlanesRef.current.clear();
    clearPlaneMeshes();
    bestPlaneRef.current    = null;
    worldOriginRef.current  = null;
    originLockedRef.current = false;
  }, [handleTap]);

  // 14. Start AR session ------------------------------------------------------
  const startAR = async (overlayEl?: HTMLElement) => {
    setPhase('starting');
    setErrorMsg('');
    setSmashed(0); smashedRef.current = 0;
    setHp(MAX_HP); hpRef.current = MAX_HP;
    setWave(1);
    originLockedRef.current = false;
    trackedPlanesRef.current.clear();
    bestPlaneRef.current = null;

    try {
      const canvas = document.createElement('canvas');
      canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;z-index:1;pointer-events:none;';
      document.body.appendChild(canvas);
      canvasRef.current = canvas;

      // Perf: cap DPR (phones often have DPR=3 which triples fragment work)
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha:           true,
        antialias:       dpr < 1.3,           // skip MSAA on dense displays
        powerPreference: 'high-performance',
      });
      renderer.xr.enabled = true;
      renderer.setPixelRatio(dpr);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.outputColorSpace    = THREE.SRGBColorSpace;
      renderer.toneMapping         = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      rendererRef.current = renderer;

      // Scene + 2-point lighting (rim removed for perf, ambient boosted)
      const scene = new THREE.Scene();
      scene.add(new THREE.AmbientLight(0xffffff, 1.1));
      const key  = new THREE.DirectionalLight(0xfff1d6, 3.0); key.position.set(2, 4, 2);   scene.add(key);
      const fill = new THREE.DirectionalLight(0x88aaff, 1.0); fill.position.set(-2, 2, -1); scene.add(fill);
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 100);
      cameraRef.current = camera;

      const xr = (navigator as any).xr;
      const sessionInit: Record<string, any> = {
        requiredFeatures: ['plane-detection'],
        optionalFeatures: ['hit-test', 'local-floor', 'dom-overlay'],
      };
      if (overlayEl) sessionInit.domOverlay = { root: overlayEl };

      const session = await xr.requestSession('immersive-ar', sessionInit);
      sessionRef.current = session;
      await renderer.xr.setSession(session);

      let refSpace: any;
      try   { refSpace = await session.requestReferenceSpace('local-floor'); }
      catch { refSpace = await session.requestReferenceSpace('local'); }
      refSpaceRef.current = refSpace;

      setPhase('scanning');

      // ── Master animation loop ──────────────────────────────────────────────
      renderer.setAnimationLoop((_time: number, frame: any) => {
        if (!frame) return;
        frameCountRef.current++;

        // 1. Plane tracking — throttled to ~15 Hz (every 4th frame)
        if ((frameCountRef.current & 3) === 0) {
          updatePlaneTracking(frame, refSpace);
        }

        // 2. Game physics + AI — paused freezes logic but keeps rendering
        if (phaseRef.current === 'playing' && !pausedRef.current) {
          const now = performance.now();
          const t   = now * 0.001;
          updateAsteroids(frame, refSpace, now, t);
          updateLetterDrops();
          updateParticles(scene);
        }

        renderer.render(scene, camera);
      });

      session.addEventListener('end', () => {
        renderer.setAnimationLoop(null);
        canvas.remove();
        canvasRef.current    = null;
        sessionRef.current   = null;
        asteroidPoolRef.current.forEach(a => scene.remove(a.obj));
        asteroidPoolRef.current = [];
        asteroidsRef.current = [];
        particlesRef.current = [];
        trackedPlanesRef.current.clear();
        clearPlaneMeshes();
        bestPlaneRef.current    = null;
        worldOriginRef.current  = null;
        originLockedRef.current = false;
        setPhase('idle');
        setSmashed(0); smashedRef.current = 0;
        setHp(MAX_HP); hpRef.current = MAX_HP;
        setWave(1);
      });

    } catch (err: any) {
      stopAR();
      setPhase('error');
      setErrorMsg(err?.message ?? 'Failed to start AR');
    }
  };

  // Pause / Resume / Plane toggle --------------------------------------------
  const pause = useCallback(() => {
    pausedRef.current = true;
    setPausedState(true);
  }, []);
  const resume = useCallback(() => {
    pausedRef.current = false;
    setPausedState(false);
  }, []);
  const togglePlane = useCallback(() => {
    const next = !showPlaneRef.current;
    showPlaneRef.current = next;
    setShowPlaneState(next);
    planeMeshesRef.current.forEach(vis => {
      vis.outline.visible = next;
      vis.fill.visible    = next;
    });
  }, []);

  useEffect(() => () => stopAR(), [stopAR]);

  return {
    phase:       phaseState,
    smashed,
    wave,
    hp,
    maxHp:       MAX_HP,
    damageTick,
    errorMsg,
    isSupported: phaseState !== 'unsupported' && phaseState !== 'checking',
    paused,
    showPlane,
    startAR,
    startGame,
    stopAR,
    pause,
    resume,
    togglePlane,
  };
}
