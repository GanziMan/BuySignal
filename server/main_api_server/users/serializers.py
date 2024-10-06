from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Account

class AccountsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['username','email','name','address','phone_number']

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')

        # 사용자 인증 처리
        try:
            user = Account.objects.get(username=username)
            # 비밀번호 검증
            if not user.check_password(password):
                raise serializers.ValidationError('Invalid credentials')

        except Account.DoesNotExist:
            raise serializers.ValidationError('Invalid credentials')

        # 인증이 완료되면 토큰 생성
        refresh = RefreshToken.for_user(user)

        refresh['username'] = user.username
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'user': AccountsSerializer(user).data  # 사용자 정보를 함께 반환할 수도 있음
        }

