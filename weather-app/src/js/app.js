// const apiKey = '5c9da600a7c42093f56acd5ea7466037';
// const apiURI = `http://api.openweathermap.org/data/2.5/weather?q=boston,ma&units=imperial&APPID=${apiKey}`

Vue.config.warnExpressionErrors = false

new Vue({
  el: '#app',
  template: '#weatherTemplate',

  data: {
    city: 'Providence',
    state: 'RI',
    weatherLocation: {city: '', state: ''},
    weatherData: [],
    weatherForecast: [],
  },

  ready: function() {
    const apiURI = `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=imperial&APPID=5c9da600a7c42093f56acd5ea7466037`
    this.$http.get(apiURI).then((response) => {
      this.$set('weatherData', response.json())
      this.weatherLocation.city = this.city;
      this.weatherLocation.state = this.state;
      }, (response) => {
        console.log('There was an error...');
    });

  },

  methods: {
    getWeather: function() {
      const apiURI = `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=imperial&APPID=5c9da600a7c42093f56acd5ea7466037`
      this.$http.get(apiURI).then((response) => {
        this.$set('weatherData', response.json())
        this.weatherLocation.city = this.city;
        this.weatherLocation.state = this.state;
        this.city = '';
        this.state = '';
        }, (response) => {
          console.log('There was an error...');
      });
    },

    getForecast: function() {
      const apiURI = `http://api.openweathermap.org/data/2.5/forecast?q=${this.city},${this.state}&units=imperial&APPID=5c9da600a7c42093f56acd5ea7466037`
      this.$http.get(apiURI).then((response) => {
        this.$set('weatherForecast', response.json())
          this.weatherLocation.city = this.city;
          this.weatherLocation.state = this.state;
          this.city = '';
          this.state = '';
        }, (response) => {
          console.log('There was an error...');
      });
    }
  }
});
