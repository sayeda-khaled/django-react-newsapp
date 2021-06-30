from django.urls import path

from .views import ArticleListAPIView
from .views import ArticleDetailAPIView

App_name='articles'

urlpatterns = [
    path('', ArticleListAPIView.as_view(), name="article_list"),
    path('<int:pk>/', ArticleDetailAPIView.as_view(), name='article_list_detail')
]
