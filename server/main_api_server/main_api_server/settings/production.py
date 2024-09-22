from .base import *

# 배포 환경에 맞는 데이터베이스 설정
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('DB_NAME', 'buysignal_db'),        # 환경 변수에서 값 불러오기
        'USER': os.getenv('DB_USER', 'buysignal_user'),      # 환경 변수로 사용자 설정
        'PASSWORD': os.getenv('DB_PASSWORD', 'ecom123!@#'),  # 비밀번호도 환경 변수로 설정
        'HOST': os.getenv('DB_HOST', 'db'),                  # Docker Compose에서 설정한 db 서비스 이름
        'PORT': os.getenv('DB_PORT', '5432'),                # PostgreSQL 기본 포트
    }
}

# 배포 환경 특화 설정들
DEBUG = False
ALLOWED_HOSTS = ['*']  # 실제 배포 서버의 도메인 설정

# Static/Media 파일 경로 등 배포용 설정