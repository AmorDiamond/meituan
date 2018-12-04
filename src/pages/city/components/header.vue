<template>
  <div class="header border-bottom">
    <router-link to="/" tag="div" class="header-left"><span class="iconfont back-icon">&#xe600;</span></router-link>
    选择城市
    <div class="header-right">
      <router-link to="/" tag="div" class="item">
        <div class="iconfont people-icon">&#xe636;</div><div class="people-text">首页</div>
      </router-link>
      <router-link to="/search" tag="div" class="item">
        <div class="iconfont people-icon">&#xe618;</div><div class="people-text">搜索</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    background: $bgColor
    height: $headerHeight
    line-height: $headerHeight
    border-color: #21897d;
    color: #fff
    text-align: center
    font-size: 18px
    .header-left
      float: left
      font-size: 16px
      padding: 0 .2rem
      .back-icon
        display: inline-block
        transform: rotate(90deg)
        font-size: .6rem
    .header-right
      float: right
      display: flex
      text-align: center
      line-height: initial
      .item
        margin: 0 .2rem
      .people-icon
        font-size: .45rem
        margin-top: 0.1rem
      .people-text
        font-size: 12px
        transform: scale(.9)
</style>
