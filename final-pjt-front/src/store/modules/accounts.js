import router from '@/router'
import axios from 'axios'
import drf from '@/api/drf'

export default {

  // state는 직접 접근하지 않겠다!
  state: {
    token: '',
    // currentUser에 유저 정보들이 담겨 있음
    currentUser: {},
    profile: {},
    authError: null,
  },

  // 모든 state는 getters를 통해서 접근하겠다.
  // 이유는, mapGetters와 mapActions만 쓰기 위해!
  getters: {
    isLoggedIn: state => !!state.token,
    currentUser: state => state.currentUser,
    profile: state => state.profile,
    authError: state => state.authError,
    authHeader: state => ({ Authorization: `Token ${state.token}` })
  },

  mutations: {
    SET_TOKEN: (state, token) => state.token = token,
    SET_CURRENT_USER: (state, user) => state.currentUser = user,
    SET_PROFILE: (state, profile) => state.profile = profile,
    SET_AUTH_ERROR: (state, error) => state.authError = error,

    // 이 함수가 없으면, my page로 들어갔을 때 이전에 로그인 했던 사용자의 mypage로 넘어가는 문제가 생긴다.
    SET_CURRENT_USER_NULL: (state) => 
      {state.currentUser = {}
        console.log(state.currentUser)},

    // localstorage를 자동 state에 저장하는 라이브러리 사용 시 초기화가 되지 않는 문제 때문에 사용
    SET_AUTH_ERROR_NULL: (state) => state.authError = null,
  },
  actions: {
    saveToken ( { commit }, token) {
      // state.token 추가, localStorage에 token 추가 
      commit('SET_TOKEN', token)
      localStorage.setItem('token', token)
    },

    removeToken ( { commit } ) {
      // state.token 삭제, localStorage에 token 추가
      commit('SET_TOKEN', '')
      commit('SET_CURRENT_USER_NULL')
      localStorage.setItem('token', '')
    },
    
    set_auth_error_null ({commit}) {
      commit('SET_AUTH_ERROR_NULL')
    },
    
    login({ commit, dispatch }, credentials) {
      axios({
        url: drf.accounts.login(),
        method: 'post',
        data: credentials,
      }).then(res => {
        const token = res.data.key
        dispatch('saveToken', token)
        dispatch('fetchCurrentUser')
        router.push({ name: 'HomeView' })
      }).catch(err => {
        console.error(err)
        commit('SET_AUTH_ERROR', err.response.data)
      })
    },
    logout({ getters, dispatch }) {
      axios({
      url: drf.accounts.logout(),
      method: 'post',
      headers: getters.authHeader
      }).then(() => {
        dispatch('removeToken')
        alert('성공적으로 로그아웃 되었습니다')
        router.push({ name: 'HomeView' })
      }).catch(err => {
        console.error('무슨 짓을 한 겁니까?')
        
      })
    },

    signup({ commit, dispatch }, credentials) {
      axios({
        url: drf.accounts.signup(),
        method: 'post',
        data: credentials,
      }).then(res => {
        const token = res.data.key
        dispatch('saveToken', token)
        dispatch('fetchCurrentUser')
        router.push({ name: 'HomeView' })
      }).catch(err => {
        console.error(err)
        commit('SET_AUTH_ERROR', err.response.data)
      })
    },
    // 만약 지금 정상적으로 로그인 된 상태라면(토큰이 있다면), 유저 정보를 받아 온다. 
    // => 주소는 rest_framework에서 제공하는 user/로 보낸다.
    // 실패하면(토큰이 만료 등으로 잘못되었다면) 기존 토큰을 삭제하고 LoginView로 이동
    // 언제 쓰냐? => signup, login이 끝나면
    fetchCurrentUser ({ commit, getters, dispatch }) {
      if (getters.isLoggedIn) {
        axios({
          url: drf.accounts.currentUserInfo(),
          method: 'get',
          // 아래서 headers에서 s 빼먹었었다...
          headers: getters.authHeader
        }).then(res => {
          commit('SET_CURRENT_USER', res.data)
        }).catch(err => {
          if (err.response.status === 401) {
            dispatch('removeToken')
            router.push({ name: 'login'})
          }
        })
      }
    },
    fetchMyPage ({ commit, getters }, { username }) {
      axios({
        url: drf.accounts.mypage(username),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_PROFILE', res.data)
        })
    },
  },

}