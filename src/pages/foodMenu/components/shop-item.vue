<template>
  <div class="shop-item border-bottom">
    <div class="img-con">
      <img :src="shopData.img" alt="">
    </div>
    <div class="info-con">
      <p class="info-title">{{shopData.name}}</p>
      <p class="info-data">
        <span class="evaluation">
          <star-evaluation :scoreNumber="shopData.scoreNumber" :showScore="false"></star-evaluation>
        </span>
        <span class="price">￥{{shopData.price}}/人</span>
        <span class="address">{{shopData.address}}</span>
      </p>
      <p class="info-tag">
        <span class="food-type">{{shopData.foodType}}</span>
        <span class="tag-item" v-for="(item, index) of shopData.tag" :key="index">{{item}}</span>
      </p>
      <p class="info-support">
        <span class="support-item" v-for="(item, index) of shopData.support" :key="index">{{item}}</span>
      </p>
      <div class="info-offer border-top">
        <p class="offer-item" v-for="(item, index) of shopData.offer" :key="index"><span class="iconfont info-offer-icon" :class="item.iconClass"></span>{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import StarEvaluation from 'common/evaluation/star-evaluation'
export default {
  name: 'ShopItem',
  props: {
    shopInfo: {
      type: Object
    }
  },
  components: {
    StarEvaluation
  },
  data () {
    return {
      shopData: this.shopInfo
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .shop-item
    padding: .2rem;
    .img-con
      float: left;
      width: 1.6rem;
      height: 1.6rem;
      img
        width: 100%;
    .info-con
      margin-left: 1.8rem;
      line-height: .4rem;
      font-size: 12px;
      overflow: hidden;
      .info-title
        line-height: .45rem;
        font-size: 17px;
        ellipsis();
      .info-data
        color: #666;
        .evaluation
          transform: scale(.8);
          display: inline-block;
          transform-origin: left;
        .price
          margin-left: -20px;
        .address
          float: right;
      .info-tag
        white-space: nowrap;
        .tag-item
          margin-right: .1rem;
          color: #be9e4d;
          background: #fbf4e4;
      .info-support
        color: #6cbab2;
        margin-bottom: .1rem;
        .support-item
          margin-right: .1rem;
        .support-item:nth-child(n+2)
          border-left: 1px solid;
          padding-left: .1rem;
      .info-offer
        color: #666;
        padding-top: .1rem;
        .offer-item
          ellipsis();
        .info-offer-icon
          margin-right: .1rem;
        .icon-tuan
          color: #3bc3ab;
        .icon-quan1
          color: #ff8822;
        .icon-mai
          color: #ff7000;
</style>
