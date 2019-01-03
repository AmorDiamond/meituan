<template>
  <div>
    <home-header></home-header>
    <home-banner :list="bannerList"></home-banner>
    <home-icons :list="iconsList"></home-icons>
    <fade-animation>
      <home-list :list="likeList" v-show="hasLikeData"></home-list>
    </fade-animation>
  </div>
</template>
<script>
import HomeHeader from './components/header'
import HomeBanner from 'common/banner/banner'
import HomeIcons from './components/icons'
import HomeList from './components/list'
import FadeAnimation from 'common/animation/fadeAnimation'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeBanner,
    HomeIcons,
    HomeList,
    FadeAnimation
  },
  data () {
    return {
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
      ],
      iconsList: [
        {
          id: 1,
          iconClass: 'icon-meishi',
          iconColor: '#fd9d21',
          iconDesc: '美食',
          link: '/foodChannel'
        },
        {
          id: 2,
          iconClass: 'icon-Artboard',
          iconColor: '#ff6767',
          iconDesc: '猫眼电影',
          link: '/foodChannel'
        },
        {
          id: 3,
          iconClass: 'icon-jiudian',
          iconColor: '#8a90fa',
          iconDesc: '酒店',
          link: '/foodChannel'
        },
        {
          id: 4,
          iconClass: 'icon-xiuxianyule',
          iconColor: '#fed030',
          iconDesc: '休闲娱乐',
          link: '/foodChannel'
        },
        {
          id: 5,
          iconClass: 'icon-icon-test',
          iconColor: '#fd9d21',
          iconDesc: '外卖',
          link: '/foodChannel'
        },
        {
          id: 6,
          iconClass: 'icon-KTV',
          iconColor: '#fed030',
          iconDesc: 'KTV',
          link: '/foodChannel'
        },
        {
          id: 7,
          iconClass: 'icon-zhoubianyou',
          iconColor: '#4dc6ee',
          iconDesc: '周边游',
          link: '/foodChannel'
        },
        {
          id: '008',
          iconClass: 'icon-liren',
          iconColor: '#ff80c2',
          iconDesc: '丽人',
          link: '/foodChannel'
        },
        {
          id: 9,
          iconClass: 'icon-xiaochikuaican',
          iconColor: '#fd9d21',
          iconDesc: '小吃快餐',
          link: '/foodChannel'
        },
        {
          id: 10,
          iconClass: 'icon-huochepiao',
          iconColor: '#599eec',
          iconDesc: '火车票',
          link: '/foodChannel'
        },
        {
          id: 11,
          iconClass: 'icon-diandiandian1',
          iconColor: '#00d3be',
          iconDesc: '全部分类',
          link: '/category'
        }
      ],
      likeList: []
    }
  },
  computed: {
    hasLikeData: function () {
      return this.likeList.length
    }
  },
  mounted () {
    this.getLikeList()
  },
  methods: {
    getLikeList () {
      setTimeout(() => {
        const list = [
          {
            id: 1,
            imgUrl: '//p1.meituan.net/200.0/deal/935c1da59b0c4a4a790c836e8bae91ac25953.jpg@100_0_600_600a%7C267h_267w_2e_90Q',
            title: '海底捞火锅',
            desc: ['[2店通用]畅享套餐，建议2人使用'],
            price: {
              app: 156,
              shop: 252
            },
            sold: 1555
          },
          {
            id: 2,
            imgUrl: '//p0.meituan.net/200.0/deal/312c6f2982ee460db43f8a4149467f0669429.jpg@128_0_490_490a%7C267h_267w_2e_90Q',
            title: '芭菲盛宴',
            desc: ['[环球中心]单人自助午餐，流连忘返的美食'],
            price: {
              app: 129,
              shop: 148
            },
            sold: 220558
          },
          {
            id: 3,
            imgUrl: '//p1.meituan.net/200.0/dpdeal/715be38a90f0f684edf38d87295a72dd154765.jpg',
            title: '卡拉卡拉漫温泉汗蒸',
            desc: ['[火车北站/高笋塘]单人汗蒸门票+自助夜宵+早餐'],
            price: {
              app: 129,
              shop: 139
            },
            sold: 6624
          },
          {
            id: 4,
            imgUrl: '//p0.meituan.net/200.0/deal/dece13ed36329ca8cd078186ca13e0e927775.jpg@83_0_333_333a%7C267h_267w_2e_90Q',
            title: '谭鸭血老火锅',
            desc: ['[春熙路/太古里]100元代金券1张，可叠加2张'],
            price: {
              app: 28,
              shop: 100
            },
            sold: 9760
          },
          {
            id: 5,
            imgUrl: '//p0.meituan.net/200.0/deal/__42630941__7492791.jpg',
            title: '339旋转餐厅',
            desc: ['[339购物中心]单人自助晚餐'],
            price: {
              app: 271,
              shop: 298
            },
            sold: 69198
          }
        ]
        this.likeList = list
      }, 500)
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
