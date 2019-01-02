<template>
  <div class="header border-bottom">
    <!--<router-link :to="backRouter ? backRouter : '/'" tag="div" class="header-left"><span class="iconfont back-icon">&#xe680;</span></router-link>-->
    <div @click="back" class="header-left"><span class="iconfont back-icon">&#xe680;</span></div>
    团购详情
    <div class="header-right">
      <div class="item" @click="collectHandleClick">
        <div class="iconfont people-icon"><span v-if="!collectStatus">&#xe63a;</span><span v-else>&#xe64b;</span></div><div class="people-text">收藏</div>
      </div>
      <div class="item" @click="navHandleClick">
        <div class="iconfont people-icon">&#xe611;</div><div class="people-text">导航</div>
      </div>
    </div>
    <ul class="nav-list" v-show="showNavList">
      <router-link to="/" tag="li" class="nav-item border-bottom"><span class="iconfont icon-item">&#xe61d;</span>首页</router-link>
      <li class="nav-item border-bottom"><span class="iconfont icon-item">&#xe636;</span>我的</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showNavList: false,
      collectStatus: false
    }
  },
  methods: {
    navHandleClick () {
      console.log(this.backRouter)
      this.showNavList = !this.showNavList
    },
    collectHandleClick () {
      const msg = this.collectStatus === true ? '取消收藏成功' : '收藏成功'
      this.collectStatus = !this.collectStatus
      this.$toast(msg)
    },
    back () {
      history.back(-1)
    }
  }
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
      padding: 0 .2rem
      height: inherit
      overflow: hidden
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
    .nav-list
      position: absolute
      right: .1rem
      background: $bgColor
      z-index: 1
      margin-top: .05rem
      font-size: 12px
      line-height: .7rem
      width: 2rem
      .border-bottom
        &:before
          border-color: #21897d
      .icon-item
        vertical-align: middle
        margin-right: .1rem
</style>
