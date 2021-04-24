<template>
  <header class="text-center bg-bright-blue text-white p-4 mb-10">
    <div class="text-3xl md:text-5xl mb-3">
      <img src="../assets/coronavirus.svg" alt="">
      COVID-19 Tracker App</div>
    <p>API by <a class="text-dirty-pink hover:text-bright-pink" href="https://covid19api.com/" target="_blank">covid19api.com</a></p>
  </header>
</template>

<script>
export default {
  name: 'Header',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    max-width: 70px;
    display: inline-block;
  }
</style>
