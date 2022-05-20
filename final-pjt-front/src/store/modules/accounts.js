import router from '@/router'
import axios from 'axios'
import drf from '@/api/drf'

export default {

  // state는 직접 접근하지 않겠다!
  state: {
    token: '',
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
    authError: state => state.authError
  },

  mutations: {
    SET_TOKEN: (state, token) => state.token = token,
    SET_CURRENT_USER: (state, user) => state.currentUser = user,
    SET_PROFILE: (state, profile) => state.profile = profile,
    SET_AUTH_ERROR: (state, error) => state.authError = error,
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
      localStorage.setItem('token', '')

    },
  },

}