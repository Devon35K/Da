"""
AI helper for the Codex — generates Wordle hints using OpenAI.
Falls back gracefully when OPENAI_API_KEY is not set.
"""
import logging
from decouple import config

logger = logging.getLogger(__name__)

# Lazy import: only fail at call-time if openai isn't installed
_openai_client = None


def _get_client():
    global _openai_client
    if _openai_client is not None:
        return _openai_client
    api_key = config('OPENAI_API_KEY', default='')
    if not api_key:
        return None
    try:
        from openai import OpenAI
        _openai_client = OpenAI(api_key=api_key)
    except ImportError:
        logger.warning('openai package not installed. Run: pip install openai')
    return _openai_client


# ── Fallback hints when AI is unavailable ────────────────────────────────────
_FALLBACK_HINTS = [
    "The Codex stirs… focus on letters you have not yet tried.",
    "One of the letters you found sits in the wrong constellation.",
    "Think of words that combine strength with mystery, Warden.",
    "The seal is forged from elements both ancient and familiar.",
    "Your previous guesses circle the truth — realign your focus.",
]

import random as _random


def _fallback_hint() -> str:
    return _random.choice(_FALLBACK_HINTS)


def generate_hint(
    target_word: str,
    attempts: list[dict],   # [{"guess": "FLAME", "colors": ["yellow", ...]}]
    model: str | None = None,
) -> str:
    """
    Ask OpenAI for a thematic one-sentence Wordle hint.
    Returns fallback string if API is unavailable.
    """
    client = _get_client()
    if not client:
        return _fallback_hint()

    model = model or config('OPENAI_MODEL', default='gpt-4o-mini')

    attempts_text = ''
    for a in attempts:
        colored = ' '.join(
            f'{letter}({color[0].upper()})'   # e.g. F(Y) L(G) A(G) M(G) E(Y)
            for letter, color in zip(a['guess'], a['colors'])
        )
        attempts_text += f'  • {a["guess"]}: {colored}\n'

    prompt = (
        f'You are the Warden, an ancient cosmic entity guarding the Rift Codex.\n'
        f'A player is solving the secret 5-letter word: "{target_word}".\n'
        f'Their attempts so far (G=green correct, Y=yellow wrong-position, X=gray not-in-word):\n'
        f'{attempts_text or "  (no attempts yet)"}\n'
        f'Give a single cryptic, dramatic hint (max 20 words) that helps WITHOUT '
        f'directly spelling out the word. Be poetic and cosmic. No quotation marks.'
    )

    try:
        response = client.chat.completions.create(
            model=model,
            messages=[{'role': 'user', 'content': prompt}],
            max_tokens=60,
            temperature=0.85,
        )
        return response.choices[0].message.content.strip()
    except Exception as exc:
        logger.error('OpenAI hint generation failed: %s', exc)
        return _fallback_hint()
