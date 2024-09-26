from django.http import JsonResponse
from django.views import View

class Sample(View):
    def get(self, request, *args, **kwargs):
        return self.get_sample(request)

    def put(self, request, *args, **kwargs):
        return self.put_sample(request)

    def post(self, request, *args, **kwargs):
        return self.put_sample(request)


    def get_sample(self, request):
        # 여기에 GET 요청을 처리하는 로직을 작성합니다.
        return JsonResponse({'message': 'GET sample'})

    def put_sample(self, request):
        # 여기에 PUT 요청을 처리하는 로직을 작성합니다.
        return JsonResponse({'message': 'PUT sample'})

    def post_sample(self, request):
        # 여기에 PUT 요청을 처리하는 로직을 작성합니다.
        return JsonResponse({'message': 'PUT sample'})
