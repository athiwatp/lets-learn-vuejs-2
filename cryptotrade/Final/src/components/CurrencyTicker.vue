<template>
  <div class='container'>
    <div class='row'>
      <div class='col-sm-12 col-md-12'>

        <h2 class="text-center">Coin Market Cap</h2>
        <br>
        <input type="number" v-model="limit">
        <button class="btn btn-success" @click="getCoins">Update</button>
        <br>
        <br>

        <table class="table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price $USD</th>
              <th>Price BTC</th>
              <th>Market Cap USD</th>
              <th>Available Supply</th>
              <th>Total Supply</th>
              <th>% Change 1 hour</th>
              <th>% Change 24 hours</th>
              <th>% Change 7 Days</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="coin in coins">
              <td>{{ coin.rank }}</td>
              <td>{{ coin.name }}</td>
              <td>{{ coin.symbol }}</td>
              <td>{{ coin.price_usd | currency }}</td>
              <td>{{ coin.price_btc }}</td>
              <td>{{ coin.market_cap_usd | currency }}</td>
              <td>{{ coin.available_supply | currency }}</td>
              <td>{{ coin.total_supply | currency }}</td>
              <td v-bind:style="getColor(coin.percent_change_1h)">{{ coin.percent_change_1h }}</td>
              <td v-bind:style="getColor(coin.percent_change_24h)">{{ coin.percent_change_24h }}</td>
              <td v-bind:style="getColor(coin.percent_change_7d)">{{ coin.percent_change_7d }}</td>
              <td>{{ coin.last_updated }}</td>
            </tr>
          </tbody>
        </table>
      </div> <!-- /.col -->
    </div> <!-- /.row -->
  </div> <!-- /.container-fluid -->
</template>

<script>
/* eslint-disable no-new */

import axios from 'axios'

export default {
  name: 'Ticker',
  data () {
    return {
      coins: [],
      limit: '10'
    }
  },
  mounted () {
    this.getCoins()
  },
  methods: {
    getCoins () {
      axios.get(`https://api.coinmarketcap.com/v1/ticker/?limit=${this.limit}`)
      .then((response) => {
        this.coins = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    },
    getColor: (num) => {
      return num > 0 ? 'color:green;' : 'color:red;'
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>
 .container {
  padding-top: 60px
 }
</style>
