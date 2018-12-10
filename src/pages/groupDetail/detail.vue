<template>
  <div>
    <detail-header></detail-header>
    <detail-banner :bannerInfo="bannerInfo"></detail-banner>
    <detail-price @changeShow="changeShowBackTop" :priceInfo="priceInfo"></detail-price>
    <evaluation :evaluationInfo="evaluationInfo"></evaluation>
    <shop-information :shopInfo="shopInfo"></shop-information>
    <food-package :foodPackageInfo="foodPackageInfo"></food-package>
    <evaluation-list :evaluationInfo="evaluationInfo"></evaluation-list>
    <fade-animation>
      <back-top v-show="showBackTop"></back-top>
    </fade-animation>
    <!--<div class="empty-box"></div>-->
  </div>
</template>
<script>
import axios from 'axios'
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
      showBackTop: false,
      bannerInfo: {},
      evaluationInfo: {},
      shopInfo: {},
      foodPackageInfo: {},
      priceInfo: {}
    }
  },
  mounted () {
    const url = 'static/mock/GroupDetail.json'
    axios.get(url).then(res => {
      if (res.status === 200) {
        this.getDetailInfoSucc(res.data)
      }
    })
  },
  methods: {
    changeShowBackTop (status) {
      this.showBackTop = status
    },
    getDetailInfoSucc (res) {
      const data = res.data
      const id = this.$route.params.id
      data.forEach(item => {
        if (item.id === Number(id)) {
          console.log(item)
          this.bannerInfo = item.banner
          this.evaluationInfo = item.evaluation
          this.foodPackageInfo = item.foodPackage
          this.priceInfo = item.priceInfo
          this.shopInfo = item.shopInfo
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  .empty-box
    height: 15rem
</style>
