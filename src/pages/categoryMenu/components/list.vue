<template>
  <div class="cate-list">
    <router-link :to="{path:'/foodCategory',query:{name:'全部'}}" tag="div" class="all-type border">全部分类</router-link>
    <div class="area" v-for="(item, index) of cateInfo" :key="index">
      <div class="title">{{item.type}}</div>
      <ul class="wrapper-list">
        <router-link tag="li" class="wrapper-item border-rightbottom" v-for="(type, typeIndex) of item.list" :key="typeIndex" :to="{path:'/foodCategory',query:{name:type.name}}">{{type.name}}</router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CateList',
  props: {
    cateInfo: {
      type: Array
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .border-rightbottom:before,.border-rightbottom:after
    border-color: #f0efed;
  .cate-list
    padding: .2rem;
    .all-type
      line-height: .7rem;
      text-align: center;
      background: #fff;
    .area
      .title
        margin: .4rem 0 .2rem;
        font-size: 15px;
      .wrapper-list
        background: #fff;
        overflow: hidden;
        border-radius: .06rem;
        margin-right: -1px;
        .wrapper-item
          float: left;
          width: 33.33%;
          text-align: center;
          line-height: .9rem;
          margin-bottom: -1px;
          padding: 0 .05rem;
          box-sizing: border-box;
          ellipsis();
</style>
