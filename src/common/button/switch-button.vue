<template>
  <span class="switch-bar" :class="{'active': switchStatus}" @click="switchHandleClick"><span class="switch-btn"></span></span>
</template>
<script>
export default {
  name: 'SwitchButton',
  props: {
    status: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  computed: {
    switchStatus: function () {
      console.log('computedswitchStatus', this.status)
      return this.status
    }
  },
  // watch: {
  //   status (newV, oldV) {
  //     console.log(newV, oldV)
  //     this.switchStatusData = newV
  //   }
  // },
  methods: {
    switchHandleClick () {
      const switchStatusData = !this.switchStatus
      this.$emit('switchHandleClick', switchStatusData)
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .area-wrapper
    line-height: .8rem;
    padding: 0 .4rem;
    .switch
      float: right;
      font-size: 0;
    .switch-bar
      position: relative;
      display: inline-block;
      width: .8rem;
      height: .4rem;
      border-radius: .4rem;
      background: #ddd;
      border: 2px solid #ddd;
      vertical-align: middle;
      transition: background .3s, border .3s;
      &.active
        background: $bgColor;
        border: 2px solid $bgColor;
        .switch-btn
          left: .4rem;
          background: #fff;
    .switch-btn
      position: absolute;
      left: 0px;
      display: inline-block;
      width: .4rem;
      height: .4rem;
      border-radius: .2rem;
      background: #fff;
      transition: background .3s, left .3s;
</style>
