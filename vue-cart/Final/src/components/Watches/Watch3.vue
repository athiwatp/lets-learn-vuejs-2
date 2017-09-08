<template>
  <div>
    <single
    :name="name"
    :price="price"
    :description="description"
    :images="images"
    :colors="colors"
    :sizes="sizes"
    :colorDefault="colorDefault"
    :sizeDefault="sizeDefault"
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
      sizes: [],
      colorDefault: '',
      sizeDefault: ''
    }
  },
  components: {
    Single
  },
  mounted () {
    this.name = watchesJSON.watches[2].name
    this.price = watchesJSON.watches[2].price
    this.description = watchesJSON.watches[2].description
    this.images = watchesJSON.watches[2].images
    this.colors = watchesJSON.watches[2].colors
    this.sizes = watchesJSON.watches[2].sizes
    this.colorDefault = watchesJSON.watches[2].colors[0]
    this.sizeDefault = watchesJSON.watches[2].sizes[0]
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
