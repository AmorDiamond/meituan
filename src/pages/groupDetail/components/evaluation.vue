<template>
  <div class="evaluation">
    <div class="evaluation-hd border-bottom">
      <star-evaluation :scoreNumber="evaluationData.scoreNumber" :starTotal="starTotal"></star-evaluation>
      <!--<div class="star-evaluation">
        <div class="star-line">
          <div class="star-box">
            <span class="star" v-for="(star, index) in starTotal" :key="index"></span>
          </div>
          <div class="star-box color-star-box" :style="starStyle">
            <span class="star color-star" v-for="(star, index) in starTotal" :key="index"></span>
          </div>
        </div>
        <span class="star-number">{{star}}</span>
      </div>-->
      <div class="evaluation-total">{{evaluationData.evaluationTotal}}人评价<span class="iconfont evaluation-list-icon">&#xe661;</span></div>
    </div>
    <div>
      <ul class="evaluation-tag border-bottom">
        <li class="tag-item" v-for="(item, index) of evaluationData.evaluationTag" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import StarEvaluation from 'common/evaluation/star-evaluation'
export default {
  name: 'Evaluation',
  props: {
    evaluationInfo: {
      type: Object
    }
  },
  components: {
    StarEvaluation
  },
  data () {
    return {
      starTotal: 5,
      starStyle: {
        width: '100%'
      }
      // scoreNumber: 4.4,
      // evaluationTotal: 173,
      // evaluationTag: [
      //   '服务热情81',
      //   '味道赞51',
      //   '干净卫生38',
      //   '环境优雅37',
      //   '菜品健康37',
      //   '分量足21',
      //   '上菜快21'
      // ]
    }
  },
  mounted () {
    // this.getEvaluationInfo()
  },
  computed: {
    evaluationData: function () {
      return {
        scoreNumber: this.evaluationInfo.scoreNumber,
        evaluationTotal: this.evaluationInfo.evaluationTotal,
        evaluationTag: this.evaluationInfo.evaluationTag
      }
    }
  },
  methods: {
    getEvaluationInfo () {
      this.scoreNumber = 4.6
      const width = this.star / this.starTotal * 100
      this.starStyle.width = width + '%'
    }
  }
}
</script>
<style lang="stylus" scoped>
  .evaluation
    background: #fff
  .evaluation-hd
    padding: 0 .2rem
    line-height: .9rem
    color: #999
    .evaluation-total
      float: right
    .star-evaluation
      display: inline-block
      .star-number
        color: #fa952f
        vertical-align: middle
      .star-line
        position: relative
        display: inline-block
        .star-box
          white-space: nowrap
          &.color-star-box
            top: 0
            position: absolute
            overflow: hidden
          .star
            width: .3rem
            height: .3rem
            background-image: url("../../../assets/images/star_img.png");
            background-repeat: no-repeat
            background-position: center
            background-size: contain
            display: inline-block
            margin-right: .06rem
            vertical-align: middle
          .color-star
            background-image: url("../../../assets/images/star_img_color.png");
            background-repeat: no-repeat
            background-position: center
            background-size: contain
  .evaluation-tag
    overflow: hidden
    color: #FDB338
    padding: .2rem .1rem .2rem .2rem
    width: 100%
    box-sizing: border-box
    .tag-item
      float: left
      padding: .14rem
      border: 1px solid #FDB338
      border-radius: .06rem
      margin: 0 .1rem .1rem 0
</style>
