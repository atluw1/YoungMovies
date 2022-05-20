<template>
    <div class="carousel_div">
      <v-carousel
      :reverse='true'
      hide-delimiters
      :cycle='true'
      interval="6000"
      :show-arrows-on-hover='true'
      >
        <!-- 아래 부분은 router 쓸 때 계속 참고할 부분일 것이다. -->
        <v-carousel-item
          v-for="(item, i) in movies"
          :key="i"
          :src="Url + item.poster_path"
          :to="{ name: 'DetailView', params: { movieId: item.id } }"
        >
        </v-carousel-item>
      </v-carousel>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'TrendingCarousel',
  components: {
  },
  data () {
        return {
          // 얘를 위에 넣으면 새로고침할 때, vscode에서 저장을 안 하면 안 되는 문제가 생기는데 왜 이러는지 모르겠다.
          // => 문제 해결 => data는 본 컴포넌트에서 값을 저장/사용할 때 쓰는 곳이지 state를 건드릴 때는 computed를 사용해야 한다.
          // movies: this.$store.state.trendingMovies,
          Url: 'https://image.tmdb.org/t/p/original',
        }
  },
  // router-link를 받는 두 가지 방법: https://any-ting.tistory.com/46
  computed: {
    movies() {
      return this.$store.state.trendingMovies
    }
  }
}


</script>

<style>
.carousel_div {
  width: 80%;
  height: auto;
  padding: 10px;
  background-color: black;
}

</style>
