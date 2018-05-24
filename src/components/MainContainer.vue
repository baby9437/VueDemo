<template>
  <div>
    <app-banner class="app-banner" ></app-banner>
    <div class="components-container">
      <map-container :menu-active="menuActiveObj" v-show="pageType=='map'"></map-container>
      <helper-container v-show="pageType=='helper'"></helper-container>
    </div>

    <footer-comp v-show="pageType=='map'"></footer-comp>
  </div>
</template>

<script>
  import test from './test'
  import AppBanner from './AppBanner'
   import footerComp from './footerComp'
   import MapContainer from './MapContainer'
   import HelperContainer from './HelperContainer'

  export default {
    name: 'MainContainer',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      footerComp,
      HelperContainer,
      AppBanner: AppBanner,
      MapContainer: MapContainer,
      test: test
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
