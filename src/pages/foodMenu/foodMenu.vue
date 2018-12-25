<template>
  <div>
    <div class="channel-header">
      <channel-header></channel-header>
    </div>
    <div class="channel-bd">
      <channel-banner :list="bannerList"></channel-banner>
      <food-icons :list="iconsList"></food-icons>
      <channel-filter></channel-filter>
      <div class="empty-box"></div>
    </div>
  </div>
</template>
<script>
import ChannelHeader from './components/header'
import ChannelBanner from 'common/banner/banner'
import FoodIcons from './components/icons'
import ChannelFilter from './components/filter'
export default {
  name: 'FoodMenu',
  components: {
    ChannelHeader,
    ChannelBanner,
    FoodIcons,
    ChannelFilter
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
          iconUrl: '//p0.meituan.net/codeman/050ce6754d32482c75273e292407f2b312356.png',
          iconDesc: '火锅',
          link: '/foodChannel'
        },
        {
          id: 2,
          iconClass: 'icon-Artboard',
          iconColor: '#ff6767',
          iconUrl: '//p0.meituan.net/codeman/e5277d18a450c1fe51c6cda9cff6a9e016621.png',
          iconDesc: '甜点饮品',
          link: ''
        },
        {
          id: 3,
          iconClass: 'icon-jiudian',
          iconColor: '#8a90fa',
          iconUrl: '//p1.meituan.net/codeman/962b082a549e88f2939dbee2ac3d235613019.png',
          iconDesc: '自助餐',
          link: ''
        },
        {
          id: 4,
          iconClass: 'icon-xiuxianyule',
          iconColor: '#fed030',
          iconUrl: '//p0.meituan.net/codeman/12ff749bd7fdf473abd59e2651a9ee1913684.png',
          iconDesc: '小吃快餐',
          link: ''
        },
        {
          id: 5,
          iconClass: 'icon-icon-test',
          iconColor: '#fd9d21',
          iconUrl: '//p0.meituan.net/codeman/0fe84029cc6cf6ccf12838ce6546734a16488.png',
          iconDesc: '西餐',
          link: ''
        },
        {
          id: 6,
          iconClass: 'icon-KTV',
          iconColor: '#fed030',
          iconUrl: '//p0.meituan.net/codeman/2ae734d26259e6138ea61f2dcdac8fa115018.png',
          iconDesc: '烧烤烤肉',
          link: ''
        },
        {
          id: 7,
          iconClass: 'icon-zhoubianyou',
          iconColor: '#4dc6ee',
          iconUrl: '//p1.meituan.net/codeman/a7c360a9aeca1f972a1819465154c6b414043.png',
          iconDesc: '香锅烤鱼',
          link: ''
        },
        {
          id: '008',
          iconClass: 'icon-liren',
          iconColor: '#ff80c2',
          iconUrl: '//p1.meituan.net/codeman/13a0d1537d45b237a07b665eb5a7845e17141.png',
          iconDesc: '海鲜',
          link: ''
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scope>
  @import "~styles/varibles.styl"
  .channel-header
    position: fixed;
    width: 100%;
    z-index: 2;
  .channel-bd
    padding-top: $channelHeaderHeight;
  .empty-box
    height: 15rem;
</style>
