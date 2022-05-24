from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Movie
from .serializers import MovieSerializer

@api_view(['POST'])
def create_movie(request):
    Data = request.data
    Data['tmdb_id'] = int(Data['tmdb_id'])
    # 어차피 고유값으로 들어간다.
    serializer = MovieSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(request.data)
    