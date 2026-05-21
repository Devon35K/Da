import { useRef, useState, useCallback, useEffect } from 'react';
import * as THREE from 'three';
import { Capacitor } from '@capacitor/core';
import {
  pickRandomWord, scoreGuess,
  type LetterColor,
} from '../data/wardenCodex';
import { safeVibrate } from './useSettings';

export type GamePhase =
  | 'idle'
  | 'scanning'
  | 'playing'
  | 'wordle'
  | 'boss'
  | 'gameover'
  | 'unsupported';

interface AsteroidData {
  mesh: THREE.Object3D;
  letter: string;
  velocity: THREE.Vector3;
  rotationSpeed: THREE.Vector3;
  isBoss: boolean;
}

interface UseARGameResult {
  phase: GamePhase;
  startAR: () => Promise<void>;
  stopAR: () => void;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  videoRef: React.RefObject<HTMLVideoElement>;
  wave: number;
  score: number;
  targetWord: string;
  wordleGuesses: string[];
  wordleColors: LetterColor[][];
  submitWordleGuess: (guess: string) => void;
  restartGame: () => void;
}

export function useARGameARJS(): UseARGameResult {
  const [phase, setPhase] = useState<GamePhase>('idle');
  const [wave, setWave] = useState(1);
  const [score, setScore] = useState(0);
  const [targetWord, setTargetWord] = useState('');
  const [wordleGuesses, setWordleGuesses] = useState<string[]>([]);
  const [wordleColors, setWordleColors] = useState<LetterColor[][]>([]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.Camera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const asteroidsRef = useRef<AsteroidData[]>([]);
  const frameIdRef = useRef<number>(0);
  const streamRef = useRef<MediaStream | null>(null);

  const isNative = Capacitor.isNativePlatform();
  const isAndroid = Capacitor.getPlatform() === 'android';

  // Initialize Three.js scene with camera feed background
  const initScene = useCallback(async () => {
    if (!canvasRef.current) return;

    // Get camera stream for background
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.error('Camera access failed:', err);
      // Continue without camera feed
    }

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    // Add a simple asteroid
    const geometry = new THREE.IcosahedronGeometry(1, 2);
    const material = new THREE.MeshStandardMaterial({ 
      color: 0x6b5a3e, 
      roughness: 0.95, 
      metalness: 0.05 
    });
    const asteroid = new THREE.Mesh(geometry, material);
    asteroid.position.set(0, 0, -3);
    scene.add(asteroid);

    asteroidsRef.current.push({
      mesh: asteroid,
      letter: 'A',
      velocity: new THREE.Vector3(0.01, 0.005, 0),
      rotationSpeed: new THREE.Vector3(0.01, 0.02, 0.005),
      isBoss: false,
    });

    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);
      
      asteroidsRef.current.forEach(asteroidData => {
        asteroidData.mesh.rotation.x += asteroidData.rotationSpeed.x;
        asteroidData.mesh.rotation.y += asteroidData.rotationSpeed.y;
        asteroidData.mesh.position.add(asteroidData.velocity);
        
        // Bounce off screen edges
        if (Math.abs(asteroidData.mesh.position.x) > 3) {
          asteroidData.velocity.x *= -1;
        }
        if (Math.abs(asteroidData.mesh.position.y) > 2) {
          asteroidData.velocity.y *= -1;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Start AR session
  const startAR = useCallback(async () => {
    setPhase('scanning');
    
    // Small delay to simulate scanning
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setPhase('playing');
    await initScene();
    setTargetWord(pickRandomWord());
  }, [initScene]);

  // Stop AR session
  const stopAR = useCallback(() => {
    if (frameIdRef.current) {
      cancelAnimationFrame(frameIdRef.current);
      frameIdRef.current = 0;
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }

    if (rendererRef.current) {
      rendererRef.current.dispose();
      rendererRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    asteroidsRef.current = [];
    setPhase('idle');
  }, []);

  // Submit Wordle guess
  const submitWordleGuess = useCallback((guess: string) => {
    const colors = scoreGuess(guess, targetWord);
    setWordleGuesses([...wordleGuesses, guess]);
    setWordleColors([...wordleColors, colors]);
    
    if (guess === targetWord) {
      safeVibrate([50, 50, 50]);
      setScore(score + 100);
      setWave(wave + 1);
      setPhase('playing');
    }
  }, [targetWord, wordleGuesses, wordleColors, score, wave]);

  // Restart game
  const restartGame = useCallback(() => {
    stopAR();
    setWave(1);
    setScore(0);
    setTargetWord('');
    setWordleGuesses([]);
    setWordleColors([]);
  }, [stopAR]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAR();
    };
  }, [stopAR]);

  return {
    phase,
    startAR,
    stopAR,
    canvasRef,
    videoRef,
    wave,
    score,
    targetWord,
    wordleGuesses,
    wordleColors,
    submitWordleGuess,
    restartGame,
  };
}
