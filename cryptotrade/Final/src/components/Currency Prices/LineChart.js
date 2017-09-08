import {Line} from 'vue-chartjs'
// import axios from 'axios'
// import prices from '../../data/prices.json'

export default Line.extend({
  props: ['name', 'usd', 'btc'],
  data () {
    return {
      gradient: null,
      gradient2: null
    }
  },
  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)')
    this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)')
    this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)')

    this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)')
    this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)')
    this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)')

    this.setGraph()

    // axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
    //   .then((response) => {
    //     // console.log(response)
    //     this.currencyName = response.data.map(currency => currency.name)
    //     this.currencyPriceUSD = response.data.map(currency => currency.price_usd)
    //     this.currencyPriceBTC = response.data.map(currency => currency.price_btc)
    //     this.setGraph()
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  },
  methods: {
    setGraph () {
      this.renderChart({
        labels: this.name,
        datasets: [
          {
            label: 'Price $USD',
            borderColor: '#FC2525',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: 'white',
            backgroundColor: this.gradient,
            data: this.usd
          },
          {
            label: 'Price BTC',
            borderColor: '#05CBE1',
            pointBackgroundColor: 'white',
            pointBorderColor: 'white',
            borderWidth: 1,
            backgroundColor: this.gradient2,
            data: this.btc
          }
        ]
      }, {responsive: true, maintainAspectRatio: false})
    }
  }
})
