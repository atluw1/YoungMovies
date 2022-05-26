<template>
  <!-- 아이콘+작성자 이름 , 작성일 -->
  <div class="comment-list-item">
    <div class="d-flex justify-content-between">
      <router-link
        style="text-decoration: none"
        :to="{ name: 'MyPageView', params: { username: comment.user.username } }">
        <div>
          <i class="fa-solid fa-user" style="color:tomato"></i>
          <span class="fw-bold"> {{ comment.user.username }}</span>
        </div>      
      </router-link>
      <p>{{ comment.updated_at }}</p>
    </div>

    <div class="d-flex justify-content-between">
      <span v-if="!isEditing">&nbsp;&nbsp;&nbsp;&nbsp;{{ payload.content }}</span>
      
      <div v-if="isEditing" class="d-flex row justify-content-between align-items-center">
        <div>
          <v-text-field
            dark
            color="yellow"
            v-model="payload.content"
            label="수정할 내용"
            required
            autofocus
          ></v-text-field>
        </div>
          <!-- <input type="text" v-model="payload.content"> -->
        <div>
          <button style="color: seagreen" @click="onUpdate">확인 </button> |
          <button @click="switchIsEditing"> 취소</button>
        </div>
      </div>

      <div v-if="currentUser.username === comment.user.username && !isEditing">
        <div>
          <button style="color: royalblue" @click="switchIsEditing">수정</button> |
          <button style="color: red" @click="deleteComment(payload)">삭제</button>
        </div>
      </div>
    </div>
    <hr>
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