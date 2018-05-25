<template>
  <div>
    <el-container>
      <el-header style="padding: 0;height: 50px;">
        <app-banner class="app-banner" ></app-banner>
      </el-header>
      <el-aside>
        <right-side-bar></right-side-bar>
      </el-aside>

      <el-main style="padding: 0;">
        <map-container ></map-container>
      </el-main>
      <panel-container></panel-container>
    </el-container>
  </div>
</template>

<script>
   import AppBanner from './AppBanner'
   import RightSideBar from './RightSideBar'
   import footerComp from './footerComp'
   import MapContainer from './MapContainer'
   import HelperContainer from './HelperContainer'
   import PanelContainer from './PanelContainer'
  export default {
    name: 'MainContainer',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        h: window.screen.height,
        w: window.screen.width
      }
    },
    components: {
      footerComp,
      HelperContainer,
      AppBanner: AppBanner,
      RightSideBar: RightSideBar,
      MapContainer: MapContainer,
      PanelContainer:PanelContainer
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
