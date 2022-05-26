<template>
  <div class="navbar d-flex justify-content-xl-between justify-content-evenly">
    
    <!-- navbar 왼쪽 -->
    <div v-show="!isLoggedIn" class="nav_column">
        <div class="column_in_column mx-3">
          <router-link class="router_anchor" :to="{ name: 'LoginView' }">
            Login
          </router-link>
        </div>
      <div class="column_in_column me-3">
          <router-link class="router_anchor" :to="{ name: 'SignupView' }">
            Signup
          </router-link>        
      </div>
      <div class="column_in_column">

      </div>  
    </div>
        <!-- navbar 왼쪽 => 로그인 되었을 때 -->
    <div v-show="isLoggedIn" class="nav_column">
        <div class="column_in_column_logged_in">
          <router-link class="router_anchor" :to="{ name: 'MyPageView', params:{ username: currentUser.username }}">
            Hello, <br>
            {{ currentUser.username }}
          </router-link> 
        </div>
      <div class="column_in_column_logged_in">
          <router-link style="color:yellow; " class="router_anchor pe-5" :to="{ name: 'LogoutView' }">
            Logout
          </router-link>       
      </div>

    </div>

    <!-- navbar 중간 -->
    <div class="d-none nav_column d-lg-flex justify-content-center position-relative">
      <div class="position-absolute logo">
        <router-link :to="{ name: 'HomeView' }">
          <img class="logo_image" src="@/images/logo2.png" alt="">
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
            <v-btn        
              icon
              x-large
              href="https://lab.ssafy.com/bizyoung93/final-pjt"
              color="green">
              <v-icon>mdi-filmstrip
              </v-icon>
            </v-btn>            
          </router-link> 
      </div>
      <div class="column_in_column">
          <router-link class="router_anchor" :to="{ name: 'ReviewListView' }">
            <v-btn        
              icon
              x-large
              href="https://lab.ssafy.com/bizyoung93/final-pjt"
              color="purple">
              <v-icon>mdi-text-box-search-outline
              </v-icon>
            </v-btn> 
          </router-link> 
      </div>
      <!-- 세 번째 버튼 구역 -->

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

  * {
    color: white;
  }

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
    border-radius: 20px;
  } 


/* logo area 관련 속성은 App.vue에 있음 */

  /* 로고 자체의 속성 */
  .logo {
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
  }

  .logo_image {
    width: 390px;
  }


  .nav_column {
    width: 25%;
    display: flex;
    justify-content: space-evenly;
  }
  
  .column_in_column {
    display: flex;
    justify-content: center;
    align-items: center;
  }

    .column_in_column_logged_in {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }


  .router_anchor {
  color: #E91E48;
  
}
</style>