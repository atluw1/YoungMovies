<template>
  <div class="container">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <h1>프로필</h1><br>
      <v-avatar
        class="mb-2"
        color="indigo"
        size="128"
        id="profile"
      >
        <v-icon dark size="64">
          mdi-account-circle
        </v-icon>
      </v-avatar>
      <h2>{{ profile.username }}</h2>
    </div>
    <br>
    <div class="d-flex flex-row">
      <div class="col text-center">
        <h2>{{ profile.username }} 님이 작성한 게시글</h2>
        <div class="text-left">
          <ul>
            <li v-for="review in my_reviews" :key="review.pk">
              <router-link :to="{ name: 'ReviewDetail', params: { review_pk: review.pk } }">
                {{ review.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="col text-center">
        <h2>{{ profile.username }} 님이 좋아요 한 게시글</h2>
        <div class="text-left">
          <li v-for="review in my_likes" :key="review.pk">
            <router-link :to="{ name: 'ReviewDetail', params: { review_pk: review.pk } }">
              {{ review.title }}
            </router-link>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MyPageView',
  data () {
    return {
      my_reviews: [],
      my_likes: [],
    }
  },
  computed: {
    ...mapGetters(['profile']),
    ...mapGetters(['reviews'])
  },
  methods: {
    ...mapActions(['fetchMyPage']),
    ...mapActions(['fetchReviews']),
    myReviews() {
      for (const review of this.reviews) {
        if (review.user.pk === this.profile.id) {
          this.my_reviews.push(review)
        }
      }
    },
    myLikes() {
      for (const review of this.reviews) {
        for (const pk of review.like_users) {
          console.log(pk)
          if (pk === this.profile.id) {
            this.my_likes.push(review)
          }
        }
      }
    },
  },
  created() {
    const payload = { username: this.$route.params.username }
    this.fetchMyPage(payload)
    this.myReviews()
    this.myLikes()
    console.log(this.reviews)
  },
}
</script>

<style>

</style>