<template>
  <div class="col-12 col-sm-6 col-lg-3 my-3">
    <v-hover v-slot="{ hover }">
      <v-card :elevation="hover ? 24 : 2">
        <!-- <div class="card bg-black"> -->
          <a href="https://www.naver.com">
            <v-img class="" :src="posterUrl" alt="영화 포스터">
              <!-- 여유 되면 제목까지 -->
            </v-img>
          </a>
        <!-- </div> -->
      </v-card>
    </v-hover>
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
  /* .v-card {
    transition: opacity .4s ease-in-out;
  }

  .v-card:not(.on-hover) {
    opacity: 0.8;
  } */

</style>