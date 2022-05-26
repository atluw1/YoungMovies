<template>
  <div class="navbar d-flex justify-content-md-between justify-content-center">
    
    <!-- navbar 왼쪽 -->
    <div class="nav_column">
        <div class="column_in_column">
          <router-link class="router_anchor" :to="{ name: 'LoginView' }">
            Login
          </router-link>
        </div>
      <div class="column_in_column">
          <router-link class="router_anchor" :to="{ name: 'SignupView' }">
            Signup
          </router-link>        
      </div>
      <div class="column_in_column">
          <router-link class="router_anchor" :to="{ name: 'MyPageView', params:{ username: currentUser.username }}">
            Hello, {{ currentUser.nickname }}
          </router-link> 
      </div>  
      <div class="column_in_column">
          <router-link class="router_anchor" :to="{ name: 'LogoutView' }">
            Logout
          </router-link>       
      </div>
    </div>

    <!-- navbar 중간 -->
    <div class="d-none nav_column d-md-flex justify-content-center position-relative">
      <div class="position-absolute logo">
        <router-link :to="{ name: 'HomeView' }">
          <img class="logo_image" src="@/images/logo1.png" alt="">
        </router-link>
      </div>
    </div>

    <!-- navbar의 오른쪽 -->
    <div class="nav_column">
      <!-- 첫 번째 버튼 구역 => 영화 검색 --> 
      <div class="column_in_column">
        <SearchButton />
      </div>
      <!-- 두 번째 버튼 구역 -->
      <div class="column_in_column">
          <router-link class="router_anchor" :to="{ name: 'SuggestQueryView' }">
            영화추천
          </router-link> 
      </div>
      <div class="column_in_column">
          <router-link class="router_anchor" :to="{ name: 'ReviewListView' }">
            게시판
          </router-link> 
      </div>
      <!-- 세 번째 버튼 구역 -->
      <div class="column_in_column">
          <router-link class="router_anchor" :to="{ name: 'MyPageView', params:{ username: currentUser.username }}">
            MyPage
          </router-link> 
      </div>
    </div>
  </div>
</template>

<script>
import SearchButton from "./SearchButton.vue"
import { mapGetters } from "vuex"

export default {
  name: 'NavBar',
  components: {
    SearchButton
  },
  methods:{
    moveToHome: function () {
      this.$router.push({ name: 'HomeView' })
    },
    moveToAbout: function () {
      this.$router.push({ name: 'LoginPage' })
    }
  },
  computed: {
    ...mapGetters(['currentUser', 'isLoggedIn'])
  }
}
</script>

<style scoped>

  h1 {
    line-height: 100%;
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
  }

  .navbar {
    /* 네비게이션 바 자체의 색을 조절 */
    background-color: rgba(0, 0, 0, 0.8);
    /* background-color: rgb(34, 46, 62, 0.8); */

    height: 5rem;
    width: 70vw;
    border-radius: 3px;
  } 



  /* 로고 자체의 속성 */
  .logo {
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
  }

  .logo_image {
    width: 500px;
  }


  .nav_column {
    width: 25%;
    display: flex;
    justify-content: space-evenly;
  }
  
  .column_in_column {
    display: flex;
    justify-content: center;
  }

  .router_anchor {
  color: #E91E48;
}
</style>