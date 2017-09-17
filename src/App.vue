<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import "./assets/css/font-awesome.min.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
}
.page-container {
  position: absolute;
  /* left: 0;
  top: 0; */
  width: 100%;
  height: 100%;
  background-color: #131920;
}
</style>
