<template>
  <div class="my-4 d-flex justify-content-center">
    <div class="container">
      <div class="row">
        <div class='col-12 col-xl-4 carousel-column d-flex flex-column justify-content-evenly align-items-center'>
          <h1 class="mb-3">상영 중 영화</h1>
          <TrendingCarousel/>
        </div>
        <div class='col-12 col-xl-4 carousel-column d-flex flex-column justify-content-evenly align-items-center'>
          <h1 class="mb-3">추천 영화</h1>          
          <!-- <TrendingCarousel/> -->
        </div>
        <div class='col-12 col-xl-4 carousel-column d-flex flex-column justify-content-evenly align-items-center'>
          <h1 class="mb-3">최신 리뷰</h1>
          <!-- <TrendingCarousel/> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TrendingCarousel from '@/components/TrendingCarousel.vue'

  export default {
    name: 'HomeView',
    components: {
    TrendingCarousel,
},
  }
</script>

<style scope>


</style>