from django.shortcuts import render, get_object_or_404, get_list_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Movie, Movie_score
from .serializers import MovieSerializer, ScoreSerializer
from django.db.models import Avg


@api_view(['GET'])
def score_carousel(request):
    score = Movie_score.objects.values('movie').annotate(Avg('score')).order_by('-score__avg')
    movie_set = {}
    if len(score) < 10:
        length = len(score)
    else:
        length = 10
    for i in range(length):
        movie = get_object_or_404(Movie, pk=score[i]['movie'])
        movie_set['tmdb_id'] = movie.tmdb_id
        movie_set['title'] = movie.title
        movie_set['poster_path'] = movie.poster_path
    print(movie_set)
    return Response(movie_set)



@api_view(['POST'])
def create_movie(request):
    Data = request.data
    Data['tmdb_id'] = int(Data['tmdb_id'])
    # 어차피 고유값으로 들어간다.
    serializer = MovieSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(request.data)


@api_view(['POST'])
def create_or_change_score(request):
    User = request.user
    # print(User.pk)
    Data = request.data
    movie = get_object_or_404(Movie, tmdb_id=Data['movie_id'])

    # 시리얼라이저에서 직접 입력받는 필드는 score밖에 없으므로, 잘 정해주어야 한다 
    if movie.evaluating_users.filter(pk=User.pk).exists():
        movie.evaluating_users.remove(User)
        # serializer = ScoreSerializer(data=Data)
        # if serializer.is_valid(raise_exception=True):
            # serializer.save(user=User, movie=movie)
            # print(serializer)
            # 영화 스코어 평균
        score = Movie_score.objects.filter(movie=movie).aggregate(Avg('score'))
        if score['score__avg'] == None:
            print(score)
            averageScore = {'averageScore': 0}
        else:
            averageScore = {'averageScore': round(score['score__avg'], 2)}
    else:
        # 여기는 잘 됨
        serializer = ScoreSerializer(data=Data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=User, movie=movie)
            # 영화 스코어 평균
            score = Movie_score.objects.filter(movie=movie).aggregate(Avg('score'))
            averageScore = {'averageScore': round(score['score__avg'], 2)}
            print(averageScore)
    return Response(averageScore)

@api_view(['POST'])
def initial_score(request):
    User = request.user
    Data = request.data
    movie = get_object_or_404(Movie, tmdb_id=Data['movie_id'])
    print(movie.evaluating_users.all())
    # 만약 점수가 있다면
    if movie.evaluating_users.filter(pk=User.pk).exists():
        isScoreExist = True
    else:
        isScoreExist = False
    # print(movie.evaluating_users.all())
    score = Movie_score.objects.filter(movie=movie).aggregate(Avg('score'))
    # print(isScoreExist)
    if score['score__avg'] == None:
        averageScore = {
            'averageScore': 0,
            'isScoreExist': False
            }
    else:
        if isScoreExist:
            averageScore = {
                'averageScore': round(score['score__avg'], 2),
                'isScoreExist': True
                }
        else:
            averageScore = {
                'averageScore': round(score['score__avg'], 2),
                'isScoreExist': False
                }
    return Response(averageScore)