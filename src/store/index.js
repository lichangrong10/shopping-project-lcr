import Vue from 'vue'
import Vuex from 'vuex'
//引入模块
import user from './modules/user'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    token(state) {
      return state.user.userInfo.token
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    //模块注册
    user,
    cart
  }
})
