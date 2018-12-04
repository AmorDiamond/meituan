<template>
  <div class="like-list border-topbottom">
    <div class="list-title">猜你喜欢</div>
    <div class="list">
      <div class="list-item border-top" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="info-title">{{item.title}}</p>
          <div class="info-desc">
            <p v-for="(desc, index) of item.desc" :key="index">{{desc}}</p>
          </div>
          <p class="info-other">
            <span class="app-price"><span class="number">{{item.price.app}}</span>元</span>
            <span class="shop-price">门市价:{{item.price.shop}}元</span>
            <span class="sold-number">已售{{item.sold}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeList',
  props: {
    list: {
      type: Array
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.like-list
  background: #fff
  margin-top: .2rem
  .list-title
    line-height: .8rem
    padding-left: .2rem
    font-size: 17px
  .list
    padding-left: .2rem
    .list-item
      padding: .2rem 0
      overflow: hidden
      .item-img
        float: left
        width: 1.8rem
        height: 1.8rem
        margin-right: .2rem
      .item-info
        font-size: 12px
        color: #666
        overflow: hidden
        padding-right: .2rem
        .info-title
          line-height: .6rem
          font-size: 16px
          color: #333
        .info-desc
          min-height: .8rem
          line-height: .3rem
        .app-price
          color: $bgColor
          font-size: 16px
          .number
            font-size: 20px
            font-weight: bold
        .sold-number
          float: right
          margin-top: .1rem
</style>
