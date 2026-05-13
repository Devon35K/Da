# AR Wordle Smasher — Backend

Django 5 + DRF backend providing the REST API for the AR Wordle Smasher game.

## Stage 1–5 scope

- ✅ Django project skeleton
- ✅ CORS configured for Vite dev server
- ✅ DRF with pagination + browsable API in dev
- ✅ Scores API (POST submit + GET list + GET top)
- ✅ Admin panel for moderating scores
- ✅ Codex word endpoint (random word + full list)
- ✅ AI hint endpoint (OpenAI, with fallback)
- ✅ Boss narrative endpoint (OpenAI, with fallback)
- ⏳ WebSocket live AI (Stage 6)

## First-time setup (Windows / PowerShell)

```powershell
# 1. From repo root, create & activate a virtualenv
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1   # If you get an ExecutionPolicy error:
                               # Set-ExecutionPolicy -Scope CurrentUser RemoteSigned

# 2. Install Python dependencies
pip install -r requirements.txt

# 3. Copy env template and create the SQLite DB
copy .env.example .env
python manage.py migrate

# 4. (Optional) Create an admin user to use the /admin/ panel
python manage.py createsuperuser

# 5. Run the dev server (binds to all interfaces so your phone can reach it)
python manage.py runserver 0.0.0.0:8000
```

## Verify it's running

Open in your browser:

| URL | What you should see |
|---|---|
| `http://localhost:8000/api/health/` | `{"status":"ok","service":"ar-wordle-backend"}` |
| `http://localhost:8000/api/scores/` | DRF browsable API, empty list |
| `http://localhost:8000/admin/` | Django admin login |

## Connecting from your phone

When testing AR on your phone, find your PC's LAN IP (e.g. `192.168.1.42`) and visit:

- API base: `http://192.168.1.42:8000/`

Make sure your PC's firewall allows inbound TCP on port 8000.

In `.env`, ensure your phone IP / Vite tunnel origin is in `CORS_ALLOWED_ORIGINS`
(or just keep `CORS_ALLOW_ALL_ORIGINS=True` for dev).

## API reference

### `GET /api/health/`
Liveness check. No params. Returns `{"status":"ok"}`.

### `POST /api/scores/`
Submit a finished game session.

```json
{
  "player_name": "Cascade",
  "score": 1240,
  "wave_reached": 5,
  "words_solved": 3,
  "asteroids_smashed": 42,
  "duration_seconds": 280
}
```

Returns the saved Score object with `id` and `created_at`.

### `GET /api/scores/`
Paginated list of all scores. Query params: `limit`, `offset`.

### `GET /api/scores/top/?limit=10`
Top N highest scores. `limit` defaults to 10, max 100.

### `GET /api/codex/word/?exclude=BLAZE`
Returns a single random word from the Warden's Codex.
The optional `exclude` param prevents repeating the previous word.

```json
{ "word": "STORM", "length": 5 }
```

### `GET /api/codex/words/`
Returns the full word list and the final boss seal word.

```json
{ "words": ["BLAZE", "STORM", ...], "final_seal": "RIFTS", "count": 46 }
```

### `POST /api/codex/hint/`
Asks the AI Warden for a cryptic hint. Falls back to canned hints if no API key.

Request:
```json
{
  "word": "BLAZE",
  "attempts": [
    { "guess": "FLAME", "colors": ["yellow", "gray", "green", "gray", "green"] },
    { "guess": "SLATE", "colors": ["gray", "gray", "green", "gray", "green"] }
  ]
}
```

Response:
```json
{ "hint": "The cosmic fire you seek begins where strength ignites." }
```

### `POST /api/boss/taunt/`
Returns a Rift Overlord taunt for the given game event.

Valid events: `asteroid_smashed`, `word_solved`, `wave_start`, `wave_cleared`, `game_over`, `player_hurt`, `hint_requested`.

Request:
```json
{ "event": "word_solved", "context": "Player solved BLAZE in 3 attempts" }
```

Response:
```json
{ "taunt": "The seal weakens… but the Overlord is eternal.", "event": "word_solved" }
```

## AI Setup (Stage 4 + 5)

The AI endpoints work **without** an API key by returning curated fallback lines.
To enable real AI generation:

1. Get an API key from <https://platform.openai.com/api-keys>
2. Edit `backend/.env`:
   ```
   OPENAI_API_KEY=sk-...
   OPENAI_MODEL=gpt-4o-mini
   ```
3. Restart the dev server.

`gpt-4o-mini` costs roughly **$0.0001 per hint or taunt** — basically free for development.
