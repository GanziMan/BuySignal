from django.urls import path
from .views import *

urlpatterns = [
    path('get-all-users', get_all_users, name='get_all_users'),
    path('sign_in', sign_in, name='sign_in'),
    path('sign_up', sign_up, name='sign_in'),
]
