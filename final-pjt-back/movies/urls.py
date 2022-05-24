from django.urls import path
from . import views


app_name = "movies"
urlpatterns = [
    path('create/', views.create_movie),
    path('score/', views.create_or_change_score),
    path('score/init/', views.initial_score),
]