# Generated by Django 5.1.1 on 2024-09-19 12:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CheckTable',
            fields=[
                ('code', models.IntegerField(primary_key=True, serialize=False)),
                ('state', models.CharField(max_length=10)),
            ],
            options={
                'db_table': 'check_table',
            },
        ),
    ]