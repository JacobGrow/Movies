<template>
  <div class="movieDetails container-fluid">
    <div class="row">
      <div class="col">
        <div class="row justify-content-center">
          <h1 class="text-light">{{ movie.Title }}</h1>
        </div>
        <div class="row justify-content-center">
          <div class="col-3">
            <div class="card card-color mt-2 p-2 text-center shadow">
              <img :src="movie.Poster" class="movie-size align-self-center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "movieDetails",
  props: ["movieProp"],
  mounted() {
    this.$store.dispatch("getActiveMovie", this.$route.params.movieId);
  },
  computed: {
    movie() {
      return this.$store.state.activeMovie;
      console.log(this.activeMovie);
    }
  },
  methods: {}
};
</script>

<style scoped>
.card-color {
  background-color: #b3211c;
}
</style>