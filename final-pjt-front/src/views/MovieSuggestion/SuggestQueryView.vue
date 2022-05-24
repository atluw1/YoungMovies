<template>
  <div>
    <v-form>
      씨발
      <v-select
            dark
            v-model="genre"
            :items="genres"
            attach
            chips
            label="장르"
            multiple
            clearable
          ></v-select>
    </v-form>
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
      genre: [],
      genres: ['액션', '모험', '애니메이션', '코미디', '범죄', '다큐멘터리', '드라마', '가족', '판타지', '역사', '공포', '음악', '미스터리', '로맨스', 'SF', '스릴러']
    }},
}

</script>

<style scoped>


</style>