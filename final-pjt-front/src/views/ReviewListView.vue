<template>
  <div>
    <h1 class="text-center">자유게시판</h1>
    <div class="main_text">
    <v-card id="card">
      <v-card-title>
        자유게시판
        <v-spacer></v-spacer>
        <v-text-field
          id="search"
          v-model="search"
          append-icon="mdi-magnify"
          label="검색"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        id="table"
        :headers="headers"
        :items="reviews"
        :search="search"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        class="elevation-1"
        @page-count="pageCount = $event"
        @click:row="handleClick"
        style="cursor:pointer">
      </v-data-table>
      <div class="text-center pt-2">
        <v-pagination
          v-model="page"
          :length="pageCount"
          :total-visible="totalVisible"
          next-icon="mdi-menu-right"
          prev-icon="mdi-menu-left">
        </v-pagination>
      </div>
      <div class="text-right">
        <v-btn
          id="btn"
          elevation="7"
          @click="toCreate"
          class="mx-3 mb-3"
        >글쓰기</v-btn>
      </div>
    </v-card>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import drf from '@/api/drf'

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
          { text: 'No', align: 'center', sortable: false, value: 'pk' },
          { text: '제목', align: 'center', sortable: false, value: 'title' },
          { text: '작성자', align: 'center', sortable: false, value: 'user.username' },
          { text: '작성일', align: 'center', sortable: false, value: 'updated_at' },
        ],
        items: [],
        url: drf.reviews.reviews
      }
    },
    computed: {
      ...mapGetters(['reviews'])
    },
    methods: {
      ...mapActions(['fetchReviews']),
      handleClick(item) {
        this.$router.push({ name: 'ReviewDetail', params: { review_pk: item.pk } });
        },
      toCreate() {
        this.$router.push({ name: 'ReviewCreate' });
      }
    },
    created() {
      this.fetchReviews()
    },
  }
</script>

<style scoped>

.main_text {
  color: black;
}

span {
  color: black;
}

/* #card {
  background-color: rgba( 255, 255, 255, 0.3 );
}

#table {
  background-color: rgba( 255, 255, 255, 0.8 );
  color: royalblue;
} */
#btn {
  color: white;
  background-color: lightcoral;
}
</style>