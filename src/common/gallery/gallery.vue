<template>
  <div class="gallery" @click="galleryHandleClick">
    <!-- Optional controls -->
    <!--将分页器放在swiper容器外，方便设置分页器位置，需要重新定义样式-->
    <!--<div class="swiper-pagination" :slot="swiperOption.pagination"></div>-->
    <div class="swiper-pagination"></div>
    <div class="wrapper">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item, index) of list" :key="index"><img class="item-img" :src="item" alt=""></swiper-slide>
        <!-- Optional controls -->
        <!--<div class="swiper-pagination" slot="pagination"></div>-->
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GalleryBanner',
  props: {
    list: {
      type: Array
    },
    galleryIndex: {
      type: Number,
      default () {
        return 0
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          type: 'fraction',
          el: '.swiper-pagination'
        },
        // uniqueNavElements: false,
        autoHeight: true,
        observer: true,
        observeParents: true
      }
    }
  },
  computed: {
    // swiper () {
    //   console.log(1111)
    //   return this.$refs.mySwiper.swiper
    // }
  },
  mounted () {
    console.log('mounted')
    const swiper = this.$refs.mySwiper.swiper
    swiper.slideTo(this.galleryIndex, 0, false)
  },
  // updated () {
  //   console.log('updated')
  //   const swiper = this.$refs.mySwiper.swiper
  //   swiper.slideTo(this.galleryIndex, 0, false)
  // },
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
    z-index: 3
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
