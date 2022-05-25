<template>
  <div class="my-4 d-flex justify-content-center">
    <div class="container">
      <div class="row">
        <div class='col-12 col-xl-4 carousel-column d-flex flex-column justify-content-evenly align-items-center'>
          <h1 class="mb-3">최신 영화</h1>
          <TrendingCarousel/>
        </div>
        <div class='col-12 col-xl-4 carousel-column d-flex flex-column justify-content-evenly align-items-center'>
          <h1 class="mb-3">추천 영화</h1>          
          <TrendingCarousel/>
        </div>
        <div class='col-12 col-xl-4 carousel-column d-flex flex-column justify-content-evenly align-items-center'>
          <h1 class="mb-3">평점 높은 영화</h1>
          <ReviewCarousel/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TrendingCarousel from '@/components/TrendingCarousel.vue'
  import ReviewCarousel from '@/components/ReviewCarousel.vue'

  export default {
    name: 'HomeView',
    components: {
    TrendingCarousel,
    ReviewCarousel,
},
  }
</script>

<style scope>


</style>