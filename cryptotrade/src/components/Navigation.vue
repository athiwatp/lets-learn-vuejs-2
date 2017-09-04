<template>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">CryptoTrade</a>
    </div>

    <ul class="nav navbar-nav navbar-right">
      <li><router-link to="/ticker">Currency Ticker</router-link></li>
      <li><router-link to="/prices">Currency Prices</router-link></li>
      <li><router-link to="/live">Live Trades</router-link></li>
    </ul>
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      //
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
