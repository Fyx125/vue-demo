// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import store from './store'
import 'vue2-animate/dist/vue2-animate.min.css'

Vue.config.productionTip = false
Vue.prototype.$a = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {},
  template: '<router-view/>'
})
