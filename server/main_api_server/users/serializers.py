from rest_framework import serializers
from .models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        login_id = attrs.get('username')
        password_hash = attrs.get('password')

        # 사용자 인증 처리
        try:
            user = User.objects.get(login_id=login_id, password_hash=password_hash)
        except User.DoesNotExist:
            raise serializers.ValidationError('Invalid credentials')

        # 인증이 완료되면 토큰 생성
        refresh = RefreshToken.for_user(user)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'user': UserSerializer(user).data  # 사용자 정보를 함께 반환할 수도 있음
        }

