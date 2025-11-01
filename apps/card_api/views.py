from django.shortcuts import render
from .models import Card
from .serializers import CardSerializer
from rest_framework import viewsets

class CardModelViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

