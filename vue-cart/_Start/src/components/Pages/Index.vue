<template>
  <div>
    <!--banner-starts-->
    <div class='bnr' id='home'>
      <div id='top' class='callbacks_container'>
        <ul class='rslides' id='slider4'>
            <li>
            <img src='/static/images/bnr-1.jpg' alt=''/>
          </li>
          <li>
            <img src='/static/images/bnr-2.jpg' alt=''/>
          </li>
          <li>
            <img src='/static/images/bnr-3.jpg' alt=''/>
          </li>
        </ul>
      </div>
      <div class='clearfix'> </div>
    </div>
    <!--banner-ends-->

    <!--about-starts-->
    <div class='about'>
      <div class='container'>
        <div class='about-top grid-1'>
          <div class='col-md-4 about-left'>
            <figure class='effect-bubba'>
              <img class='img-responsive' src='/static/images/abt-1.jpg' alt=''/>
              <figcaption>
                <h2>Nulla maximus nunc</h2>
                <p>In sit amet sapien eros Integer dolore magna aliqua</p>
              </figcaption>
            </figure>
          </div>
          <div class='col-md-4 about-left'>
            <figure class='effect-bubba'>
              <img class='img-responsive' src='/static/images/abt-2.jpg' alt=''/>
              <figcaption>
                <h4>Mauris erat augue</h4>
                <p>In sit amet sapien eros Integer dolore magna aliqua</p>
              </figcaption>
            </figure>
          </div>
          <div class='col-md-4 about-left'>
            <figure class='effect-bubba'>
              <img class='img-responsive' src='/static/images/abt-3.jpg' alt=''/>
              <figcaption>
                <h4>Cras elit mauris</h4>
                <p>In sit amet sapien eros Integer dolore magna aliqua</p>
              </figcaption>
            </figure>
          </div>
          <div class='clearfix'></div>
        </div>
      </div>
    </div>
    <!--about-end-->
    <!--product-starts-->
    <div class='product'>
      <div class='container'>
        <div class='product-top'>

        <!--
        |--------------------------------------------------------------------------
        |                              Row #1
        |--------------------------------------------------------------------------
        -->

          <div class='product-one'>
            <div class='col-md-3 product-left'>
              <div class='product-main simpleCart_shelfItem'>
                <router-link to="/watch-1"><img class='img-responsive zoom-img' :src='watch1.images[0]' alt='' /></router-link>
                <div class='product-bottom'>
                  <h3>{{ watch1.name }}</h3>
                  <p>Explore Now</p>
                  <h4><a class='item_add' href='#'><i></i></a> <span class=' item_price'>{{ watch1.price | currency }}</span></h4>
                </div>
                <div class='srch'>
                  <span>-50%</span>
                </div>
              </div>
            </div>


            <div class='col-md-3 product-left'>
              <div class='product-main simpleCart_shelfItem'>
                <router-link to="/watch-2"><img class='img-responsive zoom-img' :src='watch2.images[1]' alt='' /></router-link>
                <div class='product-bottom'>
                  <h3>{{ watch2.name }}</h3>
                  <p>Explore Now</p>
                  <h4><a class='item_add' href='#'><i></i></a> <span class=' item_price'>{{ watch2.price | currency }}</span></h4>
                </div>
                <div class='srch'>
                  <span>-50%</span>
                </div>
              </div>
            </div>


            <div class='col-md-3 product-left'>
              <div class='product-main simpleCart_shelfItem'>
                <router-link to="/watch-3"><img class='img-responsive zoom-img' :src='watch3.images[0]' alt='' /></router-link>
                <div class='product-bottom'>
                  <h3>{{ watch3.name }}</h3>
                  <p>Explore Now</p>
                  <h4><a class='item_add' href='#'><i></i></a> <span class=' item_price'>{{ watch3.price | currency }}</span></h4>
                </div>
                <div class='srch'>
                  <span>-50%</span>
                </div>
              </div>
            </div>


            <div class='col-md-3 product-left'>
              <div class='product-main simpleCart_shelfItem'>
                <router-link to="/watch-4"><img class='img-responsive zoom-img' :src='watch4.images[0]' alt='' /></router-link>
                <div class='product-bottom'>
                  <h3>{{ watch4.name }}</h3>
                  <p>Explore Now</p>
                  <h4><a class='item_add' href='#'><i></i></a> <span class=' item_price'>{{ watch4.price | currency }}</span></h4>
                </div>
                <div class='srch'>
                  <span>-50%</span>
                </div>
              </div>
            </div>
            <div class='clearfix'></div>
          </div>

          <!--
          |--------------------------------------------------------------------------
          |                              Row #2
          |--------------------------------------------------------------------------
          -->
          <div class='product-one'>
            <div class='col-md-3 product-left'>
              <div class='product-main simpleCart_shelfItem'>
                <a href='single.html' class='mask'><img class='img-responsive zoom-img' src='/static/images/p-5.png' alt='' /></a>
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
            <div class='col-md-3 product-left'>
              <div class='product-main simpleCart_shelfItem'>
                <a href='single.html' class='mask'><img class='img-responsive zoom-img' src='/static/images/p-6.png' alt='' /></a>
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
            <div class='col-md-3 product-left'>
              <div class='product-main simpleCart_shelfItem'>
                <a href='single.html' class='mask'><img class='img-responsive zoom-img' src='/static/images/p-7.png' alt='' /></a>
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
            <div class='col-md-3 product-left'>
              <div class='product-main simpleCart_shelfItem'>
                <a href='single.html' class='mask'><img class='img-responsive zoom-img' src='/static/images/p-8.png' alt='' /></a>
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
    </div>
    <!--product-end-->
  </div>
</template>

<script>
$(function () {
  // Slideshow 4
  $('#slider4').responsiveSlides({
    auto: true,
    pager: true,
    nav: true,
    speed: 2000,
    namespace: 'callbacks',
    before: function () {
      $('.events').append('<li>before event fired.</li>')
    },
    after: function () {
      $('.events').append('<li>after event fired.</li>')
    }
  })
})
// end of jQuery

import watchesJSON from '../../data/watches.json'

export default {
  name: '',
  data () {
    return {
      watch1: [],
      watch2: [],
      watch3: [],
      watch4: []
    }
  },
  mounted () {
    this.watch1 = watchesJSON.watches[0]
    this.watch2 = watchesJSON.watches[1]
    this.watch3 = watchesJSON.watches[2]
    this.watch4 = watchesJSON.watches[3]
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>

</style>
