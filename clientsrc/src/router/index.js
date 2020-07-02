import Vue from 'vue'
import Router from 'vue-router'
//@ts-ignore
import Home from '../views/Home.vue'
//@ts-ignore
import MovieDetails from '../views/MovieDetails'
import { authGuard } from "@bcwdev/auth0-vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
   {
     path: '/movieDetails/:movieId',
     name: 'movieDetails',
     component: MovieDetails
   },

    {
      path: "*",
      redirect: '/'
    }
  ]
})