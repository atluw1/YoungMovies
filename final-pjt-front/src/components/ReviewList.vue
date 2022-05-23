<template>
  <div>
    <p>번호 제목 작성자 작성일</p>
  </div>
</template>

<script>

// django 리뷰 주소
let reviewUrl = "http://127.0.0.1:8000/api/v1/reviews/"

export default {
  name: 'ReviewList',
  props: {
    review: Object
  },
  data: function() {
    return {
    }
  },
  methods: {
    toReviewDetail: function() {
      this.$router.push({ name: 'ReviewDetail', params: { review_pk: this.review.pk } })
    }
  }
}
</script>

<style>

</style>