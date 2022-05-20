import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import DetailView from '../views/DetailView.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView,
  },
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/signup',
    name: 'SignupView',
    component: SignupView,
  },
  {
    path: '/detail/:movieId',
    name: 'DetailView',
    component: DetailView,
    // params로 넘겨주는 props가 일반적인 문자열이면 그대로 넘겨주어도 상관 없지만
    // 만약 props가 숫자인 경우, url은 문자열인데 받을 때는 Number로 받아도 문제가 되고, String으로 받아주어도 문제가 된다
    // 따라서, 받은 props를 숫자로 파싱해 줄 필요가 있다.

    // props: (route) => {
      //   const userId = Number.parseInt(route.params.userId, 10)
      //   if (Number.isNaN(userId)) {
        //     return 0
    //   }
    //   return { userId }
    // }
    
    // 아니면 그냥, 받아줄 때 타입을 [String, Number] 두 가지로 만들어 준다.
    props: true,

}


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
