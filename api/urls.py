from django.urls import path, include

from . import views

urlpatterns = [
    path('users/', include('accounts.urls')),
    path('articles/', include('articles.urls')),

]
