import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/font-awesome-4.7.0/css/font-awesome.css'
import axios from "axios"
import $ from "jquery"
//引入element-ui组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import baiduLocation from './map'

Vue.use(baiduLocation)


Vue.prototype.$http= axios
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
