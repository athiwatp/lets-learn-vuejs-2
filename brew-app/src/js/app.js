/*
|-----------------------------------------------------------------------------
|                                 How to FIX
| No 'Access-Control-Allow-Origin' header is present on the requested resource
|-----------------------------------------------------------------------------
| Download a Chrome Extension Plugin to prevent CORS Errors
| https://chrome.google.com/webstore/detail/cors-toggle/omcncfnpmcabckcddookmnajignpffnh/related?hl=en
| Once installed, right click on the extension, click on 'resume default setting', then 'save'
| * make sure extension is turned on and enabled.
|
*/




// This turns off the following errors in the JS console.
// [Vue warn]: Error when evaluating expression "weatherData.main.temp": TypeError: Cannot read property 'temp' of undefined
Vue.config.warnExpressionErrors = false

const brewAPIKey = '0ea407857da0f90f79f77d9a6271c518';
const brewURI = `http://api.brewerydb.com/v2/beers?key=${brewAPIKey}`

// This will retrieve dos equis amber beer
// http://api.brewerydb.com/v2/beers?key=0ea407857da0f90f79f77d9a6271c518&name=dos%20equis%20amber


new Vue({
  el: '#app',
  template: '#brewTemplate',

  data: {
    beerData: [],
    beerName: 'corona extra',
    beerDetail: [],
    show: true
  },

  ready: function() {
    this.$http.get(`http://api.brewerydb.com/v2/beers?key=0ea407857da0f90f79f77d9a6271c518&name=${this.beerName}`).then((response) => {
      this.$set('beerData', response.json())
      }, (response) => {
        console.log('There was an error...');
    });
  },

  methods: {

    getBeer: function() {
      this.$http.get(`http://api.brewerydb.com/v2/beers?key=0ea407857da0f90f79f77d9a6271c518&name=${this.beerName}`).then((response) => {
        this.$set('beerData', response.json())
        }, (response) => {
          console.log('There was an error...');
      });
    },

    beerDetails: function() {
      this.$set('show', true);
    },

    closeDetails: function() {
      this.$set('show', false);
    },
  }
});
