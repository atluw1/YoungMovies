<template>
  <div>
    영무비 평점: {{ score }}
    <form @click.prevent="sendStar">
      점수 입력: <input v-model="scoreText" type="text">
      <button>보내기</button>
    </form>
    {{ movieId }}
  </div>
</template>

<script>

import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'StarRating',
  props: {
    movieId: Number
  },
  data: function() {
    return {
      scoreText: '',
      score: ''
    }
  },
  computed: {
    ...mapGetters(['authHeader'])
  },
  methods: {
    sendStar: function () {
      axios({
        url: 'http://127.0.0.1:8000/api/v1/score/',
        method: 'post',
        data: { 
          score: parseInt(this.scoreText, 10),
          movie_id: parseInt(this.movieId, 10)
          },
        headers: this.authHeader
      })
      .then(res => {
        this.score = res.data.averageScore
      })
    },
    initialScore: function () {
      axios({
        url: 'http://127.0.0.1:8000/api/v1/score/init/',
        method: 'post',
        headers: this.authHeader,
        data: {
          movie_id: parseInt(this.movieId, 10)
        },
      }).then(res => {
        this.score = res.data.averageScore
      })
    }
  },
  created() {
    this.initialScore()
  }
}
</script>

<style>

</style>