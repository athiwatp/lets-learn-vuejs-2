const apiKey = '5c9da600a7c42093f56acd5ea7466037';
const apiURI = `http://api.openweathermap.org/data/2.5/weather?q=boston,ma&units=imperial&APPID=${apiKey}`



new Vue({
  el: '#app',
  template: '#weatherTemplate',

  data: {
    weatherData: []
  },

  ready: function() {
    this.$http.get(apiURI).then((response) => {
      this.$set('weatherData', response.json())
      console.log(response);
      }, (response) => {
        console.log('There was an error...');
    });
  },

  methods: {

  }
});
