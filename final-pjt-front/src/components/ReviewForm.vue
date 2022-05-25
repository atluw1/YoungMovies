-<template>
  <form @submit.prevent="onSubmit">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <div class="w-50">
        <v-text-field
          dark
          color="yellow"
          v-model="newReview.title"
          :rules="titleRules"
          label="제목"
          required
          autofocus
        ></v-text-field>
      </div>

      <div class="w-50">
        <v-textarea
          dark
          clearable
          clear-icon="mdi-close-circle"
          :rules="contentRules"
          color="yellow"
          v-model="newReview.content"
          label="내용"
          required
        ></v-textarea>
      </div>
      <div>
        <div class="text-right">
          <v-btn
            id="btn"
            color="success"
            elevation="7"
            class="mx-3 mb-3"
            @click="onSubmit"
          >{{ action }}</v-btn>
        </div>
      </div>
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
      },
      titleRules: [
          v => !!v || "제목을 입력하세요",
      ],
      contentRules: [
          v => !!v || "내용을 입력하세요",
      ],
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

<style scoped>
/* #btn {
  background-color: ;
} */
</style>