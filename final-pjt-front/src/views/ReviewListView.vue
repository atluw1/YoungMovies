<template>
  <div>
    <h1>모든 리뷰입니다</h1>
    <ul>
      <li v-for="review in reviews" :key="review.pk">
        <!-- 작성자 -->
        {{ review.user.username }} : 

        <!-- 글 이동 링크 (제목) -->
        <router-link 
          :to="{ name: 'ReviewDetail', params: {review_pk: review.pk} }">
          {{ review.title }}
        </router-link>

        <!-- 댓글 개수/좋아요 개수 -->
        댓글: {{ review.comment_count }} | 좋아요: {{ review.like_count }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'ReviewList',
    computed: {
      ...mapGetters(['reviews'])
    },
    methods: {
      ...mapActions(['fetchReviews'])
    },
    created() {
      this.fetchReviews()
    },
  }
</script>

<style>

</style>