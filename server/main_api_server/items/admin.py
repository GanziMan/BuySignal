from django.contrib import admin
from .models import Category, Product, ProductImage, ProductHtml, Review


# Category Admin
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'parent_category', 'category_image_url')
    search_fields = ('name',)
    list_filter = ('parent_category',)


# Product Admin
class ProductAdmin(admin.ModelAdmin):
    list_display = (
    'name', 'user', 'price', 'sale_price', 'sale_rate', 'activate', 'stock', 'category', 'created_at', 'updated_at')
    search_fields = ('name', 'user__username', 'category__name')
    list_filter = ('category', 'activate', 'created_at', 'updated_at')
    readonly_fields = ('created_at', 'updated_at')

    fieldsets = (
        (None, {
            'fields': ('name', 'user', 'price', 'sale_price', 'sale_rate', 'activate', 'stock', 'category')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at')
        }),
    )


# ProductImage Admin
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ('product', 'created_at')
    search_fields = ('product__name',)
    list_filter = ('created_at',)


# ProductHtml Admin
class ProductHtmlAdmin(admin.ModelAdmin):
    list_display = ('product', 'created_at')
    search_fields = ('product__name',)
    list_filter = ('created_at',)


# Review Admin
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('user', 'product', 'rating', 'created_at')
    search_fields = ('user__username', 'product__name')
    list_filter = ('rating', 'created_at')


# Registering all the models in the admin panel
admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(ProductImage, ProductImageAdmin)
admin.site.register(ProductHtml, ProductHtmlAdmin)
admin.site.register(Review, ReviewAdmin)
