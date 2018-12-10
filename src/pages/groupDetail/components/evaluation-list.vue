<template>
  <div>
    <div class="evaluation-list border-topbottom">
      <div class="hd-title border-bottom">
        <span>评价</span>
        <div class="star-evaluation">
          <star-evaluation :scoreNumber="scoreNumber"></star-evaluation>
        </div>
      </div>
      <div class="list border-bottom">
        <!--<div class="evaluation-item border-top">
          <div class="item-hd">
            <img class="avatar" src="https://img.meituan.net/avatar/9cd231a9428adcdbf7f3de4c24425a8b67676.jpg@74w_74h_1e_1c" alt="">
            <div class="info">
              <p class="name">昵称</p>
              <p>
                <star-evaluation :showScore="false"></star-evaluation>
                <span class="time">2018-12-08</span>
              </p>
            </div>
          </div>
          <div class="item-desc">
            <p>我是第一次去海底劳龙湖三楼这家店吃东西，真心感受到温馨舒服的感觉，菜品也很好吃，份也足，难怪别人店里晚上和周末要等很久才有位子，里面上班的小哥哥，小姐们让人很开心，工作认真热情，让人感觉宾至如归的感觉，太喜欢了，环境也。很干净，下次还去他家吃饭！</p>
          </div>
          <div class="img-box">
            <span class="img-con">
              <img src="//p0.meituan.net/shaitu/4d4709ebe4d08cb885a5c026c8452de51770259.jpg@110w_110h_1e_1c" alt="">
            </span>
            <span class="img-con">
              <img src="//p0.meituan.net/shaitu/396bbf1a72c3ba4c36a298df12d4a2d52089445.jpg@110w_110h_1e_1c" alt="">
            </span>
          </div>
          <p class="shop-address">海底捞火锅（金牛凯德店）</p>
        </div>-->
        <div class="evaluation-item border-top" v-for="(item, index) of evaluations" :key="item.id">
          <div class="item-hd">
            <img class="avatar" :src="item.avatarUrl" alt="">
            <div class="info">
              <p class="name">{{item.nickname}}</p>
              <p>
                <star-evaluation :scoreNumber="item.scoreNumber" :showScore="false"></star-evaluation>
                <span class="time">{{item.time}}</span>
              </p>
            </div>
          </div>
          <div class="item-desc" @click="descHandleClick(index)">
            <span v-for="(message, msgindex) of item.evaluationMsg" :key="msgindex" :class="{'hidden-msg': hiddenMsg(item, msgindex)}">{{message}}</span>
            <span class="empty-msg" v-show="!item.showMore">......</span>
            <span class="iconfont show-more-icon" v-if="item.evaluationMsg.length" :class="{'active-icon': item.showMore}">&#xe600;</span>
          </div>
          <div class="img-box">
          <span class="img-con" v-for="(image, imgindex) of item.evaluationImg" :key="imgindex" @click="imageHandleClick(index,imgindex)">
            <img :src="image" alt="">
          </span>
          </div>
          <p class="shop-address">{{item.shopAddress}}</p>
        </div>
      </div>
      <div class="evaluation-ft">
        <span>查看全部175条评价</span><span class="iconfont other-icon">&#xe661;</span>
      </div>
    </div>
    <gallery-banner @close="galleryHandleClick" v-if="showGllery" :list="galleryList" :galleryIndex="galleryIndex"></gallery-banner>
  </div>
