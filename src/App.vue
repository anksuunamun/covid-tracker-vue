<template>
  <div id="app">
    <Header/>
    <div class="container">
<!--      <router-view/>-->
      <Home/>
    </div>
  </div>

</template>

<script>
import Header from './components/Header.vue'
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Header,
    Home
  },
}
</script>

<style>


</style>
