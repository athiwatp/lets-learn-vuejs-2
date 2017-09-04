<template>
  <div>
    <horizontal-bar-chart :chart-data="datacollection" :options="{responsive: true, maintainAspectRatio: false}"></horizontal-bar-chart>
  </div>
</template>

<script>
  import HorizontalBarChart from './Charts/HorizontalBarChart.js'
  import prices from '../data/prices.json'

  export default {
    components: {
      HorizontalBarChart
    },
    data () {
      return {
        datacollection: null,
        currencyName: [],
        currencyPriceUSD: [],
        currencyPriceBTC: []
      }
    },
    mounted () {
      this.currencyName = prices.map(currency => currency.name)
      this.currencyPriceUSD = prices.map(currency => currency.price_usd)
      this.currencyPriceBTC = prices.map(currency => currency.price_btc)
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: this.currencyName,
          datasets: [
            {
              label: 'Price $USD',
              backgroundColor: 'blue',
              data: this.currencyPriceUSD
            }, {
              label: 'Price BTC',
              backgroundColor: 'coral',
              data: this.currencyPriceBTC
            }
          ]
        }
      }
    }
  }
</script>

<style>

</style>
