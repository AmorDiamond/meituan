<template>
  <div class="package border-topbottom">
    <div class="hd-title border-bottom">套餐</div>
    <div class="package-bd border-bottom">
      <div v-for="(packageItem, packageIndex) of foodPackageData.packageList" :key="packageIndex">
        <div class="item-title border-bottom">{{packageItem.name}}</div>
        <div class="item-list">
          <div class="item-row" v-for="(item, index) of packageItem.list" :key="index">
            <div class="item-column name border-rightbottom">{{item.name}}</div>
            <div class="item-column number border-rightbottom">{{item.number}}</div>
            <div class="item-column price border-rightbottom">{{item.price}}</div>
          </div>
        </div>
      </div>
      <div class="item-title border-bottom" v-if="foodPackageData.remarkList && foodPackageData.remarkList.length">备注</div>
      <div class="remark-info" v-if="foodPackageData.remarkList && foodPackageData.remarkList.length">
        <ul class="remark-list">
          <li v-for="(item, index) of foodPackageData.remarkList" :key="index">{{item}}</li>
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
  name: 'FoodPackage',
  props: {
    foodPackageInfo: {
      type: Object
    }
  },
  data () {
    return {
      // packageList: [
      //   {
      //     name: '滑牛肉（100g）',
      //     number: '1份',
      //     price: '16元'
      //   },
      //   {
      //     name: '巴沙鱼片（120g)',
      //     number: '1份',
      //     price: '14元'
      //   },
      //   {
      //     name: '招牌虾滑（60g）',
      //     number: '1份',
      //     price: '18元'
      //   },
      //   {
      //     name: '抖抖面筋球（面筋球4个，鸡蛋2个）',
      //     number: '1份',
      //     price: '16元'
      //   }
      // ],
      // remarkList: [
      //   '免费提供纸巾'
      // ]
    }
  },
  computed: {
    foodPackageData: function () {
      return {
        packageList: this.foodPackageInfo.packageList,
        remarkList: this.foodPackageInfo.remarkList
      }
    }
  }
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
      width: 100%
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
