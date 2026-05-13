from rest_framework import serializers

from .models import Score


class ScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Score
        fields = [
            'id',
            'player_name',
            'score',
            'wave_reached',
            'words_solved',
            'asteroids_smashed',
            'duration_seconds',
            'created_at',
        ]
        read_only_fields = ['id', 'created_at']

    def validate_player_name(self, value: str) -> str:
        value = value.strip()
        if not value:
            raise serializers.ValidationError('Player name cannot be blank.')
        return value
