<template>
  <div class="comment-list-item">
    <router-link :to="{ name: 'MyPageView', params: { username: comment.user.username } }">
      <div class="d-flex justify-content-between">
        <div>
          <i class="fa-solid fa-user"></i>
          <span> {{ comment.user.username }}</span>
        </div>      
        <p>{{ comment.created_at }}</p>
      </div>
    </router-link>
    
    <span v-if="!isEditing">{{ payload.content }}</span>

    <span v-if="isEditing">
      <input type="text" v-model="payload.content">
      <button @click="onUpdate">확인</button> |
      <button @click="switchIsEditing">취소</button>
    </span>

    <span v-if="currentUser.username === comment.user.username && !isEditing">
      <button @click="switchIsEditing">수정</button> |
      <button @click="deleteComment(payload)">삭제</button>
    </span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CommentListItem',
  props: { comment: Object },
  data() {
    return {
      isEditing: false,
      payload: {
        review_pk: this.comment.review,
        comment_pk: this.comment.pk,
        content: this.comment.content
      },
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
  methods: {
    ...mapActions(['updateComment', 'deleteComment']),
    switchIsEditing() {
      this.isEditing = !this.isEditing
    },
    onUpdate() {
      this.updateComment(this.payload)
      this.isEditing = false
    }
  },

}
</script>

<style>
</style>