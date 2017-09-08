<template>
  <div class='container'>
    <div class='row'>
      <div class='col-sm-12 col-md-12'>
        <input type="number" v-model="limit">
        <button class="btn btn-success" @click="getCoins">Update</button>
        <br>
        <br>
        <bar-chart :chart-data="datacollection" :options="{responsive: true, maintainAspectRatio: false}"></bar-chart>
        <br>
        <br>
        <pie-chart :chart-data="datacollection" :options="{responsive: true, maintainAspectRatio: false}"></pie-chart>
        <br>
        <br>
        <line-chart :chart-data="datacollection" :options="{responsive: true, maintainAspectRatio: false}"></line-chart>
        <br>
        <br>
        <horizontal-bar-chart :chart-data="datacollection" :options="{responsive: true, maintainAspectRatio: false}"></horizontal-bar-chart>
      </div> <!-- /.col -->
    </div> <!-- /.row -->
  </div> <!-- /.container-fluid -->
</template>

<script>
  import axios from 'axios'
  import BarChart from './Charts/BarChart.js'
  import HorizontalBarChart from './Charts/HorizontalBarChart.js'
  import LineChart from './Charts/LineChart.js'
  import PieChart from './Charts/PieChart.js'
  // import prices from '../data/prices.json'

  export default {
    components: {
      BarChart,
      HorizontalBarChart,
      LineChart,
      PieChart
    },
    data () {
      return {
        datacollection: null,
        currencyName: [],
        currencyPriceUSD: [],
        currencyPriceBTC: [],
        limit: '10'
      }
    },
    mounted () {
      this.getCoins()

      console.log(this.currencyName)
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
      },
      getCoins () {
        axios.get(`https://api.coinmarketcap.com/v1/ticker/?limit=${this.limit}`)
        .then((response) => {
          this.currencyName = response.data.map(currency => currency.name)
          this.currencyPriceUSD = response.data.map(currency => currency.price_usd)
          this.currencyPriceBTC = response.data.map(currency => currency.price_btc)
          this.fillData()
        })
        .catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>

<style>

</style>
