# Generated by Django 4.1.13 on 2024-01-08 16:30

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("App", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="NewPost",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("username", models.CharField(max_length=30)),
                ("post", models.TextField(max_length=1000)),
            ],
        ),
        migrations.DeleteModel(
            name="Users",
        ),
    ]