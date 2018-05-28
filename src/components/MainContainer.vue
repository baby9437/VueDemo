<template>
  <div>
    <el-container>
      <!--顶部bannaer条-->
      <app-banner class="app-banner" @handleSidebar="handleSidebar"></app-banner>
      <!--右部侧边栏-->
      <right-sidebar v-show='sidebarVisible' @menuClick="handleMenuClick"></right-sidebar>
      <!--主视图区域-->
      <map-container></map-container>
      <!--功能面板-->
      <panel-container :menuId="menuId" :visible="panelVisible"></panel-container>
    </el-container>
  </div>
</template>

<script>
  import AppBanner from './AppBanner'
  import RightSidebar from './RightSidebar'
  import MapContainer from './MapContainer'
  import PanelContainer from './PanelContainer'

  export default {
    name: 'MainContainer',
    data() {
      return {
        sidebarVisible: true,
        menuId: '',
        panelVisible: true
      }
    },
    components: {
      AppBanner: AppBanner,
      RightSidebar: RightSidebar,
      MapContainer: MapContainer,
      PanelContainer: PanelContainer
    },
    methods: {
      handleSidebar() {
        this.sidebarVisible = !this.sidebarVisible;
        if (this.sidebarVisible === false && this.panelVisible === true) {
          this.panelVisible = false
          console.log(this.panelVisible)
        }
      },
      handleMenuClick(menu) {
        this.menuId = menu
        this.panelVisible = true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .components-container {
    position: absolute;
    top: 60px;
    bottom: 0;
    left: 0;
    right: 0;
    max-height: calc(100vh - 60px);
    overflow: hidden;
  }

  .app-banner {
    text-align: left;
    display: inline;
    float: left;
    width: 100%;
  }

  .test-parent {
    color: red;
  }

</style>
