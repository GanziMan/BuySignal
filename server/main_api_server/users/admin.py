from django.contrib import admin
from .models import User

@admin.register(User)
class OrderAdmin(admin.ModelAdmin):
    # Admin 페이지에 표시할 필드 목록
    list_display = ('login_id', 'email', 'password_hash', 'name', 'address', 'phone_number')
    # Admin 페이지에서 필터할 필드
    list_filter = ('created_at', 'updated_at')
    # 검색할 필드
    search_fields = ('login_id', 'email', 'name', 'address')
    # 읽기 전용 필드 (수정 불가)
    readonly_fields = ('created_at', 'updated_at')
    # 필드 분류
    # fieldsets = (
    #     (None, {'fields': ('user', 'status', 'total_amount')}),
    #     ('Addresses', {'fields': ('shipping_address', 'billing_address')}),
    #     ('Timestamps', {'fields': ('created_at', 'updated_at')}),
    # )