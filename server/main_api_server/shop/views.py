from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import User, Product, Option, Review, Cart as CartModel, Like as LikeModel
from django.shortcuts import get_object_or_404
from django.db.models import Q


# User 정보 처리
class UserView(APIView):
    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter('user_id', openapi.IN_QUERY, description='사용자 ID', type=openapi.TYPE_STRING)
        ],
        responses={200: '유저 정보 조회 성공', 404: '유저를 찾을 수 없음'}
    )
    def get(self, request, *args, **kwargs):
        '''유저정보 조회'''
        user_id = request.query_params.get('user_id')
        user = get_object_or_404(User, user_id=user_id)
        return Response({
            "user_id": user.user_id,
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "phone_number": user.phone_number,
            "created_at": user.created_at,
            "updated_at": user.updated_at
        }, status=status.HTTP_200_OK)

    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            required=['user_id', 'email'],
            properties={
                'user_id': openapi.Schema(type=openapi.TYPE_STRING),
                'email': openapi.Schema(type=openapi.TYPE_STRING),
                'first_name': openapi.Schema(type=openapi.TYPE_STRING),
                'last_name': openapi.Schema(type=openapi.TYPE_STRING),
                'phone_number': openapi.Schema(type=openapi.TYPE_STRING),
            }
        ),
        responses={201: '유저 생성 성공'}
    )
    def post(self, request):
        '''유저정보 저장'''
        user_data = request.data
        user = User.objects.create(
            user_id=user_data['user_id'],
            email=user_data['email'],
            first_name=user_data.get('first_name', ''),
            last_name=user_data.get('last_name', ''),
            phone_number=user_data.get('phone_number', '')
        )
        return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)

    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            required=['user_id'],
            properties={
                'user_id': openapi.Schema(type=openapi.TYPE_STRING),
                'email': openapi.Schema(type=openapi.TYPE_STRING),
                'first_name': openapi.Schema(type=openapi.TYPE_STRING),
                'last_name': openapi.Schema(type=openapi.TYPE_STRING),
                'phone_number': openapi.Schema(type=openapi.TYPE_STRING),
            }
        ),
        responses={200: '유저 정보 수정 성공', 404: '유저를 찾을 수 없음'}
    )
    def put(self, request):
        '''유저정보 수정'''
        user_data = request.data
        user = get_object_or_404(User, user_id=user_data['user_id'])

        user.email = user_data.get('email', user.email)
        user.first_name = user_data.get('first_name', user.first_name)
        user.last_name = user_data.get('last_name', user.last_name)
        user.phone_number = user_data.get('phone_number', user.phone_number)
        user.save()

        return Response({"message": "User updated successfully"}, status=status.HTTP_200_OK)

    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter('user_id', openapi.IN_QUERY, description='사용자 ID', type=openapi.TYPE_STRING)
        ],
        responses={200: '유저 삭제 성공', 404: '유저를 찾을 수 없음'}
    )
    def delete(self, request):
        '''유저정보 삭제'''
        user_id = request.query_params.get('user_id')
        user = get_object_or_404(User, user_id=user_id)
        user.delete()
        return Response({"message": "User deleted successfully"}, status=status.HTTP_200_OK)


# 판매 상위 10개 및 신규 제품 상위 10개 조회
class ProductMain(APIView):
    @swagger_auto_schema(
        responses={200: '상품 조회 성공'}
    )
    def get(self, request):
        '''메인 상품 리스트 조회'''
        group_1 = Product.objects.order_by('-sales_volume')[:10]  # 판매 상위 10개
        group_2 = Product.objects.order_by('-created_at')[:10]  # 신규 제품 상위 10개

        group_1_data = [{"id": p.id, "title": p.title, "sales_volume": p.sales_volume} for p in group_1]
        group_2_data = [{"id": p.id, "title": p.title, "created_at": p.created_at} for p in group_2]

        return Response({"group_1": group_1_data, "group_2": group_2_data}, status=status.HTTP_200_OK)


# 상품 탐색 기능
class ProductExplore(APIView):
    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter('keyword', openapi.IN_QUERY, description='검색 키워드', type=openapi.TYPE_STRING),
            openapi.Parameter('category', openapi.IN_QUERY, description='카테고리 ID', type=openapi.TYPE_INTEGER)
        ],
        responses={200: '상품 검색 성공'}
    )
    def get(self, request):
        '''상품 검색'''
        keyword = request.query_params.get('keyword', '')
        category_id = request.query_params.get('category', None)

        filters = Q()
        if keyword:
            filters &= Q(title__icontains=keyword) | Q(sub_title__icontains=keyword)
        if category_id:
            filters &= Q(category_id=category_id)

        products = Product.objects.filter(filters)
        product_data = [{"id": p.id, "title": p.title, "price": p.price} for p in products]

        return Response(product_data, status=status.HTTP_200_OK)


# 상품 상세보기 기능
class ProductDetail(APIView):
    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter('product_id', openapi.IN_QUERY, description='상품 ID', type=openapi.TYPE_INTEGER)
        ],
        responses={200: '상품 상세 조회 성공', 404: '상품을 찾을 수 없음'}
    )
    def get(self, request):
        '''상품 상세 정보 조회'''
        product_id = request.query_params.get('product_id')
        product = get_object_or_404(Product, id=product_id)

        options = Option.objects.filter(product=product)
        reviews = Review.objects.filter(product=product)

        product_data = {
            "product": {
                "id": product.id,
                "title": product.title,
                "sub_title": product.sub_title,
                "price": product.price,
                "stock": product.stock,
                "sales_volume": product.sales_volume,
                "like": product.like,
                "image_url": product.image_url
            },
            "options": [{"o_type": opt.o_type, "o_name": opt.o_name, "o_stock": opt.o_stock} for opt in options],
            "reviews": [{"user": rev.user.user_id, "rating": rev.rating, "comment": rev.comment} for rev in reviews]
        }

        return Response(product_data, status=status.HTTP_200_OK)


