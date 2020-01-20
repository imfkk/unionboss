<template>
  <div>
    <el-row>
      <el-col :span="24"><div class="tital"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-menu style="margin-left: 200px"  class="el-menu-demo" mode="horizontal" >
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-menu-item index="3" >消息中心</el-menu-item>
          <el-menu-item index="4">订单管理</el-menu-item>
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
        name: "heads"
    }
</script>
<style scoped>
.tital{
  height: 60px;
}
</style>
