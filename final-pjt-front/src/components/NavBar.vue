<template>
  <div class="navbar d-flex justify-content-evenly">
    
    <!-- navbar 왼쪽 -->
    <div class="nav_column">
      <div class="column_in_column">logo</div>
      <div class="column_in_column">logo</div>
      <div class="column_in_column">logo</div>
    </div>

    <!-- navbar 중간 -->
    <div class="nav_column d-flex justify-content-center position-relative">
      <div class="position-fixed logo_div">
        <img class="logo" src="https://w7.pngwing.com/pngs/346/26/png-transparent-cockatoo-logo-tempalte-miscellaneous-white-leaf.png" alt="임시 로고">
      </div>
    </div>

    <!-- navbar의 오른쪽 -->
    <div class="nav_column">
      <!-- 첫 번째 버튼 구역 -->
      <div class="column_in_column">
        <SearchButton />
      </div>
      <!-- 두 번째 버튼 구역 -->
      <div class="column_in_column">
        <v-btn
          icon
          x-large
          color="pink"
          >
          <v-icon>mdi-movie-search-outline</v-icon>
        </v-btn>
      </div>
      <!-- 세 번째 버튼 구역 -->
      <div class="column_in_column">
        <v-btn
          icon
          x-large
          color="pink"
          >
          <v-icon>mdi-movie-search-outline</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import SearchButton from "./SearchButton.vue"

export default {
  name: 'NavBar',
  components: {
    SearchButton
  }
}
</script>

<style scope>
  .padding {
    background-color: black;
    height: 3rem;
  }
  .navbar {
    /* 네비게이션 바 자체의 색을 조절 */
    background-color: rgba(0, 0, 0, 0.8);
    height: 5rem;
    width: 90vw;
  } 

  /* 로고가 들어가는 블록 */
  .logo_div {
    /* position은 fixed로 해 주었기 때문에 width를 전체 화면 넓이 기준으로 잡아 준다 */
    width: 10%;
    top: -5%
  }

  /* 로고 자체의 속성 */
  .logo {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .nav_column {
    width: 33%;
    display: flex;
    justify-content: space-evenly;
  }
  
  .column_in_column {
    display: flex;
    justify-content: center;
  }
</style>