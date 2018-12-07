<template>
  <div class="header border-bottom">
    <router-link to="/" tag="div" class="header-left"><span class="iconfont back-icon">&#xe680;</span></router-link>
    团购详情
    <div class="header-right">
      <router-link to="/" tag="div" class="item">
        <div class="iconfont people-icon">&#xe63a;</div><div class="people-text">收藏</div>
      </router-link>
      <router-link to="/search" tag="div" class="item">
        <div class="iconfont people-icon">&#xe611;</div><div class="people-text">导航</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader'
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
    overflow: hidden
    .header-left
      float: left
      padding: 0 .2rem
      .back-icon
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
