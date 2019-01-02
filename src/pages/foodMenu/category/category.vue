<template>
  <div class="category">
    <channel-fileter></channel-fileter>
  </div>
</template>
<script>
import ChannelFileter from '../components/filter'
export default {
  name: 'Category',
  components: {
    ChannelFileter
  },
  data () {
    return {
      cateType: ''
    }
  },
  mounted () {
    this.getCateInfo()
  },
  methods: {
    getCateInfo () {
      this.cateType = this.$route.query.name
      console.log(this.$route.query.name)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .category
    color: red;
</style>
