<template>
  <div class="footer">
    <div class="row-one">
      <div class="row-left">
        <button>登录</button>
        <button>注册</button>
      </div>
      <div class="row-right">
        城市：<router-link to="/city" tag="span" class="city">成都</router-link>
      </div>
    </div>
    <ul class="row-menu">
      <router-link to="/" tag="li" class="menu-item">首页</router-link>
      <li class="menu-item">订单</li>
      <li class="menu-item">客户端</li>
      <li class="menu-item">电脑版</li>
      <li class="menu-item">帮助</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'PublicFooter'
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .footer
    padding: .1rem .2rem;
    .row-one
      overflow: hidden;
      line-height: .8rem;
      margin: .2rem 0 .4rem;
      .row-left
        float: left;
      .row-right
        float: right;
        .city
          display: inline-block;
          width: 1.8rem;
          line-height: .55rem;
          border: 1px solid $bgColor;
          border-radius: .06rem;
          text-align: center;
          color: $bgColor;
      button
        border: 1px solid $bgColor;
        border-radius: .06rem;
        width: 1.2rem;
        line-height: .55rem;
        color: $bgColor;
        background: none;
    .row-menu
      display: flex;
      margin-bottom: .4rem;
      .menu-item
        flex: 1;
        color: $bgColor;
        border-right: 1px solid #666;
        text-align: center;
        &:last-child
          border: none;
</style>
