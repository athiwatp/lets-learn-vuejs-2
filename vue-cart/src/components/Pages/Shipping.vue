<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-8 col-md-offset-2">
        <form @submit.prevent="validateBeforeSubmit">

          <h3 class="text-center">Shipping Address</h3>

          <div class="form-group">
            <label>First Name</label>
            <input name="First Name" v-model="shippingFirstName" v-validate="'required|alpha'" :class="{'form-control': true, 'is-danger': errors.has('First Name') }" type="text">
            <span v-show="errors.has('First Name')" class="help is-danger">{{ errors.first('First Name') }}</span>
          </div>

          <div class="form-group">
            <label>Last Name</label>
            <input name="Last Name" v-model="shippingLastName" v-validate="'required|alpha_num'" :class="{'form-control': true, 'is-danger': errors.has('Last Name') }" type="text">
            <span v-show="errors.has('Last Name')" class="help is-danger">{{ errors.first('Last Name') }}</span>
          </div>

          <div class="form-group">
            <label>Street Address</label>
            <input name="Street Address" v-model="shippingAddress" v-validate="'required'" :class="{'form-control': true, 'is-danger': errors.has('Street Address') }" type="text">
            <span v-show="errors.has('Street Address')" class="help is-danger">{{ errors.first('Street Address') }}</span>
          </div>

          <div class="form-group">
            <label>City</label>
            <input name="City" v-model="shippingCity" v-validate="'required|alpha'" :class="{'form-control': true, 'is-danger': errors.has('City') }" type="text">
            <span v-show="errors.has('City')" class="help is-danger">{{ errors.first('City') }}</span>
          </div>

          <div class="form-group">
            <label>State</label>
            <input name="State" v-model="shippingState" v-validate="'required|alpha_spaces'" :class="{'form-control': true, 'is-danger': errors.has('State') }" type="text">
            <span v-show="errors.has('State')" class="help is-danger">{{ errors.first('State') }}</span>
          </div>

          <div class="form-group">
            <label>Zip Code</label>
            <input name="Zip Code" v-model="shippingZipcode" v-validate="'required|numeric'" :class="{'form-control': true, 'is-danger': errors.has('Zip Code') }" type="text">
            <span v-show="errors.has('Zip Code')" class="help is-danger">{{ errors.first('Zip Code') }}</span>
          </div>

          <div style="text-align: right;">
            <button class="btn btn-default" @click.prevent="sameBillingShipping">Billing &amp; Shipping are the same</button>
          </div>
          <br>
          <div class="text-right">
            <button type="submit" class="btn btn-default">Confirm Your Order</button>
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
      this.shippingFirstName = this.$store.state.billingAddress.billingFirstName
      this.shippingLastName = this.$store.state.billingAddress.billingLastName
      this.shippingAddress = this.$store.state.billingAddress.billingStreetAddress
      this.shippingCity = this.$store.state.billingAddress.billingCity
      this.shippingState = this.$store.state.billingAddress.billingState
      this.shippingZipcode = this.$store.state.billingAddress.billingZipcode
    },
    addShippingAddress () {
      this.$store.commit({
        type: 'updateShippingAddress',
        shippingFirstName: this.shippingFirstName,
        shippingLastName: this.shippingLastName,
        shippingStreetAddress: this.shippingAddress,
        shippingCity: this.shippingCity,
        shippingState: this.shippingState,
        shippingZipcode: this.shippingZipcode
      })
    },
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.addShippingAddress()
          this.$router.push('confirm')
        }
      })
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

  .is-danger {
    // border-color: red;
    color: red;
  }
</style>
