<template>
  <div class="home-icon border-topbottom">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item, index) of icons" :key="index">
        <router-link to="/foodChannel" tag="div" class="icon-item" v-for="icon of item" :key="icon.id">
          <span class="iconfont icon" :class="icon.iconClass" :style="{background: icon.iconColor}"></span>
          <p class="icon-desc">{{icon.iconDesc}}</p>
        </router-link>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      icons: []
    }
  },
  mounted () {
    console.log(this.list)
    const pages = []
    this.list.forEach((item, index) => {
      const page = Math.floor(index / 10)
      if (!pages[page]) {
        pages[page] = []
      }
      pages[page].push(item)
    })
    console.log(pages)
    this.icons = pages
  }
}
</script>
<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.home-icon >>> .swiper-container
  overflow: initial
.home-icon >>> .swiper-pagination-bullet
  margin: 0 10px
.home-icon >>> .swiper-pagination-bullet-active
  background: $bgColor
.home-icon
  width: 100%
  height: 0
  overflow: hidden;
  padding-bottom: 48%
  background: #fff
  .swiper-pagination
    bottom: -8px
  .icon-item
    float: left
    width: 20%
    padding: .2rem .1rem
    box-sizing: border-box
    text-align: center;
    .icon
      display: inline-block
      width: .8rem
      line-height: .8rem
      font-size: .6rem
      border-radius: .4rem
      color: #fff
    .icon-desc
      margin-top: .2rem
      font-size: 12px
      color: #666
</style>
