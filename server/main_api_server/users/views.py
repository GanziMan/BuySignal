from django.http import JsonResponse
from .models import *
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404

from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import CustomTokenObtainPairSerializer

from rest_framework.views import APIView
from .serializers import UserSerializer

class Signup(APIView):
    def get(self, request, *args, **kwargs):
        return Response([], status=status.HTTP_400_BAD_REQUEST)

    def post(self, request, *args, **kwargs):
        params = request.data.copy()

        login_id = params.get('username')

        params['login_id'] = params['username']
        params['password_hash'] = params['password']


        # login_id 중복 확인
        if User.objects.filter(login_id=login_id).exists():
            return Response({'error': 'login_id already exists'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = UserSerializer(data=params)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, *args, **kwargs):
        return Response([], status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        return Response([], status=status.HTTP_400_BAD_REQUEST)

class Signin(APIView):
    def get(self, request, *args, **kwargs):
        return Response([], status=status.HTTP_400_BAD_REQUEST)

    def post(self, request, *args, **kwargs):
        login_id = request.data.get('username')
        password_hash = request.data.get('password')
        if not login_id or not password_hash:
            return Response({'error': 'Missing login_id or password_hash'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            # 사용자 조회 (password_hash 검증은 해시 값으로 비교하는 방식으로 변경 가능)
            serializer = CustomTokenObtainPairSerializer(data=request.data)
            if serializer.is_valid():
                return Response(serializer.validated_data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            return Response({'error': 'User not found or invalid credentials'}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, *args, **kwargs):
        return Response([], status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        return Response([], status=status.HTTP_400_BAD_REQUEST)