from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import serializers

from .ai import generate_taunt

VALID_EVENTS = {
    'asteroid_smashed',
    'word_solved',
    'wave_start',
    'wave_cleared',
    'game_over',
    'player_hurt',
    'hint_requested',
}


class TauntRequestSerializer(serializers.Serializer):
    event   = serializers.ChoiceField(choices=list(VALID_EVENTS))
    context = serializers.CharField(max_length=200, required=False, default='')


class TauntView(APIView):
    """
    POST /api/boss/taunt/
    Body: { event: "word_solved", context: "Player solved BLAZE in 3 attempts" }
    Returns: { taunt: "You found the word. Enjoy it — it will be your last." }
    """

    def post(self, request):
        sr = TauntRequestSerializer(data=request.data)
        sr.is_valid(raise_exception=True)
        taunt = generate_taunt(
            event=sr.validated_data['event'],
            context=sr.validated_data.get('context', ''),
        )
        return Response({'taunt': taunt, 'event': sr.validated_data['event']})
