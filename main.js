import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import dataV from '@jiaminghi/data-view'
import '../src/assets/CSS/index.css'
import axios from "axios"
import animate from'animate.css';
Vue.prototype.axios = axios
Vue.use(dataV)
Vue.use(animate)
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  axios,
  render: h => h(App),
  beforeCreate () {
    Vue.prototype.$bus = this
  }

}).$mount('#app')
