from django.contrib import admin
from .models import User

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    # Admin 페이지에 표시할 필드 목록
    list_display = ('id', 'username', 'email', 'first_name', 'last_name', 'phone_number', 'created_at', 'updated_at')
    # Admin 페이지에서 필터할 필드
    list_filter = ('created_at', 'updated_at')
    # 검색할 필드
    search_fields = ('username', 'email', 'first_name', 'last_name')
    # 읽기 전용 필드 (수정 불가)
    readonly_fields = ('created_at', 'updated_at')
    # 필드 분류
    fieldsets = (
        (None, {'fields': ('username', 'email', 'password_hash')}),
        ('Personal Info', {'fields': ('first_name', 'last_name', 'phone_number')}),
        ('Timestamps', {'fields': ('created_at', 'updated_at')}),
    )
