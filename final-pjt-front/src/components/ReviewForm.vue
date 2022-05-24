<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="title">제목: </label>
      <input v-model="newReview.title" type="text" id="title" />
    </div>
    <div>
      <label for="content">내용: </label>
      <textarea v-model="newReview.content" type="text" id="content"></textarea>
    </div>
    <div>
      <button>{{ action }}</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ReviewForm',
  props: {
    review: Object,
    action: String,
  },
  data() {
    return {
      newReview: {
        title: this.review.title,
        content: this.review.content,
      }
    }
  },

  methods: {
    ...mapActions(['createReview', 'updateReview']),
    onSubmit() {
    if (this.action === '작성') {
      this.createReview(this.newReview)
    } else if (this.action === '수정') {
      const payload = {
        pk: this.review.pk,
        ...this.newReview,
      }
      this.updateReview(payload)
      } 
    },
  }
}
</script>

<style>

</style>