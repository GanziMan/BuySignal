from django.contrib import admin
from .models import User, Category, Product, Option, Review, Cart, Like


# User 모델 등록
class UserAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'email', 'first_name', 'last_name', 'phone_number', 'created_at', 'updated_at')
    search_fields = ('user_id', 'email', 'first_name', 'last_name')
    ordering = ('created_at',)


admin.site.register(User, UserAdmin)


# Category 모델 등록
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'parent_category')
    search_fields = ('name',)
    ordering = ('name',)


admin.site.register(Category, CategoryAdmin)


# Product 모델 등록
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'price', 'stock', 'sales_volume', 'activate', 'created_at', 'updated_at')
    search_fields = ('title', 'sub_title')
    list_filter = ('activate', 'category')
    ordering = ('-sales_volume',)


admin.site.register(Product, ProductAdmin)


# Option 모델 등록
class OptionAdmin(admin.ModelAdmin):
    list_display = ('id', 'product', 'o_type', 'o_name', 'o_stock')
    search_fields = ('o_type', 'o_name')
    list_filter = ('product',)


admin.site.register(Option, OptionAdmin)


# Review 모델 등록
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'product', 'rating', 'created_at')
    search_fields = ('user__user_id', 'product__title', 'rating')
    list_filter = ('rating',)


admin.site.register(Review, ReviewAdmin)


# Cart 모델 등록
class CartAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'product', 'quantity')
    search_fields = ('user__user_id', 'product__title')
    list_filter = ('user',)


admin.site.register(Cart, CartAdmin)


# Like 모델 등록
class LikeAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'product')
    search_fields = ('user__user_id', 'product__title')
    list_filter = ('user',)


admin.site.register(Like, LikeAdmin)
