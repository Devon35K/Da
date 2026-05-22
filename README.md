
  # AR Wordle Smasher (DA)

An immersive Augmented Reality (AR) game combining real-time asteroid smashing with Wordle-style puzzle solving. Players use their camera to detect and destroy asteroids, collect letters, and solve 5-letter words to progress through waves and defeat the Rift Overlord boss.

**Original Design:** https://www.figma.com/design/Mt6QjWTzpFd1zb5k3lQmXt/DA

---

## 🎮 Game Overview

### Core Gameplay Loop
1. **AR Combat Phase** - Smash charging asteroids in your real-world environment using tap controls
2. **Letter Collection** - Destroyed asteroids drop letters that auto-collect into your inventory
3. **Wordle Puzzle Phase** - Between waves, solve 5-letter Wordle puzzles using collected letters to advance
4. **Boss Battles** - Every 10th wave, face the Rift Overlord in a multi-word Wordle battle
5. **Progression** - Survive increasingly difficult waves with faster asteroids and more aggressive attacks

### Key Features
- **WebXR AR Support** - Full augmented reality experience on compatible browsers and devices
- **Native Android AR** - Capacitor integration with ARCore for enhanced mobile AR experience
- **Wave-Based Progression** - 40-second combat waves with escalating difficulty tiers
- **Health & Dodge System** - 100 HP with damage from asteroids/boss, dodge mechanic for invulnerability
- **AI-Powered Hints** - OpenAI integration for contextual puzzle hints (with fallback)
- **Boss Narrative** - Dynamic AI-generated taunts from the Rift Overlord
- **Leaderboard** - Global score tracking with wave/words/asteroids statistics
- **Codex Dictionary** - 47 lore words with IPA, definitions, and examples

---

## 🏗️ Tech Stack

### Frontend
- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 6
- **Styling:** TailwindCSS v4
- **3D Graphics:** Three.js with WebXR
- **Mobile:** Capacitor 8 (Android)
- **Routing:** React Router 7
- **UI Components:** Radix UI + shadcn/ui
- **Animations:** Motion (Framer Motion)
- **Fonts:** Press Start 2P (pixel/retro aesthetic)

### Backend
- **Framework:** Django 5
- **API:** Django REST Framework
- **Database:** SQLite (development)
- **Configuration:** python-decouple
- **AI Integration:** OpenAI (gpt-4o-mini)
- **CORS:** Configured for cross-origin requests

### Mobile (Android)
- **AR Framework:** ARCore via Capacitor plugin
- **Build:** Gradle
- **Native Features:** Camera, plane detection, hit testing

---

## 📁 Project Structure

```
Da/
├── src/
│   ├── app/
│   │   ├── components/      # React components (WordlePuzzle, CelebrationModal, etc.)
│   │   ├── data/            # Game data (wardenCodex, wardenDictionary)
│   │   ├── hooks/           # Custom React hooks (useARGame, useWaveGame, useCodex, etc.)
│   │   ├── pages/           # Page components (HomePage, MissionPage, ARPage, DictionaryPage)
│   │   ├── services/        # API service functions
│   │   ├── utils/           # Utility functions (sfx, etc.)
│   │   └── App.tsx          # Main app component with routing
│   ├── 3dmodel/             # 3D GLB asteroid models
│   ├── music/               # Background music and sound effects
│   ├── main.tsx             # Entry point
│   └── vite-env.d.ts        # Vite type definitions
├── backend/
│   ├── apps/
│   │   ├── codex/           # Word list, dictionary, AI hints
│   │   ├── boss/            # Rift Overlord AI taunts
│   │   └── scores/          # Leaderboard models and API
│   ├── arwordle/            # Django project settings
│   ├── manage.py            # Django management script
│   └── requirements.txt     # Python dependencies
├── android/                 # Capacitor Android project
│   └── app/
│       └── src/main/java/   # Native AR plugin (ARPlugin.java)
├── public/                  # Static assets
├── dist/                    # Build output
├── capacitor.config.json    # Capacitor configuration
├── vite.config.ts           # Vite configuration
└── package.json             # Frontend dependencies
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ and **pnpm** (recommended) or npm
- **Python** 3.10+
- **Android Studio** (for Android development)
- **ARCore-compatible device** (for Android AR testing)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd Da
```

2. **Install frontend dependencies**
```bash
pnpm install
# or
npm install
```

3. **Set up the backend**
```powershell
# Create and activate Python virtual environment
python -m venv .venv
.venv\Scripts\Activate.ps1  # PowerShell
# or
.venv\Scripts\activate      # Command Prompt

# Install Python dependencies
pip install django djangorestframework python-decouple django-cors-headers

# Copy environment template
copy backend\.env.example backend\.env

# Run migrations
cd backend
python manage.py migrate
cd ..
```

