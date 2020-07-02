import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
// import { movieApi } from './AxiosStore.js'
// import { popularApi } from './AxiosStore.js'
import router from '../router/index'
import { STATES } from "mongoose"

Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

const movieApi = Axios.create({
  baseURL: "http://www.omdbapi.com/?apikey=8703badf&s=",
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    user: {},
    movies: [],
    activeMovie: {},
    popularMovies: [],
    searchResults: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
  
    setPopularMovies(state, movies){
      state.popularMovies = movies
    },

    searchMovies(state, movies) {
      state.searchResults = [],
      movies.forEach(m => {
        if(m.Poster != "N/A"){
        state.searchResults.push(m) }
      })
      console.log(state.searchResults)
    },

    setActiveMovie(state, id) {
      let found = state.searchResults.filter(m => m.id == id).pop()
      if(found){
        state.activeMovie = found
      } else {
        let found2 = state.movies.filter(m=>m.id==id).pop()
        state.activeMovie = found2
      }
    }

  },
  actions: {
    //#region -- AUTH STUFF --
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("/profile")
        commit("setUser", res.data)
      } catch (err) {
        console.error(err)
      }
    },
    


   
    // async getPopularMovies({ commit, dispatch }) {
    //   try {
    //     let res = await popularApi.get("")
    //     commit("setPopularMovies", res.data)
    //   } catch (error) {
    //     console.error(error)
    //   }
      
    // },
    async searchMovies({ commit, dispatch }, query) {
      try {
        let res = await movieApi.get(query)
        commit("searchMovies", res.data.Search)
      } catch (err) {
        console.error(err)
      }
    },

    async getActiveMovie({ commit, dispatch }, movie){
      commit("setActiveMovie", movie)
    }
  
  }
})
