from django.contrib import admin

from .models import Score


@admin.register(Score)
class ScoreAdmin(admin.ModelAdmin):
    list_display  = ('player_name', 'score', 'wave_reached', 'words_solved', 'created_at')
    list_filter   = ('wave_reached',)
    search_fields = ('player_name',)
    ordering      = ('-score',)
