# users/tokens.py
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import exceptions

def validate_custom_refresh_token(refresh_token):
    try:
        refresh = RefreshToken(refresh_token)
        username = refresh['username']  # 추가된 사용자 ID 가져오기
        return username
    except exceptions.TokenError:
        raise exceptions.AuthenticationFailed('Invalid refresh token')
