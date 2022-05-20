import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import accounts from './modules/accounts'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    trendingMovies: [],
    apiKey: 'ac824af39d5e13e1310acc5a598278ab',
    suggestedMovies: [],

  },
  getters: {
  },
  mutations: {
    CREATE_TRENDING_MOVIES: function (state, movies) {
      state.trendingMovies = movies
    }
  },
  actions: {
    create_trending_movies : function ({ commit }, movies) {
      commit('CREATE_TRENDING_MOVIES', movies)
    },    
  },
  modules: {
    accounts,
  },
  plugins: [
    createPersistedState(),
  ]

})
