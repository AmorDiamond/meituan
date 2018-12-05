<template>
  <div class="city-list">
    <div class="area">
      <div class="location border">定位城市：<span class="city">成都</span></div>
    </div>
    <div class="area">
      <div class="area-title">热门城市</div>
      <div class="warpper border hot-city">
        <div class="item border-rightbottom">北京</div>
        <div class="item border-rightbottom">上海</div>
        <div class="item border-rightbottom">成都</div>
        <div class="item border-rightbottom">广州</div>
        <div class="item border-rightbottom">深圳</div>
        <div class="item border-rightbottom">天津</div>
        <div class="item border-rightbottom">西安</div>
      </div>
    </div>
    <div class="area">
      <div class="area-title">全部城市</div>
      <div class="warpper border">
        <ul class="alphabet border-bottom">
          <li class="alphabet-item" v-for="(item, key) of cities" :key="key">{{key}}</li>
        </ul>
        <div class="list">
          <div class="warpper-item border-bottom" v-for="(item, key) of cities" :key="key">
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
