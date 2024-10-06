from django.urls import path
from users.views import *

urlpatterns = [
    path('sign-up/', Signup.as_view(), name='sign-up'),
    path('sign-in/', Signin.as_view(), name='sign-in'),
]