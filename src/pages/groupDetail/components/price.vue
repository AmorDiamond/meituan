<template>
  <div>
    <div class="empty-price-box" :style="emptyPriceStyle"></div>
    <div class="price border-bottom" ref="priceBox" :class="{'fixed-price': fixedPrice}">
      <span class="app-price"><span class="number">156</span>元</span>
      <span class="shop-price">门市价:252元</span>
      <button class="buy-btn">立即抢购</button>
    </div>
    <div class="icon-desc border-bottom">
      <ul class="icons">
        <li class="item color-ok"><span class="iconfont icon">&#xe613;</span>支持随时退款</li>
        <li class="item color-ok"><span class="iconfont icon">&#xe62e;</span>支持过期自动退</li>
        <li class="item"><span class="iconfont icon">&#xe752;</span>已售1467</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailPrice',
  data () {
    return {
      priceTop: 0,
      priceHeight: 0,
      fixedPrice: false,
      emptyPriceStyle: {
        height: '0px'
      }
    }
  },
  mounted () {
    const top = this.$refs.priceBox.offsetTop
    const height = this.$refs.priceBox.clientHeight
    this.priceTop = top
    this.priceHeight = height
    console.log('mounted top', top)
    window.addEventListener('scroll', this.scrollHandle)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollHandle)
  },
  methods: {
    scrollHandle () {
      const top = document.documentElement.scrollTop || document.body.scrollTop
      if (top > this.priceTop) {
        this.fixedPrice = true
        this.emptyPriceStyle.height = this.priceHeight + 'px'
        this.$emit('changeShow', true)
      } else {
        this.fixedPrice = false
        this.emptyPriceStyle.height = 0 + 'px'
        this.$emit('changeShow', false)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .fixed-price
    position: fixed
    top: 0
    left: 0
    right: 0
    z-index: 2
  .price
    overflow: hidden
    padding: .2rem
    background: #fff
    box-shadow: 0 1px 15px #b7b7b7
    .app-price
      color: $bgColor
      .number
        font-size: 32px
        font-weight: bold
    .shop-price
      color: #999
    .buy-btn
      float: right
      background: #f90
      border: none
      border-radius: .06rem
      width: 2.6rem
      height: .8rem
      color: #fff
      font-size: 18px
      font-weight: bold
  .icon-desc
    padding: .2rem
    background: #fff
    .icons
      overflow: hidden
      .item
        width: 50%
        float: left
        line-height: .6rem
        color: #666
        &.color-ok
          color: #6bbd00
        .icon
          font-size: 20px
          vertical-align: middle
          margin-right: .1rem
</style>
