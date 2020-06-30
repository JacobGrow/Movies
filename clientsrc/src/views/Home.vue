<template>
  <div class="home">
    <div class="row">
    <h1>Movies</h1>
    </div>
    <div class="row">
        
<movies v-for="popularMovie in popularMovies" :key="popularMovie" :popularMoviesProp ="popularMovie"/>
   
  </div>
  </div>
</template>


<script>
import popularMovies from "@/components/popularMovies.vue"
export default {
  props: ["popularMovie"],
  name: "home",
  data() {
    return {};
  },
  mounted() {
    // this.$store.dispatch("getPopularMovies")
  },
  computed: {
    popularMovies(){
      return this.$store.state.popularMovies;
  },
  },
  methods: {},
  components: {
     popularMovies,
    }
  
};
</script>


<style scoped>
</style>