<template>
  <div class="category">
    <channel-header></channel-header>
    <div class="channel-bd">
      <channel-banner :list="bannerList"></channel-banner>
      <channel-fileter @changeShow="changeShowBackTop" @changeFilter="chooseFilterType"></channel-fileter>
      <div class="shop-list" ref="shopContainer">
        <ul class="shop-con">
          <router-link tag="li" v-for="(item, index) of shopList" :key="index" :to="/groupDetail/+ item.id">
            <shop-item :shopInfo="item"></shop-item>
          </router-link>
        </ul>
      </div>
      <loading-more :status="showLoadingMore"></loading-more>
      <back-top :status="showBackTop"></back-top>
    </div>
    <div class="empty-box"></div>
  </div>
</template>
<script>
import ChannelHeader from '../components/header'
import ChannelBanner from 'common/banner/banner'
import ChannelFileter from '../components/filter'
import ShopItem from '../components/shop-item'
import BackTop from 'common/backTop/back-top'
import LoadingMore from 'common/loading/loading-more'
export default {
  name: 'Category',
  components: {
    ChannelHeader,
    ChannelBanner,
    ChannelFileter,
    ShopItem,
    BackTop,
    LoadingMore
  },
  data () {
    return {
      cateTypeName: '',
      showBackTop: false,
      showLoadingMore: false,
      shopContainerTop: 0,
      mobileHeight: 0,
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
      shopList: [
        {
          id: 1,
          name: '一把骨（大丰汇融广场店）',
          img: 'https://img.meituan.net/msmerchant/1b2202649f3ab472adb4768fd7a02776202055.jpg@160w_160h_1e_1c',
          scoreNumber: 4,
          price: 41,
          address: '大丰',
          foodType: '汤锅',
          tag: ['新店特惠'],
          support: ['支持买单', '预订'],
          offer: [
            {
              iconClass: 'icon-tuan',
              desc: '1-8人餐1元，双人餐38元，4人餐166元，6人餐298元'
            },
            {
              iconClass: 'icon-quan1',
              desc: '58代100元，92代100元'
            },
            {
              iconClass: 'icon-mai',
              desc: '买单立享9.5折'
            }
          ]
        },
        {
          id: 2,
          name: '老码头火锅（玉林店）',
          img: 'https://img.meituan.net/msmerchant/2357c609735149ebf2db97c53564b1c2396790.jpg@160w_160h_1e_1c',
          scoreNumber: 5,
          price: 99,
          address: '玉林/芳草街',
          foodType: '川味火锅',
          tag: ['玉林/芳草街火锅第1名', '回头客多', '牛肉不错', '毛肚赞'],
          support: ['支持买单'],
          offer: [
            {
              iconClass: 'icon-tuan',
              desc: '3人餐168元'
            },
            {
              iconClass: 'icon-quan1',
              desc: '48代100元，95代100元'
            }
          ]
        },
        {
          id: 3,
          name: '藕然间（龙都南路店）',
          img: '//p0.meituan.net/mogu/e4ecbf88ae4482fb977d41d511cd43e356273.jpg@160w_160h_1e_1c',
          scoreNumber: 5,
          price: 47,
          address: '龙都南路',
          foodType: '汤锅',
          tag: ['包间可订', '龙都南路火锅第1名', '回头客多'],
          support: ['支持预订'],
          offer: [
            {
              iconClass: 'icon-tuan',
              desc: '双人餐108元，4人餐188元，8人餐268元'
            },
            {
              iconClass: 'icon-quan1',
              desc: '88代100元'
            }
          ]
        },
        {
          id: 4,
          name: '蜀大侠火锅（草堂店）',
          img: 'https://img.meituan.net/msmerchant/ed6e20813bb46a76b66a68f5b23d2960506282.jpg@160w_160h_1e_1c',
          scoreNumber: 4,
          price: 80,
          address: '杜甫草堂',
          foodType: '四川火锅',
          tag: ['杜甫草堂火锅第8名'],
          support: [],
          offer: [
            {
              iconClass: 'icon-quan1',
              desc: '58代100元，78代100元'
            }
          ]
        },
        {
          id: 5,
          name: '赤宴（玉林店）',
          img: 'https://img.meituan.net/msmerchant/fa59e8e719cfb41a2cc72799ac0f9faf1814137.jpg@160w_160h_1e_1c',
          scoreNumber: 5,
          price: 54,
          address: '肖家河',
          foodType: '川菜',
          tag: ['肖家河川菜第1名', '回头客多', '牛肉不错'],
          support: ['支持预订'],
          offer: [
            {
              iconClass: 'icon-tuan',
              desc: '4人餐148元，6人餐248元'
            },
            {
              iconClass: 'icon-quan1',
              desc: '88代100元'
            }
          ]
        },
        {
          id: 6,
          name: '川西坝子（华阳直营店）',
          img: 'https://img.meituan.net/msmerchant/a3ce8deb20cb706728aa049811184cef67922.jpg@160w_160h_1e_1c',
          scoreNumber: 5,
          price: 93,
          address: '双流区',
          foodType: '四川火锅',
          tag: ['牛肉不错', '豆花好吃'],
          support: ['支持买单', '预订'],
          offer: [
            {
              iconClass: 'icon-quan1',
              desc: '12.12代50元，96代100元'
            }
          ]
        }
      ]
    }
  },
  mounted () {
    this.getCateInfo()
    this.shopContainerTop = this.$refs.shopContainer.offsetTop
    this.mobileHeight = document.documentElement.clientHeight || document.body.clientHeight
    window.addEventListener('scroll', this.scrollHandle)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollHandle)
  },
  methods: {
    getCateInfo () {
      this.cateTypeName = this.$route.query.name
      console.log(this.$route.query.name)
    },
    changeShowBackTop (flag) {
      this.showBackTop = flag
    },
    scrollHandle (e) {
      const shopListHeight = this.$refs.shopContainer.offsetHeight
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const scrollHeight = this.shopContainerTop + shopListHeight - this.mobileHeight
      if (scrollTop >= scrollHeight) {
        this.getShopList()
      }
    },
    getShopList () {
      this.showLoadingMore = true
      window.removeEventListener('scroll', this.scrollHandle)
      setTimeout(() => {
        const list = this.shopList
        this.shopList = [...this.shopList, ...list]
        this.showLoadingMore = false
        window.addEventListener('scroll', this.scrollHandle)
      }, 3000)
    },
    chooseFilterType (res) {
      this.$router.push({path: '/foodCategory', query: {name: res}})
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .channel-bd
    padding-top: $channelHeaderHeight;
  .shop-list
    background: #fff;
  .empty-box
    height: .2rem;
</style>
