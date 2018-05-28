<template>
  <div>
    <el-container>
      <!--<el-header style="padding: 0;height: 50px;">-->
        <!--顶部bannaer条-->
        <app-banner class="app-banner" @handleSidebar="handleSidebar"></app-banner>
      <!--</el-header>-->
      <!--<el-aside>-->
        <!--右部侧边栏-->
        <right-sidebar v-show='sidebarVisible' @menuClick="handleMenuClick"></right-sidebar>
      <!--</el-aside>-->

      <!--<el-main style="padding: 0;">-->
        <!--主视图区域-->
        <map-container ></map-container>
      <!--</el-main>-->
      <!--功能面板-->
      <panel-container :visible="panelVisible"></panel-container>

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
    data () {
      return {
        sidebarVisible:true,
        panelVisible:false
      }
    },
    components: {
      AppBanner: AppBanner,
      RightSidebar: RightSidebar,
      MapContainer: MapContainer,
      PanelContainer: PanelContainer
    },
    methods:{
      handleSidebar(){
        this.sidebarVisible = !this.sidebarVisible;
        if(this.sidebarVisible===false && this.panelVisible===true ){
          this.panelVisible = false
          console.log( this.panelVisible)
        }
      },
      handleMenuClick(menu){
        console.log(menu)
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
  .app-banner{
    text-align: left;
    display: inline;
    float: left;
    width: 100%;
  }
  .test-parent{
    color: red;
  }

</style>
