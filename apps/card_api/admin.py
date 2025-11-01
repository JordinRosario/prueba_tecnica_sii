from django.contrib import admin
from .models import Card

@admin.register(Card)
class CardAdmin(admin.ModelAdmin):
    list_display = ('id', 'cardholder_name', 'masked_number_card', 'expiration_date')
    search_fields = ('cardholder_name', 'number_card')
    list_filter = ('expiration_date',)
    ordering = ('-id',)

    def masked_number_card(self, obj):
        if obj.number_card and len(obj.number_card) >= 4:
            return f"{obj.number_card[:6]}******{obj.number_card[-4:]}"
        return obj.number_card or "N/A"

    masked_number_card.short_description = "Card Number"
