# Generated by Django 2.2.7 on 2019-12-03 06:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='movies',
            old_name='rank',
            new_name='movieId',
        ),
    ]
