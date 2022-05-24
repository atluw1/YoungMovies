<template>
  <div>
    <h1>리뷰 수정</h1>
    <ReviewForm v-if="isReview" :review="review" action="수정" />
  </div>

</template>

<script>
  import ReviewForm from '@/components/ReviewForm.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'ReviewEditView',
    components: { ReviewForm },
    computed: {
      ...mapGetters(['review', 'isReview',])
    },
    methods: {
      ...mapActions(['fetchReview'])
    },
    created() {
      this.fetchReview(this.$route.params.review_pk)
    },
  }
</script>

<style></style>
