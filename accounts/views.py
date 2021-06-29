from rest_framework import generics

from .models import Profile
from .serializers import ProfileSerializer
# Create your views here.

class ProfileListAPIView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

# def perform_create(self, serializer):
#     serializer.save(user=self.request.user)

def perform_create(self, serializer):
    queryset = SignupRequest.objects.filter(user=self.request.user)
    if queryset.exists():
        raise ValidationError('You have already signed up')
    serializer.save(user=self.request.user)

class ProfileDetailAPIView(generics.RetrieveUpdateAPIView):

 def perform_update(self, serializer):
    instance = serializer.save()
    send_email_confirmation(user=self.request.user, modified=instance)
# def get_queryset(self):
#     user = self.request.user
#     return user.accounts.all()
