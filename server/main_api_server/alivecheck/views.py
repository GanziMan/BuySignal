from django.http import JsonResponse
from django.shortcuts import render


# http://127.0.0.1:8000/alivecheck/ 서버 api 호출 상태 확인 및 check_table 조회
def alivecheck(request):
    try:
        return JsonResponse({'status': 'success', 'message': 'server is ok'}, status=200)

    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=500)