<template>
  <div id="app">
    <el-container>
      <el-header style="height: 120px">
        <heads></heads>
      </el-header>
      <el-container>
        <el-aside width="200px" style="background-color:  #545c64;">
          <Aside></Aside>
        </el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>
            <Foot></Foot>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Heads from "./components/heads";
  import Aside from "./components/aside";
  import Foot from "./components/foot";
  export default {
    name: 'App',
    components: {Heads,Aside,Foot}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .el-main {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 750px;
  }

   body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  body{
    margin: 0px;
  }

  el-aside{

  }

</style>
