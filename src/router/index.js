import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import City from '@/pages/city/city'
import GroupDetail from '@/pages/groupDetail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/groupDetail/:id',
      name: 'GroupDetail',
      component: GroupDetail
    }
  ]
})
