<template>
  <div>
    <city-header></city-header>
    <city-list :cities="cityList" :hotList="hotList"></city-list>
  </div>
</template>
<script>
import CityHeader from './components/header'
import CityList from './components/list'
import axios from 'axios'
export default {
  name: 'CityPage',
  components: {
    CityHeader,
    CityList
  },
  data () {
    return {
      cityList: {},
      hotList: []
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      const url = 'static/mock/city.json'
      axios.get(url).then(res => {
        if (res.status === 200) {
          this.getCityInfoSucc(res.data)
        }
      })
    },
    getCityInfoSucc (res) {
      const data = res.data
      this.cityList = data.cities
      this.hotList = data.hotCities
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
