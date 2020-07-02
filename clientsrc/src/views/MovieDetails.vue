<template>
  <div class="movieDetails container-fluid">
    <div class="row">
      <div class="col">
        <h1>Active Movie</h1>
 <h5>
 {{ movie.Title }}
 </h5>
<img :src="movie.Poster" class="movie-size align-self-center"/>  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "movieDetails",
  props: ["movieProp"],
  mounted(){
    this.$store.dispatch("getActiveMovie", this.$route.params.movieId)
  },
  computed: {
    movie() {
      return this.$store.state.activeMovie;
      console.log(this.activeMovie)
    }
  },
  methods: {
    
  }

}
</script>