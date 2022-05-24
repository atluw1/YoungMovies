import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import accounts from './modules/accounts'
import review from './modules/review'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    trendingMovies: [],
    reviewMovies: [],
    apiKey: 'ac824af39d5e13e1310acc5a598278ab',
    suggestedMovies: [],

  },
  getters: {
    getApiKey:  state => state.apiKey
  },
  mutations: {
    CREATE_TRENDING_MOVIES: function (state, movies) {
      state.trendingMovies = movies
    },
    CREATE_REVIEW_MOVIES: function (state, movies) {
      state.reviewMovies = movies
    },
  },
  actions: {
    create_trending_movies : function ({ commit }, movies) {
      commit('CREATE_TRENDING_MOVIES', movies)
    },
    create_review_movies: function ({commit}, movies) {
      commit('CREATE_REVIEW_MOVIES', movies)
    }
  },
  modules: {
    accounts,
    review,
  },
  plugins: [
    createPersistedState(),
  ]

})
