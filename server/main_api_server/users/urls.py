from django.urls import path
from .views import *

urlpatterns = [
    path('user/info/seller/', User_seller_info.as_view(), name='user_seller_info'),
    path('user/info/buyer/', User_buyer_info.as_view(), name='user_buyer_info'),
]