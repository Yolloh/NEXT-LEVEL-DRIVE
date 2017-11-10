# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.db import models
from django.conf import settings

from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

# Create your models here.

class ActivationLink(models.Model):
        user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, primary_key=True)
        link = models.CharFields(max_length=50)

        def __str__(self):
            return 'Activation link for ' + str(self.user)

class PasswordResetLink(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, primary_key=True)
    link = models.CharFields(max_length=50)

    def __str__(self):
        return 'Password rest link for ' + str(self.user)



#Token authentication #new user call
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)