# 장바구니 관리 기능
class Cart(APIView):
    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter('user_id', openapi.IN_QUERY, description='사용자 ID', type=openapi.TYPE_STRING)
        ],
        responses={200: '장바구니 조회 성공'}
    )
    def get(self, request):
        '''장바구니 조회'''
        user_id = request.query_params.get('user_id')
        cart_items = CartModel.objects.filter(user__user_id=user_id)

        cart_data = [{"product_id": item.product.id, "quantity": item.quantity} for item in cart_items]
        return Response(cart_data, status=status.HTTP_200_OK)

    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            required=['user_id', 'product_id', 'quantity'],
            properties={
                'user_id': openapi.Schema(type=openapi.TYPE_STRING),
                'product_id': openapi.Schema(type=openapi.TYPE_INTEGER),
                'quantity': openapi.Schema(type=openapi.TYPE_INTEGER)
            }
        ),
        responses={201: '장바구니 추가 성공', 404: '유저 또는 상품을 찾을 수 없음'}
    )
    def post(self, request):
        '''장바구니 추가'''
        cart_data = request.data
        user = get_object_or_404(User, user_id=cart_data['user_id'])
        product = get_object_or_404(Product, id=cart_data['product_id'])

        CartModel.objects.create(user=user, product=product, quantity=cart_data['quantity'])
        return Response({"message": "Product added to cart"}, status=status.HTTP_201_CREATED)

    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            required=['user_id', 'product_id', 'quantity'],
            properties={
                'user_id': openapi.Schema(type=openapi.TYPE_STRING),
                'product_id': openapi.Schema(type=openapi.TYPE_INTEGER),
                'quantity': openapi.Schema(type=openapi.TYPE_INTEGER)
            }
        ),
        responses={200: '장바구니 수정 성공', 404: '장바구니 항목을 찾을 수 없음'}
    )
    def put(self, request):
        '''장바구니 수량 수정'''
        cart_data = request.data
        cart_item = get_object_or_404(CartModel, user__user_id=cart_data['user_id'],
                                      product__id=cart_data['product_id'])

        cart_item.quantity = cart_data['quantity']
        cart_item.save()

        return Response({"message": "Cart updated"}, status=status.HTTP_200_OK)

    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter('user_id', openapi.IN_QUERY, description='사용자 ID', type=openapi.TYPE_STRING),
            openapi.Parameter('product_id', openapi.IN_QUERY, description='상품 ID', type=openapi.TYPE_INTEGER)
        ],
        responses={200: '장바구니 항목 삭제 성공', 404: '장바구니 항목을 찾을 수 없음'}
    )
    def delete(self, request):
        '''장바구니 항목 삭제'''
        user_id = request.query_params.get('user_id')
        product_id = request.query_params.get('product_id')

        cart_item = get_object_or_404(CartModel, user__user_id=user_id, product__id=product_id)
        cart_item.delete()

        return Response({"message": "Cart item deleted"}, status=status.HTTP_200_OK)


# 찜 기능
class Like(APIView):
    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            required=['user_id', 'product_id'],
            properties={
                'user_id': openapi.Schema(type=openapi.TYPE_STRING),
                'product_id': openapi.Schema(type=openapi.TYPE_INTEGER)
            }
        ),
        responses={201: '찜 추가 성공', 400: '이미 찜한 상품', 404: '유저 또는 상품을 찾을 수 없음'}
    )
    def post(self, request):
        '''상품 찜하기'''
        like_data = request.data
        user = get_object_or_404(User, user_id=like_data['user_id'])
        product = get_object_or_404(Product, id=like_data['product_id'])

        if LikeModel.objects.filter(user=user, product=product).exists():
            return Response({"message": "Already liked"}, status=status.HTTP_400_BAD_REQUEST)

        LikeModel.objects.create(user=user, product=product)
        product.like += 1
        product.save()

        return Response({"message": "Product liked"}, status=status.HTTP_201_CREATED)

    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter('user_id', openapi.IN_QUERY, description='사용자 ID', type=openapi.TYPE_STRING),
            openapi.Parameter('product_id', openapi.IN_QUERY, description='상품 ID', type=openapi.TYPE_INTEGER)
        ],
        responses={200: '찜 삭제 성공', 404: '찜 항목을 찾을 수 없음'}
    )
    def delete(self, request):
        '''상품 찜 취소'''
        user_id = request.query_params.get('user_id')
        product_id = request.query_params.get('product_id')

        user = get_object_or_404(User, user_id=user_id)
        product = get_object_or_404(Product, id=product_id)

        like = get_object_or_404(LikeModel, user=user, product=product)
        like.delete()

        product.like -= 1
        product.save()

        return Response({"message": "Product unliked"}, status=status.HTTP_200_OK)


class Banner(APIView):
    @swagger_auto_schema(
        responses={200: '배너 정보 조회 성공'}
    )
    def get(self):
        '''배너 정보 조회'''
        pass