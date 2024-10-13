# Python 3.12 이미지 사용
FROM python:3.12

# 작업 디렉토리 설정 (컨테이너 내)
WORKDIR /app

# requirements.txt 복사 및 패키지 설치
COPY requirements.txt /app/
RUN pip install setuptools
RUN pip install --no-cache-dir gunicorn
RUN pip install -r requirements.txt

# Django 프로젝트 전체를 복사
COPY . /app/

# Gunicorn을 사용하여 Django 서버 실행
CMD ["gunicorn", "--workers=3", "--bind=0.0.0.0:8000", "main_api_server.wsgi:application"]
