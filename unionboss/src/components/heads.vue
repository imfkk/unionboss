<template>
  <div>
    <el-row style="background-color:rgb(84, 92, 100)">
      <el-col :span="3">
        <div class="tital"></div>
      </el-col>
      <el-col :span="18">
        <el-menu class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b">
          <el-menu-item index="0">首页</el-menu-item>
          <el-menu-item index="1">用户中心</el-menu-item>
          <el-menu-item index="3">商机中心</el-menu-item>
          <el-menu-item index="4">工单中心</el-menu-item>
          <el-menu-item index="6">处理中心</el-menu-item>
          <el-menu-item index="7">消息中心</el-menu-item>
          <el-menu-item index="8">订单管理</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="3">
        <div class="right">
          <div class="block icon"><el-avatar :size="40" :src="circleUrl"></el-avatar></div>
          <el-dropdown >
          <span class="el-dropdown-link">
            付宽宽<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="clearfix">
                工单
                <el-badge class="mark" :value="3" />
              </el-dropdown-item>
              <el-dropdown-item class="clearfix">
                商机
                <el-badge class="mark" :value="3" />
              </el-dropdown-item>
              <el-dropdown-item>注销</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "heads",
    methods: {
      handleSelect(key, keyPath) {
        //alert(key)
      }
    },
    data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      }
    }
  }
</script>
<style scoped>
  .tital {
    height: 60px;
    background-color: #0C2640;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: white;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

  .right{
    background-color:#545c64 ;
    display: flex;
    justify-content:center;
    align-content:center;
    align-items: center;
    height: 60px;
  }

  .icon{
    margin-right: 10px;
  }
</style>
