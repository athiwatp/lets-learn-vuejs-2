<template>
  <div class='container'>
    <div class='row'>
      <div class='col-sm-12 col-md-12'>
        <table class="table table-bordered">
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
            <tr v-for="currency in currencies">
              <td>{{ currency.rank }}</td>
              <td>{{ currency.name }}</td>
              <td>{{ currency.symbol }}</td>
              <td>{{ currency.price_usd }}</td>
              <td>{{ currency.price_btc }}</td>
              <td>{{ currency.market_cap_usd }}</td>
              <td>{{ currency.available_supply }}</td>
              <td>{{ currency.total_supply }}</td>
              <td>{{ currency.percent_change_1h }}</td>
              <td>{{ currency.percent_change_24h }}</td>
              <td>{{ currency.percent_change_7d }}</td>
              <td>{{ currency.last_updated }}</td>
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
      currencies: [],
      selected: ''
    }
  },
  mounted () {
    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
    .then((response) => {
      this.currencies = response.data
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>
 .container {
  padding-top: 60px
 }
</style>
