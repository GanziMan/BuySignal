from django.contrib import admin
from .models import CheckTable

@admin.register(CheckTable)
class CheckTableAdmin(admin.ModelAdmin):
    # Admin 페이지에 표시할 필드 목록
    list_display = ('code', 'state')
    # Admin 페이지에서 필터할 필드
    list_filter = ('state',)
    # 검색할 필드
    search_fields = ('code', 'state')
    # 읽기 전용 필드 (수정 불가)
    readonly_fields = ('code',)

    # 필드 분류 (단순해서 필요 없을 수도 있지만, 확장성 대비)
    fieldsets = (
        (None, {'fields': ('code', 'state')}),
    )
