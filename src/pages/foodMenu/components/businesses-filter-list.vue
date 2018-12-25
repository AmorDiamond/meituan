<template>
  <div class="nearby-businesses">
    <div>
      <div class="switch-tag">
        <div class="tag-item" :class="{'active': showDistrict}" @click="switchTagHandleClick(true)">商圈</div>
        <div class="tag-item" :class="{'active': !showDistrict}" @click="switchTagHandleClick(false)">地铁</div>
      </div>
    </div>
    <div class="business-info business-district-list" v-show="showDistrict">
      <div class="info-item district-left">
        <ul @click="districtLeftClick">
          <!--<li class="district-item border-bottom" :class="{'active': chooseDistrictName === '全部'}"><span class="filter-text">全部</span><span class="number-con"><span class="number">2077</span></span></li>-->
          <li class="district-item border-bottom" v-for="(item, key) of districtData" :key="key" :class="{'active': chooseDistrictName === key}"><span class="filter-text">{{key}}</span><span class="number-con"><span class="number more-number">{{item.number}}</span></span></li>
        </ul>
      </div>
      <div class="info-item district-right" v-show="districtLeftStatus">
        <ul @click="districtRightClick">
          <li class="district-item border-bottom" v-for="(item, index) of districtRightList" :key="index" :class="{'active': chooseDistrictRightName === item.name}"><span class="filter-text">{{item.name}}</span><span class="number-con"><span class="number">{{item.number}}</span></span></li>
        </ul>
      </div>
    </div>
    <div class="business-info subway-list" v-show="!showDistrict">
      <div class="info-item district-left">
        <ul @click="districtSubwayClick($event)">
          <li class="district-item border-bottom" v-for="(item, key) of subwayData" :key="key" :class="{'active': chooseSubwayName === key}"><span class="filter-text">{{key}}</span><span class="number-con"><span class="number more-number">{{item.number}}</span></span></li>
        </ul>
      </div>
      <div class="info-item district-right" v-show="subwayLeftStatus">
        <ul @click="districtSubwayClick($event, true)">
          <li class="district-item border-bottom" v-for="(item, index) of districtRightList" :key="index" :class="{'active': chooseDistrictRightName === item.name}"><span class="filter-text">{{item.name}}</span><span class="number-con"><span class="number more-number">{{item.number}}</span></span></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BusinessesFilterList',
  data () {
    return {
      showDistrict: true,
      districtLeftStatus: false,
      subwayLeftStatus: false,
      districtData: {
        '全部': {
          name: '全部',
          number: 50181
        },
        '武侯区': {
          name: '武侯区',
          number: 5197,
          list: [
            {
              name: '全部',
              number: 5197
            },
            {
              name: '科华北路',
              number: 191
            },
            {
              name: '桐梓林',
              number: 89
            },
            {
              name: '高升桥',
              number: 282
            },
            {
              name: '武侯祠',
              number: 28
            },
            {
              name: '双楠',
              number: 173
            },
            {
              name: '耍都',
              number: 46
            },
            {
              name: '鹭岛国际',
              number: 80
            },
            {
              name: '红牌楼',
              number: 343
            },
            {
              name: '簇桥',
              number: 196
            },
            {
              name: '五大花园',
              number: 153
            },
            {
              name: '航空路',
              number: 52
            },
            {
              name: '火车南站',
              number: 254
            },
            {
              name: '省体育馆',
              number: 73
            }
          ]
        },
        '青羊区': {
          name: '青羊区',
          number: 2231,
          list: [
            {
              name: '全部',
              number: 2231
            },
            {
              name: '府南新区',
              number: 163
            },
            {
              name: '杜甫草堂',
              number: 57
            },
            {
              name: '青羊宫',
              number: 51
            },
            {
              name: '人民公园/宽窄巷子',
              number: 25
            },
            {
              name: '骡马市/文殊院',
              number: 23
            },
            {
              name: '草市街/文殊院',
              number: 9
            },
            {
              name: '宽窄巷子',
              number: 285
            },
            {
              name: '优品道',
              number: 164
            },
            {
              name: '光华村',
              number: 57
            },
            {
              name: '琴台',
              number: 20
            },
            {
              name: '仁和春天',
              number: 14
            },
            {
              name: '成温立交/西南财经大学',
              number: 11
            },
            {
              name: '文殊院',
              number: 81
            },
            {
              name: '八宝街',
              number: 63
            },
            {
              name: '青龙街/八宝街',
              number: 21
            },
            {
              name: '金沙遗址/西单商场',
              number: 93
            },
            {
              name: '清江西路/西单商场',
              number: 53
            },
            {
              name: '成飞大道',
              number: 81
            },
            {
              name: '天府广场/盐市口',
              number: 102
            }
          ]
        },
        '成华区': {
          name: '成华区',
          number: 2707,
          list: [
            {
              name: '全部',
              number: 2707
            },
            {
              name: '双林路',
              number: 78
            },
            {
              name: '电子科技大学/四川电视塔',
              number: 150
            },
            {
              name: '新华公园',
              number: 169
            },
            {
              name: '万象城',
              number: 248
            },
            {
              name: '望平街',
              number: 155
            },
            {
              name: '东郊记忆',
              number: 74
            },
            {
              name: '财富又一城',
              number: 180
            },
            {
              name: '龙湖三千集',
              number: 82
            },
            {
              name: 'SM广场',
              number: 101
            },
            {
              name: '八里庄',
              number: 103
            },
            {
              name: '十里店',
              number: 163
            }
          ]
        },
        '金牛区': {
          name: '成华区',
          number: 2168,
          list: [
            {
              name: '全部',
              number: 2707
            },
            {
              name: '双林路',
              number: 78
            },
            {
              name: '电子科技大学/四川电视塔',
              number: 150
            },
            {
              name: '新华公园',
              number: 169
            },
            {
              name: '万象城',
              number: 248
            },
            {
              name: '望平街',
              number: 155
            },
            {
              name: '东郊记忆',
              number: 74
            },
            {
              name: '财富又一城',
              number: 180
            },
            {
              name: '龙湖三千集',
              number: 82
            },
            {
              name: 'SM广场',
              number: 101
            },
            {
              name: '八里庄',
              number: 103
            },
            {
              name: '十里店',
              number: 163
            }
          ]
        },
        '锦江区': {
          name: '成华区',
          number: 2933,
          list: [
            {
              name: '全部',
              number: 2707
            },
            {
              name: '双林路',
              number: 78
            },
            {
              name: '电子科技大学/四川电视塔',
              number: 150
            },
            {
              name: '新华公园',
              number: 169
            },
            {
              name: '万象城',
              number: 248
            },
            {
              name: '望平街',
              number: 155
            },
            {
              name: '东郊记忆',
              number: 74
            },
            {
              name: '财富又一城',
              number: 180
            },
            {
              name: '龙湖三千集',
              number: 82
            },
            {
              name: 'SM广场',
              number: 101
            },
            {
              name: '八里庄',
              number: 103
            },
            {
              name: '十里店',
              number: 163
            }
          ]
        },
        '郫县': {
          name: '成华区',
          number: 2106,
          list: [
            {
              name: '全部',
              number: 2707
            },
            {
              name: '双林路',
              number: 78
            },
            {
              name: '电子科技大学/四川电视塔',
              number: 150
            },
            {
              name: '新华公园',
              number: 169
            },
            {
              name: '万象城',
              number: 248
            },
            {
              name: '望平街',
              number: 155
            },
            {
              name: '东郊记忆',
              number: 74
            },
            {
              name: '财富又一城',
              number: 180
            },
            {
              name: '龙湖三千集',
              number: 82
            },
            {
              name: 'SM广场',
              number: 101
            },
            {
              name: '八里庄',
              number: 103
            },
            {
              name: '十里店',
              number: 163
            }
          ]
        },
        '温江区': {
          name: '成华区',
          number: 1177,
          list: [
            {
              name: '全部',
              number: 2707
            },
            {
              name: '双林路',
              number: 78
            },
            {
              name: '电子科技大学/四川电视塔',
              number: 150
            },
            {
              name: '新华公园',
              number: 169
            },
            {
              name: '万象城',
              number: 248
            },
            {
              name: '望平街',
              number: 155
            },
            {
              name: '东郊记忆',
              number: 74
            },
            {
              name: '财富又一城',
              number: 180
            },
            {
              name: '龙湖三千集',
              number: 82
            },
            {
              name: 'SM广场',
              number: 101
            },
            {
              name: '八里庄',
              number: 103
            },
            {
              name: '十里店',
              number: 163
            }
          ]
        },
        '龙泉驿区': {
          name: '成华区',
          number: 1515,
          list: [
            {
              name: '全部',
              number: 2707
            },
            {
              name: '双林路',
              number: 78
            },
            {
              name: '电子科技大学/四川电视塔',
              number: 150
            },
            {
              name: '新华公园',
              number: 169
            },
            {
              name: '万象城',
              number: 248
            },
            {
              name: '望平街',
              number: 155
            },
            {
              name: '东郊记忆',
              number: 74
            },
            {
              name: '财富又一城',
              number: 180
            },
            {
              name: '龙湖三千集',
              number: 82
            },
            {
              name: 'SM广场',
              number: 101
            },
            {
              name: '八里庄',
              number: 103
            },
            {
              name: '十里店',
              number: 163
            }
          ]
        },
        '青白江区': {
          name: '成华区',
          number: 260,
          list: [
            {
              name: '全部',
              number: 2707
            },
            {
              name: '双林路',
              number: 78
            },
            {
              name: '电子科技大学/四川电视塔',
              number: 150
            },
            {
              name: '新华公园',
              number: 169
            },
            {
              name: '万象城',
              number: 248
            },
            {
              name: '望平街',
              number: 155
            },
            {
              name: '东郊记忆',
              number: 74
            },
            {
              name: '财富又一城',
              number: 180
            },
            {
              name: '龙湖三千集',
              number: 82
            },
            {
              name: 'SM广场',
              number: 101
            },
            {
              name: '八里庄',
              number: 103
            },
            {
              name: '十里店',
              number: 163
            }
          ]
        },
        '彭州市': {
          name: '成华区',
          number: 318,
          list: [
            {
              name: '全部',
              number: 2707
            },
            {
              name: '双林路',
              number: 78
            },
            {
              name: '电子科技大学/四川电视塔',
              number: 150
            },
            {
              name: '新华公园',
              number: 169
            },
            {
              name: '万象城',
              number: 248
            },
            {
              name: '望平街',
              number: 155
            },
            {
              name: '东郊记忆',
              number: 74
            },
            {
              name: '财富又一城',
              number: 180
            },
            {
              name: '龙湖三千集',
              number: 82
            },
            {
              name: 'SM广场',
              number: 101
            },
            {
              name: '八里庄',
              number: 103
            },
            {
              name: '十里店',
              number: 163
            }
          ]
        },
        '新津县': {
          name: '成华区',
          number: 193,
          list: [
            {
              name: '全部',
              number: 2707
            },
            {
              name: '双林路',
              number: 78
            },
            {
              name: '电子科技大学/四川电视塔',
              number: 150
            },
            {
              name: '新华公园',
              number: 169
            },
            {
              name: '万象城',
              number: 248
            },
            {
              name: '望平街',
              number: 155
            },
            {
              name: '东郊记忆',
              number: 74
            },
            {
              name: '财富又一城',
              number: 180
            },
            {
              name: '龙湖三千集',
              number: 82
            },
            {
              name: 'SM广场',
              number: 101
            },
            {
              name: '八里庄',
              number: 103
            },
            {
              name: '十里店',
              number: 163
            }
          ]
        },
        '都江堰市': {
          name: '成华区',
          number: 850,
          list: [
            {
              name: '全部',
              number: 2707
            },
            {
              name: '双林路',
              number: 78
            },
            {
              name: '电子科技大学/四川电视塔',
              number: 150
            },
            {
              name: '新华公园',
              number: 169
            },
            {
              name: '万象城',
              number: 248
            },
            {
              name: '望平街',
              number: 155
            },
            {
              name: '东郊记忆',
              number: 74
            },
            {
              name: '财富又一城',
              number: 180
            },
            {
              name: '龙湖三千集',
              number: 82
            },
            {
              name: 'SM广场',
              number: 101
            },
            {
              name: '八里庄',
              number: 103
            },
            {
              name: '十里店',
              number: 163
            }
          ]
        },
        '新都区': {
          name: '成华区',
          number: 1417,
          list: [
            {
              name: '全部',
              number: 2707
            },
            {
              name: '双林路',
              number: 78
            },
            {
              name: '电子科技大学/四川电视塔',
              number: 150
            },
            {
              name: '新华公园',
              number: 169
            },
            {
              name: '万象城',
              number: 248
            },
            {
              name: '望平街',
              number: 155
            },
            {
              name: '东郊记忆',
              number: 74
            },
            {
              name: '财富又一城',
              number: 180
            },
            {
              name: '龙湖三千集',
              number: 82
            },
            {
              name: 'SM广场',
              number: 101
            },
            {
              name: '八里庄',
              number: 103
            },
            {
              name: '十里店',
              number: 163
            }
          ]
        }
      },
      subwayData: {
        '1号线': {
          name: '1号线',
          number: 3093,
          list: [
            {
              name: '广都',
              number: 82
            },
            {
              name: '四河',
              number: 66
            },
            {
              name: '华府大道',
              number: 62
            },
            {
              name: '天府五街',
              number: 109
            },
            {
              name: '天府三街',
              number: 223
            },
            {
              name: '世纪城',
              number: 210
            },
            {
              name: '锦城广场',
              number: 90
            },
            {
              name: '孵化园',
              number: 218
            },
            {
              name: '金融城',
              number: 298
            },
            {
              name: '高新',
              number: 233
            },
            {
              name: '火车南站',
              number: 209
            },
            {
              name: '桐梓林',
              number: 230
            },
            {
              name: '倪家桥',
              number: 446
            },
            {
              name: '省体育馆',
              number: 313
            },
            {
              name: '华西坝',
              number: 179
            },
            {
              name: '锦江宾馆',
              number: 431
            },
            {
              name: '天府广场',
              number: 461
            },
            {
              name: '骡马市',
              number: 275
            },
            {
              name: '文殊院',
              number: 267
            },
            {
              name: '人民北路',
              number: 193
            },
            {
              name: '火车北站',
              number: 109
            },
            {
              name: '升仙湖',
              number: 51
            }
          ]
        },
        '2号线': {
          name: '2号线',
          number: 5171,
          list: [
            {
              name: '犀浦',
              number: 181
            },
            {
              name: '天河路',
              number: 114
            },
            {
              name: '百草路',
              number: 79
            },
            {
              name: '金周路',
              number: 32
            },
            {
              name: '金科北路',
              number: 34
            },
            {
              name: '迎宾大道',
              number: 24
            },
            {
              name: '茶店子客运站',
              number: 42
            },
            {
              name: '羊犀立交',
              number: 94
            },
            {
              name: '一品天下',
              number: 204
            },
            {
              name: '蜀汉路东',
              number: 324
            },
            {
              name: '白果林',
              number: 297
            },
            {
              name: '中医大省医院',
              number: 229
            },
            {
              name: '通惠门',
              number: 332
            },
            {
              name: '人民公园',
              number: 297
            },
            {
              name: '天府广场',
              number: 461
            },
            {
              name: '春熙路',
              number: 1014
            }
          ]
        },
        '3号线': {
          name: '3号线',
          number: 3441,
          list: [
            {
              name: '军区总医院',
              number: 14
            },
            {
              name: '熊猫大道',
              number: 11
            },
            {
              name: '动物园',
              number: 196
            },
            {
              name: '昭觉寺南路',
              number: 211
            },
            {
              name: '驷马桥',
              number: 186
            },
            {
              name: '李家沱',
              number: 212
            }
          ]
        },
        '4号线': {
          name: '4号线',
          number: 2351,
          list: [
            {
              name: '非遗博览园',
              number: 88
            },
            {
              name: '蔡桥',
              number: 2
            },
            {
              name: '中坝',
              number: 297
            },
            {
              name: '成都西站',
              number: 169
            },
            {
              name: '清江西路',
              number: 248
            },
            {
              name: '文化宫',
              number: 155
            },
            {
              name: '西南财大',
              number: 74
            },
            {
              name: '草堂北路',
              number: 180
            },
            {
              name: '中医大省医院',
              number: 82
            }
          ]
        },
        '7号线': {
          name: '7号线',
          number: 3043,
          list: [
            {
              name: '火车北站',
              number: 117
            },
            {
              name: '驷马桥',
              number: 181
            },
            {
              name: '府青路',
              number: 96
            },
            {
              name: '八里庄',
              number: 77
            },
            {
              name: '二仙桥',
              number: 39
            },
            {
              name: '理工大学',
              number: 95
            },
            {
              name: '崔家店',
              number: 49
            },
            {
              name: '双店路',
              number: 42
            },
            {
              name: '槐树店',
              number: 49
            },
            {
              name: '迎晖路',
              number: 74
            },
            {
              name: '成都东客站',
              number: 48
            }
          ]
        },
        '10号线': {
          name: '10号线',
          number: 211,
          list: [
            {
              name: '双流机场2航站楼',
              number: 5
            },
            {
              name: '双流机场1航站楼',
              number: 3
            },
            {
              name: '金花',
              number: 6
            },
            {
              name: '华兴',
              number: 71
            },
            {
              name: '簇锦',
              number: 21
            },
            {
              name: '太平园',
              number: 114
            }
          ]
        }
      },
      districtLeftList: [],
      districtRightList: [],
      chooseDistrictName: '全部',
      chooseDistrictRightName: '',
      chooseSubwayName: ''
    }
  },
  methods: {
    switchTagHandleClick (showStatus) {
      this.showDistrict = showStatus
      /* 切换商圈和地铁获取对应的右侧列表数据 */
      if (this.chooseDistrictName && this.showDistrict) {
        this.districtRightList = this.districtData[this.chooseDistrictName].list
      }
      if (this.chooseSubwayName && !this.showDistrict) {
        this.districtRightList = this.subwayData[this.chooseSubwayName].list
      }
    },
    districtLeftClick (e) {
      let event = e.target
      event = event.querySelector('.filter-text') ? event : event.parentNode
      const name = event.querySelector('.filter-text').innerHTML
      this.chooseDistrictName = name
      this.chooseDistrictRightName = ''
      let options
      if (name && name !== '全部') {
        this.districtLeftStatus = true
        this.districtRightList = this.districtData[name].list
        options = {type: this.chooseDistrictName, hideFilter: false}
      } else if (name === '全部') {
        this.districtLeftStatus = false
        options = this.chooseDistrictName
      }
      this.$emit('chooseFilter', options)
    },
    districtRightClick (e) {
      let event = e.target
      event = event.querySelector('.filter-text') ? event : event.parentNode
      const name = event.querySelector('.filter-text').innerHTML
      this.chooseDistrictRightName = name
      let chooseName
      if (name && name !== '全部') {
        chooseName = name
      } else if (name === '全部') {
        chooseName = this.chooseDistrictName
      }
      this.subwayLeftStatus = false
      this.chooseSubwayName = ''
      this.$emit('chooseFilter', chooseName)
    },
    districtSubwayClick (e, flag) {
      let event = e.target
      event = event.querySelector('.filter-text') ? event : event.parentNode
      const name = event.querySelector('.filter-text').innerHTML
      let options
      // 判断点击id是几号线还是地铁站
      if (!flag) {
        // 如果是几号线
        /* 1.设置所选线路
         * 2.重置之前已选地铁站
         * 3.显示右侧的地铁站列表
         * 4.更新地铁站列表 */
        this.chooseSubwayName = name
        this.chooseDistrictRightName = ''
        this.subwayLeftStatus = true
        this.districtRightList = this.subwayData[name].list
      } else {
        // 如果是地铁站
        /* 1.设置筛选显示的信息
         * 2.重置之前已选的商圈信息
         * 3.如果筛选条件在地铁tag，则将商圈tag里的街道列表隐藏 */
        this.chooseDistrictRightName = name
        this.chooseDistrictName = ''
        this.districtLeftStatus = false
        options = this.chooseDistrictRightName
        this.$emit('chooseFilter', options)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .nearby-businesses
    display: flex;
    flex-direction: column;
    max-height: 9rem;
    min-height: 4rem;
    .switch-tag
      display: flex;
      line-height: .8rem;
      text-align: center;
      .tag-item
        flex: 1;
        &.active
          border-bottom: 3px solid $bgColor;
    .business-info
      flex: 1;
      display: flex;
      .district-left
        flex: 1;
        overflow: auto;
      .district-right
        width: 60%;
        background: #f2f2f2;
        overflow: auto;
      .district-item
        line-height: .8rem;
        padding: 0 .2rem 0 .4rem;
        &.active
          background: #f2f2f2;
          color: $bgColor
        .number-con
          float: right;
          .number
            color: #fff;
            border-radius: .4rem;
            background: #ccc;
            line-height: normal;
            font-size: 12px;
            padding: .02rem .15rem;
          .more-number:after
            content: '>';
            transform: scale(.8, 1.2) translateY(-.02rem);
            display: inline-block;
            margin-left: .05rem;
      .district-right
        .district-item
          position: relative;
          padding-left: .6rem;
          &.active .filter-text:before
            font-family: 'iconfont';
            content: '\e600';
            position: absolute;
            left: .2rem;
            font-size: 20px;
          .number-con .number
            color: #999;
            background: none;
</style>
