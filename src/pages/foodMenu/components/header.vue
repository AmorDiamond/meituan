<template>
  <div class="header" :class="{'fixed-header': fixedHead}">
    <div @click="back" class="header-left iconfont">&#xe605;</div>
    <div class="header-input"><span class="iconfont search-icon">&#xe618;</span>输入商家名、品类或商圈</div>
    <div class="header-right iconfont">&#xe636;</div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  props: {
    fixedHead: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  methods: {
    back () {
      history.back(-1)
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .fixed-header
    position: fixed;
    width: 100%;
    z-index: 2;
  .header
    display: flex;
    line-height: .9rem;
    background: #fafafa;
    color: $bgColor;
    text-align: center;
    .header-left
      width: .6rem;
      margin: 0 .2rem;
      font-size: 24px;
    .header-input
      flex: 1;
      height: .6rem;
      line-height: .6rem;
      margin-top: .15rem;
      background: #ebeced;
      border-radius: .3rem;
      color: #999;
      .search-icon
        font-weight: bold;
        color: #8e8e94;
        vertical-align: middle;
        margin-right: .1rem;
    .header-right
      width: .6rem;
      margin: 0 .2rem;
      font-size: 30px;
</style>
