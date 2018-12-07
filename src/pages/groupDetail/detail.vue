<template>
  <div>
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <detail-price @changeShow="changeShowBackTop"></detail-price>
    <evaluation></evaluation>
    <shop-information></shop-information>
    <food-package></food-package>
    <evaluation-list></evaluation-list>
    <fade-animation>
      <back-top v-show="showBackTop"></back-top>
    </fade-animation>
    <!--<div class="empty-box"></div>-->
  </div>
</template>
<script>
import DetailHeader from './components/header'
import DetailBanner from './components/banner'
import DetailPrice from './components/price'
import Evaluation from './components/evaluation'
import ShopInformation from './components/shopInformation'
import FoodPackage from './components/food-package'
import EvaluationList from './components/evaluation-list'
import BackTop from 'common/backTop/back-top'
import FadeAnimation from 'common/animation/fadeAnimation'
export default {
  name: 'GroupDetail',
  components: {
    DetailHeader,
    DetailBanner,
    DetailPrice,
    Evaluation,
    ShopInformation,
    FoodPackage,
    EvaluationList,
    BackTop,
    FadeAnimation
  },
  data () {
    return {
      showBackTop: false
    }
  },
  methods: {
    changeShowBackTop (status) {
      this.showBackTop = status
    }
  }
}
</script>
<style lang="stylus" scoped>
  .empty-box
    height: 15rem
</style>
