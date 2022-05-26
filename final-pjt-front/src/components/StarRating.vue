<template>
  <div>
    <!-- Text 기반 평점 => 일단 냅두자 => 뻑날까봐 무셔워 -->
    <!-- 영무비 평점: <span>{{ score }}</span> <v-btn @click.prevent="removeScore" v-show="isScored">취소<v-icon>mdi-cached</v-icon></v-btn>
    <form v-show="!isScored">
      점수 입력: <input v-model="scoreText" type="text">
      <button @click.prevent="sendStar">보내기</button>
    </form> -->
    <!-- 별표 기반 평점 -->
    <div class="d-flex justify-content-center align-items-center">
      <div class="d-flex flex-column justify-content-center align-items-center me-3">
        <div class="btn text-underline d-flex flex-column justify-content-center align-items-center">
          <div>영무비 평점</div>
          <div class="score">{{ score }}</div>
        </div> 
      </div>
      <div>
        <v-btn  @click.prevent="removeScore" v-show="isScored" small>취소</v-btn>
        <form class="" v-show="!isScored">
        <!-- 점수 입력: <input v-model="scoreText" type="text"> -->
          <div class="position-relative d-flex justify-content-center align-items-center">
          <v-rating
          v-model="scoreText"
          background-color="yellow lighten-3"
          color="blue"
          medium
          half-increments
          ></v-rating>
          <span class="scoretext">
          <button @click.prevent="sendStar">평점</button>
          </span>
          </div>
        </form>
      </div>  
    </div>  
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
          score: this.scoreText* 2,
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
      console.log(typeof this.scoreText)
      axios({
        url: 'http://127.0.0.1:8000/api/v1/score/',
        method: 'post',
        data: { 
          score: this.scoreText* 2,
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

.horizontal-line {
  background-color: #152EC9;
}

.scoretext {
  font-size: medium;
  margin-left: 1rem;
}

.score {
  font-size: large;
}
</style>