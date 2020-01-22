import Vue from 'vue'
import Vuex from 'vuex'
import menuVuex from './modules/menuVuex'

Vue.use(Vuex); //使用 vuex

const store = new Vuex.Store({
  modules: {
    menu: menuVuex
  }
})
export default store
