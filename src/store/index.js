import Vue from 'vue'
import Vuex from 'vuex'
import MainPage from './modules/main'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    MainPage
  }
})
