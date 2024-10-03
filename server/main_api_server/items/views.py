from django.http import JsonResponse
from django.views import View
from .models import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .serializers import CategorySerializer

class Item_category(APIView):
    def get(self, request, *args, **kwargs):
        return self.get_categorys(request)

    def post(self, request, *args, **kwargs):
        return self.post_categorys(request)

    def put(self, request, *args, **kwargs):
        return self.put_categorys(request)

    def get_categorys(self, request):
        # 전체 Category 리스트 조회
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    def post_categorys(self, request):
        # 새로운 Category 생성
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put_categorys(self, request, pk):
        # 기존 Category 수정
        try:
            category = Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            return Response({'error': 'Category not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = CategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)