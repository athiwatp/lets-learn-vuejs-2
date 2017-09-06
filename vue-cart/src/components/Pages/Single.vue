<template>
  <div>
  <!--start-single-->
  <div class='single contact'>
    <div class='container'>
      <div class='single-main'>
        <div class='col-md-9 single-main-left'>
        <div class='sngl-top'>
          <div class='col-md-5 single-top-left'>

            <!--
            |--------------------------------------------------------------------------
            |                             Product Slider
            |--------------------------------------------------------------------------
            -->

            <div class='flexslider'>
                <ul class='slides'>
                <li :data-thumb='images[0]'>
                  <div class='thumb-image'> <img :src='images[0]' data-imagezoom='true' class='img-responsive' alt=''/> </div>
                </li>
                <li :data-thumb='images[1]'>
                   <div class='thumb-image'> <img :src='images[1]' data-imagezoom='true' class='img-responsive' alt=''/> </div>
                </li>
                <li :data-thumb='images[2]'>
                   <div class='thumb-image'> <img :src='images[2]' data-imagezoom='true' class='img-responsive' alt=''/> </div>
                </li>
                </ul>
            </div>
          </div>

          <!--
          |--------------------------------------------------------------------------
          |                               Product Info
          |--------------------------------------------------------------------------
          -->
          <div class='col-md-7 single-top-right'>
            <div class='single-para simpleCart_shelfItem'>
            <h2>{{ name }}</h2>
              <h5 class='item_price'>{{ price | currency }}</h5>
              <ul v-for="item in description">
                <li>{{ item }}</li>
              </ul>
              <div class='available'>
                  <div>Color:
                    <select class="form-control" v-model="color">
                      <option v-for="color in colors" :value="color">{{ color }}</option>
                    </select>
                  </div>
                  <br>
                <div class='size-in'>Size:
                  <select class="form-control" v-model="size">
                    <option v-for="size in sizes" :value="size">{{ size }}</option>
                  </select>
                </div>
                <div class='clearfix'> </div>
            </div>
              <a href='#' class='add-cart item_add' @click.prevent="addToCart">ADD TO CART</a>
            </div>
          </div>
          <div class='clearfix'> </div>
        </div>

        <!--
        |--------------------------------------------------------------------------
        |                             Related Products
        |--------------------------------------------------------------------------
        -->

        <div class='latestproducts'>
          <div class='product-one'>
            <div class='col-md-4 product-left p-left'>
              <div class='product-main simpleCart_shelfItem'>
                <a href='single.html' class='mask'><img class='img-responsive zoom-img' src='/static/images/p-1.png' alt='' /></a>
                <div class='product-bottom'>
                  <h3>Smart Watches</h3>
                  <p>Explore Now</p>
                  <h4><a class='item_add' href='#'><i></i></a> <span class=' item_price'>$ 329</span></h4>
                </div>
                <div class='srch'>
                  <span>-50%</span>
                </div>
              </div>
            </div>
            <div class='col-md-4 product-left p-left'>
              <div class='product-main simpleCart_shelfItem'>
                <a href='single.html' class='mask'><img class='img-responsive zoom-img' src='/static/images/p-2.png' alt='' /></a>
                <div class='product-bottom'>
                  <h3>Smart Watches</h3>
                  <p>Explore Now</p>
                  <h4><a class='item_add' href='#'><i></i></a> <span class=' item_price'>$ 329</span></h4>
                </div>
                <div class='srch'>
                  <span>-50%</span>
                </div>
              </div>
            </div>
            <div class='col-md-4 product-left p-left'>
              <div class='product-main simpleCart_shelfItem'>
                <a href='single.html' class='mask'><img class='img-responsive zoom-img' src='/static/images/p-3.png' alt='' /></a>
                <div class='product-bottom'>
                  <h3>Smart Watches</h3>
                  <p>Explore Now</p>
                  <h4><a class='item_add' href='#'><i></i></a> <span class=' item_price'>$ 329</span></h4>
                </div>
                <div class='srch'>
                  <span>-50%</span>
                </div>
              </div>
            </div>
            <div class='clearfix'></div>
          </div>
        </div>
      </div>

        <!--
        |--------------------------------------------------------------------------
        |                             Sidebar
        |--------------------------------------------------------------------------
        -->

        <div class='col-md-3 single-right'>
          <div class='w_sidebar'>
            <section  class='sky-form'>
              <h4>Catogories</h4>
              <div class='row1 scroll-pane'>
                <div class='col col-4'>
                  <label class='checkbox'><input type='checkbox' name='checkbox' checked=''><i></i>All Accessories</label>
                </div>
                <div class='col col-4'>
                  <label class='checkbox'><input type='checkbox' name='checkbox'><i></i>Women Watches</label>
                  <label class='checkbox'><input type='checkbox' name='checkbox'><i></i>Kids Watches</label>
                  <label class='checkbox'><input type='checkbox' name='checkbox'><i></i>Men Watches</label>
                </div>
              </div>
            </section>
            <section  class='sky-form'>
              <h4>Brand</h4>
              <div class='row1 row2 scroll-pane'>
                <div class='col col-4'>
                  <label class='checkbox'><input type='checkbox' name='checkbox' checked=''><i></i>kurtas</label>
                </div>
                <div class='col col-4'>
                  <label class='checkbox'><input type='checkbox' name='checkbox'><i></i>Sonata</label>
                  <label class='checkbox'><input type='checkbox' name='checkbox'><i></i>Titan</label>
                  <label class='checkbox'><input type='checkbox' name='checkbox'><i></i>Casio</label>
                  <label class='checkbox'><input type='checkbox' name='checkbox'><i></i>Omax</label>
                  <label class='checkbox'><input type='checkbox' name='checkbox' ><i></i>shree</label>
                  <label class='checkbox'><input type='checkbox' name='checkbox'><i></i>Fastrack</label>
                  <label class='checkbox'><input type='checkbox' name='checkbox'><i></i>Sports</label>
                  <label class='checkbox'><input type='checkbox' name='checkbox'><i></i>Fossil</label>
                  <label class='checkbox'><input type='checkbox' name='checkbox'><i></i>Maxima</label>
                  <label class='checkbox'><input type='checkbox' name='checkbox'><i></i>Yepme</label>
                  <label class='checkbox'><input type='checkbox' name='checkbox'><i></i>Citizen</label>
                  <label class='checkbox'><input type='checkbox' name='checkbox'><i></i>Diesel</label>
                </div>
              </div>
            </section>
            <section class='sky-form'>
              <h4>Colour</h4>
                <ul class='w_nav2'>
                  <li><a class='color1' href='#'></a></li>
                  <li><a class='color2' href='#'></a></li>
                  <li><a class='color3' href='#'></a></li>
                  <li><a class='color4' href='#'></a></li>
                  <li><a class='color5' href='#'></a></li>
                  <li><a class='color6' href='#'></a></li>
                  <li><a class='color7' href='#'></a></li>
                  <li><a class='color8' href='#'></a></li>
                  <li><a class='color9' href='#'></a></li>
                  <li><a class='color10' href='#'></a></li>
                  <li><a class='color12' href='#'></a></li>
                  <li><a class='color13' href='#'></a></li>
                  <li><a class='color14' href='#'></a></li>
                  <li><a class='color15' href='#'></a></li>
                  <li><a class='color5' href='#'></a></li>
                  <li><a class='color6' href='#'></a></li>
                  <li><a class='color7' href='#'></a></li>
                  <li><a class='color8' href='#'></a></li>
                  <li><a class='color9' href='#'></a></li>
                  <li><a class='color10' href='#'></a></li>
                </ul>
            </section>
            <section class='sky-form'>
              <h4>discount</h4>
              <div class='row1 row2 scroll-pane'>
                <div class='col col-4'>
                  <label class='radio'><input type='radio' name='radio' checked=''><i></i>60 % and above</label>
                  <label class='radio'><input type='radio' name='radio'><i></i>50 % and above</label>
                  <label class='radio'><input type='radio' name='radio'><i></i>40 % and above</label>
                </div>
                <div class='col col-4'>
                  <label class='radio'><input type='radio' name='radio'><i></i>30 % and above</label>
                  <label class='radio'><input type='radio' name='radio'><i></i>20 % and above</label>
                  <label class='radio'><input type='radio' name='radio'><i></i>10 % and above</label>
                </div>
              </div>
            </section>
          </div>
        </div> <!-- // end of sidebar -->
        <div class='clearfix'> </div>
      </div>
    </div>
  </div>
  <!--end-single-->

  </div>
</template>

<script>
$(function () {
  $('.flexslider').flexslider({
    animation: 'slide',
    controlNav: 'thumbnails'
  })

  var menuUL = $('.menu_drop > li > ul')
  var menuA = $('.menu_drop > li > a')

  menuUL.hide()

  menuA.click(function (e) {
    e.preventDefault()
    if (!$(this).hasClass('active')) {
      menuA.removeClass('active')
      menuUL.filter(':visible').slideUp('normal')
      $(this).addClass('active').next().stop(true, true).slideDown('normal')
    } else {
      $(this).removeClass('active')
      $(this).next().stop(true, true).slideUp('normal')
    }
  })
})
// end of jQuery

export default {
  name: '',
  props: ['name', 'price', 'description', 'images', 'colors', 'sizes', 'colorDefault', 'sizeDefault'],
  data () {
    return {
      color: this.colorDefault,
      size: this.sizeDefault
    }
  },
  created () {

  },
  methods: {
    addToCart () {
      this.$store.commit({
        type: 'updateCart',
        name: this.name,
        price: this.price,
        image: this.images[0],
        color: this.color,
        size: this.size
      })
      this.$store.commit('updateCartTotal')
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>

</style>
