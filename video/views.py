from django.shortcuts import render


def home(request):
    return render(request, 'video/home.html')


def video(request):
    return render(request, 'video/video.html')


def user(request):
    return render(request, 'video/user.html')
