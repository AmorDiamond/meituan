<template>
  <div class="all-type">
    <ul @click="typeFilterHandleClick">
      <!--<li class="filter-item border-bottom" :class="{'active': filterTypeName === '全部' || filterTypeName === '全部类目'}"><span class="filter-text">全部</span><span class="filter-number">27025</span></li>-->
      <li class="filter-item border-bottom" v-for="(item, index) of sortingFilterData" :class="{'active': filterTypeName === item.name}" :key="index"><span class="filter-text">{{item.name}}</span></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'SortingFilterList',
  data () {
    return {
      sortingFilterData: [
        {
          name: '智能排序',
          number: 65
        },
        {
          name: '离我最近',
          number: 8
        },
        {
          name: '好评优先',
          number: 4
        },
        {
          name: '人气最高',
          number: 23
        }
      ],
      filterTypeName: '智能排序',
      scroll: null
    }
  },
  methods: {
    typeFilterHandleClick (e) {
      let event = e.target
      event = event.querySelector('.filter-text') ? event : event.parentNode
      const name = event.querySelector('.filter-text').innerHTML
      this.filterTypeName = name
      this.$emit('chooseFilter', name)
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .all-type
    max-height: 9rem;
    min-height: 4rem;
    overflow: auto;
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
          color: $bgColor;
</style>
