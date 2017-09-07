<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-8 col-md-offset-2">
        <form @submit.prevent="validateBeforeSubmit">

          <h3 class="text-center">Billing Address</h3>

          <div class="form-group">
            <label>First Name</label>
            <input name="First Name" v-model="billingFirstName" v-validate="'required|alpha'" :class="{'form-control': true, 'is-danger': errors.has('First Name') }" type="text">
            <span v-show="errors.has('First Name')" class="help is-danger">{{ errors.first('First Name') }}</span>
          </div>

          <div class="form-group">
            <label>Last Name</label>
            <input name="Last Name" v-model="billingLastName" v-validate="'required|alpha_num'" :class="{'form-control': true, 'is-danger': errors.has('Last Name') }" type="text">
            <span v-show="errors.has('Last Name')" class="help is-danger">{{ errors.first('Last Name') }}</span>
          </div>

          <div class="form-group">
            <label>Street Address</label>
            <input name="Street Address" v-model="billingAddress" v-validate="'required'" :class="{'form-control': true, 'is-danger': errors.has('Street Address') }" type="text">
            <span v-show="errors.has('Street Address')" class="help is-danger">{{ errors.first('Street Address') }}</span>
          </div>

          <div class="form-group">
            <label>City</label>
            <input name="City" v-model="billingCity" v-validate="'required|alpha'" :class="{'form-control': true, 'is-danger': errors.has('City') }" type="text">
            <span v-show="errors.has('City')" class="help is-danger">{{ errors.first('City') }}</span>
          </div>

          <div class="form-group">
            <label>State</label>
            <input name="State" v-model="billingState" v-validate="'required|alpha_spaces'" :class="{'form-control': true, 'is-danger': errors.has('State') }" type="text">
            <span v-show="errors.has('State')" class="help is-danger">{{ errors.first('State') }}</span>
          </div>

          <div class="form-group">
            <label>Zip Code</label>
            <input name="Zip Code" v-model="billingZipcode" v-validate="'required|numeric'" :class="{'form-control': true, 'is-danger': errors.has('Zip Code') }" type="text">
            <span v-show="errors.has('Zip Code')" class="help is-danger">{{ errors.first('Zip Code') }}</span>
          </div>

          <br>
          <div class="text-right">
            <button type="submit" class="btn btn-default">Add Shipping Infomation</button>
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
      billingZipcode: ''
    }
  },
  mounted () {
    this.checkBillingInfo()
  },
  methods: {
    checkBillingInfo () {
      if (this.$store.state.billingAddress.length !== 0) {
        this.billingFirstName = this.$store.state.billingAddress.billingFirstName
        this.billingLastName = this.$store.state.billingAddress.billingLastName
        this.billingAddress = this.$store.state.billingAddress.billingStreetAddress
        this.billingCity = this.$store.state.billingAddress.billingCity
        this.billingState = this.$store.state.billingAddress.billingState
        this.billingZipcode = this.$store.state.billingAddress.billingZipcode
      }
    },
    addBillingAddress () {
      this.$store.commit({
        type: 'updateBillingAddress',
        billingFirstName: this.billingFirstName,
        billingLastName: this.billingLastName,
        billingStreetAddress: this.billingAddress,
        billingCity: this.billingCity,
        billingState: this.billingState,
        billingZipcode: this.billingZipcode
      })
    },
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.addBillingAddress()
          this.$router.push('shipping')
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
