<template>
  <div class="container"><br><br><br>
    <h1 id="title">{{ review.title }}</h1>
    <hr>
    <div class="d-flex justify-content-between">
      <router-link
      style="text-decoration: none"
      :to="{ name: 'MyPageView', params: { username: review.user.username } }">
        <div>
          <i class="fa-solid fa-user"
            style="color:tomato"></i>
          <span id="name" class="fw-bold"> {{ review.user.username }}</span>
        </div>
      </router-link>
      <p id="date">{{ review.updated_at }}</p>
    </div><br>
    <p id="content" style="white-space: pre;">{{ review.content }}</p>
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
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex wrap align-items-center">
        <vue-star 
          animate="animated bounceIn"
          color="#F05654"
          id="heart">
          <i slot="icon" class="fa fa-heart fa-2x d-flex justify-content-center align-items-center"
          style="color:#E91E48"
          @click="likeReview(review_pk)"></i>
        </vue-star>
        <p class="m-0">좋아요: {{ likeCount }}</p>
      </div>
      <v-btn
        id="btn"
        color="success"
        elevation="7"
        @click="goReviews"
      >목록</v-btn>
    </div>
    <hr class='mt-0'/>
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
      ]),
      goReviews () {
        this.$router.push({ name: 'ReviewListView' })
      }
    },
    created() {
      this.fetchReview(this.review_pk)
    },
  }
</script>

<style scoped>
#heart {
  position: relative;
}

.container {
  background-color: (255, 255, 255, 0.5);
  width: 1000px;
}

/* #title {
  color: black;
} */
</style>