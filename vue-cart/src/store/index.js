import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    cartTotal: null
  },
  mutations: {
    updateCart (state, payload) {
      state.cart.push(payload)
    },
    emptyCart (state) {
      state.cart = []
      state.cartTotal = null
    },
    updateCartTotal (state) {
      state.cartTotal = null
      for (var i = 0; i < state.cart.length; i++) {
        state.cartTotal += state.cart[i].price
      }
    },
    removeWatch (state, payload) {
      state.cart.splice(payload, 1)
    }
  }
})
