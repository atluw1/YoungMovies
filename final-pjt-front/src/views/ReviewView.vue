<template>
  <div>
    <h1>모든 리뷰입니다</h1>
    <div>
      <ReviewItem v-for="(review, idx) in reviews" :key="review.pk" :review="review" :idx='idx'/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ReviewItem from '@/components/ReviewItem.vue'

export default {
  name: 'ReviewView',
  components: {
    ReviewItem,
},
  data: function () {
    return {
      reviews: [],
      }
  },
  computed: {
    url: function () { return 'http://127.0.0.1:8000/api/v1/reviews/' },
  },
  created() {
    axios.get(this.url)
    .then((res) => {
      console.log(res.data)
      this.reviews = res.data
    })
  }
  }
</script>

<style>

</style>