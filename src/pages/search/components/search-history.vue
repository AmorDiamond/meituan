<template>
  <ul class="search-history">
    <li class="history-item border-bottom"><span class="text">339旋转餐厅</span><span class="iconfont arrow-icon">&#xe661;</span></li>
    <li class="history-item border-bottom"><span class="text">谭鸭血老火锅</span><span class="iconfont arrow-icon">&#xe661;</span></li>
    <li class="history-item border-bottom"><span class="text">卡拉卡拉漫温泉汗蒸</span><span class="iconfont arrow-icon">&#xe661;</span></li>
    <li class="history-item border-bottom"><span class="text">芭菲盛宴·环球美食</span><span class="iconfont arrow-icon">&#xe661;</span></li>
    <li class="history-item border-bottom"><span class="text">三国炙烤肉</span><span class="iconfont arrow-icon">&#xe661;</span></li>
    <li class="history-item border-bottom clear-history"><span class="text">清除历史记录</span></li>
  </ul>
</template>
<script>
export default {
  name: 'SearchHistory'
}
</script>
<style lang="stylus" scoped>
  .search-history
    margin-top: .4rem;
    background: #fff;
    .history-item
      line-height: .8rem;
      padding: 0 .05rem 0 .2rem;
      display: flex;
      color: #999;
      .text
        flex: 1;
      .arrow-icon
        float: right;
        font-size: 22px;
    .clear-history
      text-align: center;
</style>
