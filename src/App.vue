<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
import store from './vuex/store'

export default {
  store,
  name: 'app'
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import "./assets/css/font-awesome.min.css";

.page-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #131920;
}
button {
  cursor: pointer;
}
</style>
