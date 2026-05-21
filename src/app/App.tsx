import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import MissionPage from './pages/MissionPage';
import ARPage from './pages/ARPage';
import DictionaryPage from './pages/DictionaryPage';
import { useBgMusic } from './hooks/useBgMusic';
import { Capacitor } from '@capacitor/core';
import bgMusicSrc from '../music/bmusic.mp3';

function BgMusic() {
  useBgMusic(bgMusicSrc);
  return null;
}

// Component to handle transparent body background for AR pages on native Android
function ARTransparentBackground() {
  const location = useLocation();
  const isNative = Capacitor.isNativePlatform();
  const isAndroid = Capacitor.getPlatform() === 'android';

  useEffect(() => {
    if (isNative && isAndroid) {
      // Apply transparent background on /ar and /mission (for AR preview)
      if (location.pathname === '/ar' || location.pathname === '/mission') {
        document.body.classList.add('ar-transparent');
      } else {
        document.body.classList.remove('ar-transparent');
      }
    }
  }, [location.pathname, isNative, isAndroid]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <BgMusic />
      <ARTransparentBackground />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/ar" element={<ARPage />} />
        <Route path="/codex" element={<DictionaryPage />} />
      </Routes>
    </BrowserRouter>
  );
}