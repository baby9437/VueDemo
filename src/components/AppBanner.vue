<template>
  <banner-container>
    <template slot="main">
      <el-menu class="el-menu-demo"
               :default-active="activeIndex"
               ref="menu"
               :unique-opened="true"
               menu-trigger="click"
               @select="handleSelect"
               mode="horizontal"
               background-color="#006f6a"
               text-color="#FFFFFF"
               active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">工程场景</template>
          <el-menu-item index="sceneManage">场景管理</el-menu-item>
          <el-menu-item index="paramManage">参数配置</el-menu-item>
          <el-menu-item index="symbolTool">对象标注</el-menu-item>
          <el-menu-item index="metaManage">元数据管理</el-menu-item>
        </el-submenu>

        <el-submenu index="6">
          <template slot="title">视图操作</template>
          <el-menu-item index="zoomout">放大</el-menu-item>
          <el-menu-item index="zoomin">缩小</el-menu-item>
          <el-menu-item index="pan">平移</el-menu-item>
          <el-menu-item index="mapMeasure">地图量测</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">查询分析</template>
          <el-menu-item index="searchPos">查询定位</el-menu-item>
          <el-menu-item index="analysisOppr">空间分析</el-menu-item>

        </el-submenu>
        <el-submenu index="4">
          <template slot="title">业务操作</template>
          <el-menu-item index="eleLine">线路走廊</el-menu-item>
          <el-menu-item index="underLine">地下管线</el-menu-item>
        </el-submenu>
        <el-menu-item index="helper">开发帮助</el-menu-item>
      </el-menu>
    </template>
  </banner-container>
</template>

<script>
  import {mapGetters} from 'vuex'
  import BannerContainer from './BannerContainer'

  export default {
    name: 'AppBanner',
    components: {BannerContainer},
    data(){
      return {
        activeIndex: ''
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        if (key == "") {
          this.$message({
            message: '未设置菜单路径',
            type: 'warning'
          });
          return;
        }
        this.$emit("openMenu",{
            panelName: key,
            type: key == "helper" ? "helper" : "map"
          })
        /* if(key=="Helper"){
         this.$router.push({path:'/Helper'});
         }else{
         this.$emit("openMenu",key)
         }*/
      }
    },
    watch: {
      closePanelObj: {
        handler: function (val) {
          this.activeIndex = `${Date.now()}`
        },
        immediate: true
      }
    },
    computed: {
      ...mapGetters([
        'appName',
        'closePanelObj'
      ])
    }

  }
</script>
<style scoped>
  .el-menu-demo {
    margin: 0px;
    list-style: none;
    position: absolute;
    right: 70px;
    top: 0;
    border-bottom: none;
    font-weight: 500;
    font-family: 'Microsoft YaHei';
    font-size: 15px;
  }
</style>
