<template>
  <div>
    <h1 class="text-center">게시글 작성</h1>
    <br><br><br><br>
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