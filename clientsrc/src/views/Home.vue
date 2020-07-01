<template>
  <div class="home">
    <div class="row">
    <h1>Movies</h1>
    </div>
<div class="row">

<popularMovies />
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
  
  },
  computed: {
  
  },
  methods: {},
  components: {
     popularMovies,
    }
  
};
</script>


<style scoped>
</style>