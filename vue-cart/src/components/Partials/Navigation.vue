<template>
  <div>
  <!--top-header-->
  <div class="top-header">
    <div class="container">
      <div class="top-header-main">
        <div class="col-md-6 top-header-left">
        </div>
        <div class="col-md-6 top-header-left">
          <div class="cart box_1">
            <a href="checkout.html">
               <div class="total">
                <span class="simpleCart_total"></span></div>
                <img src="/static/images/cart-1.png" alt="" />
            </a>
            <!-- <p><a href="javascript:;" class="simpleCart_empty">Empty Cart</a></p> -->
            <div class="clearfix"> </div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
  <!--top-header-->
  <!--start-logo-->
  <div class="logo">
    <a href="index.html"><h1>Luxury Watches</h1></a>
  </div>
  <!--start-logo-->
  <!--bottom-header-->
  <div class="header-bottom">
    <div class="container">
      <div class="header">
        <div class="col-md-9 header-left">
        <div class="top-nav">
          <ul class="memenu skyblue">
            <li class="active"><router-link to="/">Home</router-link></li>
          </ul>
        </div>
        <div class="clearfix"> </div>
      </div>
      <div class="col-md-3 header-right">
        <div class="search-bar">
          <input type="text" value="Search" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search';}">
          <input type="submit" value="">
        </div>
      </div>
      <div class="clearfix"> </div>
      </div>
    </div>
  </div>
  <!--bottom-header-->
  </div>
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
