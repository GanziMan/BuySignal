from django.urls import path
from .views import *

urlpatterns = [
    path('item/', Item_product.as_view(), name='item_product'),
]