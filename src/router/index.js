import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import dashboard from '@/components/dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/dashboard',
      component: dashboard
    }
  ]
})
