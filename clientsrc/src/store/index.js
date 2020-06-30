import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import { movieApi } from './AxiosStore.js'
import { popularApi } from './AxiosStore.js'
import router from '../router/index'

Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})



export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    activeBoard: {},
    popularMovies: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setBoards(state, boards) {
      state.boards = boards
    },

    setPopularMovies(state, movies){
      state.popularMovies = movies
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
    //#endregion


   
    async getPopularMovies({ commit, dispatch }) {
      try {
        let res = await popularApi.get("")
        commit("setPopularMovies", res.data)
      } catch (error) {
        console.error(error)
      }
      
    },
    addBoard({ commit, dispatch }, boardData) {
      api.post('boards', boardData)
        .then(serverBoard => {
          dispatch('getBoards')
        })
    }
  
  }
})
