<template>
  <div>
    DetailView
    <!-- {{ movieId }} -->
    <!-- <img :src="" alt=""> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DetailView',
  props: {
    movieId: {
      type: Number
    }
  },
  data: function () {
    return {
      apiKey: this.$store.state.apiKey,
      url: `https://api.themoviedb.org/3/movie/${this.movieID}?api_key=${this.apiKey}&language=ko-KR`
    }
  },
  created () {
    axios.get(`${this.url}`)
    .then(res =>{
      console.log(res)
    })
  },

  
}

</script>

<style>

</style>