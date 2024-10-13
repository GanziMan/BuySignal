from django.db import models

# User 모델: 유저 정보
class User(models.Model):
    id = models.AutoField(primary_key=True)  # 고유 번호 (기본적으로 SERIAL PRIMARY KEY 역할)
    user_id = models.CharField(max_length=50, unique=True)  # 사용자 ID
    email = models.EmailField(max_length=100, unique=True)  # 이메일
    first_name = models.CharField(max_length=50, blank=True, null=True)  # 이름
    last_name = models.CharField(max_length=50, blank=True, null=True)  # 성
    phone_number = models.CharField(max_length=20, blank=True, null=True)  # 전화번호
    created_at = models.DateTimeField(auto_now_add=True)  # 생성일
    updated_at = models.DateTimeField(auto_now=True)  # 수정일

    def __str__(self):
        return self.user_id

# Category 모델: 카테고리 정보
class Category(models.Model):
    id = models.AutoField(primary_key=True)  # 고유 번호
    name = models.CharField(max_length=255)  # 카테고리 이름
    parent_category = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE)  # 부모 카테고리

    def __str__(self):
        return self.name

# Product 모델: 상품 정보
class Product(models.Model):
    id = models.AutoField(primary_key=True)  # 고유 번호
    title = models.CharField(max_length=255)  # 상품명
    sub_title = models.CharField(max_length=255)  # 상품 상세
    price = models.DecimalField(max_digits=10, decimal_places=2)  # 가격
    activate = models.BooleanField(default=False)  # 활성화 상태
    stock = models.IntegerField(default=0)  # 재고
    sales_volume = models.IntegerField(default=0)  # 판매량
    like = models.IntegerField(default=0)  # 찜
    image_url = models.JSONField()  # 이미지 리스트
    category = models.ForeignKey(Category, null=True, on_delete=models.SET_NULL)  # 카테고리 참조
    created_at = models.DateTimeField(auto_now_add=True)  # 생성일시
    updated_at = models.DateTimeField(auto_now=True)  # 수정일시

    def __str__(self):
        return self.title

# Option 모델: 상품별 옵션 정보
class Option(models.Model):
    id = models.AutoField(primary_key=True)  # 고유 번호
    product = models.ForeignKey(Product, related_name='options', on_delete=models.CASCADE)  # 상품 참조
    o_type = models.CharField(max_length=20)  # 옵션 타입 (색상, 사이즈 등)
    o_name = models.CharField(max_length=20)  # 옵션 명 (화이트, 265 등)
    o_stock = models.IntegerField(default=0)  # 옵션별 재고

    def __str__(self):
        return f"{self.o_type}: {self.o_name}"

# Review 모델: 상품 리뷰 정보
class Review(models.Model):
    id = models.AutoField(primary_key=True)  # 고유 번호
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # 유저 참조
    product = models.ForeignKey(Product, null=True, on_delete=models.SET_NULL)  # 상품 참조
    rating = models.IntegerField()  # 평점 (1 ~ 5)
    comment = models.TextField(null=True, blank=True)  # 리뷰 내용
    created_at = models.DateTimeField(auto_now_add=True)  # 작성일시

    def __str__(self):
        return f"Review by {self.user.id} on {self.product.id}"

# Cart 모델: 장바구니 정보
class Cart(models.Model):
    id = models.AutoField(primary_key=True)  # 고유 번호
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # 유저 참조
    product = models.ForeignKey(Product, on_delete=models.CASCADE)  # 상품 참조
    quantity = models.IntegerField()  # 수량

    def __str__(self):
        return f"Cart of {self.user.id} - {self.product.id}"

# Like 모델: 찜 정보
class Like(models.Model):
    id = models.AutoField(primary_key=True)  # 고유 번호
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # 유저 참조
    product = models.ForeignKey(Product, related_name='likes', on_delete=models.CASCADE)  # 찜에 대한 상품 참조

    def __str__(self):
        return f"Like of {self.user.id} - {self.product.id}"

