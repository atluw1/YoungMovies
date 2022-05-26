<template>
  <div class="middle condition">
    <div>
    <h1 class="mb-5" v-show="isExist">이런 영화는 어떠세요?</h1>
    <h1 v-show="!isExist">조건에 맞는 영화가 없습니다</h1>
    </div>
    <div v-show="isExist">
      <div class="container">
        <div class="row">
          <SuggestedItem v-for="movie in movieList" :key="movie.id" :movie="movie" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
import SuggestedItem from '@/components/SuggestedItem.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SuggestedMoviesView',
  components: {
    SuggestedItem,
  },
  props: {
    URL: String,
  },
  data() {
    return {
      isExist: true,
      announcement: '',
      movieList: []
    }
  },
  methods: {
    ...mapActions(['create_suggested_movies']),
    ...mapGetters(['getSuggestedMovies']),
    getMovie: function () {
      axios(
        {
          method:'get',
          url: this.URL,
        }).then(res => {
          console.log(res.data)
          
          const max_page = res.data.total_pages
          if (max_page === 0) {
            this.isExist = false
          }
          else {
          let search_page = _.sample(_.range(max_page))
          if (search_page > 500) {
            search_page = 500
          }
          const URL = this.URL + `&page=${search_page}`
          console.log(URL)
          axios({
            method:'get',
            url: URL
          }).then(res => {
            // console.log(res.data.result)
            const numbers = _.sampleSize(_.range(0, 20), 8)
            // console.log(numbers)
            let tempList = []
            numbers.forEach((element, idx) => {
              console.log(res.data.results[element])
              tempList.push(res.data.results[element])
            })
            this.create_suggested_movies(tempList)
            this.movieList = this.getSuggestedMovies()
          })
          }
        })      
    }
  },
  created() {
    this.getMovie()
    this.movieList = this.getSuggestedMovies()
  }
}
</script>

<style>

.middle {
  top: 5%;
  /* left: 50%; */
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.condition {
  padding: 10px;
  margin-top: 30vh;
  position: relative;
}
</style>