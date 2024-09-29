from django.contrib import admin
from .models import Seller, Buyer, Cart, Like, Coupon

# Seller Admin
class SellerAdmin(admin.ModelAdmin):
    list_display = ('username', 'seller_name', 'email', 'no_bizcode', 'no_social', 'created_at', 'updated_at')
    search_fields = ('username', 'seller_name', 'email', 'no_bizcode', 'no_social')
    list_filter = ('created_at', 'updated_at')
    readonly_fields = ('created_at', 'updated_at')

# Buyer Admin
class BuyerAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'point', 'created_at', 'updated_at')
    search_fields = ('username', 'email', 'first_name', 'last_name')
    list_filter = ('created_at', 'updated_at')
    readonly_fields = ('created_at', 'updated_at')

# Cart Admin
class CartAdmin(admin.ModelAdmin):
    list_display = ('user', 'product', 'quantity', 'created_at', 'updated_at')
    search_fields = ('user__username', 'product__name')
    list_filter = ('created_at', 'updated_at')
    readonly_fields = ('created_at', 'updated_at')

# Like Admin
class LikeAdmin(admin.ModelAdmin):
    list_display = ('user',)
    search_fields = ('user__username',)
    filter_horizontal = ('product_id',)  # For many-to-many relationship display

# Coupon Admin
class CouponAdmin(admin.ModelAdmin):
    list_display = ('coupon_id', 'discount_amount', 'discount_rate', 'used', 'used_id')
    search_fields = ('coupon_id', 'used_id__username')
    list_filter = ('used',)

# Register the models in the admin site
admin.site.register(Seller, SellerAdmin)
admin.site.register(Buyer, BuyerAdmin)
admin.site.register(Cart, CartAdmin)
admin.site.register(Like, LikeAdmin)
admin.site.register(Coupon, CouponAdmin)
