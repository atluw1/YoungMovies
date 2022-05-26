from django.contrib import admin
from .models import Movie, Movie_score

# Register your models here.

class MovieAdmin(admin.ModelAdmin):
    list_display = ('pk', 'title', 'poster_path', 'tmdb_id',)

class Movie_scoreAdmin(admin.ModelAdmin):
    list_display = ('pk', 'score', 'movie_id', 'user_id')


admin.site.register(Movie, MovieAdmin)
admin.site.register(Movie_score, Movie_scoreAdmin)