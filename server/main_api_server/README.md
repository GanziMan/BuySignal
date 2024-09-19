# 프로젝트 설정 가이드

## 1. 파이썬 환경 구성

- **권장 Python 버전**: 3.10.x 이상
- **필수 모듈 설치**: 다음 명령어로 필요한 모듈을 설치합니다.
    ```bash
    pip install -r requirements.txt
    ```

### PyCharm 설정 (기준)
1. `Run` > `Edit Configurations`로 이동.
2. `Script path`: `manage.py` 파일 경로 선택.
3. `Parameters`: `runserver` 추가하여 서버 실행 설정.

---

## 2. 데이터베이스(DB) 환경 구성

### PostgreSQL 설치
- PostgreSQL을 [공식 사이트](https://www.postgresql.org/download/)에서 다운로드 및 설치합니다.

### 로컬 테스트용 DB 정보
- **사용자(user)**: `postgres`
- **비밀번호(password)**: `ecom123!@#`

### DB 생성 명령어
1. PostgreSQL에 접속:
    ```bash
    psql -U postgres
    ```
2. 데이터베이스 생성:
    ```sql
    CREATE DATABASE ecommerce-base;
    ```

---

## 3. Django와 데이터베이스 연결 및 마이그레이션

### 1. 앱 마이그레이션 생성
```bash
python manage.py makemigrations alivecheck
python manage.py migrate
```