</template>
<script>
import StarEvaluation from 'common/evaluation/star-evaluation'
import GalleryBanner from 'common/gallery/gallery'
export default {
  name: 'EvaluationList',
  components: {
    StarEvaluation,
    GalleryBanner
  },
  data () {
    return {
      scoreNumber: 4.4,
      showGllery: false,
      galleryList: [],
      galleryIndex: 0,
      list: [
        {
          id: 1,
          nickname: '伊灵舞',
          avatarUrl: 'https://img.meituan.net/avatar/9cd231a9428adcdbf7f3de4c24425a8b67676.jpg@74w_74h_1e_1c',
          scoreNumber: 5,
          time: '2018-12-08',
          evaluationMsg: '我是第一次去海底劳龙湖三楼这家店吃东西，真心感受到温馨舒服的感觉，菜品也很好吃，份也足，难怪别人店里晚上和周末要等很久才有位子，里面上班的小哥哥，小姐们让人很开心，工作认真热情，让人感觉宾至如归的感觉，太喜欢了，环境也。很干净，下次还去他家吃饭！',
          evaluationImg: [
            '//p0.meituan.net/60.0/shaitu/f9c2e5f57f2c18d8de571129cad54e771481053.jpg',
            '//p0.meituan.net/60.0/shaitu/ffffed98c94aebea4d59138920cbbe771665996.jpg',
            '//p0.meituan.net/60.0/shaitu/a4ad02d68f731370f44ff71034a4541f1548657.jpg'
          ],
          evaluationBigImg: [
            '//p0.meituan.net/400.0/shaitu/f9c2e5f57f2c18d8de571129cad54e771481053.jpg',
            '//p0.meituan.net/400.0/shaitu/ffffed98c94aebea4d59138920cbbe771665996.jpg',
            '//p0.meituan.net/400.0/shaitu/a4ad02d68f731370f44ff71034a4541f1548657.jpg'
          ],
          shopAddress: '海底捞火锅（金牛凯德店）',
          showMore: false
        },
        {
          id: 2,
          nickname: '昵称',
          avatarUrl: '//p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png@74w_74h_1e_1c',
          scoreNumber: 4,
          time: '2018-11-08',
          evaluationMsg: '第一次来吃！服务比起行业里面算好的！环境OK！还给我约免费指甲！也是一个亮点！刚开始准备点几个菜的！服务员叫我们先吃完在点！才发现碗多！东西少！不代表不够吃！最后没有吃完😅😅😅……说真的那个小碗上菜！确实拉低档次！可以用两个和蒸笼大小的盒子！一个荤一个素！可以学一下一品鲜鲍！ #捞派捞面# #番茄锅底# #捞派滑牛肉# #无刺巴沙鱼片# #小酥肉#',
          evaluationImg: [
            '//p0.meituan.net/shaitu/4d4709ebe4d08cb885a5c026c8452de51770259.jpg@110w_110h_1e_1c',
            '//p0.meituan.net/shaitu/396bbf1a72c3ba4c36a298df12d4a2d52089445.jpg@110w_110h_1e_1c'
          ],
          evaluationBigImg: [
            '//p0.meituan.net/400.0/shaitu/4d4709ebe4d08cb885a5c026c8452de51770259.jpg',
            '//p0.meituan.net/400.0/shaitu/396bbf1a72c3ba4c36a298df12d4a2d52089445.jpg'
          ],
          shopAddress: '海底捞火锅（龙湖三千集店）',
          showMore: false
        }
      ],
      evaluations: []
    }
  },
  mounted () {
    this.formatEvaluationMsg()
  },
  computed: {
    hiddenMsg () {
      return function (item, index) {
        return !item.showMore && index > 0
      }
    }
  },
  methods: {
    formatEvaluationMsg () {
      const defaultLen = 80
      const evaluations = []
      this.list.forEach(item => {
        const messages = []
        const len = item.evaluationMsg.length
        if (len > defaultLen) {
          messages[0] = item.evaluationMsg.substr(0, defaultLen)
          messages[1] = item.evaluationMsg.substr(defaultLen)
        } else {
          messages[0] = item.evaluationMsg
        }
        item.evaluationMsg = messages
        item['showMore'] = false
        evaluations.push(item)
      })
      this.evaluations = evaluations
      console.log('evaluations', evaluations)
    },
    descHandleClick (index) {
      console.log(index)
      this.evaluations[index].showMore = !this.evaluations[index].showMore
      console.log(this.evaluations)
    },
    galleryHandleClick () {
      this.showGllery = false
    },
    imageHandleClick (index, imgIndex) {
      this.galleryList = this.evaluations[index].evaluationBigImg
      this.galleryIndex = imgIndex
      this.showGllery = true
    }
  }
}
</script>
<style lang="stylus" scoped>
  .hidden-msg
    display: none
  .evaluation-list
    background: #fff
    margin-top: .2rem
    .hd-title
      padding: 0 .2rem
      line-height: .9rem
      color: #333
      font-size: 18px
      .star-evaluation
        float: right
    .list
      padding: 0 .2rem
      .evaluation-item
        padding-bottom: .4rem
        &:first-child:before
          border: none
        .item-hd
          padding: .2rem 0
          font-size: 12px
          .avatar
            width: .7rem
            float: left
            border-radius: .4rem
          .info
            margin-left: .8rem
            overflow: hidden
            .name
              line-height: .4rem
            .time
              vertical-align: middle
              color: #999
              margin-left: .1rem
        .item-desc
          position: relative
          font-size: 15px
          line-height: .45rem
          .show-more-icon
            position: absolute
            right: .2rem
            bottom: .06rem
            font-size: 22px
          .empty-msg
            margin-left: -4px
          .active-icon
            transform: rotate(180deg)
        .img-box
          margin: .1rem 0 .4rem
          font-size: 0
          .img-con
            display: inline-block
            width: 1.1rem
            height: 1.1rem
            margin-right: .1rem
            img
              width: 100%
              max-height: 100%
        .shop-address
          color: #666
    .evaluation-ft
      padding: 0 .2rem
      line-height: .8rem
      color: #06c1ae
      font-size: 15px
      .other-icon
        float: right
        font-size: 22px
</style>
