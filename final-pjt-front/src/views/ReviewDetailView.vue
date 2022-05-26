<template>
  <div class="container">
    <h1 id="title">{{ review.title }}</h1>
    <hr>
    <div class="d-flex justify-content-between">
      <router-link
      style="text-decoration: none"
      :to="{ name: 'MyPageView', params: { username: review.user.username } }">
        <div>
          <i class="fa-solid fa-user"></i>
          <span id="name" class="fw-bold"> {{ review.user.username }}</span>
        </div>
      </router-link>
      <p id="date">{{ review.created_at }}</p>
    </div>
    <p id="content">{{ review.content }}</p>
    <!-- review Edit/Delete UI -->
    <div v-if="isAuthor" class="text-right">
      <router-link
        style="text-decoration: none; color: inherit;"
        :to="{ name: 'ReviewEdit', params: { review_pk } }">
        <button style="color: royalblue">수정</button>
      </router-link>
      <button class="mx-2"
      style="color: red" @click="deleteReview(review_pk)">삭제</button>
    </div>

    <!-- review Like UI -->
    <div>
      <vue-star 
        animate="animated bounceIn"
        color="#F05654"
        id="heart">
        <i slot="icon" class="fa fa-heart fa-2xl d-flex justify-content-center align-items-center"
        @click="likeReview(review_pk)"></i>
      </vue-star>
      {{ likeCount }}
    </div>
    <hr/>
    <!-- Comment UI -->
    <CommentList :comments="review.comments" />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import CommentList from '@/components/CommentList.vue'
  import VueStar from 'vue-star'

  export default {
    name: 'ReviewDetail',
    components: { 
      CommentList,
      VueStar },
    data() {
      return {
        review_pk: this.$route.params.review_pk,
        }
    },
    computed: {
      ...mapGetters(['isAuthor', 'review']),
        likeCount() {
          return this.review.like_users.length
        },
    },
    methods: {
      ...mapActions([
        'fetchReview',
        'likeReview',
        'deleteReview',
      ])
    },
    created() {
      this.fetchReview(this.review_pk)
    },
  }
</script>

<style>
#heart {
  position: static;
}

.container {
  background-color: (255, 255, 255, 0.5);
}

/* #title {
  color: black;
} */
</style>