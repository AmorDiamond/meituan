<template>
  <div id="app">
    <router-view/>
    <public-footer></public-footer>
  </div>
</template>

<script>
import PublicFooter from 'common/footer/public-footer'
export default {
  name: 'App',
  components: {
    PublicFooter
  }
}
</script>

<style>
  body,html{
    background-color: #f0efed;
  }
</style>
