<template>
  <div class="home-icon border-topbottom">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item, index) of icons" :key="index">
        <router-link tag="div" class="icon-item" v-for="icon of item" :key="icon.id" :to="{path: '/foodCategory', query: {name: icon.linkQuery}}">
          <span class="icon"><img :src="icon.iconUrl" alt=""></span>
          <p class="icon-desc">{{icon.iconDesc}}</p>
        </router-link>
      </swiper-slide>
      <!-- Optional controls -->
      <!--<div v-if="showPagination" class="swiper-pagination"  slot="pagination"></div>-->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'FoodIcons',
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
        },
        watchOverflow: true
      },
      icons: [],
      showPaginationStatus: false // 控制默认先显示分页元素，避免数据处理完后swiper没有检测到分页元素导致分页元素不显示
    }
  },
  mounted () {
    console.log(this.list)
    const pages = []
    this.list.forEach((item, index) => {
      const page = Math.floor(index / 8)
      if (!pages[page]) {
        pages[page] = []
      }
      pages[page].push(item)
    })
    console.log(pages)
    this.icons = pages
    this.showPaginationStatus = true
  },
  computed: {
    // showPagination: function () {
    //   console.log(this.icons.length)
    //   return this.showPaginationStatus ? (this.icons.length > 1 ? 1 : false) : true
    // }
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
    margin-bottom: .2rem;
    .swiper-pagination
      bottom: -8px
    .icon-item
      float: left
      width: 25%
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
        img
          width: 100%;
      .icon-desc
        margin-top: .2rem
        font-size: 12px
        color: #666
</style>
