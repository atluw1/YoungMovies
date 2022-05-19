<template>
  <div id="app">
    <v-app>
      <!-- 전체를 감싸는 이미지 -->
      <div :style="backgroundStyle">
        <nav class="navarea">
          <NavBar />
        </nav>
        <div class="main">
          <router-view/>
        </div>
      </div>
    </v-app>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import axios from 'axios'
import _ from 'lodash'

export default {
  name: 'App',
  data: 
    function () {
      return {
        backgroundStyle : ''
      }
    
  },
  components: {
    NavBar,
  },
  created() {
    axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=ac824af39d5e13e1310acc5a598278ab')
    .then((res) => {
      const pictureNumber = _.sample(_.range(0, 20))
      const backImageUrl = res.data.results[pictureNumber].backdrop_path
      this.backgroundStyle = `height: 100vh; background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 60%, rgb(0, 0, 0, 0.7)),url('https://image.tmdb.org/t/p/original${backImageUrl}'); background-repeat: no-repeat, no-repeat; background-size: cover;`
      
    })
  
}}
</script>


<style>
/* 메인 페이지의 맨 위쪽 navarea css(navbar가 아니고 속한 지역) */
.navarea {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
}

/* 전체 background에 이미지 적용 */
.background {
  height: 100vh;
  background: 
  linear-gradient(to bottom, 
  rgba(0, 0, 0, 0.3) 60%,
  rgb(0, 0, 0, 0.7)),
  url('https://image.tmdb.org/t/p/original/xHrp2pq73oi9D64xigPjWW1wcz1.jpg');
  /* url('https://image.tmdb.org/t/p/original/gG9fTyDL03fiKnOpf2tr01sncnt.jpg'); */
  background-repeat: no-repeat, no-repeat;
  /* 값을 cover 로 지정하면 배경이미지의 가로, 세로 길이 모두 영역 전체에 이미지가 덮이도록 적용 */
  /* 값을 contain 으로 지정하면 배경이미지의 가로, 세로 길이 모두 요소 안쪽에 알맞은 비율로 적용 */
  background-size: cover;
}

/* 이제 바뀔 메인 페이지가 들어 갈 곳이다. */
.main {
  height: 10vh;
}
</style>