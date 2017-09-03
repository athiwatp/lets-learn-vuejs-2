<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
  import LineChart from './LineChart.js'
  import prices from '../../data/prices.json'

  export default {
    components: {
      LineChart
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
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>
