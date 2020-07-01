<template>
  <div>
    {{movie}}
  </div>
</template>

<script>
export default {
  name: "movie-detail",
  props: ['movie'],
  data() {
    return {

      moviesList: []
    };
  },
  mounted() {
  
  },
  computed: {
  
  },
  methods: {
    searchMovies(){
    
  },
}
</script>