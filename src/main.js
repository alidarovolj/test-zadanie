import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require('@/assets/fonts/stylesheet.css')
require('jquery')
require('bootstrap')
require('bootstrap/dist/css/bootstrap.min.css')
require('@fortawesome/fontawesome-free/css/all.css')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
