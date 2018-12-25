<template>
  <div class="more-filter">
    <div class="filter-list">
      <div class="area-wrapper border-bottom">
        <div class="wrapper">
          <span class="title">只看免预约</span>
          <div class="switch">
            <switch-button @switchHandleClick="switchButtonClick('reservation', $event)" :status="otherFilter.reservation"></switch-button>
          </div>
        </div>
      </div>
      <div class="area-wrapper border-bottom">
        <div class="wrapper">
          <span class="title">节假日可用</span>
          <div class="switch">
            <switch-button @switchHandleClick="switchButtonClick('holiday', $event)" :status="otherFilter.holiday"></switch-button>
          </div>
        </div>
      </div>
      <div class="area-wrapper border-bottom">
        <div class="wrapper">
          <div class="title">用餐时段</div>
          <ul class="wrapper-con">
            <li class="wrapper-item" v-for="(item, index) of mealTime" :key="index" :class="{'active': otherFilter.mealTime === item.name}" @click="filterHandleClick('mealTime', item.name)">{{item.name}}</li>
          </ul>
        </div>
      </div>
      <div class="area-wrapper border-bottom">
        <div class="wrapper">
          <div class="title">餐厅服务</div>
          <ul class="wrapper-con">
            <li class="wrapper-item" v-for="(item, index) of restaurantService" :key="index" :class="{'active': otherFilter.restaurantService === item.name}" @click="filterHandleClick('restaurantService', item.name)">{{item.name}}</li>
          </ul>
        </div>
      </div>
      <div class="area-wrapper border-bottom">
        <div class="wrapper">
          <div class="title">用餐人数</div>
          <ul class="wrapper-con dining-people">
            <li class="wrapper-item" v-for="(item, index) of diningPeople" :key="index" :class="{'active': otherFilter.diningPeople === item.name}" @click="filterHandleClick('diningPeople', item.name)">{{item.name}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="more-bt">
      <button class="btn reset-btn" @click="resetFilterClick">重置</button>
      <button class="btn commit-btn" @click="commitFilterClick">完成</button>
    </div>
  </div>
</template>
<script>
import SwitchButton from 'common/button/switch-button'
export default {
  name: 'OtherFilterList',
  components: {
    SwitchButton
  },
  data () {
    return {
      mealTime: [
        {
          name: '不限',
          checked: true
        },
        {
          name: '早餐',
          checked: false
        },
        {
          name: '午餐',
          checked: false
        },
        {
          name: '下午茶',
          checked: false
        },
        {
          name: '晚餐',
          checked: false
        },
        {
          name: '夜宵',
          checked: false
        }
      ],
      restaurantService: [
        {name: '不限'},
        {name: '买单'},
        {name: '在线点菜'},
        {name: '外卖送餐'},
        {name: '预订'},
        {name: '在线排队'}
      ],
      diningPeople: [
        {name: '不限'},
        {name: '单人餐'},
        {name: '双人餐'},
        {name: '3~4人餐'},
        {name: '5~10人餐'},
        {name: '10人以上'}
      ],
      otherFilter: {
        reservation: false,
        holiday: false,
        mealTime: '不限',
        restaurantService: '不限',
        diningPeople: '不限'
      }
    }
  },
  methods: {
    switchButtonClick (type, res) {
      this.otherFilter[type] = res
    },
    filterHandleClick (type, info) {
      this.otherFilter[type] = info
    },
    resetFilterClick () {
      this.otherFilter = {
        reservation: false,
        holiday: false,
        mealTime: '不限',
        restaurantService: '不限',
        diningPeople: '不限'
      }
      console.log(this.otherFilter)
      this.$emit('chooseFilter', this.otherFilter)
    },
    commitFilterClick () {
      console.log(this.otherFilter)
      this.$emit('chooseFilter', this.otherFilter)
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .filter-list
    max-height: 7rem;
    min-height: 4rem;
    overflow: auto;
  .area-wrapper
    line-height: .8rem;
    padding: 0 .4rem;
    .switch
      float: right;
      font-size: 0;
    .wrapper-con
      line-height: normal;
      overflow: hidden;
      color: #666;
      .wrapper-item
        display: inline-block;
        width: 1.43rem;
        height: .6rem;
        line-height: .6rem;
        border: 1px solid #bfbfbf;
        border-radius: .06rem;
        margin: 0 .1rem .3rem .1rem;
        text-align: center;
        &.active
          border-color: $bgColor;
          color: $bgColor;
          background: #eafcfa;
    .dining-people
      .wrapper-item
        width: 1.993rem;
        height: .6rem;
  .more-bt
    padding: .15rem .4rem;
    display: flex;
    justify-content: space-between;
    background: #d8d8d84d;
    .btn
      width: 1.3rem;
      height: .6rem;
      border-radius: .08rem;
      color: #666;
      border: 1px solid #bfbfbf;
      background: #fff;
    .commit-btn
      color: #fff;
      border-color: $bgColor;
      background: $bgColor;
</style>
