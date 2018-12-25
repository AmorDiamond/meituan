<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id"><img class="item-img" :src="item.imgUrl" alt=""></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'PublicBanner',
  props: {
    list: {
      type: Array
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.wrapper >>> .swiper-pagination-bullet-active
  background: $bgColor
.wrapper
  width: 100%
  height: 0
  padding-bottom: 29.33%;
  background: #ddd
  .item-img
    width: 100%
</style>
