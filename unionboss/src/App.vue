<template>
  <div id="app">
    <el-row :span="24">
      <heads></heads>
    </el-row>
    <el-row >
      <el-col :span="3"  class="aside">
        <Aside></Aside>
      </el-col>
      <el-col :span="21">
        <el-row class="main">
          <router-view></router-view>
        </el-row>
        <el-row class="footer">
          <Foot></Foot>
        </el-row>
      </el-col>
    </el-row>
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


  body{
    margin: 0px;
  }

  .main{
    height: 750px;
  }

  .aside{
    background-color: rgb(84, 92, 100);
    height: 800px;
  }

</style>
