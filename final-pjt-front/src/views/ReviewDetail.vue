<template>
  <div class="container">
    <div class="d-flex wrap">
      <div class="poster">
        <img :src="posterUrl" alt="poster">
      </div>
      <div class="detail">
        <span id="title">{{ movieDetail.title }}</span> <span id="year"> ({{ year }})</span>
        <!-- <div v-for="(genre, idx) in genres" :key="{idx}">
          <span class="d-flex flex-wrap">{{ genre }}</span>
        </div> -->
        <br>
        <h4 id="original">{{ movieDetail.original_title }}</h4>
        <span class="genres">{{ movieDetail.release_date }} /</span>
        <span class="genres"> {{ genres }} /</span>
        <span class="genres"> {{ movieDetail.runtime }}분</span>
        <br><br>
        <h4>{{ movieDetail.vote_average }}</h4>
        <!-- tagline이 있을 때만 보여주기 -->
        <span v-if="movieDetail.tagline" class="tagline fw-bold">"{{ movieDetail.tagline }}"</span>
        <div>
          <h3>개요</h3>
          <p id="overview">{{ movieDetail.overview }}</p>
        </div>
      </div>
    </div>
    <div>
      <h1>리뷰</h1>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DetailView',
  props: {
    movieId: {
      type: [Number, String]
    }
  },
  data: function () {
    return {
      movieDetail: {},
      }
  },
  computed: {
    apiKey: function () { return this.$store.state.apiKey },
    url: function () { return `https://api.themoviedb.org/3/movie/${this.movieId}?api_key=${this.apiKey}&language=ko-KR` },
    posterUrl() { return `https://image.tmdb.org/t/p/w300/${this.movieDetail.poster_path}` },
    year() { return this.movieDetail.release_date.slice(0, 4)},
    genres() {
      // var movieGenres = []
      var movieGenres = ''
      for (const i in this.movieDetail.genres) {
        // movieGenres.push(this.movieDetail.genres[i]['name'])
        movieGenres += `${this.movieDetail.genres[i]['name']} ` 
      }
      return movieGenres
    },
  },
  created() {
    axios.get(this.url)
    .then((res) => {
      console.log(res.data)
      this.movieDetail = res.data
    })
  }
  }


</script>

<style>

</style>