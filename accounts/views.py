from rest_framework import generics

from .models import Profile
from .serializers import ProfileSerializer
from django.shortcuts import render, get_object_or_404
# Create your views here.

class ProfileListAPIView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)

    def perform_create(self, serializer):
        queryset = Profile.objects.filter(user=self.request.user)
        if queryset.exists():
            raise ValidationError('You have already created a profile!')
        serializer.save(user=self.request.user)


class ProfileDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    def perform_update(self, serializer):
        instance = serializer.save(user=self.request.user)

    def get_object(self):
        return get_object_or_404(Profile, user=self.request.user)
