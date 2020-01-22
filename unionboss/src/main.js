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

Vue.directive('permission',{
  bind(el, binding, vnode) {
    // 当指令绑定到 HTML 元素上时触发.**只调用一次**
    console.log('bind triggerd')
  },
  inserted(el, binding, vnode) {
    // 当绑定了指令的这个HTML元素插入到父元素上时触发(在这里父元素是 `div#app`)**.但不保证,父元素已经插入了 DOM 文档.**

    console.log('inserted triggerd')
  },
  updated(el, binding, vnode) {
    // 所在组件的`VNode`更新时调用.
    console.log('updated triggerd')
  },
  componentUpdated(el, binding, vnode) {
    // 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
    console.log('componentUpdated triggerd')

  },
  unbind(el, binding, vnode) {
    // 只调用一次，指令与元素解绑时调用.
    console.log('unbind triggerd')
  }
})

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