4. **Configure environment variables**

**Frontend** (`.env.local`):
```env
VITE_API_BASE=http://localhost:8000
VITE_OPENAI_API_KEY=your_openai_key  # Optional, for direct AI fallback
VITE_OPENAI_MODEL=gpt-4o-mini
```

**Backend** (`backend\.env`):
```env
DJANGO_SECRET_KEY=your-secret-key
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1,0.0.0.0
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://127.0.0.1:5173
CORS_ALLOW_ALL_ORIGINS=True
OPENAI_API_KEY=your_openai_key  # Optional
OPENAI_MODEL=gpt-4o-mini
```

---

## 🏃 Running the Project

### Development Mode

**Option 1: Run both servers simultaneously**
```powershell
# Terminal 1 - Backend
cd backend
python manage.py runserver

# Terminal 2 - Frontend
pnpm dev
```

**Option 2: Run with single command (PowerShell)**
```powershell
# Start backend in background
Start-Process -FilePath ".venv\Scripts\python.exe" -ArgumentList "backend\manage.py runserver" -WorkingDirectory .

# Start frontend
pnpm dev
```

### Access Points
- **Frontend:** https://localhost:5173/
- **Backend API:** http://localhost:8000/
- **Django Admin:** http://localhost:8000/admin/
- **API Health Check:** http://localhost:8000/api/health/

### Production Build

```bash
# Build web assets
pnpm run build

# Sync to Android
npx cap sync android

# Build Android APK
cd android
.\gradlew.bat assembleDebug
```

The APK will be at `android/app/build/outputs/apk/debug/app-debug.apk`

---

## 📱 Android Development

### AR Implementation Differences

**Web App (WebXR)**
- Uses **WebXR API** for AR functionality
- Works in supported browsers (Chrome/Edge on Android, Safari on iOS)
- Plane detection and tracking handled by browser's WebXR implementation
- Three.js renders 3D content directly in the WebGL canvas
- No native code required - fully web-based
- **Status:** Fully functional

**Android APK (ARCore)**
- Uses **ARCore** native Android library for AR
- Custom Capacitor plugin (`ARPlugin.java`) bridges JavaScript to native ARCore
- Native plane detection with higher accuracy and performance
- Camera background rendered via OpenGL ES behind transparent WebView
- Requires native Android compilation
- **Status:** Currently has compilation errors (see Troubleshooting)

### Setting up Android Development Environment

1. **Install Android Studio**
   - Download from https://developer.android.com/studio
   - Install Android SDK (API level 33+ recommended)
   - Install Android SDK Build-Tools
   - Install Android SDK Platform-Tools

2. **Set ANDROID_HOME environment variable**
```powershell
# Add to system environment variables or set temporarily:
$env:ANDROID_HOME="C:\Users\YourUsername\AppData\Local\Android\Sdk"

# Add to PATH:
$env:PATH += ";$env:ANDROID_HOME\platform-tools;$env:ANDROID_HOME\tools"
```

3. **Enable USB Debugging on Android Device**
   - Go to Settings > About Phone
   - Tap "Build Number" 7 times to enable Developer Options
   - Go to Settings > Developer Options
   - Enable "USB Debugging"
   - Connect device via USB and accept debugging prompt

4. **Verify device connection**
```bash
adb devices
# Should show your device serial number
```

### Building the Android APK

**Step 1: Build web assets**
```bash
pnpm run build
```

**Step 2: Sync to Android**
```bash
npx cap sync android
```
This copies the built web assets to the Android project and updates Capacitor configuration.

**Step 3: Build APK**
```bash
cd android
.\gradlew.bat assembleDebug
```

The APK will be generated at:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

**Step 4: Install on device**
```bash
# Option 1: Via ADB
adb install android\app\build\outputs\apk\debug\app-debug.apk

# Option 2: Via Gradle
.\gradlew.bat installDebug
```

### Running in Development Mode

**Option 1: Live Reload (Capacitor CLI)**
```bash
# Start frontend dev server
pnpm dev

# In another terminal, sync and run on device
npx cap run android
```
This enables live reload - changes to web code will automatically refresh on the device.

**Option 2: Android Studio**
```bash
# Open Android project
start android

# Or via command line
cd android
.\gradlew.bat assembleDebug
```
Then open Android Studio, import the project, and run on connected device/emulator.

### Android Project Structure

