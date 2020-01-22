// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import api from './api'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$api = api;

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
  mounted() {
    this.getAllMenus()
  },
  methods: {
    getAllMenus() {
      this.$api.user.getAllMenus()
        .then(ret => {

        }).catch(error => {

      })
    }
  }
})
