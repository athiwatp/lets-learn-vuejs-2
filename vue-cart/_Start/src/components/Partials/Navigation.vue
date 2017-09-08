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
              <div class="total">
                <span class="">
                  0.00
                </span>
              </div>
              <img src="/static/images/cart-1.png" alt="" />
            <span style="color: #fff;"</span>
            <!-- <p><a class="simpleCart_empty" @click.prevent="emptyCart">Empty Cart</a></p> -->
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
    <router-link to="/"><h1>Luxury Watches</h1></router-link>
  </div>
  <!--start-logo-->
  <!--bottom-header-->
  <div class="header-bottom">
    <div class="container">
      <div class="header">
        <div class="col-md-9 header-left">
        <div class="top-nav">
          <ul class="memenu skyblue">
            <li class="active"><a href="/">Home</a></li>
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
