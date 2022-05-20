# Final Project: YoungMovies(가제)

[toc]

## 0. TMDB 쿼리 목록

### `<>` 태그로 묶은 부분이 변수임!

- TMDB API 메인화면
  - https://developers.themoviedb.org/3/getting-started/introduction



- Image 쿼리 날리기
  - tmdb에서 제공되는 이미지의 url
  - `https://image.tmdb.org/t/p/<image설정>/<image_path>`
  - 예시
    - 원본 사이즈: https://image.tmdb.org/t/p/original/xHrp2pq73oi9D64xigPjWW1wcz1.jpg
    - 가로 500 사이즈(영화별로 지원 안 되는 사이즈가 있을 수 있음!) https://image.tmdb.org/t/p/w500/xHrp2pq73oi9D64xigPjWW1wcz1.jpg
    - https://image.tmdb.org/t/p/original/gG9fTyDL03fiKnOpf2tr01sncnt.jpg



- 영화 상세 페이지 쿼리
  - 영화의 상세한 정보를 제공해주는 페이지
  - `https://api.themoviedb.org/3/movie/<movie_id>?api_key=<api_key>&language=ko-KR`



- 영화 추천 쿼리 날리기
  - 사용자가 조건을 정해서 영화를 추천 받는 페이지에서의 쿼리 날리기
  - 이 부분은 https://developers.themoviedb.org/3/discover/movie-discover 이 페이지에서 참고



- 영화 검색 바 쿼리 날리기
  - 검색 창에서 영화를 글자를 날려 찾는 쿼리 날리기
  - `https://api.themoviedb.org/3/search/movie?api_key=<api_key>&language=ko-KR&query=<검색어>&page=1&include_adult=true`



- 영화 youtube 트레일러 쿼리 날리기
  - `https://api.themoviedb.org/3/movie/<movie_id>/videos?api_key=<api_key>&language=ko-KR`
  - 날려서 나온 결과값은 video가 엄청 많이 나온다 그 중에서 type이 trailer인 것들 중에서 뽑아서
  - `https://www.youtube.com/watch?v=<key>`에 넣는다
  - 유튜브 API를 사용하는 게 더 정확하다고 한다. 일단 TMDB video를 활용하되 시간이 남으면 유튜브를 건드려보자



## 1. 적용 알고리즘

- 사용자가 직접 자신이 원하는 영화 조건을 검색하고 쿼리를 쏘아 주면 이를 응답하는 식



## 2. 페이지

1. 메인 페이지

   - 로고
   - navbar => 영화 검색(search기능으로 한글자씩 넣는거)
     - 구현중
   - 추천 쿼리를 기반으로 한 영화 목록들
     - 
   - now playing

2. 상세 페이지

   - 페이지로 넘어가게?
   - 상세 페이지 디자인 컨셉 => 따라하지 말고 이런 느낌으로

   ![상세 페이지 디자인 컨셉](README.assets/상세 페이지 디자인 컨셉.jpg)

   ![구현](README.assets/구현.jpg)

   

3. 추천 영화 쿼리 날리는 페이지

   - 여러가지 조건들을 입력받아 쿼리를 날린다.

   

4. 리뷰 페이지

   - 기본적으로 리뷰 목록 + pagination으로 구현
   - 영화별로 리뷰 찾기 => TMDB 쿼리 쏘기 or 우리 DB에 쿼리 쏘기



4. 회원정보 페이지

5. 회원가입

6. 로그인
   - veutify 활용 =>
7. 가입 안 하면 이용 못 하게

### 1. 메인 페이지

- 본 영화는 추천하지 않게 Movie에 column 추가도 필요할 듯 하다.

- carousel을 만들 때,



### 1. 검색 페이지

- 





### 2. 리뷰 페이지

#### 1. 메인 화면에서는 리뷰 목록을 띄워 줌 => 옆에



영화로 리뷰 찾아보기

- 

- 영화 평점 1 ~ 5점 정하기 => serializer에서

- validators=[

MaxValueValitor(5)

MinValueValitor(1)

]



### 3. 회원정보 페이지





### 4. 회원가입





### 5. 로그인





## 날짜별 로그: 나중을 위해서 작성하자

### 05/20

#### 김현영

#### 김영훈
