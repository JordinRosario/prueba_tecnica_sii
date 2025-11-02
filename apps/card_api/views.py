from django.shortcuts import render
from .models import Card
from .serializers import CardSerializer
from rest_framework import viewsets

class CardModelViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

    def get_queryset(self):
        cards = super().get_queryset()

        for card in cards:
            if card.number_card and len(card.number_card) >= 10:
                card.number_card = f"{card.number_card[:2]}**********{card.number_card[-4:]}"
        return cards

