<template>
  <div class="home text-light">
    <div class="container-fluid">
    <div class="row">
      <div class="col-12 text-center">
        <div class="row justify-content-center mt-2">
        <h1>Search for Entertainment</h1>
    </div>
    <div class="row justify-content-center">
      <div class="col-6">
    <form @submit.prevent="searchMovies" class="form-inline justify-content-center">
      <input type="text" v-model="searchApi" class="form-control shadow" style="width: 60%"/>
      <button type="submit" @click="searchResults = true" class="btn btn-dark ml-2 shadow">Search</button>
    </form>
      </div>
    </div>
    <h2>
    </h2>
        </div>
      <div class="row justify-content-center">
         
          <div class="col-12 text-center">
            <div class="row justify-content-center">

        <div v-for="movie in movies" :key="movie.id" class="mx-2">
          <div class="col text-center ">

            <div class="card card-color mt-5 pb-1 text-center">


            <p class="text-light resultOverflow my-1">{{movie.Title}}</p>


       
          
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

*{
  font-family: 'Bangers', cursive;
}
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

.card-color{
  background-color: #b3211c;
}

.home{
overflow-x: hidden;
}
</style>