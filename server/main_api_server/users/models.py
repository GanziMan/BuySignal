from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

# Seller Model
class Seller(models.Model):
    username = models.CharField(max_length=50, unique=True)
    seller_name = models.CharField(max_length=50, unique=True)
    email = models.EmailField(max_length=100, unique=True)
    no_bizcode = models.CharField(max_length=10, unique=True)
    no_social = models.CharField(max_length=50, unique=True)
    password_hash = models.CharField(max_length=255)
    first_name = models.CharField(max_length=50, null=True, blank=True)
    last_name = models.CharField(max_length=50, null=True, blank=True)
    phone_number = models.CharField(max_length=20, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.seller_name

# Buyer Manager
# class BuyerManager(BaseUserManager):
#     def create_user(self, username, email, password=None, **extra_fields):
#         if not email:
#             raise ValueError('The Email field must be set')
#         email = self.normalize_email(email)
#         user = self.model(username=username, email=email, **extra_fields)
#         user.set_password(password)
#         user.save(using=self._db)
#         return user

# Buyer Model
class Buyer(models.Model):
    username = models.CharField(max_length=50, unique=True)
    email = models.EmailField(max_length=100, unique=True)
    password_hash = models.CharField(max_length=255)
    first_name = models.CharField(max_length=50, null=True, blank=True)
    last_name = models.CharField(max_length=50, null=True, blank=True)
    phone_number = models.CharField(max_length=20, null=True, blank=True)
    point = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    coupon_list = models.JSONField(default=list, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # objects = BuyerManager()

    def __str__(self):
        return self.username

# Cart Model
class Cart(models.Model):
    user = models.ForeignKey(Buyer, on_delete=models.CASCADE)
    product = models.ForeignKey('items.Product', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

# Like Model
class Like(models.Model):
    user = models.ForeignKey(Buyer, on_delete=models.CASCADE)
    product_id = models.ManyToManyField('items.Product')

# Coupon Model
class Coupon(models.Model):
    coupon_id = models.CharField(max_length=50)
    discount_amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    discount_rate = models.DecimalField(max_digits=3, decimal_places=2, null=True, blank=True)
    used = models.CharField(max_length=1, default='0')  # '0' for not used, '1' for used
    used_id = models.ForeignKey(Buyer, null=True, blank=True, on_delete=models.SET_NULL)
