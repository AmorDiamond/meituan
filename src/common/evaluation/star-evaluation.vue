<template>
  <div class="star-evaluation">
    <div class="star-line">
      <div class="star-box">
        <span class="star" v-for="(star, index) in starTotal" :key="index"></span>
      </div>
      <div class="star-box color-star-box" :style="starStyle">
        <span class="star color-star" v-for="(star, index) in starTotal" :key="index"></span>
      </div>
    </div>
    <span class="star-number" v-if="showScore">{{scoreNumber}}</span>
  </div>
</template>
<script>
export default {
  name: 'StarEvaluation',
  props: {
    scoreNumber: {
      type: Number,
      default () {
        return 0
      }
    },
    starTotal: {
      type: Number,
      default () {
        return 5
      }
    },
    showScore: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  // 可能会出现未获取到数据组件已经渲染，计算错误，所以不能在mounted里操作
  // mounted () {
  //   this.getEvaluationInfo()
  //   console.log(111)
  // },
  computed: {
    starStyle: function () {
      const width = this.getEvaluationInfo()
      return {width: width}
    }
  },
  methods: {
    getEvaluationInfo () {
      const width = this.scoreNumber / this.starTotal * 100 + '%'
      return width
    }
  }
}
</script>
<style lang="stylus" scoped>
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
          background-image: url("../../assets/images/star_img.png");
          background-repeat: no-repeat
          background-position: center
          background-size: contain
          display: inline-block
          margin-right: .06rem
          vertical-align: middle
        .color-star
          background-image: url("../../assets/images/star_img_color.png");
          background-repeat: no-repeat
          background-position: center
          background-size: contain
</style>
