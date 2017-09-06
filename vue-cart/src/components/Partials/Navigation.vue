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
            <router-link to="/checkout">
              <div class="total">
                <span class="">
                  {{ this.$store.state.cartTotal | currency }}
                </span>
              </div>
              <img src="/static/images/cart-1.png" alt="" />
            </router-link>
            <span style="color: #fff;" v-if="this.$store.state.cart.length">{{ this.$store.state.cart.length }}</span>
            <p><a class="simpleCart_empty" @click.prevent="emptyCart">Empty Cart</a></p>
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
  },
  computed: {
    cartTotal () {
      this.$store.state.cartTotal
    }
  },
  methods: {
    emptyCart () {
      this.$store.commit('emptyCart')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
