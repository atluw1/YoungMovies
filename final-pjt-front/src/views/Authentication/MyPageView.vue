<template>
  <div class="container">
    <br><br><br>
    <div class="d-flex flex-column justify-content-center align-items-center">
      <v-avatar
        class="mb-2"
        color="indigo"
        size="256"
        id="profile"
      >
        <v-icon dark size="196">
          mdi-account-circle
        </v-icon>
      </v-avatar>
      <h1 class="m-2">{{ profile.username }}</h1>
    </div>
    <br>
    <div class="d-flex flex-row">
      <div class="col text-center d-flex row justify-content-center ">
        <h2>{{ profile.username }} 님이 작성한 게시글</h2>
        <br><br><br>
        <div class="text-left w-75">
          <hr>
          <ul>
            <li v-for="review in my_reviews" :key="review.pk">
              <router-link
              class="text-decoration-none text-white" 
              :to="{ name: 'ReviewDetail', params: { review_pk: review.pk } }">
                {{ review.title }}
              </router-link>
              <hr>
            </li>
          </ul>
        </div>
      </div>
      <div class="col text-center d-flex row justify-content-center">
        <h2>{{ profile.username }} 님이 좋아요 한 게시글</h2>
        <br><br><br>
        <div class="text-left w-75">
          <hr>
          <li v-for="review in my_likes" :key="review.pk">
            <router-link 
            class="text-decoration-none text-white" 
            :to="{ name: 'ReviewDetail', params: { review_pk: review.pk } }">
              {{ review.title }}
            </router-link>
            <hr>
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
  },
}
</script>

<style>

</style>