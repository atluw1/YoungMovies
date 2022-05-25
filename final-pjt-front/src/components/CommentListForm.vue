<template>
  <form @submit.prevent="onSubmit" class="comment-list-form">
    <!-- <label for="comment">comment: </label>
    <input type="text" id="comment" v-model="content" required> -->
    <div class="d-flex justify-content-between align-items-center">
      <div class="w-100">
          <v-text-field
            dark
            color="yellow"
            v-model="content"
            label="댓글"
            required
          ></v-text-field>
        </div>
      <v-btn
        id="btn"
        color="accent"
        elevation="7"
        class="mx-3"
        @click="onSubmit"
      >작성</v-btn>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CommentListForm',
  data() {
    return {
      content: ''
    }
  },
  computed: {
    ...mapGetters(['review']),
  },
  methods: {
    ...mapActions(['createComment']),
    onSubmit() {
      this.createComment({ review_pk: this.review.pk, content: this.content, })
      this.content = ''
    }
  }
}
</script>

<style>
</style>