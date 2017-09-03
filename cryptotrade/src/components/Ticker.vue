<template>
  <div class='container'>
    <div class='row'>
      <div class='col-sm-12 col-md-12 col-lg-8 col-lg-offset-2'>
        <button @click='getCurrencies' class='btn btn-primary'>Get Currencies</button>

          <div v-for='currency in currencies'>
            <p>{{ currency.id }}</p>
          </div>

          <pre>
            {{ currencies }}
          </pre>
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
      currencies: []
    }
  },
  methods: {
    getCurrencies () {
      axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
      .then((response) => {
        this.currencies = response.data
      })
      .catch((error) => {
        console.log(error)
      })
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
