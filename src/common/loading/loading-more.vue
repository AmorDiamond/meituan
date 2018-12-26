<template>
  <div class="loading-more" v-show="loadingStatus">
    <span class="iconfont loading-icon">&#xe650;</span><span>加载中...</span>
  </div>
</template>
<script>
export default {
  name: 'LoadingMore',
  props: {
    status: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  computed: {
    loadingStatus: function () {
      return this.status
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .loading-more
    text-align: center;
    margin: .1rem;
    color: $bgColor;
    .loading-icon
      display: inline-block;
      font-size: 20px;
      animation: rateLoading 1s linear infinite;
      vertical-align: middle;
      margin-right: .1rem;
  @keyframes rateLoading
    0%
      transform: rotate(0)
    100%
      transform: rotate(360deg)
</style>
