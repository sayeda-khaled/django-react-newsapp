from django.conf import settings
from django.contrib.auth.models import AbstractUser #a models that is preexisting in django and we are going to inherit from that model
from django.db import models

class User(AbstractUser):
    pass

class Profile(models.Model):
    user= models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    avatar = models.ImageField(upload_to='profiles/') #avatar is a name we choose, it can be what ever we create..
    display_name = models.CharField(max_length=255) #on CharField, you have to have a max_length
    #this means all the avatar modles will be uploaded to a profiles folder

    def __str__(self):
        return self.display_name



# user = User.objects.get(pk=1)
