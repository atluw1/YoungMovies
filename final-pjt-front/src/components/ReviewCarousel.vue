<template>
  <div class="carousel_div animated-box in">
      <!-- v-carousel을 이용할 때 내부 이미지 비율을 유지하는 방법 => height='auto' -->
    <v-carousel
    :reverse='true'
    hide-delimiters
    :cycle='true'
    interval="6000"
    :show-arrows-on-hover='true'
    height='auto'
    >
      <!-- 아래 부분은 router 쓸 때 계속 참고할 부분일 것이다. -->
      <v-carousel-item
        v-for="(item, i) in movies"
        :key="i"
        :src="item.poster_path"
        :to="{ name: 'DetailView', params: { movieId: item.tmdb_id } }"
        style="height: auto; width: 100%;"  
      >

      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'ReviewCarousel',
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
      return this.$store.state.reviewMovies
    }
  }
}


</script >


<style>
.carousel_div {
  width: 80%;
  height: auto;
  /* padding: 10px; */
  /* background-color: black; */
}

/* The animation starts here */
.animated-box {
  position: relative;
}

.animated-box:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 4px;
  background: linear-gradient(120deg, #00F260, #0575E6, #00F260);
  background-size: 300% 300%;
  clip-path: polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) calc(100% - 3px), 3px calc(100% - 3px), 3px 100%, 100% 100%, 100% 0%, 0% 0%);
}

.animated-box.in:after {
  animation: frame-enter 1s forwards ease-in-out reverse, gradient-animation 4s ease-in-out infinite;
}

/* motion */
@keyframes gradient-animation {
  0% {
    background-position: 15% 0%;
  }
  50% {
    background-position: 85% 100%;
  }
  100% {
    background-position: 15% 0%;
  }
}

@keyframes frame-enter {
  0% {
    clip-path: polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) calc(100% - 3px), 3px calc(100% - 3px), 3px 100%, 100% 100%, 100% 0%, 0% 0%);
  }
  25% {
    clip-path: polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) 100%, 100% 100%, 100% 0%, 0% 0%);
  }
  50% {
    clip-path: polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, 100% 0%, 0% 0%);
  }
  75% {
    -webkit-clip-path: polygon(0% 100%, 3px 100%, 3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 0%, 0% 0%);
  }
  100% {
    -webkit-clip-path: polygon(0% 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 0% 100%);
  }
}

/* 여기서부터 무지개 */


</style>
