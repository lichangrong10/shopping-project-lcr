import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from './router'
//引入vuex
import store from './store'
//引入vant组件库
import '@/utils/vant-ui'
//引入公共样式
import '@/styles/common.less'

Vue.config.productionTip = false

new Vue({
  //挂载路由和vuex
  router,
  store,
  render: h => h(App)
}).$mount('#app')
