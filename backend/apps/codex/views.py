from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import serializers

from .words import WARDEN_CODEX, FINAL_SEAL, pick_random_word
from .ai import generate_hint


class WordView(APIView):
    """
    GET /api/codex/word/?exclude=BLAZE
    Returns a random word from the Codex (optionally excluding the last word played).

    GET /api/codex/words/
    Returns the full word list + the final seal word.
    """

    def get(self, request):
        exclude = request.query_params.get('exclude', None)
        word = pick_random_word(exclude=exclude.upper() if exclude else None)
        return Response({'word': word, 'length': len(word)})


class WordListView(APIView):
    """GET /api/codex/words/ → complete word list."""

    def get(self, _request):
        return Response({
            'words':      WARDEN_CODEX,
            'final_seal': FINAL_SEAL,
            'count':      len(WARDEN_CODEX),
        })


# ── Hint serializer ───────────────────────────────────────────────────────────
class AttemptSerializer(serializers.Serializer):
    guess  = serializers.CharField(min_length=5, max_length=5)
    colors = serializers.ListField(
        child=serializers.ChoiceField(choices=['green', 'yellow', 'gray']),
        min_length=5, max_length=5,
    )


class HintRequestSerializer(serializers.Serializer):
    word     = serializers.CharField(min_length=5, max_length=5)
    attempts = AttemptSerializer(many=True, required=False, default=list)


class HintView(APIView):
    """
    POST /api/codex/hint/
    Body: { word: "BLAZE", attempts: [{ guess: "FLAME", colors: [...] }] }
    Returns: { hint: "..." }
    """

    def post(self, request):
        sr = HintRequestSerializer(data=request.data)
        sr.is_valid(raise_exception=True)
        hint = generate_hint(
            target_word=sr.validated_data['word'].upper(),
            attempts=sr.validated_data['attempts'],
        )
        return Response({'hint': hint})
