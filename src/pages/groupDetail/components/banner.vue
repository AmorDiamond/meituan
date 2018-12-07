<template>
  <div>
    <div class="banner" @click="bannerHandleClick">
      <img class="banner-img" src="//p1.meituan.net/deal/935c1da59b0c4a4a790c836e8bae91ac25953.jpg" alt="">
      <div class="banner-info">
        <div class="banner-text">
          <p class="info-title">海底捞火锅</p>
          <p class="info-desc">畅享套餐，建议2人使用</p>
        </div>
      </div>
    </div>
    <gallery-banner @close="galleryHandleClick" v-show="showGllery"></gallery-banner>
  </div>
</template>
<script>
import GalleryBanner from './gallery'
export default {
  name: 'DetailBanner',
  components: {
    GalleryBanner
  },
  data () {
    return {
      showGllery: false
    }
  },
  methods: {
    galleryHandleClick () {
      this.showGllery = false
    },
    bannerHandleClick () {
      this.showGllery = true
    }
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    position: relative
    height: 0
    padding-bottom: 52%
    background: #ddd
    overflow: hidden
    .banner-img
      position: absolute
      top: 50%
      width: 100%
      transform: translateY(-50%)
    .banner-info
      position: absolute
      left: 0
      right: 0
      bottom: 0
      padding: 0 .3rem
      color: #fff
      &:before
        content: ''
        position: absolute
        left: 0
        right: 0
        top: -100%
        bottom: 0
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .6))
      .banner-text
        position: relative
        text-shadow: 3px 3px 3px #4a4a4a;
        .info-title
          line-height: .65rem
          font-size: 18px
          font-weight: bold
        .info-desc
          line-height: .4rem
          margin-bottom: .2rem
</style>
