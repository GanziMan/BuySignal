from django.db import models

class CheckTable(models.Model):
    code = models.IntegerField(primary_key=True, default=1)  # PK로 사용할 code 필드
    state = models.CharField(max_length=10)      # state 필드, 최대 길이 10

    def __str__(self):
        return f"Code: {self.code}, State: {self.state}"

    class Meta:
        db_table = 'check_table'  # 테이블 이름을 'check_table'로 설정
