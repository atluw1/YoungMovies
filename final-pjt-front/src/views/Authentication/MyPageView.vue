<template>
  <div class="container">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <h1 class="">MY PAGE</h1>
      <v-avatar
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
        <h2>내가 작성한 리뷰</h2>
        <div class="text-left">
          <ul>
            <!-- <li v-for="review in profile.reviews" :key="review.pk">
              <router-link :to="{ name: 'review', params: { reviewPk: review.pk } }">
                {{ review.title }}
              </router-link>
            </li> -->
          </ul>
        </div>
      </div>
      <div class="col text-center">
        <h2>내가 작성한 댓글</h2>
        <div class="text-left">
          <ol>재밌겠다!</ol>
          <ol>별로 였어요</ol>
          <ol>개꿀잼!!</ol>
        </div>
      </div>
    </div>
    {{ profile }}
<!-- 
    <h2>작성한 글</h2>
    <ul>
      <li v-for="article in profile.articles" :key="article.pk">
        <router-link :to="{ name: 'article', params: { articlePk: article.pk } }">
          {{ article.title }}
        </router-link>
      </li>
    </ul>

    <h2>좋아요 한 글</h2>
    <ul>
      <li v-for="article in profile.like_articles" :key="article.pk">
        <router-link :to="{ name: 'article', params: { articlePk: article.pk } }">
          {{ article.title }}
        </router-link>
      </li>
    </ul> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MyPageView',
  computed: {
    ...mapGetters(['profile'])
  },
  methods: {
    ...mapActions(['fetchMyPage'])
  },
  created() {
    const payload = { username: this.$route.params.username }
    this.fetchMyPage(payload)
  },
}
</script>

<style>

</style>