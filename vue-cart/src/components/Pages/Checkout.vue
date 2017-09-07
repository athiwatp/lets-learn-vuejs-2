<template>
  <div>
  <!--start-ckeckout-->
  <div class="ckeckout">
    <div class="container">
      <div class="ckeck-top heading">
        <h2>CHECKOUT</h2>
      </div>
      <div class="ckeckout-top">
        <div class="cart-items">
          <h3>Total Items ({{ this.$store.state.cart.length }})</h3>

          <div class="text-right">
            <button class="btn btn-danger" @click.prevent="emptyCart">Empty Cart</button>
          </div>

          <div class="in-check" >
            <ul class="unit">
              <li><span>Item</span></li>
              <li><span>Product Name</span></li>
              <li><span>Unit Price</span></li>
              <li><span>Delivery Details</span></li>
              <li> </li>
              <div class="clearfix"> </div>
            </ul>

            <ul class="cart-header">
              <div v-for="(item, index) in this.$store.state.cart">
                <button class="btn btn-danger" @click="removeWatch(index)">Remove</button>
                  <li class="ring-in">
                    <img :src="item.image" class="img-responsive" alt="">
                  </li>
                  <li>
                    <span class="name">{{ item.name }}</span>
                    <small>Size: {{ item.size }}</small>
                    <br>
                    <small>Color: {{ item.color }}</small>
                  </li>
                  <li><span class="cost">{{ item.price | currency }}</span></li>
                  <li><span>Free</span>
                  <p>Delivered in 2-3 business days</p></li>
                <div class="clearfix"> </div>
                <br>
              </div> <!-- v-for -->
            </ul>

          </div>
          <div  style="text-align: right;">
            <h3>Cart Total: {{ this.$store.state.cartTotal | currency }}</h3>
            <br>
            <button class="btn btn-default">
              <router-link to="/billing">Add Billing Infomation</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--end-ckeckout-->
  </div>
</template>

<script>
$(document).ready(function (c) {
  $('.close1').on('click', function (c) {
    $('.cart-header').fadeOut('slow', function (c) {
      $('.cart-header').remove()
    })
  })
  $('.close2').on('click', function (c) {
    $('.cart-header1').fadeOut('slow', function (c) {
      $('.cart-header1').remove()
    })
  })

  $('.close3').on('click', function (c) {
    $('.cart-header2').fadeOut('slow', function (c) {
      $('.cart-header2').remove()
    })
  })
})

export default {
  name: '',
  data () {
    return {
      //
    }
  },
  methods: {
    removeWatch (product) {
      this.$store.commit('removeWatch', product)
      this.$store.commit('updateCartTotal')
    },
    emptyCart () {
      this.$store.commit('emptyCart')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
 a {
  color: black;
  text-decoration: none;
 }
</style>
