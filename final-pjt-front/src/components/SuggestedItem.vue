<template>
  <div
    v-show="IsPoster"
    class="col-6 col-md-3"
    @click="closeDialogMoveToDetail">
    <div
    class="d-flex align-items-center movie-poster-wrap">
      <img 
        :src="posterUrl"
        alt="poster" 
        class="movie-poster"
      >
      <div class="movie-title m-1">
        <p class="movie-title-text">
          {{ movie.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuggestedItem',
  props: {
    movie: Object
  },
  data: function () {
    return {
      posterUrl : `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`,
      IsPoster: this.movie.poster_path
    }
  },
  methods:{
    // 검색창 초기화 & dialog 닫는 신호 보내기
    closeDialogMoveToDetail: function () {
      this.$emit('close-dialog')
      this.$router.push({ name: 'DetailView', params: { movieId: this.movie.id } })
    },
},

}
</script>

<style scoped>

.movie-poster-wrap {
  position: relative;
  cursor: pointer;
}
.movie-poster {
  width: 90%;
  height: auto;
  border-radius: 0.7rem;
  transition: all .2s ease-in-out; 
}
.movie-title {
  position: absolute;
  margin: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-weight: 800;
  font-size: 16px;
  background: linear-gradient(transparent, #1a1a1a);
  color: #f7f7eb;
  visibility: hidden;
  opacity: 0;
  transition: opacity .2s, visibility .2s;
  text-align: center;
  border-radius: 0.7rem;
  transition: all .2s ease-in-out; 
  transform: scale(1.17); 
}
.movie-poster-wrap:hover .movie-title {
  visibility: visible;
  opacity: 1;
}
.movie-poster-wrap:hover .movie-poster {
  visibility: visible;
  opacity: 1;
  transform: scale(1.1); 
}
.movie-title-text {
  font-size: large;
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
}
</style>