from django.urls import path
from . import views


app_name = "accounts"
urlpatterns = [
    # accounts 관련 회원가입, 로그인 등의 기능들은, dj_rest_auth 등을 이용하여 구현하기 때문에, 우리가 url을 지정해 줄 필요가 없다.
    # 우리가 개인적으로 지정해 주어야 하는 건 my_page 정도이다.

    # path("signup/", views.signup, name="signup"),
    # path("login/", views.login, name="login"),
    # path("logout/", views.logout, name="logout"),
    
    path("<username>/mypage/", views.my_page, name="my_page"),
]