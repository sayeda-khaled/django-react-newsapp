# Generated by Django 3.2.4 on 2021-06-29 19:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_delete_profile'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('user', models.OneToOneField(blank=True, on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='accounts.user')),
                ('avatar', models.ImageField(upload_to='profiles/')),
                ('display_name', models.CharField(max_length=255)),
            ],
        ),
    ]