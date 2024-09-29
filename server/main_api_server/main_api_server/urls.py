from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),  # Django 기본 Admin URL
    path('alivecheck/', include('alivecheck.urls')),  # alivecheck 앱의 URL 연결
    path('users/', include('users.urls')),
    path('items/', include('items.urls')),
    # path('manage_order/', include('manage_order.urls')),
]