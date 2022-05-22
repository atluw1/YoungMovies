<template>
  <v-for>

  </v-for>
</template>

<script>
import axios from 'axios'

// django 리뷰 주소
let reviewUrl = "http://127.0.0.1:8000/api/v1/reviews/"

export default {
  name: 'ReviewList',
  data: () => {
    return {
      reviewList: []
    }
  },
  mounted() {
    axios({
      method: 'GET',
      url: reviewUrl
    })
      .then(res => {
        this.reviewList = res.data
      })
      .catch(res => {
        console.log('불러오는 데 실패했습니다.', res)
      })
  },
  methods: {
  }
}
</script>

<style>

</style>