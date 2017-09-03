<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <line-chart
        :name="currencyName"
        :usd="currencyPriceUSD"
        :btc="currencyPriceBTC"
        >

        </line-chart>
      </div> <!-- /.col -->
    </div> <!-- /.row -->
  </div> <!-- /.container-fluid -->
</template>

<script>
import LineChart from './LineChart'
import prices from '../../data/prices.json'

export default {
  name: '',
  components: {
    LineChart
  },
  data () {
    return {
      currencyName: [],
      currencyPriceUSD: [],
      currencyPriceBTC: []
    }
  },
  mounted () {
    this.currencyName = prices.map(currency => currency.name)
    this.currencyPriceUSD = prices.map(currency => currency.price_usd)
    this.currencyPriceBTC = prices.map(currency => currency.price_btc)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
