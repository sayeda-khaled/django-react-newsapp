from django.urls import path

from .views import ArticleListAPIView, ArticleDetailAPIView, UserArticleListAPIView

App_name='articles'

urlpatterns = [
    path('user/', UserArticleListAPIView.as_view(), name="user_article_list"),
    path('<int:pk>/', ArticleDetailAPIView.as_view(), name='article_list_detail'),
    path('', ArticleListAPIView.as_view(), name="article_list"),
]
