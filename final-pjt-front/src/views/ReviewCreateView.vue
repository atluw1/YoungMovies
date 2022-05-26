<template>
  <div class="d-flex row justify-content-center align-items-center">
    <br><br><br><br><br><br><br><br>
    <h1 class="text-center m-0">게시글 작성</h1>
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