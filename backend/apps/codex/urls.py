from django.urls import path

from .views import (
    WordView, WordListView, HintView,
    DictionaryView, DictionaryEntryView,
)

urlpatterns = [
    path('word/',                    WordView.as_view(),            name='codex-word'),
    path('words/',                   WordListView.as_view(),        name='codex-words'),
    path('hint/',                    HintView.as_view(),            name='codex-hint'),
    path('dictionary/',              DictionaryView.as_view(),      name='codex-dictionary'),
    path('dictionary/<str:word>/',   DictionaryEntryView.as_view(), name='codex-dictionary-entry'),
]
