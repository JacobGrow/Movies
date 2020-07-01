<template>
  <div class="home text-light">
    <div class="container-fluid">
    <div class="row">
      <div class="col-12 text-center">
        <div class="row justify-content-center">

        <h1>Movies</h1>
    </div>
    <form @submit.prevent="searchMovies">
      <input type="text" v-model="searchApi" />
      <button type="submit" @click="searchResults = true">Search</button>
    </form>
    <h2>
      Results
    </h2>
        </div>
      <div class="row justify-content-center">
         
          <div class="col-12 text-center">
            <div class="row justify-content-center">

        <div v-for="movie in movies" :key="movie.id" class="mx-2">
          <div class="col text-center ">

            <div class="card kard mt-5 text-center">


            <p class="text-dark resultOverflow">{{movie.Title}}</p>


       
          
              <img :src="movie.Poster" class="movie-size align-self-center"/>  
          
          </div>
          </div>
            </div>
            
        </div>
      </div>
          </div>
   

    <div class="row">
      <!-- <popularMovies /> -->
    </div>
      </div>
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
.movie-size{
  height: 450px;
  width: 300px
}

.resultOverflow{
    width: 20em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

/* .kard{
  max-width: 400px;
  max-height: 600px;
} */
</style>