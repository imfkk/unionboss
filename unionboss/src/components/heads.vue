<template>
  <div>
    <el-row>
      <el-col :span="24"><div class="tital"></div></el-col>
    </el-row>
    <el-row>
      <el-col  :span="3"><div class="tital"></div></el-col>
      <el-col :span="21" >
        <el-menu   class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">用户中心</el-menu-item>
          <el-menu-item index="3" >商机中心</el-menu-item>
          <el-menu-item index="4">工单中心</el-menu-item>
          <el-menu-item index="6">处理中心</el-menu-item>
          <el-menu-item index="7" >消息中心</el-menu-item>
          <el-menu-item index="8">订单管理</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "heads",
      methods:{
        handleSelect(key, keyPath){
          //alert(key)
        }
      }
    }
</script>
<style scoped>
.tital{
  height: 60px;
  background-color: #0C2640;
}
</style>
