import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import MissionPage from './pages/MissionPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mission" element={<MissionPage />} />
      </Routes>
    </BrowserRouter>
  );
}