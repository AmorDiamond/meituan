<template>
  <div class="category">
    <cate-header></cate-header>
    <cate-list :cateInfo="cateData"></cate-list>
  </div>
</template>
<script>
import CateHeader from './components/header'
import CateList from './components/list'
import axios from 'axios'
export default {
  name: 'CategoryMenu',
  components: {
    CateHeader,
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
