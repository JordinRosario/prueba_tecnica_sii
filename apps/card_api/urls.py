# apps/users/urls.py
from django.urls import path, include
from .views import CardModelViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'card', CardModelViewSet, basename='envio')

urlpatterns = [
    path('', include(router.urls)),
]
