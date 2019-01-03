<template>
  <div class="search">
    <simple-header :title="'搜索'"></simple-header>
    <Banner :list="bannerList"></Banner>
    <search-input @search="searchHandle"></search-input>
    <search-history></search-history>
  </div>
</template>
<script>
import SimpleHeader from 'common/header/simple-header'
import Banner from 'common/banner/banner'
import SearchInput from './components/search-input'
import SearchHistory from './components/search-history'
export default {
  name: 'Search',
  components: {
    SimpleHeader,
    Banner,
    SearchInput,
    SearchHistory
  },
  data () {
    return {
      searchWord: '',
      bannerList: [
        {
          id: '001',
          link: '',
          imgUrl: '//ms0.meituan.net/touch/img/download_banner.png'
        },
        {
          id: '002',
          link: '',
          imgUrl: '//ms0.meituan.net/touch/img/download_banner.png'
        }
      ]
    }
  },
  methods: {
    searchHandle (res) {
      this.searchWord = res
      console.log(this.searchWord)
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
