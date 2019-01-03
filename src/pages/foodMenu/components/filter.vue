<template>
  <div>
    <div class="empty-filter-box" v-show="fixedFilter || showFilterList" :style="{'height': filterHeight + 'px'}"></div>
    <div class="filter-box" ref="filter" :class="{'fixed-filter': fixedFilter || showFilterList}">
      <div class="filter border-topbottom">
        <div class="filter-item" :class="{'active': showFilterStatus.allType}" @click="filterHandleClick('allType')">{{filterTypeName}}</div>
        <div class="filter-item" :class="{'active': showFilterStatus.nearbyBusinesses}" @click="filterHandleClick('nearbyBusinesses')">{{filterDistrictName}}</div>
        <div class="filter-item" :class="{'active': showFilterStatus.intelligentSorting}" @click="filterHandleClick('intelligentSorting')">{{filterSortingName}}</div>
        <div class="filter-item" :class="{'active': showFilterStatus.moreFilter}" @click="filterHandleClick('moreFilter')">筛选</div>
      </div>
      <div class="filter-info" ref="filterInfo" v-show="showFilterList">
        <type-filter-list v-show="showFilterStatus.allType" @chooseFilter="chooseFilterType('filterTypeName', $event)"></type-filter-list>
        <businesses-filter-list v-show="showFilterStatus.nearbyBusinesses" @chooseFilter="chooseFilterType('filterDistrictName', $event)"></businesses-filter-list>
        <sorting-filter-list v-show="showFilterStatus.intelligentSorting" @chooseFilter="chooseFilterType('filterSortingName', $event)"></sorting-filter-list>
        <other-filter-list v-show="showFilterStatus.moreFilter" @chooseFilter="chooseFilterType('filterOther', $event)"></other-filter-list>
      </div>
    </div>
    <div class="shade" v-show="showFilterList" @click="shadeHandleClick"></div>
  </div>
</template>
<script>
// import BScroll from 'better-scroll'
import TypeFilterList from './typeFilterList'
import BusinessesFilterList from './businesses-filter-list'
import SortingFilterList from './sorting-filter-list'
import OtherFilterList from './other-filter-list'
export default {
  name: 'FilterList',
  props: {
    headerHeight: {
      type: Number,
      default () {
        return 45
      }
    }
  },
  components: {
    TypeFilterList,
    BusinessesFilterList,
    SortingFilterList,
    OtherFilterList
  },
  data () {
    return {
      filterTop: 0,
      fixedFilter: false,
      showFilterStatus: {
        allType: false,
        nearbyBusinesses: false,
        intelligentSorting: false,
        moreFilter: false
      },
      scroll: null,
      filterTypeName: '全部类目',
      filterDistrictName: '附近商家',
      filterSortingName: '智能排序',
      filterOther: {},
      filterHeight: 0
    }
  },
  mounted () {
    this.filterTop = this.$refs.filter.offsetTop
    this.filterHeight = this.$refs.filter.offsetHeight
    this.filterTypeName = this.$route.query.name ? this.$route.query.name : this.filterTypeName
    window.addEventListener('scroll', this.scrollHandle)
    // this.scroll = new BScroll(this.$refs.filterInfo, { click: true, mouseWheel: true })
    // console.log(this.scroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollHandle)
  },
  computed: {
    showFilterList: function () {
      let status = false
      for (let item in this.showFilterStatus) {
        if (this.showFilterStatus[item]) {
          status = true
          break
        }
      }
      console.log(this.showFilterStatus, status)
      return status
    }
  },
  methods: {
    scrollHandle (e) {
      const top = document.documentElement.scrollTop || document.body.scrollTop
      const scrollTop = top + this.headerHeight
      // console.log(e, scrollTop, this.filterTop)
      if (scrollTop > this.filterTop) {
        this.fixedFilter = true
        this.$emit('changeShow', true)
      } else {
        this.fixedFilter = false
        this.$emit('changeShow', false)
      }
    },
    filterHandleClick (name) {
      for (let item in this.showFilterStatus) {
        if (item !== name) {
          this.showFilterStatus[item] = this.showFilterStatus[item] ? false : this.showFilterStatus[item]
        } else {
          this.showFilterStatus[name] = !this.showFilterStatus[name]
        }
      }
    },
    shadeHandleClick () {
      this.showFilterStatus = {
        allType: false,
        nearbyBusinesses: false,
        intelligentSorting: false,
        moreFilter: false
      }
    },
    typeFilterHandleClick (type, e) {
      let event = e.target
      event = event.querySelector('.filter-text') ? event : event.parentNode
      const name = event.querySelector('.filter-text').innerHTML
      this[type] = name
      this.showFilterStatus = {
        allType: false,
        nearbyBusinesses: false,
        intelligentSorting: false,
        moreFilter: false
      }
    },
    chooseFilterType (type, res) {
      this[type] = res.type ? res.type : res
      if (res.hideFilter === undefined || res.hideFilter) {
        this.showFilterStatus = {
          allType: false,
          nearbyBusinesses: false,
          intelligentSorting: false,
          moreFilter: false
        }
      }
      if (type === 'filterTypeName') {
        this.$emit('changeFilter', res)
      }
    },
    chooseDistrictFilter (type, res) {
      this[type] = res
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .shade
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: #0009;
    z-index: 1;
  .fixed-filter
    position: fixed;
    width: 100%;
    top: .9rem;
    z-index: 9;
  .filter
    display: flex;
    line-height: .84rem;
    background: #fff;
    text-align: center;
    color: #666;
    font-size: 15px;
    .filter-item
      position: relative;
      flex: 1;
      &:after
        position: absolute;
        content: '';
        width: 0;
        height: 0;
        top: .32rem;
        margin-left: 5px;
        border-top: 9px solid #b7b7b7;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
      &.active
        color: $bgColor;
        &:after
          margin-left: 5px;
          border-bottom: 9px solid $bgColor;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: none;
  .filter-info
    background: #fff;
    max-height: 9rem;
    min-height: 4rem;
    overflow: hidden;
    /*.all-type
      .filter-item
        line-height: .8rem;
        padding-left: .8rem;
        padding-right: .2rem;
        .filter-number
          color: #999;
          float: right;
        .filter-text
          position: relative;
        &.active
          color: $bgColor;
          background: #f2f2f2;
          .filter-text:before
            font-family: 'iconfont'
            content: '\e600';
            width: .4rem;
            height: .4rem;
            position: absolute;
            top: -4px;
            left: -.6rem;
            line-height: normal;
            font-size: 22px;
          .filter-number
            color: $bgColor;*/
</style>
