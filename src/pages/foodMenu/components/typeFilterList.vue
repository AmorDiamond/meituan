<template>
  <div class="all-type">
    <ul @click="typeFilterHandleClick('filterTypeName', $event)">
      <!--<li class="filter-item border-bottom" :class="{'active': filterTypeName === '全部' || filterTypeName === '全部类目'}"><span class="filter-text">全部</span><span class="filter-number">27025</span></li>-->
      <li class="filter-item border-bottom" v-for="(item, index) of typeFilterData" :class="{'active': filterTypeName === item.name || (item.name === '全部' && filterTypeName === '全部类目')}" :key="index"><span class="filter-text">{{item.name}}</span><span class="filter-number">{{item.number}}</span></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'TypeFilterList',
  data () {
    return {
      typeFilterData: [
        {
          name: '全部',
          number: 65
        },
        {
          name: '甜点饮品',
          number: 8
        },
        {
          name: '生日蛋糕',
          number: 4
        },
        {
          name: '火锅',
          number: 23
        },
        {
          name: '自助餐',
          number: 4
        },
        {
          name: '小吃快餐',
          number: 17
        },
        {
          name: '日韩料理',
          number: ''
        },
        {
          name: '西餐',
          number: 1
        },
        {
          name: '聚餐宴请',
          number: 15
        },
        {
          name: '烧烤烤肉',
          number: 7
        },
        {
          name: '川菜',
          number: 18
        },
        {
          name: '江浙菜',
          number: ''
        },
        {
          name: '香锅烤鱼',
          number: 6
        },
        {
          name: '中式烧烤/烤串',
          number: 5
        }
      ],
      filterTypeName: '全部类目',
      scroll: null
    }
  },
  mounted () {
    this.filterTypeName = this.$route.query.name ? this.$route.query.name : this.filterTypeName
  },
  methods: {
    typeFilterHandleClick (type, e) {
      let event = e.target
      console.log(event)
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
