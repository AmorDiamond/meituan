<template>
  <div class="search-box">
    <div class="search-input">
      <span class="iconfont close-icon" v-show="closeStatus" @click="clear">&#xe651;</span>
      <input type="text" placeholder="输入商家名、品类或商圈" v-model="searchWord" @input="inputHandle" />
      <button class="search-btn" :class="{'active': closeStatus}" @click="searchHandle">搜索</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchInput',
  data () {
    return {
      searchWord: '',
      closeStatus: false,
      timer: null
    }
  },
  computed: {
    closeStatusCm: function () {
      return this.searchWord.length
    }
  },
  methods: {
    clear () {
      this.searchWord = ''
      this.closeStatus = false
    },
    inputHandle () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        console.log(111)
        if (this.searchWord.trim().length) {
          this.closeStatus = true
        } else {
          this.closeStatus = false
        }
      }, 200)
    },
    searchHandle () {
      const searchWord = this.searchWord.trim()
      if (searchWord) {
        this.$emit('search', searchWord)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search-box
    margin-top: .4rem;
    text-align: center;
  .search-input
    display: inline-block;
    height: .8rem;
    line-height: .8rem;
    position: relative;
    &:before
      font-family: iconfont;
      position: absolute;
      content: '\E618';
      width: 0.7rem;
      height: 0.8rem;
      top: .05rem;
      font-size: 20px;
      color: #999;
    .close-icon
      position: absolute;
      width: .4rem;
      height: .4rem;
      line-height: .4rem;
      border-radius: .2rem;
      background: #B5B5B5;
      left: 5rem;
      top: 50%;
      margin-top: -.16rem;
      color: #fff;
      font-size: 14px;
    input
      width: 5.5rem;
      height: inherit;
      border-radius: .06rem;
      padding: 0 .2rem 0 .6rem;
      box-sizing: border-box;
      vertical-align: middle;
    .search-btn
      width: 1rem;
      height: inherit;
      margin-left: .2rem;
      border-radius: .06rem;
      vertical-align: middle;
      color: #999;
      background: #dcdcdc;
      &.active
        background: $bgColor;
        color: #fff;
</style>
