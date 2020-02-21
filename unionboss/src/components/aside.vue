<template >
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :default-active="$route.path"
    router
    >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1"  >选项1</el-menu-item>
      <el-menu-item index="/permissionManage" >资源管理</el-menu-item>
      <el-menu-item index="1-3">选项3</el-menu-item>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    name: "aside",
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    }
  }
</script>

<style scoped>
  .el-menu{
    border-right: none;
  }

  .el-submenu .el-menu-item {
    min-width: 0px;
  }

</style>
