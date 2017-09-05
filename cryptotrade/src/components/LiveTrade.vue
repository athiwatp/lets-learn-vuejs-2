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

            <tr v-bind:class="backgroundColor(btc.msg.price)">
              <td>{{ btc.coin }}</td>
              <td>{{ btc.msg.mktcap | currency }}</td>
              <td v-bind:style="priceColor(btc.msg.price)">{{ btc.msg.price | currency }}</td>
              <td>{{ btc.msg.supply }}</td>
              <td>{{ btc.msg.volume | currency }}</td>
              <td v-bind:style="getColor(btc.msg.cap24hrChange)">{{ btc.msg.cap24hrChange | currency }}</td>
            </tr>

            <tr v-bind:class="backgroundColor(eth.msg.price)">
              <td>{{ eth.coin }}</td>
              <td>{{ eth.msg.mktcap | currency }}</td>
              <td v-bind:style="priceColor(eth.msg.price)">{{ eth.msg.price | currency }}</td>
              <td>{{ eth.msg.supply }}</td>
              <td>{{ eth.msg.volume | currency }}</td>
              <td v-bind:style="getColor(eth.msg.cap24hrChange)">{{ eth.msg.cap24hrChange | currency }}</td>
            </tr>

            <tr v-bind:class="backgroundColor(bch.msg.price)">
              <td>{{ bch.coin }}</td>
              <td>{{ bch.msg.mktcap | currency }}</td>
              <td v-bind:style="priceColor(bch.msg.price)">{{ bch.msg.price | currency }}</td>
              <td>{{ bch.msg.supply }}</td>
              <td>{{ bch.msg.volume | currency }}</td>
              <td v-bind:style="getColor(bch.msg.cap24hrChange)">{{ bch.msg.cap24hrChange | currency }}</td>
            </tr>

            <tr v-bind:class="backgroundColor(xrp.msg.price)">
              <td>{{ xrp.coin }}</td>
              <td>{{ xrp.msg.mktcap | currency }}</td>
              <td v-bind:style="priceColor(xrp.msg.price)">{{ xrp.msg.price | currency }}</td>
              <td>{{ xrp.msg.supply }}</td>
              <td>{{ xrp.msg.volume | currency }}</td>
              <td v-bind:style="getColor(xrp.msg.cap24hrChange)">{{ xrp.msg.cap24hrChange | currency }}</td>
            </tr>

            <tr v-bind:class="backgroundColor(ltc.msg.price)">
              <td>{{ ltc.coin }}</td>
              <td>{{ ltc.msg.mktcap | currency }}</td>
              <td v-bind:style="priceColor(ltc.msg.price)">{{ ltc.msg.price | currency }}</td>
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
      eth: [],
      bch: [],
      xrp: [],
      ltc: [],
      color: ''
    }
  },
  mounted () {
    localStorage.setItem('lastBTCPrice', 0)
    localStorage.setItem('lastETHPrice', 0)
    localStorage.setItem('lastBCHPrice', 0)
    localStorage.setItem('lastXRPPrice', 0)
    localStorage.setItem('lastLTCPrice', 0)
  },
  methods: {
    getColor (num) {
      return num > 0 ? 'color:green;' : 'color:red;'
    },
    priceColor (price) {
      if (price === this.btc.msg.price) {
        var lastBTCPrice = localStorage.getItem('lastBTCPrice')
        if (price >= lastBTCPrice) {
          localStorage.setItem('lastBTCPrice', price)
          return 'color: green;'
        } else {
          localStorage.setItem('lastBTCPrice', price)
          return 'color: red'
        }
      } else if (price === this.eth.msg.price) {
        var lastETHPrice = localStorage.getItem('lastETHPrice')
        if (price >= lastETHPrice) {
          localStorage.setItem('lastETHPrice', price)
          return 'color: green;'
        } else {
          localStorage.setItem('lastETHPrice', price)
          return 'color: red'
        }
      } else if (price === this.bch.msg.price) {
        var lastBCHPrice = localStorage.getItem('lastBCHPrice')
        if (price >= lastBCHPrice) {
          localStorage.setItem('lastBCHPrice', price)
          return 'color: green;'
        } else {
          localStorage.setItem('lastBCHPrice', price)
          return 'color: red'
        }
      } else if (price === this.xrp.msg.price) {
        var lastXRPPrice = localStorage.getItem('lastXRPPrice')
        if (price >= lastXRPPrice) {
          localStorage.setItem('lastXRPPrice', price)
          return 'color: green;'
        } else {
          localStorage.setItem('lastXRPPrice', price)
          return 'color: red'
        }
      } else if (price === this.ltc.msg.price) {
        var lastLTCPrice = localStorage.getItem('lastLTCPrice')
        if (price >= lastLTCPrice) {
          localStorage.setItem('lastLTCPrice', price)
          return 'color: green;'
        } else {
          localStorage.setItem('lastLTCPrice', price)
          return 'color: red'
        }
      }
    },
    backgroundColor (price) {
      if (price === this.btc.msg.price) {
        var lastBTCPrice = localStorage.getItem('lastBTCPrice')
        if (price >= lastBTCPrice) {
          return 'green'
        } else {
          return 'red'
        }
      } else if (price === this.eth.msg.price) {
        var lastETHPrice = localStorage.getItem('lastETHPrice')
        if (price >= lastETHPrice) {
          return 'green'
        } else {
          return 'red'
        }
      } else if (price === this.bch.msg.price) {
        var lastBCHPrice = localStorage.getItem('lastBCHPrice')
        if (price >= lastBCHPrice) {
          return 'green'
        } else {
          return 'red'
        }
      } else if (price === this.xrp.msg.price) {
        var lastXRPPrice = localStorage.getItem('lastXRPPrice')
        if (price >= lastXRPPrice) {
          return 'green'
        } else {
          return 'red'
        }
      } else if (price === this.ltc.msg.price) {
        var lastLTCPrice = localStorage.getItem('lastLTCPrice')
        if (price >= lastLTCPrice) {
          return 'green'
        } else {
          return 'red'
        }
      }
    }
  },
  socket: {
    events: {
      trades (tradeMsg) {
        switch (tradeMsg.message.coin) {
          case 'BTC':
            this.btcPrice = tradeMsg.message.msg.price
            this.btc = tradeMsg.message
            break
          case 'ETH':
            this.eth = tradeMsg.message
            break
          case 'BCH':
            this.bch = tradeMsg.message
            break
          case 'XRP':
            this.xrp = tradeMsg.message
            break
          case 'LTC':
            this.ltc = tradeMsg.message
            break
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
@-webkit-keyframes green {
    0% {
        background-color: rgba(0, 131, 9, 0.5);
        opacity:1;
    }
    22% {
        background-color: rgba(0, 131, 9, 0.2);
    }
    77% {
        background-color: #fff;
    }
    100% {
        background-color: #fff;
    }
}

.green {
    -webkit-animation-name: green;
    -webkit-animation-duration: 500ms;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-timing-function: ease-in-out;
}

@-webkit-keyframes red {
    0% {
        background-color: rgba(255, 5, 0, 0.5);
        opacity:1;
    }
    22% {
        background-color: rgba(255, 5, 0, 0.2);
    }
    77% {
        background-color: #fff;
    }
    100% {
        background-color: #fff;
    }
}

.red {
    -webkit-animation-name: red;
    -webkit-animation-duration: 500ms;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-timing-function: ease-in-out;
}
</style>
