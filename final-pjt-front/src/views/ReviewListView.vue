<template>
  <div>
    <h1 class="text-center">자유게시판</h1>
    <!-- <ul>
      <li v-for="review in reviews" :key="review.pk"> -->
        <!-- 작성자 -->
        <!-- {{ review.user.username }} :  -->

        <!-- 글 이동 링크 (제목) -->
        <!-- <router-link 
          :to="{ name: 'ReviewDetail', params: {review_pk: review.pk} }">
          {{ review.title }}
        </router-link> -->

        <!-- 댓글 개수/좋아요 개수 -->
        <!-- 댓글: {{ review.comment_count }} | 좋아요: {{ review.like_count }}
      </li>
    </ul> -->
    <div id="app">
      <v-app id="inspire">
        <v-card>
          <v-card-title>
            자유게시판
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="검색"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="reviews"
            :search="search"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            hide-default-footer
            class="elevation-1"
            @page-count="pageCount = $event"
            @click:row="handleClick"></v-data-table>
          <div class="text-center pt-2">
            <v-pagination
              v-model="page"
              :length="pageCount"
              :total-visible="totalVisible"
              next-icon="mdi-menu-right"
              prev-icon="mdi-menu-left"></v-pagination>
          </div>
        </v-card>
      </v-app>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'ReviewList',
    data () {
      return {
        page: 1,
        itemsPerPage: 10,
        pageCount: 0,
        totalVisible: 10,
        search: '',
        headers: [
          { text: '번호', align: 'center', sortable: false, value: 'pk' },
          { text: '제목', align: 'center', sortable: false, value: 'title' },
          { text: '작성자', align: 'center', sortable: false, value: 'user.username' },
          { text: '작성일', align: 'center', sortable: false, value: 'created_at' },
        ],
        items: []
      }
    },
    computed: {
      ...mapGetters(['reviews'])
    },
    methods: {
      ...mapActions(['fetchReviews']),
      // handleClick(value) {
      //   this.detailReview(value);
    },
    created() {
      this.fetchReviews()
    },
  }
</script>

<style>

</style>