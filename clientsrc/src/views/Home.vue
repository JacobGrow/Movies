<template>
  <div class="home text-light">
    <div class="container-fluid">
    <div class="row">
      <div class="col-12 text-center">
        <h1>Movies</h1>
      </div>
    </div>
    <form @submit.prevent="searchMovies">
      <input type="text" v-model="searchApi" />
      <button type="submit" @click="searchResults = true">Search</button>
    </form>
    <h2>
      Results
    </h2>
      <div class="row justify-content-center">
        <div v-for="movie in movies" :key="movie.id">
          <div class="col-4 text-center">
            <p>{{movie.Title}}</p>
          
              <img :src="movie.Poster"/>  
          
        </div>
      </div>
          </div>
   
    </div>

    <div class="row">
      <!-- <popularMovies /> -->
    </div>
    <div></div>
  </div>
</template>


<script>
export default {
  name: "home",
  data() {
    return {
      searchResults: false,
      searchApi: ""
    };
  },
  mounted() {},
  computed: {
    movies() {
      return this.$store.state.searchResults;
    }
  },
  methods: {
    async searchMovies() {
      this.results = [];
      this.$store.dispatch("searchMovies", this.searchApi);
      this.results = this.$store.state.searchResults;
    }
  },
  components: {}
};
</script>


<style scoped>
</style>