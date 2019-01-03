<template>
  <div class="header border-bottom">
    <router-link to="/city" tag="div" class="header-left">{{city}}<span class="iconfont">&#xe600;</span></router-link>
    <router-link to="/search" tag="div" class="header-input"><span class="search-icon iconfont">&#xe618;</span>输入商家/品类/商圈</router-link>
    <div class="header-right"><div class="iconfont people-icon">&#xe636;</div><div class="people-text">我的</div></div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      city: ''
    }
  },
  mounted () {
    this.getCity()
  },
  methods: {
    getCity () {
      const city = this.$store.state.city
      this.city = city
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header
  display: flex
  background: $bgColor
  line-height: $headerHeight
  border-color: #21897d;
  color: #fff
  .header-left
    font-size: 16px
    padding: 0 .2rem
  .header-input
    flex: 1
    height: .61rem
    line-height: .61rem
    margin-top: .2rem
    padding: 0 .2rem
    border-radius: .06rem
    overflow: hidden
    background: rgba(0, 0, 0,.15)
    color: #68dbce
    .search-icon
      margin-right: .1rem
      color: #fff
  .header-right
    text-align: center
    line-height: initial
    margin: 0 .2rem
    .people-icon
      font-size: .6rem
      margin-top: .04rem;
    .people-text
      font-size: 12px
      margin-top: - .1rem
</style>
