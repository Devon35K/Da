from django.db import models


class Score(models.Model):
    """A single completed game session submitted by the React client."""

    player_name      = models.CharField(max_length=24)
    score            = models.PositiveIntegerField()
    wave_reached     = models.PositiveSmallIntegerField(default=1)
    words_solved     = models.PositiveSmallIntegerField(default=0)
    asteroids_smashed = models.PositiveIntegerField(default=0)
    duration_seconds = models.PositiveIntegerField(default=0)
    created_at       = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-score', '-created_at']
        indexes = [
            models.Index(fields=['-score']),
            models.Index(fields=['-created_at']),
        ]

    def __str__(self) -> str:  # pragma: no cover
        return f'{self.player_name} — {self.score} pts (wave {self.wave_reached})'
