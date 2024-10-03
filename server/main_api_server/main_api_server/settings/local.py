from .base import *

# 개발 환경에 맞는 데이터베이스 설정
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'buysignal_db',       # 로컬 개발용 DB 이름
        'USER': 'buysignal_user',      # 로컬 개발용 사용자
        'PASSWORD': 'ecom123!@#',      # 로컬 개발용 비밀번호
        'HOST': '127.0.0.1',           # 로컬에서 실행 중
        'PORT': '54320',                # 기본 PostgreSQL 포트
    }
}

# 개발 환경 특화 설정들
DEBUG = True
ALLOWED_HOSTS = ['localhost', '127.0.0.1']

# Static/Media 파일 경로 등 개발용 설정
