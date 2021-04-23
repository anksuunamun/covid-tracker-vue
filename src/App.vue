<template>
  <div id="app">
    <Header/>
    <div class="container">
<!-- @-->
      <Home/>
    </div>
  </div>

</template>

<script>
import Header from "@/components/Header";
import Home from "@/views/Home";

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
