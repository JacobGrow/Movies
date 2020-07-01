<template>
<div class="popularMovies">

  <h1>Hello from Components</h1>
  <popularMovies v-for="popularMovie in popularMovies" :key="popularMovie.id" />
  <div class="row">
      {{popularMovies.id}}
</div>
  </div>
</template>

<script>
export default {
  name: "popularMovies",
  props: ["popMoviesProp"],
  mounted(){
       this.$store.dispatch("getPopularMovies")
  },
  computed: {
      popularMovies(){
      return this.$store.state.popularMovies;
  },
  }

}
</script>