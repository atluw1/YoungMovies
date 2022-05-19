import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    trendingMovies: []
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
      
    }
  },
  modules: {
  }
})
