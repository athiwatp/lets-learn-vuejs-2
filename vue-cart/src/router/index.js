import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Pages/Index'
import Single from '@/components/Pages/Single'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/single',
      name: 'Single',
      component: Single
    }
  ]
})
