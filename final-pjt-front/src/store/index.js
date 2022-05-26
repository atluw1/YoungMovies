import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import accounts from './modules/accounts'
import review from './modules/review'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiKey: 'ac824af39d5e13e1310acc5a598278ab',
    trendingMovies: [],
    reviewMovies: [],
    suggestedMovies: [],
  },
  getters: {
    getApiKey: state => state.apiKey,
    getTrendingMovies: state => state.trendingMovies,
    getSuggestedMovies: state => state.suggestedMovies,
    getReviewedMovies: state => state.reviewMovies,
  },
  mutations: {
    CREATE_TRENDING_MOVIES: function (state, movies) {
      state.trendingMovies = movies
    },
    CREATE_REVIEW_MOVIES: function (state, movies) {
      state.reviewMovies = movies
    },
    CREATE_SUGGESTED_MOVIES: function (state, movies) {
      state.suggestedMovies = movies
    }
  },
  actions: {
    create_trending_movies : function ({ commit }, movies) {
      commit('CREATE_TRENDING_MOVIES', movies)
    },
    create_review_movies: function ({commit}, movies) {
      commit('CREATE_REVIEW_MOVIES', movies)
    },
    create_suggested_movies : function ({commit}, movies) {
      commit('CREATE_SUGGESTED_MOVIES', movies)
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
