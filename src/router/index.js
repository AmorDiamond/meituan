import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import City from '@/pages/city/city'
import GroupDetail from '@/pages/groupDetail/detail'
import FoodMenu from '@/pages/foodMenu/foodMenu'
import FoodCategory from '@/pages/foodMenu/category/category'
import CategoryMenu from '@/pages/categoryMenu/category'
import Search from '@/pages/search/search'

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
    },
    {
      path: '/foodChannel',
      name: 'FoodMenu',
      component: FoodMenu
    },
    {
      path: '/foodCategory',
      name: 'FoodCategory',
      component: FoodCategory
    },
    {
      path: '/category',
      name: 'CategoryMenu',
      component: CategoryMenu
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
