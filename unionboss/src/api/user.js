/**
 * article模块接口列表
 */

import axios from '@/request/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const user = {

  //获取用户的权限菜单
  getAllMenus(){
    return axios.post("/user/getAllMenus")
  }


}

export default user;
