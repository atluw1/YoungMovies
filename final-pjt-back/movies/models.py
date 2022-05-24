from django.db import models
from django.conf import settings
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=300)
    # 평점을 매긴 유저들을 저장한다. => 단, 평점도 저장하기 위해 Movie_score 테이블이 필요하다.
    # 1점부터 5점까지는 평점을 매긴 유저들, 0점은 평점은 매기지 않고 봤다는 표시만 한 유저들을 의미
    evaluating_users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='evaluated_movies', through="Movie_score")
    poster_path = models.CharField(max_length=500)
    tmdb_id = models.IntegerField(unique=True)


class Movie_score(models.Model):
    # 본 모델로 인해 생성된 테이블에 유저와 영화의 pk를 저장한다.
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    score = models.IntegerField(validators=[
            MaxValueValidator(5),
            MinValueValidator(1)
        ])
