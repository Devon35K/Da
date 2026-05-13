"""ASGI config for arwordle project. (WebSocket support comes in Stage 6.)"""
import os
from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'arwordle.settings')
application = get_asgi_application()
