from django.contrib import admin
from django.http import JsonResponse
from django.urls import path, include


def health(_request):
    """Tiny hello-world endpoint to verify the backend is reachable."""
    return JsonResponse({'status': 'ok', 'service': 'ar-wordle-backend'})


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/health/', health),
    path('api/scores/', include('apps.scores.urls')),
    path('api/codex/',  include('apps.codex.urls')),
    path('api/boss/',   include('apps.boss.urls')),
]
