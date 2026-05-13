from django.urls import path

from .views import ScoreListCreateView, TopScoresView

urlpatterns = [
    path('',     ScoreListCreateView.as_view(), name='scores-list'),
    path('top/', TopScoresView.as_view(),       name='scores-top'),
]
