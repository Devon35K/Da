"""
Canonical word list for the Warden's Codex — mirrors wardenCodex.ts on the frontend.
Kept in one place so backend and frontend can diverge gracefully (backend is source of truth).
"""
import random

WARDEN_CODEX: list[str] = [
    # Combat & magic
    'BLAZE', 'STORM', 'FROST', 'FLAME', 'SPELL', 'MAGIC', 'WRATH', 'CRYPT',
    'CURSE', 'POWER', 'SWORD', 'ARROW', 'ARMOR', 'BRAVE', 'QUEST', 'SHADE',
    # Creatures & realms
    'GHOST', 'BEAST', 'DEMON', 'ANGEL', 'RAVEN', 'TIGER', 'EAGLE', 'GIANT',
    'KNAVE', 'NOBLE', 'ELDER', 'ROYAL', 'CROWN', 'RELIC', 'VAULT', 'TOTEM',
    # Elements & states
    'EARTH', 'ETHER', 'NIGHT', 'LIGHT', 'PRIDE', 'HONOR', 'VALOR', 'GLINT',
    'DREAM', 'JEWEL', 'CRAFT', 'SCALE', 'RANGE', 'FATAL',
]

FINAL_SEAL = 'RIFTS'


def pick_random_word(exclude: str | None = None) -> str:
    pool = [w for w in WARDEN_CODEX if w != exclude] if exclude else WARDEN_CODEX
    return random.choice(pool or WARDEN_CODEX)
