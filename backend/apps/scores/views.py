from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Score
from .serializers import ScoreSerializer


class ScoreListCreateView(generics.ListCreateAPIView):
    """GET /api/scores/  → paginated list of all scores
       POST /api/scores/ → submit a new score"""
    queryset = Score.objects.all()
    serializer_class = ScoreSerializer


class TopScoresView(APIView):
    """GET /api/scores/top/?limit=10 → top N highest scores."""

    def get(self, request):
        try:
            limit = int(request.query_params.get('limit', 10))
        except (TypeError, ValueError):
            limit = 10
        limit = max(1, min(limit, 100))
        qs = Score.objects.order_by('-score', '-created_at')[:limit]
        return Response(ScoreSerializer(qs, many=True).data)
