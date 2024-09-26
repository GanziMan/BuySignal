from django.urls import path
from .views import *

urlpatterns = [
    path('sample/', Sample.as_view(), name='sample'),
]