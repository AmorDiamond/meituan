<template>
  <div class="gallery" @click="galleryHandleClick">
    <!-- Optional controls -->
    <!--将分页器放在swiper容器外，方便设置分页器位置，需要重新定义样式-->
    <div class="swiper-pagination" :slot="swiperOption.pagination"></div>
    <div class="wrapper">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide><img class="item-img" src="//p1.meituan.net/deal/935c1da59b0c4a4a790c836e8bae91ac25953.jpg" alt=""></swiper-slide>
        <swiper-slide><img class="item-img" src="//p1.meituan.net/440.0/dealwaterb/38ed4e43f0a9a2e80deb075a6413aded18036.jpg" alt=""></swiper-slide>
        <!-- Optional controls -->
        <!--<div class="swiper-pagination" slot="pagination"></div>-->
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GalleryBanner',
  data () {
    return {
      swiperOption: {
        pagination: {
          type: 'fraction',
          el: '.swiper-pagination'
        },
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    galleryHandleClick () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .gallery
    display: flex
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background: #000
    flex-direction: column
    justify-content: center
    .item-img
      width: 100%
    .swiper-pagination
      width: 100%
      top: .3rem
      height: .4rem
      line-height: .4rem
      color: #fff
      font-size: 18px
</style>
