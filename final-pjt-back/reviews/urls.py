from django.urls import path
from . import views

app_name = 'reviews'

urlpatterns = [
    # 전체 리뷰 리스트 조회
    path('reviews/', views.review_list),

    # 특정 영화 리뷰 리스트 조회
    path('reviews/<int:movie_pk>/', views.review_of_movie),

    # 리뷰 수정, 조회, 삭제
    path('reviews/<int:review_pk>/', views.review_detail),
    # 리뷰 생성
    path('movies/<int:movie_pk>/reviews/', views.create_review),

    # 별점, 영화 시청했다는 표시
    path(''),
]