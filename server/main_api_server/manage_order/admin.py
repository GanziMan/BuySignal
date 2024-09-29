from django.contrib import admin
from .models import Order, OrderItem, Payment

# OrderItem Inline Admin
class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 1  # Number of empty forms shown by default
    readonly_fields = ('total_price',)
    fields = ('product', 'quantity', 'price', 'discount_price', 'total_price')  # Customizing the fields displayed

# Order Admin
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'status', 'total_amount', 'created_at', 'updated_at')
    search_fields = ('id', 'user__username', 'status')
    list_filter = ('status', 'created_at', 'updated_at')
    readonly_fields = ('created_at', 'updated_at')
    inlines = [OrderItemInline]  # Linking the OrderItem inline to the Order

    fieldsets = (
        (None, {
            'fields': ('user', 'status', 'total_amount', 'shipping_address', 'billing_address')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at')
        }),
    )

# OrderItem Admin
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('order', 'product', 'quantity', 'price', 'discount_price', 'total_price')
    search_fields = ('order__id', 'product__name')
    list_filter = ('order',)

# Payment Admin
class PaymentAdmin(admin.ModelAdmin):
    list_display = ('order', 'payment_method', 'amount', 'status', 'transaction_id', 'created_at')
    search_fields = ('transaction_id', 'order__id', 'payment_method', 'status')
    list_filter = ('payment_method', 'status', 'created_at')
    readonly_fields = ('created_at',)

# Registering models with the admin site
admin.site.register(Order, OrderAdmin)
admin.site.register(OrderItem, OrderItemAdmin)
admin.site.register(Payment, PaymentAdmin)
