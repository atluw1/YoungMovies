<template>
  <div class="container">
    <h1>{{ review.title }}</h1>

    <p>
      {{ review.content }}
    </p>
    <!-- review Edit/Delete UI -->
    <div v-if="isAuthor">
      <router-link :to="{ name: 'ReviewEdit', params: { review_pk } }">
        <button>Edit</button>
      </router-link>
      |
      <button @click="deleteReview(review_pk)">Delete</button>
    </div>

    <!-- review Like UI -->
    <div>
      좋아요:
      <button
        @click="likeReview(review_pk)"
        >
        {{ likeCount }}
      </button>
    </div>

    <hr/>
    <!-- Comment UI -->
    <CommentList :comments="review.comments" />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import CommentList from '@/components/CommentList.vue'

  export default {
    name: 'ReviewDetail',
    components: { CommentList },
    data() {
      return {
        review_pk: this.$route.params.review_pk,
        }
    },
    computed: {
      ...mapGetters(['isAuthor', 'review']),
        likeCount() {
          return this.review.like_users.length
        }
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

</style>