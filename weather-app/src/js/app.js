// This turns off the following errors in the JS console.
// [Vue warn]: Error when evaluating expression "weatherData.main.temp": TypeError: Cannot read property 'temp' of undefined
Vue.config.warnExpressionErrors = false



new Vue({
  el: '#app',
  template: '#weatherTemplate',

  data: {
    city: 'Boston',
    state: 'MA',
    // weatherLocation Object is used so you don't see the reactive city & state change when typing a new location
    weatherLocation: {city: '', state: ''},
    // array which holds the current weather data
    currentWeather: [],
    // array which holds the 5 day forecast weather data
    weatherForecast: [],
  },

  // Upon loading the page the current weather data will be fetched and populated
  ready: function() {
    const apiURI = `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=imperial&APPID=5c9da600a7c42093f56acd5ea7466037`
    this.$http.get(apiURI).then((response) => {
      this.$set('currentWeather', response.json())
      this.weatherLocation.city = this.city;
      this.weatherLocation.state = this.state;
      }, (response) => {
        console.log('There was an error...');
    });

  },

  methods: {
    // this function gets the current weather data
    getWeather: function() {
      const apiURI = `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=imperial&APPID=5c9da600a7c42093f56acd5ea7466037`
      this.$http.get(apiURI).then((response) => {
        this.$set('currentWeather', response.json())
        this.weatherLocation.city = this.city;
        this.weatherLocation.state = this.state;
        // this.city = '';
        // this.state = '';
        }, (response) => {
          console.log('There was an error...');
      });
    },

    // this function gets the 5 day forecast weather data
    getForecast: function() {
      const apiURI = `http://api.openweathermap.org/data/2.5/forecast?q=${this.city},${this.state}&units=imperial&APPID=5c9da600a7c42093f56acd5ea7466037`
      this.$http.get(apiURI).then((response) => {
        this.$set('weatherForecast', response.json())
          this.weatherLocation.city = this.city;
          this.weatherLocation.state = this.state;
          // this.city = '';
          // this.state = '';
        }, (response) => {
          console.log('There was an error...');
      });
    }
  }
});
