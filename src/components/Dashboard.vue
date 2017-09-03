<template>
  <div class="page-container">
    <navbar></navbar>
    <div class="container">
      
    </div>
  </div>
</template>

<script>
import Navbar from './Navigation'
export default {
  name: 'dashboard',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    Navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #131920;
}
</style>