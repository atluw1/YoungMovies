<template>
  <!-- <div class="col-12 col-sm-6 col-lg-3 my-3">
    <v-hover v-slot="{ hover }">
      <v-card :elevation="hover ? 24 : 2">
          <a href="https://www.naver.com">
            <v-img class="" :src="posterUrl" alt="영화 포스터">
            </v-img>
          </a>
      </v-card>
    </v-hover>
  </div> -->
  <div v-if="movie.poster_path" class="col-6 col-md-3 p-1 movie-poster-wrap">
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
</template>

<script>
export default {
  name: 'MovieItem',
  props: {
    movie: Object
  },
  data: function () {
    return {
      posterUrl : `https://image.tmdb.org/t/p/w154/${this.movie.poster_path}`}  
  },
  method:{

  }
}
</script>

<style scope>

.movie-poster-wrap {
  position: relative;
  cursor: pointer;
}
.movie-poster {
  width: 100%;
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
  transform: scale(1.1); 
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
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>