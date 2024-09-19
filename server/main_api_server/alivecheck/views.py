from django.http import JsonResponse
from django.shortcuts import render
from .models import CheckTable


# http://127.0.0.1:8000/alivecheck/ 서버 api 호출 상태 확인 및 check_table 조회
def alivecheck(request):
    try:
        # check_table에서 모든 레코드를 조회
        records = CheckTable.objects.all()
        # 레코드 정보를 리스트로 변환
        data = [{'code': record.code, 'state': record.state} for record in records]

        return JsonResponse({'status': 'success', 'message': 'server is ok', 'db_status': data}, status=200)

    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=500)