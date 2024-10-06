from django.db import models
from django.contrib.auth.hashers import make_password, check_password

class Account(models.Model):
    username = models.CharField(max_length=50, unique=True)
    email = models.EmailField(max_length=100, unique=True)
    password_hash = models.CharField(max_length=255)
    name = models.CharField(max_length=50, null=True, blank=True)
    address = models.CharField(max_length=50, null=True, blank=True)
    phone_number = models.CharField(max_length=20, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username

    @classmethod
    def create_user(cls, username, email, password, **extra_fields):
        password_hash = make_password(password)  # 비밀번호 해시화
        user = cls(username=username, email=email, password_hash=password_hash, **extra_fields)
        user.save()
        return user

    def check_password(self, password):
        return check_password(password, self.password_hash)  # 비밀번호 확인