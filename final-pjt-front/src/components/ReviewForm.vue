<template>
  <div class="animated-box in d-flex justify-content-center align-items-center">
    <form @submit.prevent="onSubmit" class="form">
      <v-text-field
        dark
        color="yellow"
        v-model="newReview.title"
        :rules="titleRules"
        label="제목"
        required
        autofocus
      ></v-text-field>
      <br><br><br>
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
      <br><br><br>
      <div>
        <div class="text-center">
          <v-btn
            id="btn"
            color="success"
            elevation="7"
            @click="onSubmit"
          >{{ action }}</v-btn>
        </div>
      </div>
    </form>
  </div>
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
.animated-box {
  width: 800px;
  height: 700px;
}

.form {
  width: 400px;
  margin-top: 5rem;
}
</style>