```
android/
├── app/
│   ├── src/
│   │   └── main/
│   │       ├── java/com/figma/wordlesmasher/
│   │       │   ├── MainActivity.java           # Capacitor main activity
│   │       │   └── ARPlugin.java               # Custom AR plugin
│   │       ├── assets/
│   │       │   └── public/                     # Synced web assets
│   │       └── res/                            # Android resources
│   ├── build.gradle                            # App-level Gradle config
│   └── capacitor.build.gradle                  # Capacitor-specific config
├── build.gradle                                # Project-level Gradle config
├── capacitor.settings.gradle                   # Capacitor settings
├── gradle.properties                           # Gradle properties
└── gradlew.bat                                 # Gradle wrapper (Windows)
```

### ARPlugin.java (Custom Native Plugin)

The `ARPlugin.java` file provides native AR functionality that bridges JavaScript to ARCore:

**Key Features:**
- **Camera Background Rendering** - Renders ARCore camera feed behind transparent WebView
- **Plane Detection** - Detects horizontal and vertical planes in real-world environment
- **Frame Data Emission** - Emits per-frame AR data to JavaScript (matrices, planes, camera position)
- **Hit Testing** - Provides tap-to-place functionality for object placement
- **Light Estimation** - Captures environmental light intensity for realistic rendering

**Current Issues:**
The plugin has compilation errors due to API incompatibilities:
- Line 234-235: `PluginCall.getNumber()` method not available in Capacitor 8
- Line 342: `plane.getPolygon()` returns `FloatBuffer` instead of `Point[]`
- Line 345-346: `Point` class doesn't have `x` and `z` fields

**Workaround:**
Use the web-based WebXR implementation which is fully functional and works on Android browsers.

### Capacitor Configuration

`capacitor.config.json` contains Android-specific settings:
```json
{
  "appId": "com.figma.wordlesmasher",
  "appName": "AR Wordle Smasher",
  "webDir": "dist",
  "android": {
    "backgroundColor": "#00000000"  // Transparent background for AR
  }
}
```

### Testing AR on Android

**WebXR (Browser-based):**
1. Open https://localhost:5173 on your Android device
2. Ensure you're on the same Wi-Fi network as your development machine
3. Use Chrome or Edge browser
4. Grant camera permissions when prompted
5. Point camera at a flat surface to detect planes

**Native ARCore (APK):**
1. Install the built APK on your device
2. Grant camera and storage permissions
3. ARCore will automatically download if not installed
4. Point camera at a flat surface to detect planes
5. Note: Currently non-functional due to compilation errors

### Debugging Android Issues

**View ADB Logs:**
```bash
adb logcat | findstr "ARPlugin Capacitor"
```

**Check Capacitor Sync:**
```bash
npx cap doctor
```

**Clear Build Cache:**
```bash
cd android
.\gradlew.bat clean
cd ..
npx cap sync android
```

**Reinstall App:**
```bash
adb uninstall com.figma.wordlesmasher
adb install android\app\build\outputs\apk\debug\app-debug.apk
```

### Production Build (Release APK)

For a release build, you need to:
1. Generate a signing keystore
2. Update `android/app/build.gradle` with signing configuration
3. Build the release APK

```bash
cd android
.\gradlew.bat assembleRelease
```

The release APK will be at:
```
android/app/build/outputs/apk/release/app-release.apk
```

### AR Implementation Comparison

| Feature | WebXR (Web) | ARCore (Android) |
|---------|-------------|------------------|
| **Platform** | Browser | Native App |
| **AR Library** | WebXR API | ARCore |
| **Performance** | Good | Better |
| **Plane Detection** | Browser-dependent | Native ARCore (more accurate) |
| **Battery Usage** | Higher | Optimized |
| **Setup** | No installation required | Requires APK installation |
| **Updates** | Instant (web) | Requires app update |
| **Status** | ✅ Fully functional | ❌ Compilation errors |

---

## 🎯 Game Mechanics

### Wave System
- **Wave Duration:** 60 seconds per wave
- **Boss Waves:** Every 10th wave (wave 10, 20, 30, etc.)
- **Speed Tiers:** 4 difficulty tiers that increase every 10 seconds
- **Health Restoration:** Full HP restored at the start of each new wave

### Asteroid Behavior
- **Pool Size:** 6 asteroids (3 active, 3 spare)
- **Behaviors:** Straight, curve, orbit-strike
- **States:** Drift → Charging (600ms telegraph) → Attacking
- **Damage:** 18 HP per hit
- **Dodge:** Horizontal swipe grants 400ms invulnerability

### Wordle Puzzle
- **Guesses:** 6 attempts per puzzle
- **Letter Inventory:** Collected from smashed asteroids
- **Bias:** 60% drop rate toward target word letters
- **Boss Words Required:** 3 + floor((wave-10)/10)

