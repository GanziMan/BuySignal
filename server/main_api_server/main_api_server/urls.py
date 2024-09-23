from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),  # Django 기본 Admin URL
    path('alivecheck/', include('alivecheck.urls')),  # alivecheck 앱의 URL 연결
    path('users/', include('users.urls')),  # users 앱의 URL 연결
    # path('orders/', include('orders.urls')),  # orders 앱의 URL 연결
]