<template>
  <div class="main_form_box">
    <div class="mt-3 mb-5 d-flex flex-column align-items-center">
    <h1 class="condition_h1">조건을 선택하세요</h1>
    </div>
    <div class="movie_box">
      <v-form>
        <!-- 장르 구획 -->
          <div class="my-5">
            <div class="d-flex justify-content-center">
              <h2 class="genre_h2">장르</h2>
            </div>
            <v-select
              v-model="genre"
              :items="genres"
              color="white"
              attach
              label="여러 항목을 선택하면 더 정확해집니다"
              clearable
              multiple
            ></v-select>
          </div>
        <!-- 연도 슬라이더 구획 -->
        <div>
          <div class="d-flex justify-content-between mt-5">
            <div class="year_column d-flex justify-content-start pt-5">
              <v-chip
              color="#ead219"
              >{{ year[0] }}년
              </v-chip>
            </div>
            <div class="year_column d-flex justify-content-center pb-2">
              <h2 style="color: #ead219;">
              개봉 연도 
              </h2>
            </div>
            <div class="year_column d-flex justify-content-end pt-5">
              <v-chip
              color="#ead219"
              >{{ year[1] }}년
              </v-chip>
            </div>
          </div>
          <v-range-slider
            color="#ead219"
            v-model="year"
            max="2022"
            min="1950"
            step="1"
          ></v-range-slider>
        </div>
        <!-- 연도 슬라이더 구획 끝 -->

        <!-- 상영 시간 구획 -->
        <div>
          <div class="d-flex justify-content-between mt-5">
            <div class="year_column d-flex justify-content-start pt-5">
              <v-chip
              color="#258B43"
              >{{ time[0] }}분
              </v-chip>
            </div>
            <div class="year_column d-flex justify-content-center pb-2">
              <h2 style="color: #258B43;">
              상영 시간 
              </h2>
            </div>
            <div class="year_column d-flex justify-content-end pt-5">
              <v-chip
              color="#258B43"
              >{{ time[1] }}분
              </v-chip>
            </div>
          </div>
          <v-range-slider
            color="#258B43"
            track-color="#F7E077"
            v-model="time"
            max="300"
            min="0"
            step="1"
          ></v-range-slider>
        </div>        

        <!-- 평점 구획 -->
        <div >
          <div class="mb-5 d-flex flex-column align-items-center justify-content-evenly">
            <h2 style="color:#e91e63;">
              평점 하한
            </h2>
          </div>
          <div class="vote_average_slider">
          <v-slider
            v-model="vote_average"
            track-color="pink"
            max="10"
            min="0"
            step="0.1"
            color="white"
            thumb-color="pink"
            thumb-label="always"
            thumb-size="27"
          ></v-slider>
          </div>
        </div>


        <!-- 버튼 구획 -->
        <div class="d-flex justify-content-center align-items-center">
          <v-btn
          color="white"
          outlined
          @click="movieQuery"
          >영화 추천받기</v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  name: 'SuggestQueryView',
  computed: {
    ...mapGetters(['getApiKey'])
  },
  data: function () {
    return {
      // url에 쓰이는 스트링들
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=ko-KR`,
      // url: `https://api.themoviedb.org/3/discover/movie?api_key=${this.getApiKey}&language=ko-KR&sort_by=popularity.desc&genre=${this.genre}`,
      
      genres: ['액션', '모험', '애니메이션', '코미디', '범죄', '다큐멘터리', '드라마', '가족', '판타지', '역사', '공포', '음악', '미스터리', '로맨스', 'SF', '스릴러', '전쟁', '서부'],
      genre: [],
      genres_id : {
        '액션': 28,
        '모험': 12,
        '애니메이션': 16,
        '코미디':35,
        '범죄': 80,
        '다큐멘터리': 99,
        '드라마':18,
        '가족': 10751,
        '판타지': 14,
        '역사': 36,
        '공포': 27,
        '음악': 10402,
        '미스터리': 9648,
        '로맨스': 10749,
        'SF': 878,
        '스릴러': 53,
        '전쟁': 10752,
        '서부': 37,
      },
      year: [1950, 2022],

      time: [60, 240],

      vote_average : 5,
      }},
  methods: {
    movieQuery: function () {
      let URL = 'https://api.themoviedb.org/3/discover/movie?api_key='
      URL += this.getApiKey + '&language=ko-KR'
      // console.log(URL)


      // 장르 구획
      let temp = `&with_genres=`
      this.genre.forEach((element, idx) => {
        temp += `${this.genres_id[element]},`
      })
        URL += temp

      // 연도 슬라이더 구획
      URL += `&primary_release_date.gte=${this.year[0]}`
      URL += `&primary_release_date.lte=${this.year[1]}`

      // 평점 구획

      URL += `&vote_average.gte=${this.vote_average}`

      // 상영시간 구획
      URL += `&with_runtime.gte=${this.time[0]}`
      URL += `&with_runtime.lte=${this.time[1]}`

      // 마무리 작업
      URL += '&vote_count.gte=150'
      URL += '&with_watch_monetization_types=flatrate'
      URL += '&include_adult=false'

      this.$router.push({name: 'SuggestedMoviesView', params: { URL: URL}})
    }
  }
}

</script>

<style >

span {
  color: white;
}

.main_form_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.movie_box {
  height: 50vh;
  width: 40%;
}



/* 장르 선택 */

.condition_h1 {
  color: rgb(207, 207, 207);
}



.genre_h2 {
  margin-bottom: 0.7rem;
  color: #1244c2;
}

.v-select__slot {
  color:#1244c2;
}

.v-select__selections{
  color:#1244c2;
}

.v-list-item__title {
  color:#1244c2;
}

.theme--light.v-label {
  color:#1244c2;
  font-size: 1rem;
}

.theme--light.v-icon {
  color:#1244c2;
}

.theme--light.v-select .v-select__selections {
  color:#1244c2;
}

.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
  border-color: #1244c2;
}


.theme--light.v-text-field:not(.v-input--has-state):hover > .v-input__control > .v-input__slot:before {
  border-color: #1244c2;
}



/* 개봉 연도 구획 */

.v-input {
  margin-top: 0;
  padding-top: 0;
}

.v-chip__content {
  color: black;
}



.year_column {
  width: 33%;
}



/* 평점 구획 */

.vote_average_slider {
  margin-top: 1.7rem;
}

</style>