<template>
  <div class="page-container">
    <navigation></navigation>
    <div class="container">
      <button class="btn btn-outline-primary mt-3">新增</button>
      <table class="table mt-2">
        <thead>
          <tr>
            <th>#</th>
            <th>tenant</th>
            <th>client id</th>
            <th>client secret</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button class="btn btn-outline-danger">刪除</button>
              <button class="btn btn-outline-warning">訂用帳戶</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation'

export default {
  data () {
    return {
      msg: ''
    }
  },
  components: {
    Navigation
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table {
    color: #fff;
  }
</style>