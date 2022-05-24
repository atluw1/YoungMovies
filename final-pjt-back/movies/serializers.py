from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Movie, Movie_score

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('title', 'poster_path', 'tmdb_id')


class ScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie_score
        fields = ('score',)