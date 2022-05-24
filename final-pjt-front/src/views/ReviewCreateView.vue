<template>
  <div>
    <h1>리뷰 작성</h1>
    <ReviewForm :review='review' action='작성' />
  </div>
</template>

<script>
  import ReviewForm from '@/components/ReviewForm.vue'

  export default {
    name: 'ReviewCreate',
    components: {
      ReviewForm,
    },
    data() {
      return {
        review: {
          pk: null,
          title: '',
          content: '',
        }
      }
    }
  }
</script>

<style>

</style>