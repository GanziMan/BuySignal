from django.urls import path
from .views import *

urlpatterns = [
    path('category/', Item_category.as_view(), name='item_product'),
]