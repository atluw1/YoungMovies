<template>
  <div class="d-flex row justify-content-center align-items-center">
    <br><br><br><br><br><br><br><br>
    <h1 class="text-center m-0">게시글 수정</h1>
    <br><br><br><br>
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
