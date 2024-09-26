from django.db import models

# Sample Model
class Sample(models.Model):
    test_str = models.CharField(max_length=255)
    test_int = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.test_str
