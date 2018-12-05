<template>
  <div class="city-list">
    <div class="area">
      <div class="location border">定位城市：<span class="city">成都</span></div>
    </div>
    <div class="area">
      <div class="area-title">热门城市</div>
      <div class="warpper border hot-city">
        <div class="item border-rightbottom" v-for="item of hotList" :key="item.id">{{item.name}}</div>
      </div>
    </div>
    <div class="area" ref="allCity">
      <div class="area-title">全部城市</div>
      <div class="warpper border">
        <ul class="alphabet border-bottom">
          <li class="alphabet-item" v-for="(item, key) of cities" :key="key" @click="letterClick(key)">{{key}}</li>
        </ul>
        <div class="list">
          <div class="warpper-item border-bottom" v-for="(item, key) of cities" :key="key" :ref="key">
            <div class="item border-rightbottom">{{key}}</div>
            <div class="item border-rightbottom" v-for="city of item" :key="city.id">{{city.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CityList',
  props: {
    cities: {
      type: Object,
      default () {
        return {}
      }
    },
    hotList: Array
  },
  data () {
    return {
      allCityTop: 0
    }
  },
  mounted () {
    // this.allCityTop = this.$refs.allCity.offsetTop
  },
  updated () {
    this.allCityTop = this.$refs.allCity.offsetTop
  },
  methods: {
    letterClick (letter) {
      const top = this.$refs[letter][0].offsetTop
      // const scrollEl = document.documentElement.scrollTop || document.body.scrollTop
      const scrollTop = top + this.allCityTop
      document.documentElement.scrollTop = scrollTop
      document.body.scrollTop = scrollTop // 苹果手机存在document.documentElement，但是一直为0，也无法通过给document.documentElement.scrollTop赋值让滚动条滚动到指定位置，所以需要加一行document.body.scrollTop = scrollTop
      // 通过 document.documentElement.scrollTop || document.body.scrollTop无法判断使用哪个，因为是用于设置滚动条位置，不是获取滚动条位置，document.documentElement.scrollTop永远都是0
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .hot-city
    .item:nth-child(4n)
      &:before
        border: none
  .city-list
    padding: 0 .2rem
    overflow: hidden;
    .area
      margin-top: .2rem
      .location
        background: #fff
        line-height: .8rem
        text-indent: .2rem
      .city
        color: $bgColor
      .area-title
        line-height: .6rem
        font-size: 16px
      .warpper
        background: #fff
        overflow: hidden
        text-align: center
        .item
          float: left
          width: 25%
          line-height: .8rem
          margin-bottom: -1px
        .alphabet
          overflow: hidden
          color: $bgColor
          font-size: 16px
          .alphabet-item
            width: 20%
            float: left
            line-height: .8rem
        .list
          margin-right: -1px
          .warpper-item
            overflow: hidden
            .item:first-child
              height: 1.58rem
              line-height: 1.58rem
              font-size: 42px
              color: #B7B7B7
</style>
