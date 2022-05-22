<template>
  
</template>

<script>
import axios from 'axios'

// django 리뷰 주소
let reviewUrl = "http://127.0.0.1:8000/api/v1/reviews/"

export default {
  name: 'ReviewList',
  data: () => {
    return {
      review: {}
    }
  },
  methods: {
  }
}
</script>

<style>

</style>