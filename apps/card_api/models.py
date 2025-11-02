from django.db import models
from django.core.validators import RegexValidator

from django.contrib.auth.models import User

class Card(models.Model):
    #? En caso de que usemos auth.
    # user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='envios')
    number_card = models.CharField(
        max_length=16,
        validators=[
            RegexValidator(
                regex=r'^\d{13,16}$',
                message="The card number must contain between 13 and 16 digits."
            )
        ],
    )
    cardholder_name = models.CharField(max_length=20)
    expiration_date = models.CharField(max_length=5)
    cvv = models.CharField(
        max_length=3,
        validators=[
            RegexValidator(
                regex=r'^\d{3}$',
                message="CVV must contain 3 or 4 digits."
            )
        ],
    )
    def __str__(self):
        return f"{self.cardholder_name} - {self.number_card[-4:]}"
