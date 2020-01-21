// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import api from './api' // 导入api接口

Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
Vue.prototype.$api = api;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted () {
    this.onLoad(1)
  },
  methods: {
    onLoad(id) {
      this.$api.article.articleDetail(id, {
        api: 123
      }).then(res=> {
        // 执行某些操作
      })
    }
  }
})
