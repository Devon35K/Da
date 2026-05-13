from django.urls import path

from .views import WordView, WordListView, HintView

urlpatterns = [
    path('word/',  WordView.as_view(),     name='codex-word'),
    path('words/', WordListView.as_view(), name='codex-words'),
    path('hint/',  HintView.as_view(),     name='codex-hint'),
]
