<template>
  <fade-animation>
    <span class="back-top" v-show="computedStatus" @click="backHandleClick">
      <span class="iconfont back-top-icon">&#xe63d;</span>
    </span>
  </fade-animation>
</template>
<script>
import FadeAnimation from 'common/animation/fadeAnimation'
export default {
  name: 'BackTop',
  props: {
    status: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  components: {
    FadeAnimation
  },
  data () {
    return {
      timer: null,
      showStatus: this.status
    }
  },
  // computed: {
  //   computedStatus: function () {
  //     return this.showStatus
  //   }
  // },
  // watch: {
  //   status (newV) {
  //     this.showStatus = newV
  //   }
  // },
  computed: {
    computedStatus: function () {
      return this.status
    }
  },
  methods: {
    backHandleClick () {
      // const top = document.documentElement.scrollTop || document.body.scrollTop
      const step = 10
      const target = 0
      this.timer = setInterval(() => {
        const top = document.documentElement.scrollTop || document.body.scrollTop
        const speed = (top - target) / step
        if (top <= 0) {
          clearInterval(this.timer)
          // this.showStatus = false
          return
        }
        document.documentElement.scrollTop -= speed
        document.body.scrollTop -= speed
      }, 30)
      if (document.mozFullScreen !== undefined) {
        // 火狐浏览器监听鼠标滚动
        window.addEventListener('DOMMouseScroll', this.mouseHandleClearInterval)
      } else {
        window.addEventListener('mousewheel', this.mouseHandleClearInterval)
      }
      // 手机上监听触摸屏幕就停止滚动
      window.addEventListener('touchstart', this.touchHandleClearInterval)
      // 不支持addEventListener时使用的方法
      // window.onmousewheel = function (event) {
      //   event = event || window.event
      //   clearInterval(timer)
      //   console.log('onmousewheel', 1112)
      // }
    },
    mouseHandleClearInterval () {
      console.log('mouseHandleClearInterval')
      clearInterval(this.timer)
      if (document.mozFullScreen !== undefined) {
        // 火狐浏览器监听鼠标滚动
        window.removeEventListener('DOMMouseScroll', this.mouseHandleClearInterval)
      } else {
        window.removeEventListener('mousewheel', this.mouseHandleClearInterval)
      }
    },
    touchHandleClearInterval () {
      console.log('touchHandleClearInterval')
      clearInterval(this.timer)
      window.removeEventListener('touchstart', this.touchHandleClearInterval)
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .back-top
    display: flex
    flex-direction: column
    position: fixed
    right: .3rem
    bottom: 1rem
    width: .8rem
    height: .8rem
    background: $bgColor
    border-radius: .4rem
    text-align: center
    justify-content: center
    color: #fff
    .back-top-icon
      font-size: 20px
</style>
