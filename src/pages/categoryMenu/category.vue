<template>
  <div class="category">
    <simple-header :title="'选择分类'"></simple-header>
    <cate-list :cateInfo="cateData"></cate-list>
  </div>
</template>
<script>
import SimpleHeader from 'common/header/simple-header'
import CateList from './components/list'
import axios from 'axios'
export default {
  name: 'CategoryMenu',
  components: {
    SimpleHeader,
    CateList
  },
  data () {
    return {
      cateData: []
    }
  },
  mounted () {
    this.getCateInfo()
  },
  methods: {
    getCateInfo () {
      const url = 'static/mock/categoryData.json'
      axios.get(url).then(res => {
        if (res.status === 200) {
          this.getCateInfoSuc(res.data)
        }
      })
    },
    getCateInfoSuc (res) {
      this.cateData = res.data
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
