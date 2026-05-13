from django.urls import path

from .views import TauntView

urlpatterns = [
    path('taunt/', TauntView.as_view(), name='boss-taunt'),
]
