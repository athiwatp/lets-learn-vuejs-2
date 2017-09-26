<template>
  <div>
    <section class="items-confirm">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12">
            <h2 class="text-center">Confirm Your Order:</h2>
            <br>
            <br>
            <table class="table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Size</th>
                  <th>Color</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="watch in this.$store.state.cart">
                  <td class="watch-image"><img :src="watch.image" alt=""></td>
                  <td>{{ watch.name }}</td>
                  <td>{{ watch.price | currency }}</td>
                  <td>{{ watch.size }}</td>
                  <td>{{ watch.color }}</td>
                </tr>
              </tbody>
            </table>
            <br>
            <h3 class="text-right">Total: {{ this.$store.state.cartTotal | currency }}</h3>
          </div> <!-- /.col -->
        </div> <!-- /.row -->
      </div> <!-- /.container -->
    </section>


    <section class="shipping-billing-address">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-5 col-md-offset-1">
            <h4>Shipping Address:</h4>
            <p>{{ this.$store.state.shippingAddress.shippingFirstName }}</p>
            <p>{{ this.$store.state.shippingAddress.shippingLastName }}</p>
            <p>{{ this.$store.state.shippingAddress.shippingStreetAddress }}</p>
            <p>{{ this.$store.state.shippingAddress.shippingState }}</p>
            <p>{{ this.$store.state.shippingAddress.shippingCity }}</p>
            <p>{{ this.$store.state.shippingAddress.shippingZipcode }}</p>
          </div> <!-- /.col -->


          <div class="col-sm-12 col-md-5 col-md-offset-1">
            <h4>Billing Address:</h4>
            <p>{{ this.$store.state.billingAddress.billingFirstName }}</p>
            <p>{{ this.$store.state.billingAddress.billingLastName }}</p>
            <p>{{ this.$store.state.billingAddress.billingStreetAddress }}</p>
            <p>{{ this.$store.state.billingAddress.billingState }}</p>
            <p>{{ this.$store.state.billingAddress.billingCity }}</p>
            <p>{{ this.$store.state.billingAddress.billingZipcode }}</p>
          </div> <!-- /.col -->
        </div> <!-- /.row -->

        <br>
        <br>
        <div class="text-right">
          <router-link to="/checkout"><button class="btn btn-default">Update Cart</button></router-link>
          <router-link to="/billing"><button class="btn btn-default">Update Billing</button></router-link>
          <router-link to="/shipping"><button class="btn btn-default">Update Shipping</button></router-link>
          <router-link to="/thanks"><button class="btn btn-danger">Complete Order</button></router-link>
        </div>
      </div> <!-- /.container -->
    </section>

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
  .items-confirm,
  .shipping-billing-address {
    padding-top: 60px;
  }

  .watch-image img {
    width: 100px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  .btn-default a {
    color: black;
    text-decoration: none;
  }
</style>