### Health System
- **Max HP:** 100
- **Damage:** 18 per asteroid hit, 18 per boss attack (8 for wrong guess)
- **Game Over:** HP reaches 0

---

## 🔌 API Reference

### Authentication
No authentication required for development endpoints.

### Endpoints

#### Health Check
```
GET /api/health/
Response: {"status":"ok","service":"ar-wordle-backend"}
```

#### Word Management
```
GET /api/codex/word/?exclude=BLAZE
Response: {"word":"STORM","length":5}

GET /api/codex/words/
Response: {"words":["BLAZE","STORM",...],"final_seal":"RIFTS","count":47}
```

#### AI Hints
```
POST /api/codex/hint/
Request: {
  "word": "BLAZE",
  "attempts": [
    {"guess":"FLAME","colors":["yellow","gray","green","gray","green"]}
  ]
}
Response: {"hint":"The cosmic fire you seek begins where strength ignites."}
```

#### Boss Taunts
```
POST /api/boss/taunt/
Request: {"event":"word_solved","context":"Player solved BLAZE in 3 attempts"}
Response: {"taunt":"The seal weakens… but the Overlord is eternal.","event":"word_solved"}

Valid events: asteroid_smashed, word_solved, wave_start, wave_cleared, game_over, player_hurt, hint_requested
```

#### Scores
```
POST /api/scores/
Request: {
  "player_name": "Cascade",
  "score": 1240,
  "wave_reached": 5,
  "words_solved": 3,
  "asteroids_smashed": 42,
  "duration_seconds": 280
}
Response: {"id":1,"player_name":"Cascade","score":1240,...}

GET /api/scores/
Response: Paginated list of all scores

GET /api/scores/top/?limit=10
Response: Top 10 highest scores
```

---

## 🎨 Design System

### Color Palette
- **Background:** #0a0118 (dark purple)
- **Primary:** #8b5cf6 (purple)
- **Secondary:** #ec4899 (pink)
- **Accent:** #10b981 (green)
- **Warning:** #facc15 (yellow)
- **Error:** #ef4444 (red)

### Typography
- **Font Family:** Press Start 2P (Google Fonts)
- **Style:** Pixel/retro gaming aesthetic

### Components
- **UI Library:** Radix UI primitives
- **Styling:** TailwindCSS v4 utility classes
- **Icons:** Lucide React

---

## 🔧 Configuration

### Vite Configuration (`vite.config.ts`)
- **HTTPS:** Enabled with self-signed certificate (required for WebXR)
- **Host:** 0.0.0.0 (allows LAN access for mobile testing)
- **Proxy:** /api routes proxied to Django backend
- **SSL Plugin:** basicSsl for HTTPS development

### Capacitor Configuration (`capacitor.config.json`)
- **App ID:** com.figma.wordlesmasher
- **App Name:** AR Wordle Smasher
- **Web Dir:** dist
- **Android Background:** Transparent

---

## 🐛 Troubleshooting

### Common Issues

**WebXR not working**
- Ensure HTTPS is enabled (required for WebXR)
- Check browser compatibility (Chrome/Edge on Android, Safari on iOS)
- Verify device has AR capabilities

**Backend connection refused**
- Ensure Django server is running on port 8000
- Check CORS settings in backend/.env
- Verify VITE_API_BASE in frontend .env.local

**Android build fails**
- Set ANDROID_HOME environment variable
- Ensure Android SDK is installed
- Run `npx cap sync android` before building

**ARPlugin compilation errors**
- Currently has API compatibility issues with Capacitor 8
- Use WebXR (web-based AR) as fallback
- See ARPlugin.java lines 234-235, 342-346 for specific errors

---

## 📚 Additional Resources

- **Figma Design:** https://www.figma.com/design/Mt6QjWTzpFd1zb5k3lQmXt/DA
- **Backend Documentation:** See `backend/README.md` for detailed API reference
- **WebXR Specification:** https://wwwimmersiveweb.dev/
- **ARCore Documentation:** https://developers.google.com/ar
- **Capacitor Docs:** https://capacitorjs.com/docs

---

## 📝 License

This project is part of the DA (AR Wordle Smasher) initiative. See original design link for attribution.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on web and Android
5. Submit a pull request

---

## 📞 Support

For issues related to:
- **Game Mechanics:** Check game data in `src/app/data/wardenCodex.ts`
- **API Issues:** Check backend logs and Django admin panel
- **AR Issues:** Verify device compatibility and WebXR support
- **Build Issues:** Check environment variables and dependencies