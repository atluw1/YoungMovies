<template>
  <div>
    DetailView
    {{ movieId }}



  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'DetailView',
  props: {
    movieId: {
      type: [Number, String]
    }
  },
  data: function () {
    return {

    }
  },
  computed: {
    apiKey: function () { return this.$store.state.apiKey },
    url: function () { return `https://api.themoviedb.org/3/movie/${this.movieID}?api_key=${this.apiKey}&language=ko-KR` }
  }
}

</script>

<style>

</style>