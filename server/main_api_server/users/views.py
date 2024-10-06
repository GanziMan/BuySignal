from django.http import JsonResponse
from .models import *
from rest_framework.response import Response
from rest_framework import status
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

from .serializers import CustomTokenObtainPairSerializer
from rest_framework import exceptions
from .tokens import validate_custom_refresh_token
from rest_framework_simplejwt.tokens import RefreshToken

from rest_framework.views import APIView
from .serializers import AccountsSerializer

class Signup(APIView):
    @swagger_auto_schema(
        operation_description="회원가입 API : user/sign-up/",
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'username': openapi.Schema(type=openapi.TYPE_STRING, description='아이디'),
                'password': openapi.Schema(type=openapi.TYPE_STRING, description='비밀번호'),
                'email': openapi.Schema(type=openapi.TYPE_STRING, description='이메일'),
                'name': openapi.Schema(type=openapi.TYPE_STRING, description='이름'),
                'address': openapi.Schema(type=openapi.TYPE_STRING, description='주소'),
                'phone_number': openapi.Schema(type=openapi.TYPE_STRING, description='전화번호'),
            },
            required=['username', 'password'],
        ),
        responses={
            200: openapi.Response('Success', AccountsSerializer),  # 성공 시 반환되는 데이터 형식
            400: 'Bad Request',
            401: 'Unauthorized',
            404: 'User not found',
        },
    )
    def post(self, request, *args, **kwargs):
        params = request.data.copy()

        username = params.get('username')
        password = params.get('password')
        email = params.get('email')

        if Account.objects.filter(username=username).exists():
            return Response({'error': 'username already exists'}, status=status.HTTP_400_BAD_REQUEST)

        if Account.objects.filter(email=email).exists():
            return Response({'error': 'email already exists'}, status=status.HTTP_400_BAD_REQUEST)

        # 사용자 생성
        user = Account.create_user(username=username, email=email, password=password)

        serializer = AccountsSerializer(user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class Signin(APIView):
    @swagger_auto_schema(
        operation_description="로그인 API : user/sign-in/",
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'username': openapi.Schema(type=openapi.TYPE_STRING, description='아이디'),
                'password': openapi.Schema(type=openapi.TYPE_STRING, description='비밀번호'),
            },
            required=['username', 'password'],
        ),
        responses={
            200: openapi.Response('Success', CustomTokenObtainPairSerializer),  # 성공 시 반환되는 데이터 형식
            400: 'Bad Request',
            401: 'Unauthorized',
            404: 'User not found',
        },
    )
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response({'error': 'Missing username or password_hash'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            user = Account.objects.get(username=username)
            if not user.check_password(password):  # 비밀번호 검증
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

            serializer = CustomTokenObtainPairSerializer(data={'username': username, 'password': password})
            # 데이터 검증
            if serializer.is_valid():
                # 유효하다면 토큰 및 사용자 정보 반환
                return Response(serializer.validated_data, status=status.HTTP_200_OK)
            return Response({'error': 'User not found or invalid credentials'}, status=status.HTTP_404_NOT_FOUND)
        except Account.DoesNotExist:
            return Response({'error': 'User not found or invalid credentials'}, status=status.HTTP_404_NOT_FOUND)

class CustomTokenRefreshView(APIView):
    @swagger_auto_schema(
        operation_description="토큰 재발급 API : user/token/refresh/",
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'represh': openapi.Schema(type=openapi.TYPE_STRING, description='refresh 토큰'),
            },
            required=['represh'],
        ),
        responses={
            200: 'Success',  # 성공 시 반환되는 데이터 형식
            400: 'Bad Request',
            401: 'Unauthorized',
            404: 'User not found',
        },
    )
    def post(self, request, *args, **kwargs):
        refresh_token = request.data.get('refresh')

        # 커스텀 리프레시 토큰 검증
        try:
            username = validate_custom_refresh_token(refresh_token)  # 사용자 ID 가져오기
            user = Account.objects.get(username=username)  # 사용자 객체 가져오기
        except (exceptions.AuthenticationFailed, Account.DoesNotExist):
            return Response({'error': 'Invalid refresh token'}, status=status.HTTP_401_UNAUTHORIZED)

        # 새로운 access 토큰 생성
        refresh_token = RefreshToken.for_user(user)
        refresh_token['username'] = user.username
        return Response({
            'refresh': str(refresh_token),  # 필요에 따라 새로 발급할 수 있음
        }, status=status.HTTP_200_OK)