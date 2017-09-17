<template>
  <div class="page-container">
    <navigation></navigation>
    <div class="container">
      <div class="row">
        <pie-chart></pie-chart>
        <bar-chart></bar-chart>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation'
import PieChart from './PieChart'
import BarChart from './BarChart'

export default {
  data () {
    return {
    }
  },
  components: {
    Navigation,
    PieChart,
    BarChart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>