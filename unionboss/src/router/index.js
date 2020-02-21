import Vue from 'vue'
import Router from 'vue-router'
import PermissionManage from '@/page/permissionManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/permissionManage',
      name: 'permissionManage',
      component:PermissionManage
    }
  ]
})
