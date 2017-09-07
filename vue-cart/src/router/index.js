import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Pages/Index'
import Watch1 from '@/components/Watches/Watch1'
import Watch2 from '@/components/Watches/Watch2'
import Watch3 from '@/components/Watches/Watch3'
import Watch4 from '@/components/Watches/Watch4'
import Checkout from '@/components/Pages/Checkout'
import Shipping from '@/components/Pages/Shipping'
import Billing from '@/components/Pages/Billing'
import Confirm from '@/components/Pages/Confirm'
import Thanks from '@/components/Pages/Thanks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/watch-1',
      name: 'Watch1',
      component: Watch1
    },
    {
      path: '/watch-2',
      name: 'Watch2',
      component: Watch2
    },
    {
      path: '/watch-3',
      name: 'Watch3',
      component: Watch3
    },
    {
      path: '/watch-4',
      name: 'Watch4',
      component: Watch4
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/shipping',
      name: 'Shipping',
      component: Shipping
    },
    {
      path: '/billing',
      name: 'Billing',
      component: Billing
    },
    {
      path: '/confirm',
      name: 'Confirm',
      component: Confirm
    },
    {
      path: '/thanks',
      name: 'Thanks',
      component: Thanks
    }
  ]
})
