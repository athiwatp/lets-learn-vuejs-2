import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Ticker from '@/components/Ticker'
import CurrencyPrices from '@/components/Currency Prices/CurrencyPrices'
import RandomChart from '@/components/Random Chart/RandomChart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ticker',
      component: Ticker
    },
    {
      path: '/line',
      name: 'CurrencyPrices',
      component: CurrencyPrices
    },
    {
      path: '/random',
      name: 'RandomChart',
      component: RandomChart
    }
  ]
})
