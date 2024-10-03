from rest_framework import serializers
from .models import Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
        extra_kwargs = {
            'name': {
                'help_text': 'Name of the category (required)',
                'required': True  # 필수 필드로 설정
            },
            'category_image_url': {
                'help_text': 'URL of the category image (optional)',
                'required': False  # 선택적 필드로 설정
            },
            'parent_category': {
                'help_text': 'Parent category ID (optional)',
                'required': False  # 선택적 필드로 설정
            },
        }