<template>
  <div class="information border-bottom">
    <div class="hd-title border-bottom">
      商家信息
    </div>
    <div class="info border-bottom">
      <div class="info-left">
        <p class="info-title">{{shopData.name}}</p>
        <p class="info-address">{{shopData.address}}</p>
        <p class="info-location"><span class="iconfont location-icon">&#xe662;</span>离我最近</p>
      </div>
      <div class="info-right">
        <div class="iconfont phone-icon border-left">&#xe6f3;</div>
      </div>
    </div>
    <div class="other-shop" v-if="shopData.shopTotal">
      <span>查看全部{{shopData.shopTotal}}家适用分店</span><span class="iconfont other-icon">&#xe661;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShopInformation',
  props: {
    shopInfo: {
      type: Object
    }
  },
  computed: {
    shopData: function () {
      return {
        name: this.shopInfo.name,
        address: this.shopInfo.address,
        shopTel: this.shopInfo.tel,
        shopTotal: this.shopInfo.shopTotal
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .information
    margin-top: .2rem
    background: #fff
    .hd-title
      padding: 0 .2rem
      line-height: .9rem
      color: #333
      font-size: 18px
    .info
      display: flex
      padding: .2rem
      align-items: center
      .info-left
        flex: 1
        color: #666
        .info-title
          line-height: .6rem
          font-size: 16px
          font-weight: bold
          color: #000
        .info-address
          line-height: .4rem
        .info-location
          line-height: .6rem
          color: #eb8706
          .location-icon
            color: #666
            vertical-align: middle
            font-size: 17px
            margin-right: .2rem
      .info-right
        width: 1.5rem
        text-align: center
        .phone-icon
          height: 1.2rem
          line-height: 1.2rem
          font-size: 18px
          color: #06c1ae
    .other-shop
      padding: 0 .2rem
      line-height: .8rem
      color: #06c1ae
      font-size: 15px
      .other-icon
        float: right
        font-size: 22px
</style>
