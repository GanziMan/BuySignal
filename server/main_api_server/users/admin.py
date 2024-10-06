from django.contrib import admin
from .models import Account

@admin.register(Account)
class OrderAdmin(admin.ModelAdmin):
    # Admin 페이지에 표시할 필드 목록
    list_display = ('username', 'email', 'password_hash', 'name', 'address', 'phone_number')
    # Admin 페이지에서 필터할 필드
    list_filter = ('created_at', 'updated_at')
    # 검색할 필드
    search_fields = ('username', 'email', 'name', 'address')
    # 읽기 전용 필드 (수정 불가)
    readonly_fields = ('created_at', 'updated_at')
    # 필드 분류
    # fieldsets = (
    #     (None, {'fields': ('user', 'status', 'total_amount')}),
    #     ('Addresses', {'fields': ('shipping_address', 'billing_address')}),
    #     ('Timestamps', {'fields': ('created_at', 'updated_at')}),
    # )