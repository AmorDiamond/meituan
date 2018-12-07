<template>
  <div class="package border-topbottom">
    <div class="hd-title border-bottom">套餐</div>
    <div class="package-bd border-bottom">
      <div class="item-title border-bottom">畅享套餐</div>
      <div class="item-list">
        <div class="item-row">
          <div class="item-column name border-rightbottom">滑牛肉（100g）</div>
          <div class="item-column number border-rightbottom">1份</div>
          <div class="item-column price border-rightbottom">16元</div>
        </div>
        <div class="item-row">
          <div class="item-column name border-rightbottom">抖抖面筋球（面筋球4个，鸡蛋2个）</div>
          <div class="item-column number border-rightbottom">1份</div>
          <div class="item-column price border-rightbottom">16元</div>
        </div>
      </div>
      <div class="item-title border-bottom">备注</div>
      <div class="remark-info">
        <ul class="remark-list">
          <li>免费提供纸巾</li>
          <li>免费提供纸巾</li>
        </ul>
      </div>
    </div>
    <div class="package-ft">
      <span>查看图文详情</span><span class="iconfont other-icon">&#xe661;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FoodPackage'
}
</script>
<style lang="stylus" scoped>
  .package
    margin-top: .2rem
    background: #fff
    overflow: hidden
    .hd-title
      padding: 0 .2rem
      line-height: .9rem
      color: #333
      font-size: 18px
    .item-title
      line-height: .6rem
      text-align: center
      font-size: 16px
      background: #f8f9fa
    .item-list
      display: table
      margin-right: -1px
      font-size: 16px
      .item-row
        overflow: hidden
        display: table-row
        .item-column
          box-sizing: border-box
          display: table-cell
          padding: .3rem
          vertical-align: middle
        .name
          width: 50%
        .number
          width: 27%
        .price
          width: 23%
    .package-ft
      padding: 0 .2rem
      line-height: .8rem
      color: #06c1ae
      font-size: 15px
      .other-icon
        float: right
        font-size: 22px
    .remark-info
      line-height: .45rem
      padding: .2rem
      font-size: 15px
      .remark-list
        padding-left: .4rem
        list-style: disc

</style>
