from django.db import models

from django.conf import settings

# Create your models here.

class Article(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField()
    # https://docs.djangoproject.com/en/2.2/topics/auth/customizing/#referencing-the-user-model
    # We have now the custom user in accounts... refer to the above link
    # https://www.caktusgroup.com/blog/2019/04/26/how-switch-custom-django-user-model-mid-project/
    author = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,)
    is_published = models.BooleanField(False, null=True)

    def __str__(self):
        return self.title
