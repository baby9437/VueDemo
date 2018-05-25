<template>
  <div id="sideBar">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64"
      text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="1">
        <span slot="title">导航1</span>
        <el-menu-item index="1-1">
          <i class="el-icon-menu"></i>
        </el-menu-item>
        <el-menu-item index="1-2">
          <i class="el-icon-menu"></i>
        </el-menu-item>
        <el-menu-item index="1-3">
          <i class="el-icon-menu"></i>
        </el-menu-item>
        <el-menu-item index="1-4">
          <i class="el-icon-menu"></i>
        </el-menu-item>
        <el-menu-item index="1-5">
          <i class="el-icon-menu"></i>
        </el-menu-item>
          <el-menu-item index="1-6">
            <i class="el-icon-menu"></i>
          </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <span slot="title">导航1</span>
        <el-menu-item index="2-1">
          <i class="el-icon-menu"></i>
        </el-menu-item>
        <el-menu-item index="2-2">
          <i class="el-icon-menu"></i>
        </el-menu-item>
        <el-menu-item index="2-3">
          <i class="el-icon-menu"></i>
        </el-menu-item>
        <el-menu-item index="2-4">
          <i class="el-icon-menu"></i>
        </el-menu-item>
        <el-menu-item index="2-5">
          <i class="el-icon-menu"></i>
        </el-menu-item>
        <el-menu-item index="2-6">
          <i class="el-icon-menu"></i>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

  export default {
    name: 'RightSideBar',
    data(){
      return {

      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
#sideBar{
  background-color: #00bcd4;
  z-index: 1000;
  width: 100px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 50px;
}
.el-submenu .el-menu-item{
  min-width: 90px;
}
</style>
