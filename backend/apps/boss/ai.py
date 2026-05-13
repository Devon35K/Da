"""
AI helper for the Rift Overlord boss narrative.
Generates dynamic taunts, threats, and reactions based on game events.
Falls back to curated canned lines when OpenAI is unavailable.
"""
import logging
import random
from decouple import config

logger = logging.getLogger(__name__)

# ── Event-keyed fallback taunts ───────────────────────────────────────────────
_FALLBACK_TAUNTS: dict[str, list[str]] = {
    'asteroid_smashed': [
        "Another fragment falls… you cannot stop the Rift.",
        "Destroy all you wish — the void is infinite.",
        "Each rock you shatter fuels my hunger.",
        "Impressive reflexes, insect. Useless.",
    ],
    'word_solved': [
        "The seal weakens… but the Overlord is eternal.",
        "You found the word. Enjoy it — it will be your last.",
        "Clever Warden. Too clever for your own survival.",
        "One word closer to your doom.",
    ],
    'wave_start': [
        "A new wave descends upon you. Brace yourself, mortal.",
        "The asteroids grow angrier. So do I.",
        "You survived this long by luck. Luck runs out.",
        "My sentinels multiply. You will not.",
    ],
    'game_over': [
        "The Rift swallows you whole. As it always will.",
        "You were never worthy of the Codex.",
        "Fade into the void, Warden. Fade.",
        "Your score is remembered only by me — as a disappointment.",
    ],
    'wave_cleared': [
        "Impossible. My asteroids… defeated?",
        "You clear the sky, but I darken it again.",
        "One wave falls. Ten more await.",
        "Enjoy the silence. It ends now.",
    ],
    'player_hurt': [
        "Feel the weight of the cosmos, little Warden.",
        "Pain is a reminder that you are mortal.",
        "The Rift hungers. You bleed.",
        "Your shield cracks like a fossil under my might.",
    ],
    'hint_requested': [
        "You need guidance? How… pathetically human.",
        "Seek your hint. It will not save you.",
        "Even with help, the Codex resists the weak.",
        "The Warden begs the Codex for answers. Typical.",
    ],
    'default': [
        "The Rift watches. Always.",
        "Your every move is meaningless against eternity.",
        "I am the Overlord. You are a flicker of light in the dark.",
        "Continue, Warden. Entertain me.",
    ],
}


def get_fallback_taunt(event: str) -> str:
    pool = _FALLBACK_TAUNTS.get(event, _FALLBACK_TAUNTS['default'])
    return random.choice(pool)


def generate_taunt(
    event: str,
    context: str = '',
    model: str | None = None,
) -> str:
    """
    Generate a boss taunt using OpenAI.
    Falls back to curated lines if API key is missing or call fails.
    """
    api_key = config('OPENAI_API_KEY', default='')
    if not api_key:
        return get_fallback_taunt(event)

    model = model or config('OPENAI_MODEL', default='gpt-4o-mini')

    event_desc = {
        'asteroid_smashed': 'the player just smashed one of his asteroid sentinels',
        'word_solved':       'the player just solved a Wordle word and weakened a Rift seal',
        'wave_start':        'a new wave of asteroids is beginning',
        'wave_cleared':      'the player cleared an entire wave of asteroids',
        'game_over':         'the player was destroyed and the game ended',
        'player_hurt':       'an asteroid struck the player and damaged them',
        'hint_requested':    'the player asked the Codex for a hint',
    }.get(event, f'something happened: {event}')

    prompt = (
        'You are the Rift Overlord — a dramatic, cosmic villain in an AR asteroid game.\n'
        f'Event: {event_desc}.\n'
        f'{("Context: " + context) if context else ""}\n'
        'Deliver one short, theatrical taunt or reaction (max 15 words). '
        'Be menacing, occasionally darkly amusing. No quotation marks. No emojis.'
    )

    try:
        from openai import OpenAI
        client = OpenAI(api_key=api_key)
        response = client.chat.completions.create(
            model=model,
            messages=[{'role': 'user', 'content': prompt}],
            max_tokens=40,
            temperature=0.9,
        )
        return response.choices[0].message.content.strip()
    except ImportError:
        logger.warning('openai package not installed — using fallback taunts.')
        return get_fallback_taunt(event)
    except Exception as exc:
        logger.error('OpenAI taunt generation failed: %s', exc)
        return get_fallback_taunt(event)
