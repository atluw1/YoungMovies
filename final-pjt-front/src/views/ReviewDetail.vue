<template>
  <div class="container">
    {{ reviewDetail }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ReviewDetail',
  props: {
    review_pk: {
      type: [Number, String]
    }
  },
  data: function () {
    return {
      reviewDetail: {},
      }
  },
  computed: {
    url: function () { return `http://127.0.0.1:8000/api/v1/reviews/${this.review_pk}` },
  },
  created() {
    axios.get(this.url)
    .then((res) => {
      console.log(res.data)
      this.reviewDetail = res.data
    })
  }
  }


</script>

<style>

</style>