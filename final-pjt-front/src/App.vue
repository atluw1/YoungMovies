<template>
  <div id="app">
    <v-app>
      <!-- 전체를 감싸는 이미지 -->
      <div :style="backgroundStyle">
        <nav class="navarea">
          <NavBar />
        </nav>
          <main class="d-flex justify-content-center">
            <div class="main_area">
              <!-- :key="$route.fullPath" 도 된다 이거 안 붙여주면 router path가 바뀌어도 갱신이 안 된다 -->
              <router-view :key="$route.path"/>
            </div>
          </main>
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
        backgroundStyle : '',
        
      }
    
  },
  components: {
    NavBar,
  },
  created() {
    const apiKey = this.$store.state.apiKey
    axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=ko-KR&include_image_language=kr`)
    .then((res) => {
      
      // 흥행 중 영화들의 poster_path를 리스트에 저장하여 state에 올린 뒤, mainpage에서 carousel로 돌림
      const tempTrendingArray = []
      res.data.results.forEach(element => {
        tempTrendingArray.push({id: element.id, poster_path: element.poster_path})
      });
      this.$store.dispatch('create_trending_movies', tempTrendingArray)

      // 배경 화면 부분
      const pictureNumber = _.sample(_.range(0, 20))
      const backImageUrl = res.data.results[pictureNumber].backdrop_path
      this.backgroundStyle = `height: 100vh; background: linear-gradient(to bottom, rgba(0, 0, 0, 0.65) 60%, rgb(0, 0, 0, 1)),url('https://image.tmdb.org/t/p/original${backImageUrl}'); background-repeat: no-repeat, no-repeat; background-size: cover; background-position: center;`      
    })
    axios.get('http://127.0.0.1:8000/api/v1/score_carousel/')
    .then((res) =>{
      console.log(res.data)
    })
}}
</script>


<style>
body {
  background-color: black;
  /*  */
  /* height: ; */
}

@font-face {
    font-family: 'GongGothicMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/GongGothicMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

/* 폰트 => 이사만루 medium */
* {
  color: #E91E48;
  /* color: whitesmoke; */
  font-family: 'GongGothicMedium';
}

/* 메인 페이지의 맨 위쪽 navarea css(navbar가 아니고 속한 지역) */
.navarea {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
}

/* 전체 background에 이미지 적용 */
/* 실제로는 여기 적용되는 게 아니라 위 created()에 적용되므로 주의! 아래는 그냥 과정 파일이다. */
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
.main_area {
  width: 70vw;
  /* background-color: white; */
  height: 60vh;
}


</style>