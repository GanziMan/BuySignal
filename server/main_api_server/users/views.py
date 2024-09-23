from django.http import JsonResponse
from django.shortcuts import render
from .models import User


# 유저 정보 조회
def get_all_users(request):
    try:
        # users에서 모든 레코드를 조회
        records = User.objects.all()
        # 레코드 정보를 리스트로 변환
        data = [{'username': record.username, 'password_hash': record.password_hash} for record in records]

        return JsonResponse({'status': 'success', 'message': '', 'data': data}, status=200)

    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=500)

# 로그인
def sign_in(request):
    return JsonResponse({'status': 'success', 'message': '', 'data': []}, status=200)

# 로그인
def sign_up(request):
    return JsonResponse({'status': 'success', 'message': '', 'data': []}, status=200)