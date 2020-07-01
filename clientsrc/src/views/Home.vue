<template>
  <div class="home">
    <div class="row">
      <div class="col text-center">
    <h1>Movies</h1>
      </div>
    </div>
    <form @submit.prevent="searchMovies">
<input type="text" v-model="searchApi">
<button type="submit" @click="searchResults = true">Search</button>
    </form>
    <div>
      Results
      <div v-for="movie in movies" :key="movie.id">
        <ul>
         <li> {{movie.Title}} 
            <img :src="movie.Poster"/> </li> 
        </ul>
      </div>
    </div>
   
<div class="row">

<!-- <popularMovies /> -->
</div>
<div>
 
</div>
  </div>
</template>


<script>

export default {
  name: "home",
  data() {
    return {
      searchResults: false,
      searchApi: ""
    }
  },
  mounted() {
  
  },
  computed: {
    movies(){
      return this.$store.state.searchResults
    }
  },
  methods: {
    async searchMovies(){
      this.results = [];
      this.$store.dispatch("searchMovies", this.searchApi);
      this.results = this.$store.state.searchResults;
    }
  },
  components: {
   
    }
  
}
</script>


<style scoped>
</style>