import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import CurrencyTicker from '@/components/CurrencyTicker'
import CurrencyPrices from '@/components/CurrencyPrices'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ticker',
      name: 'CurrencyTicker',
      component: CurrencyTicker
    },
    {
      path: '/prices',
      name: 'CurrencyPrices',
      component: CurrencyPrices
    }
  ]
})
