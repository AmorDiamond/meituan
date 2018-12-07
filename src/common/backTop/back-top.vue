<template>
  <span class="back-top" @click="backHandleClick">
    <span class="iconfont back-top-icon">&#xe63d;</span>
  </span>
</template>
<script>
export default {
  name: 'BackTop',
  data () {
    return {
      timer: null
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
