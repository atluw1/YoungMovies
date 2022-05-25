<template>
  <div>
    <!-- Text 기반 평점 => 일단 냅두자 => 뻑날까봐 무셔워 -->
    <!-- 영무비 평점: <span>{{ score }}</span> <v-btn @click.prevent="removeScore" v-show="isScored">취소<v-icon>mdi-cached</v-icon></v-btn>
    <form v-show="!isScored">
      점수 입력: <input v-model="scoreText" type="text">
      <button @click.prevent="sendStar">보내기</button>
    </form> -->
    <!-- 별표 기반 평점 -->
    영무비 평점: <span>{{ score }}</span> <v-btn @click.prevent="removeScore" v-show="isScored">취소<v-icon>mdi-cached</v-icon></v-btn>
    <form v-show="!isScored">
      <!-- 점수 입력: <input v-model="scoreText" type="text"> -->
      <v-rating
      v-model="scoreText"
      background-color="purple lighten-3"
      color="purple"
      large
      half-increments
      ></v-rating>
      <button @click.prevent="sendStar">보내기</button>
    </form>    
  </div>
</template>

    <!-- {{ movieId }} -->
<script>

import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'StarRating',
  props: {
    movieId: [String, Number]
  },
  data: function() {
    return {
      scoreText: 0,
      score: '0',
      isScored: false,
    }
  },
  computed: {
    ...mapGetters(['authHeader'])
  },
  methods: {
    initialize (arg) {
      this.isScored = arg
    },
    removeScore () {
      axios({
        url: 'http://127.0.0.1:8000/api/v1/score/',
        method: 'post',
        data: { 
          score: parseInt(this.scoreText, 10),
          movie_id: parseInt(this.movieId, 10)
          },
        headers: this.authHeader
      }).then(res => {
        this.score = res.data.averageScore
        this.isScored = false
      })
    },
    // 평점 보내기
    sendStar: function () {
      axios({
        url: 'http://127.0.0.1:8000/api/v1/score/',
        method: 'post',
        data: { 
          score: parseInt(this.scoreText, 10) * 2,
          movie_id: parseInt(this.movieId, 10)
          },
        headers: this.authHeader
      })
      .then(res => {
        this.score = res.data.averageScore
        this.isScored = true
        // this.isOpened = !this.isOpened
      })
    },
    // 페이지 열었을 때 평점 초기화
    initialScore: function () {
      axios({
        url: 'http://127.0.0.1:8000/api/v1/score/init/',
        method: 'post',
        headers: this.authHeader,
        data: {
          movie_id: parseInt(this.movieId, 10)
        },
      }).then(res => {
        console.log(res)
        this.score = res.data.averageScore
        const arg = res.data.isScoreExist
        this.initialize(arg)
      })
    }
  },
  created() {
    this.initialScore()
  }
}
</script>

<style scoped>
.scorearea {
  width: 100px;
}
</style>