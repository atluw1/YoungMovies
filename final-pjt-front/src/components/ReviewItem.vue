<template>
  <div>
    <p>{{ idx + 1 }} {{ review.title }} {{ review.user.username }} {{ review.created_at }}</p>
  </div>
</template>

<script>

// django 리뷰 주소
// let reviewUrl = "http://127.0.0.1:8000/api/v1/reviews/"

export default {
  name: 'ReviewItem',
  props: {
    review: Object,
    idx: Number
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