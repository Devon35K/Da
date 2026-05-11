# AR Wordle Smasher: The Warden's Codex

[![React](https://img.shields.io/badge/React-18+-61DAFB.svg)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF.svg)](https://vitejs.dev)
[![Django](https://img.shields.io/badge/Django-5.0+-092E20.svg)](https://djangoproject.com)
[![AR.js](https://img.shields.io/badge/AR.js-3.4+-FF6B6B.svg)](https://ar-js-org.github.io/AR.js-Docs/)
[![Android](https://img.shields.io/badge/Android-Chrome_compatible-green.svg)](https://developer.android.com)
[![License](https://img.shields.io/badge/license-Academic-red.svg)]()

> **Antigravity IDE — Game Design Document v2.0**
> **University of Southeastern Philippines — ICE 323 Professional Elective 3**
> **May 2026**

An augmented reality educational game built with **React + Vite** and **AR.js** where you physically smash falling 3D meteors to collect letters and solve Wordle-style puzzles in real-time. Defend your space against 2.5D enemies and survive the ultimate Final Boss encounter to rebuild the Warden's Codex.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Wordle Mode](#wordle-mode-the-educational-hook)
3. [Enemy & Boss System](#enemy--boss-system)
4. [Technical Architecture](#technical-architecture)
5. [Visual Style](#visual-style-25d-hybrid)
6. [Build Instructions](#build-instructions)
7. [Team](#team)

---

## 🌌 The Lore: The Last Warden

Earth's orbit has been breached by the **Rift Overlord**, a primordial entity from beyond the asteroid belt. As the **Last Warden**, you are the only one capable of channeling ancient elemental energy through your hands. To seal the Rift, you must rebuild the **Warden's Codex** — a lost archive of powerful runes — by smashing the asteroids that contain them.

---

## 🎮 Project Overview

**AR Wordle Smasher** is an immersive augmented reality educational experience that blends high-action physical combat with brain-teasing word puzzles. It runs entirely in the browser using **AR.js** for markerless AR plane detection, with a **React + Vite** frontend and a **Django REST** backend for leaderboards and word data.

### Core Concept

- **Physical Smash**: Tap or gesture to shatter 3D asteroid models anchored in AR space.
- **Letter Drops**: Smashed asteroids drop glowing letters into the scene.
- **Wordle Puzzles**: Collect letters in the correct sequence to complete the "Warden's Word" and unlock powerful spells.
- **Boss Defense**: Survive attacks from the Rift Overlord in a final climactic battle.

### Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | React 18 + Vite 5 | UI, game state, component architecture |
| **AR Framework** | AR.js (A-Frame) | Markerless AR, plane detection, 3D scene rendering |
| **3D Scene** | A-Frame | WebXR-compatible 3D entities and physics |
| **Backend** | Django + Django REST Framework | Leaderboards, player stats, word dictionary API |
| **Styling** | CSS Modules / Tailwind | HUD, Wordle tray, menus |

---

## 📚 Wordle Mode: The Educational Hook

Every wave presents a hidden 5-letter word from the **Warden's Codex**.

### The Gameplay Loop

1. **Target Word**: A hint is shown (e.g., *"A celestial body"*).
2. **Shatter & Reveal**: Smashed meteors have a 60% chance to drop a random letter into the AR scene.
3. **Color Feedback**:
   - 🟩 **Green**: Correct letter, correct position — flies into the Wordle Tray.
   - 🟨 **Yellow**: Correct letter, wrong position — stays as a floating hint.
   - ⬛ **Gray**: Not in the word — dissolves into dust.
4. **Completion**: Completing the word grants a score multiplier and triggers a "Codex Pulse" that clears all nearby enemies.

---

## 👾 Enemy & Boss System

### Regular Enemies (2.5D Billboard Sprites)

- **Dust Seekers**: Fast, small enemies that try to steal your collected letters.
- **Void Asteroids**: Massive rocks that require multiple hits to break.

### The Final Boss: The Rift Overlord

- **Appearance**: A large 2.5D composite sprite with animated glowing parts rendered as an A-Frame entity.
- **Attacks**:
  - **Meteor Rain**: Fires a barrage of asteroids toward the player's viewport.
  - **Codex Jammer**: Scrambles the letters in your Wordle Tray, forcing you to re-solve.
  - **Tap Lockdown**: Temporarily disables tap input, requiring the player to wait or dodge.
- **Weakness**: Can only be defeated by completing the "Final Seal" word.

---

## 🛠️ Technical Architecture

```
ar-wordle-smasher/
├── frontend/                  # React + Vite app
│   ├── public/
│   │   └── assets/            # 3D models, sprites, audio
│   ├── src/
│   │   ├── components/        # React UI components
│   │   │   ├── HUD/           # Health, score, wave display
│   │   │   ├── WordleTray/    # Letter grid + color feedback
│   │   │   ├── TitleScreen/
│   │   │   └── ARSetup/       # Plane scan + START flow
│   │   ├── scenes/            # A-Frame AR scene definitions
│   │   │   ├── GameScene.jsx
│   │   │   └── BossScene.jsx
│   │   ├── hooks/             # Custom React hooks (useGameState, useARSession)
│   │   ├── services/          # Django API calls (leaderboard, words)
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── backend/                   # Django REST API
    ├── manage.py
    ├── requirements.txt
    ├── config/
    │   └── settings.py
    └── api/
        ├── models.py          # Player, Score, WordEntry
        ├── serializers.py
        ├── views.py
        └── urls.py
```

### AR.js + A-Frame Integration

AR.js is imported via CDN in `index.html` alongside A-Frame. React components render the game UI (HUD, Wordle Tray, menus) as overlaying DOM elements, while the AR scene (`<a-scene>`) renders beneath them.

```html
<!-- index.html -->
<script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
```

```jsx
// GameScene.jsx — A-Frame scene embedded inside React
function GameScene() {
  return (
    <a-scene embedded arjs="sourceType: webcam; trackingMethod: best;" vr-mode-ui="enabled: false">
      <a-entity id="asteroid-container" />
      <a-camera gps-camera rotation-reader />
    </a-scene>
  );
}
```

### Django REST API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/word/random/` | Fetch a random 5-letter puzzle word |
| `GET` | `/api/word/validate/?word=RUNE` | Validate a submitted word |
| `GET` | `/api/leaderboard/` | Fetch top scores |
| `POST` | `/api/score/submit/` | Submit a player's score |

---

## 🎨 Visual Style (2.5D Hybrid)

- **Asteroids**: 3D GLTF/OBJ models anchored in the AR plane via A-Frame entities.
- **Enemies**: 2D sprite billboards (`<a-plane>` with sprite textures) that always face the camera.
- **Letters**: A-Frame `<a-text>` entities with custom glowing materials (green / yellow / gray).
- **UI**: React DOM overlay for the Wordle Tray, HUD, and menus — floats above the AR canvas.

---

## 🚀 Build Instructions

### Prerequisites

- **Node.js** 18+
- **Python** 3.11+
- **A physical mobile device** with a camera (AR.js does not work on desktop emulators)
- A modern mobile browser (Chrome on Android recommended)

### Frontend Setup (React + Vite)

```bash
# 1. Navigate to frontend directory
cd frontend

# 2. Install dependencies
npm install

# 3. Start dev server (must be served over HTTPS for camera access)
npm run dev -- --https

# 4. Build for production
npm run build
```

> **Note**: AR.js requires HTTPS and camera permissions. During development, Vite's `--https` flag generates a self-signed cert. Accept the browser warning on your device to proceed.

### Backend Setup (Django)

```bash
# 1. Navigate to backend directory
cd backend

# 2. Create and activate virtual environment
python -m venv venv
source venv/bin/activate    # Windows: venv\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Run migrations
python manage.py migrate

# 5. Start the development server
python manage.py runserver 0.0.0.0:8000
```

### Connecting Frontend to Backend

In `frontend/src/services/api.js`, set your Django server address:

```js
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000/api";
```

Create a `frontend/.env.local` file:

```
VITE_API_URL=http://<your-local-ip>:8000/api
```

Use your machine's local IP (not `localhost`) so your mobile device can reach it on the same network.

### Testing on a Physical Device

1. Connect your device and development machine to the **same Wi-Fi network**.
2. Start both the Vite dev server and Django server.
3. Open `https://<your-local-ip>:5173` on your mobile browser.
4. Accept the camera permission prompt.
5. Point the camera at a flat surface — once a plane is detected, tap **START**.

---

## 👥 The Team

**University of Southeastern Philippines**
**ICE 323 — Professional Elective 3**

| Name | Role | Responsibility |
|------|------|----------------|
| **Crucio, John Paul S.** | Lead Developer | Game Logic, Wordle Engine, Django API |
| **Micaroz, Arthur Dale E.** | AR Implementation | AR.js / A-Frame Scene, 3D Assets |
| **Renigado, Kyle Harvey C.** | Interaction Lead | Gesture/Tap System, React UI/UX |

---

## 📄 License

Academic Project — University of Southeastern Philippines

---

## 🙏 Acknowledgments

- **AR.js** for browser-based augmented reality
- **A-Frame** for the WebXR 3D scene framework
- **React + Vite** for the fast frontend development experience
- **Django REST Framework** for the backend API

---

*AR Wordle Smasher GDD v2.0 — May 2026*