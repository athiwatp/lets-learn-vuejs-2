<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import Navigation from './components/Partials/Navigation'
import Foot from './components/Partials/Foot'

export default {
  name: 'app',
  components: {
    Navigation,
    Foot
  }
}
</script>

<style>

</style>
