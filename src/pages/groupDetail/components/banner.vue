<template>
  <div>
    <div class="banner" @click="bannerHandleClick">
      <img class="banner-img" :src="bannerData.bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-text">
          <p class="info-title">{{bannerData.bannerTitle}}</p>
          <p class="info-desc">{{bannerData.bannerDesc}}</p>
        </div>
      </div>
    </div>
    <gallery-banner @close="galleryHandleClick" v-if="showGllery" :list="bannerData.galleryList"></gallery-banner>
  </div>
</template>
<script>
import GalleryBanner from 'common/gallery/gallery'
import FadeAnimation from 'common/animation/fadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    bannerInfo: {
      type: Object
    }
  },
  components: {
    GalleryBanner,
    FadeAnimation
  },
  data () {
    return {
      showGllery: false
    }
  },
  computed: {
    // bannerTitle: function () {
    //   return this.bannerInfo.bannerTitle
    // },
    // bannerDesc: function () {
    //   return this.bannerInfo.bannerDesc
    // },
    // bannerImg: function () {
    //   return this.bannerInfo.bannerImg
    // },
    // galleryList: function () {
    //   return this.bannerInfo.galleryList
    // },
    bannerData: function () {
      return {
        bannerTitle: this.bannerInfo.bannerTitle,
        bannerDesc: this.bannerInfo.bannerDesc,
        bannerImg: this.bannerInfo.bannerImg,
        galleryList: this.bannerInfo.galleryList
      }
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
