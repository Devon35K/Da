import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import MissionPage from './pages/MissionPage';
import { useBgMusic } from './hooks/useBgMusic';
import bgMusicSrc from '../music/bmusic.mp3';

function BgMusic() {
  useBgMusic(bgMusicSrc);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <BgMusic />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mission" element={<MissionPage />} />
      </Routes>
    </BrowserRouter>
  );
}