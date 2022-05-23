<template>
  <div>
    <div>{{ apiKey }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SuggestQueryView',
  computed: {
    ...mapGetters(['getApiKey'])
  },
  data: function () {
    return {
      // url에 쓰이는 스트링들
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${this.getApiKey}&language=ko-KR&sort_by=popularity.desc&genre=${this.genre}`,
      
      genre: '',
      // startDate: '',
      // endDate: '',
      // movieQuery: '',
    }},
}

</script>

<style>

</style>