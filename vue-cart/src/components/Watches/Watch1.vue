<template>
  <div>
    <single
    :name="name"
    :price="price"
    :description="description"
    :images="images"
    :colors="colors"
    :sizes="sizes"
    ></single>
  </div>
</template>

<script>
import watchesJSON from '../../data/watches.json'
import Single from '../Pages/Single'

export default {
  name: '',
  data () {
    return {
      name: '',
      price: 0,
      description: '',
      images: [],
      colors: [],
      sizes: []
    }
  },
  components: {
    Single
  },
  mounted () {
    this.name = watchesJSON.watches[0].name
    this.price = watchesJSON.watches[0].price
    this.description = watchesJSON.watches[0].description
    this.images = watchesJSON.watches[0].images
    this.colors = watchesJSON.watches[0].colors
    this.sizes = watchesJSON.watches[0].sizes
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
