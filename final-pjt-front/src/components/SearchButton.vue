<template>
    <!-- <v-app> -->
      <!-- dialog 설정(modal 비슷한거) -->
      <v-dialog
        click:outside="true"
        dark
        fullscreen
      >
        <!-- 화면에 표시되는 버튼 부분 -->
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            x-large
            color="blue"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-movie-search-outline</v-icon>
            <span class="d-none d-xl-inline" style="line-height: normal; margin-left:0.2rem;"> 검색</span>
          </v-btn>

        </template>
        <!-- 버튼 누르면 뜨는 부분 -->
        <template v-slot:default="dialog"> <!-- 얘를 설정 안 해주면 아래 닫기 버튼이 눌리지 않는다.-->
          <!-- v-card 설정을 해 주면 v-sheet와 같이 들어간다. background 설정을 inline으로 해 준 이유는 우선순위를 위해서이다 -->
          <!-- v-card는 버튼 누르면 뜨는 부분의 전체 부분을 의미한다 grid system을 이용하기 위해 중앙으로 몰아준다. -->
          <v-card class="d-flex flex-column justify-content-center align-content-center" style="background-color: rgba(26, 26, 26, 0.9); border-color: rgba(26, 26, 26, 0.9);">
          <!-- 부트스트랩을 위한 그리드 시스템 준비 -->
            <div class="container">
              <!-- 바른 레이아웃을 위한 완충 블록 -->
              <div class="d-block d-md-none overpad"></div>

              <div class="row d-flex align-items-center">
                <!-- 입력창과 버튼 -->
                <!-- 작을 때는 화면 중앙 정렬 -->
                <div class="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center " style="height: 50px;">
                    <v-text-field v-model="searchText" @keyup="searchMovie" style="margin: 0px;" autofocus clearable color="blue" class="search_input" label="영화 제목을 입력하세요">
                    </v-text-field>
                    <v-card-actions class="">
                      <v-btn @click="dialog.value = false; refreshText();"><strong>닫기</strong></v-btn>
                    </v-card-actions>
                </div>

                <div class="d-block d-md-none underpad"></div>
                <!-- 영화들이 표시되는 부분 -->
                <div class="col-12 col-lg-6 my-3">
                    <div class="row">
                      <!-- 왜인지는 모르겠다. -->
                      <MovieItem @close-dialog="dialog.value = false; refreshText();" v-for="movie in movieList" :key="movie.id" :movie="movie" />
                    </div>
                </div>
              </div>
            </div>
          </v-card>
        </template>
      </v-dialog>
    <!-- </v-app> -->
</template>

<script>
import MovieItem from './MovieItem.vue';
import axios from 'axios'

export default {
  name: 'SearchButton',
  components: {
    MovieItem
  },
  // 아래 부분은 dialog 설정을 위해 필요하다
  data: () => {
    return {
      dialog : false,
      searchText: '',
      movieList: [],  
    }
  },
  methods: {
    // closeDialog: function () {
    //   this.dialog.value = false
    // },

    searchMovie: function () {
      if (this.searchText !== '') {
        const tempList = []
        const apiKey = this.$store.state.apiKey
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=ko-KR&query=${this.searchText}&page=1&include_adult=false`)
        .then(res => {
          res.data.results.forEach(({ title, id, poster_path }) => {
            if (tempList.length > 11) {
              return
            }
            tempList.push({title, id, poster_path})
          })
        }
        )
        this.movieList = tempList
      }
    },
    refreshText () {
      this.searchText = ''
      this.movieList = []
    }

  }
}

</script>

<style scoped>

.search_card {
  width: 80vw;
  /* height: 80vh; */
}

.button {
  font-weight: bold;
}

.search_input {
  width: 80%;
}

.overpad {
  height: 200px;
}

.underpad {
  height: 100px;
}

</style>
