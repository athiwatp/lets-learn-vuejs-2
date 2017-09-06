<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <form>

          <h3 class="text-center">Billing Address</h3>

          <div class="form-group">
            <label>First Name</label>
            <input type="text" class="form-control" id="billingFirstName" v-model="billingFirstName">
          </div>

          <div class="form-group">
            <label>Last Name</label>
            <input type="text" class="form-control" id="billingLastName" v-model="billingLastName">
          </div>

          <div class="form-group">
            <label>Street Address</label>
            <input type="text" class="form-control" id="billingStreetAddress" v-model="billingAddress">
          </div>

          <div class="form-group">
            <label>City</label>
            <input type="text" class="form-control" id="billingCity" v-model="billingCity">
          </div>

          <div class="form-group">
            <label>State</label>
            <input type="text" class="form-control" id="billingState" v-model="billingState">
          </div>

          <div class="form-group">
            <label>Zip Code</label>
            <input type="text" class="form-control" id="billingZipcode" v-model="billingZipcode">
          </div>

          <div style="text-align: right;">
            <button class="btn btn-default" @click.prevent="sameBillingShipping">Billing &amp; Shipping are the same</button>
          </div>

        </form>
      </div> <!-- /.col -->

      <!--
      |--------------------------------------------------------------------------
      |                             Shipping Address
      |--------------------------------------------------------------------------
      -->

      <div class="col-sm-12 col-md-6">
        <form>

          <h3 class="text-center">Shipping Address</h3>

          <div class="form-group">
            <label>First Name</label>
            <input type="text" class="form-control" id="shippingFirstName" v-model="shippingFirstName">
          </div>

          <div class="form-group">
            <label>Last Name</label>
            <input type="text" class="form-control" id="shippingLastName" v-model="shippingLastName">
          </div>

          <div class="form-group">
            <label>Street Address</label>
            <input type="text" class="form-control" id="shippingStreetAddress" v-model="shippingAddress">
          </div>

          <div class="form-group">
            <label>City</label>
            <input type="text" class="form-control" id="shippingCity" v-model="shippingCity">
          </div>

          <div class="form-group">
            <label>State</label>
            <input type="text" class="form-control" id="shippingState" v-model="shippingState">
          </div>

          <div class="form-group">
            <label>Zip Code</label>
            <input type="text" class="form-control" id="shippingZipcode" v-model="shippingZipcode">
          </div>

          <div style="text-align: right;">
            <button class="btn btn-default" @click.prevent="addBillingShippingAddresses">Submit</button>
          </div>

        </form>
      </div> <!-- /.col -->
    </div> <!-- /.row -->
  </div> <!-- /.container-fluid -->
</template>

<script>
export default {
  name: '',
  data () {
    return {
      billingFirstName: '',
      billingLastName: '',
      billingAddress: '',
      billingCity: '',
      billingState: '',
      billingZipcode: '',
      shippingFirstName: '',
      shippingLastName: '',
      shippingAddress: '',
      shippingCity: '',
      shippingState: '',
      shippingZipcode: ''
    }
  },
  methods: {
    sameBillingShipping () {
      this.shippingFirstName = this.billingFirstName
      this.shippingLastName = this.billingLastName
      this.shippingAddress = this.billingAddress
      this.shippingCity = this.billingCity
      this.shippingState = this.billingState
      this.shippingZipcode = this.billingZipcode
    },
    addBillingShippingAddresses () {
      this.$store.commit({
        type: 'updateShippingAddress',
        shippingFirstName: this.shippingFirstName,
        shippingLastName: this.shippingLastName,
        shippingStreetAddress: this.shippingAddress,
        shippingCity: this.shippingCity,
        shippingState: this.shippingState,
        shippingZipcode: this.shippingZipcode
      })

      this.$store.commit({
        type: 'updateBillingAddress',
        billingFirstName: this.billingFirstName,
        billingLastName: this.billingLastName,
        billingStreetAddress: this.billingAddress,
        billingCity: this.billingCity,
        billingState: this.billingState,
        billingZipcode: this.billingZipcode
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
