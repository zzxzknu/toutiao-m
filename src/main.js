import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//  加载vant组件库
import vant from 'vant'
// 加载vant全局样式文件
import 'vant/lib/index.css'
//  加载全局样式文件
import './styles/index.less'

// 注册并使用Vant
Vue.use(vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
