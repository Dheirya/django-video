from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('vid/', views.video, name='video'),
    path('user/', views.user, name='user'),
]