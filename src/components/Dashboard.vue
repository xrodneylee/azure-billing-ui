<template>
  <div class="page-container">
    <navigation></navigation>
    <div class="container">
      <pie-chart></pie-chart>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation'
import PieChart from './PieChart'
export default {
  data () {
    return {
    }
  },
  components: {
    Navigation,
    PieChart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-container {
  position: absolute;
  /* left: 0;
  top: 0; */
  width: 100%;
  height: 100%;
  background-color: #131920;
}
</style>