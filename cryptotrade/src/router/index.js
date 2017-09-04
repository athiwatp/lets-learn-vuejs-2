import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import CurrencyTicker from '@/components/CurrencyTicker'
import CurrencyPrices from '@/components/CurrencyPrices'
import LiveTrade from '@/components/LiveTrade'

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
    },
    {
      path: '/live',
      name: 'LiveTrade',
      component: LiveTrade
    }
  ]
})
