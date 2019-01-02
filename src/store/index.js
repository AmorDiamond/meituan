import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    city: '成都',
    backRouter: ''
  },
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    },
    changeBackRouter (ctx, router) {
      ctx.commit('changeBackRouter', router)
    }
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
    },
    changeBackRouter (state, router) {
      state.backRouter = router
    }
  }
})
