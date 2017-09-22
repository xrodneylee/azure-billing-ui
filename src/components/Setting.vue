<template>
  <div class="page-container">
    <navigation></navigation>
    <div class="container">
      <button class="btn btn-outline-primary mt-3" 
      data-toggle="modal" data-target="#exampleModal" @click="showTenantModal = true">新增</button>
      <table class="table mt-2">
        <thead>
          <tr class="row">
            <th class="col-1">#</th>
            <th class="col-3">tenant</th>
            <th class="col-3">client id</th>
            <th class="col-3">client secret</th>
            <th class="col-2"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="row">
            <th scope="row" class="col-1">1</th>
            <td class="col-3">Mark</td>
            <td class="col-3">Otto</td>
            <td class="col-3">@mdo</td>
            <td class="col-2">
              <button class="btn btn-outline-danger">刪除</button>
              <button class="btn btn-outline-warning">訂用帳戶</button>
            </td>
          </tr>
        </tbody>
      </table>
      <tenant-modal v-if="showTenantModal" @close="showTenantModal = false"></tenant-modal>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation'
import TenantModal from './TenantModal'

export default {
  data () {
    return {
      showTenantModal: false
    }
  },
  components: {
    Navigation,
    TenantModal
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table {
    color: #fff;
  }
</style>