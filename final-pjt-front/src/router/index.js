import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import LoginView from '../views/Authentication/LoginView.vue'
import LogoutView from '../views/Authentication/LogoutView.vue'
import SignupView from '../views/Authentication/SignupView.vue'
import MyPageView from '../views/Authentication/MyPageView.vue'


import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'

import ReviewListView from '../views/ReviewListView.vue'
import ReviewDetailView from '../views/ReviewDetailView.vue'
import ReviewCreateView from '../views/ReviewCreateView.vue'
import ReviewEditView from '../views/ReviewEditView.vue'

import NotFound404 from '../views/NotFound404.vue'

import SuggestQueryView from '../views/MovieSuggestion/SuggestQueryView.vue'
import SuggestedMoviesView from '../views/MovieSuggestion/SuggestedMoviesView.vue'

function removeQueryParams(to) {
  if (Object.keys(to.query).length)
    return { path: to.path, query: {}, hash: to.hash }
}

function removeHash(to) {
  if (to.hash) return { path: to.path, query: to.query, hash: '' }
}

Vue.use(VueRouter)

const routes = [
  // accounts 관련 route

  // => 인증 필요 없음
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView,
  },
  {
    path: '/signup',
    name: 'SignupView',
    component: SignupView,
  },

  // => 인증 필요
  {
    path: '/logout',
    name: 'LogoutView',
    component: LogoutView,
  },
  {
    path: '/:username/mypage',
    name: 'MyPageView',
    component: MyPageView,
  },
  // 홈페이지 관련 route
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/reviews',
    name: 'ReviewListView',
    component: ReviewListView,
  },
  {
    path: '/reviews/new/',
    name: 'ReviewCreate',
    component: ReviewCreateView,
    props: true
  },
  {
    path: '/reviews/:review_pk',
    name: 'ReviewDetail',
    component: ReviewDetailView,
    props: true
  },
  {
    path: '/reviews/:review_pk/edit',
    name: 'ReviewEdit',
    component: ReviewEditView,
  },
  {
    path: '/detail/:movieId',
    name: 'DetailView',
    component: DetailView,
    props: true,
    // beforeRouteUpdate (to, from) {
    //   // just use `this`
    //   this.movieId = to.params.name
    // }
  },

  // 영화 추천 라우터
  {
    path: '/suggest',
    name: 'SuggestQueryView',
    component: SuggestQueryView,
  },
  {
    path: '/suggest/result',
    name: 'SuggestedMoviesView',
    component: SuggestedMoviesView,
    props: true,
  },

  // 

  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404
  },

  // 등록되지 않은 모든 주소는 404 페이지로 이동
  // 맨 아래에 있어야 다른 url을 검사 후 이동함
  // 만약 axios 등으로 서버에서 해당 리소스를 찾을 수 없는 경우
  
  //  => README 참조
  {
  path: '*',
  redirect: '/404'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // to: 이동할 url 정보가 담긴 라우터 객체
  // from: 현재 url 정보가 담긴 라우터 객체
  // next: to에서 지정한 url로 이동하기 위해 꼭 호출해야 하는 함수
  // 로그인 여부 확인(실제로는 vuex에서 불러옵니다)

  const { isLoggedIn } = store.getters

  // 로그인이 필요한 페이지
  // [] 안에 들어가는 이름은 위쪽 routes의 name!
  const authPages = ['LogoutView', 'MyPageView',]

  // 앞으로 이동할 페이지가 로그인이 필요한 사이트인지 확인
  const isAuthRequired = authPages.includes(to.name)

  // 로그인이 필요한 페이지인데, 로그인이 안 되어 있다면?
  if (isAuthRequired && !isLoggedIn) {
      console.log('로그인 안됨')
      next({ name: 'LoginView'})
    } else {
      // console.log('니가 로그인이 되어 있거나, 로그인이 필요한 url로 이동함')
      next()
    }
})

export default router
