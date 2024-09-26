from django.db import models

# Category Model
class Category(models.Model):
    name = models.CharField(max_length=255)
    category_image_url = models.CharField(max_length=255, null=True, blank=True)
    parent_category = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

# Product Model
class Product(models.Model):
    user = models.ForeignKey('users.Seller', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    sale_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    sale_rate = models.DecimalField(max_digits=3, decimal_places=2, null=True, blank=True)
    activate = models.BooleanField(default=False)
    stock = models.IntegerField(default=0)
    category = models.ForeignKey(Category, null=True, blank=True, on_delete=models.SET_NULL)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

# Product Image Model
class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    image_url = models.JSONField()  # For storing multiple image URLs as a JSON array
    created_at = models.DateTimeField(auto_now_add=True)

# Product Html Model
class ProductHtml(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    html = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

# Review Model
class Review(models.Model):
    user = models.ForeignKey('users.Buyer', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField()
    comment = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Review by {self.user} for {self.product}'
