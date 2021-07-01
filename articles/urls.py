from django.urls import path

from .views import ArticleListAPIView, ArticleDetailAPIView

App_name='articles'

urlpatterns = [
    path('<int:pk>/', ArticleDetailAPIView.as_view(), name='article_list_detail'),
    path('', ArticleListAPIView.as_view(), name="article_list"),
]
