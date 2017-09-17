<template>
    <nav class="navbar" style="background-color:#212C3B">
        <div class="container">
            <ul class="nav mr-auto">
                <li class="nav-item">
                    <router-link :to="{ path: 'dashboard' }" class="nav-link fa fa-home fa-lg" aria-hidden="true" style="color:#cfd2da"></router-link>
                </li>
            </ul>
            <ul class="nav">
                <li class="nav-item">
                    <router-link :to="{ path: 'setting' }" class="nav-link fa fa-cogs fa-lg" aria-hidden="true" style="color:#cfd2da"></router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link fa fa-user-circle fa-lg" aria-hidden="true" href="#" style="color:#cfd2da"></a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>