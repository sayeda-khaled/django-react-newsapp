from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework import permissions

from .models import Article

from .serializers import ArticleSerializer

# view(s) for non authenticated user

class ArticleListAPIView(generics.ListAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleDetailAPIView(generics.RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


# view(s) for the authenticated user
class UserArticleListAPIView(generics.ListCreateAPIView):
    # queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    def get_queryset(self):
        user = self.request.user
        return Article.objects.filter(author=user)

            # def get_object(self):
            #     return get_object_or_404(Article, author=self.request.user)

class UserArticleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def perform_update(self, serializer):
        instance = serializer.save(author=self.request.user)
