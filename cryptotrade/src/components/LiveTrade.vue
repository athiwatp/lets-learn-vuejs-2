<template>
  <div class='container'>
    <div class='row'>
      <div class='col-sm-12 col-md-12'>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Market Cap</th>
              <th>Price</th>
              <th>Supply</th>
              <th>Volume</th>
              <th>% 24hr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ btc.coin }}</td>
              <td>{{ btc.msg.mktcap | currency }}</td>
              <td v-bind:style="priceColor(btc.msg.price)">{{ btc.msg.price | currency }}</td>
              <td>{{ btc.msg.supply }}</td>
              <td>{{ btc.msg.volume | currency }}</td>
              <td v-bind:style="getColor(btc.msg.cap24hrChange)">{{ btc.msg.cap24hrChange | currency }}</td>
            </tr>
            <tr>
              <td>{{ eth.coin }}</td>
              <td>{{ eth.msg.mktcap | currency }}</td>
              <td>{{ eth.msg.price | currency }}</td>
              <td>{{ eth.msg.supply }}</td>
              <td>{{ eth.msg.volume | currency }}</td>
              <td v-bind:style="getColor(eth.msg.cap24hrChange)">{{ eth.msg.cap24hrChange | currency }}</td>
            </tr>
            <tr>
              <td>{{ bch.coin }}</td>
              <td>{{ bch.msg.mktcap | currency }}</td>
              <td>{{ bch.msg.price | currency }}</td>
              <td>{{ bch.msg.supply }}</td>
              <td>{{ bch.msg.volume | currency }}</td>
              <td v-bind:style="getColor(bch.msg.cap24hrChange)">{{ bch.msg.cap24hrChange | currency }}</td>
            </tr>
            <tr>
              <td>{{ xrp.coin }}</td>
              <td>{{ xrp.msg.mktcap | currency }}</td>
              <td>{{ xrp.msg.price | currency }}</td>
              <td>{{ xrp.msg.supply }}</td>
              <td>{{ xrp.msg.volume | currency }}</td>
              <td v-bind:style="getColor(xrp.msg.cap24hrChange)">{{ xrp.msg.cap24hrChange | currency }}</td>
            </tr>
            <tr>
              <td>{{ ltc.coin }}</td>
              <td>{{ ltc.msg.mktcap | currency }}</td>
              <td>{{ ltc.msg.price | currency }}</td>
              <td>{{ ltc.msg.supply }}</td>
              <td>{{ ltc.msg.volume | currency }}</td>
              <td v-bind:style="getColor(ltc.msg.cap24hrChange)">{{ ltc.msg.cap24hrChange | currency }}</td>
            </tr>
          </tbody>
        </table>
      </div> <!-- /.col -->
    </div> <!-- /.row -->
  </div> <!-- /.container-fluid -->
</template>

<script>
export default {
  name: '',
  data () {
    return {
      trades: [],
      btc: [],
      btcPrice: '',
      eth: [],
      bch: [],
      xrp: [],
      ltc: []
    }
  },
  methods: {
    getColor (num) {
      return num > 0 ? 'color:green;' : 'color:red;'
    },
    priceColor (price) {
      return price > this.btcPrice ? 'color:green;' : 'color:red;'
    }
  },
  socket: {
    events: {
      trades (tradeMsg) {
        // console.log(tradeMsg.message)
        // this.trades = tradeMsg.message
        if (tradeMsg.message.coin === 'BTC') {
          this.btcPrice = tradeMsg.message.msg.price
          this.btc = tradeMsg.message
        } else if (tradeMsg.message.coin === 'ETH') {
          this.eth = tradeMsg.message
        } else if (tradeMsg.message.coin === 'BCH') {
          this.bch = tradeMsg.message
        } else if (tradeMsg.message.coin === 'XRP') {
          this.xrp = tradeMsg.message
        } else if (tradeMsg.message.coin === 'LTC') {
          this.ltc = tradeMsg.message
        }
      },
      error (err) {
        console.error('Websocket error!', err)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
