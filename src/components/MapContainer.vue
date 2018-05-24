<template>
  <div><!--
    <div class="components-container">
      <div class="sidebar">
        <SideBar :viewer="map3d" :scene-id="senceId"
                 :refresh-param-flag="refreshParamFlag"></SideBar>
      </div>
      <split-pane :isSplitMode="isSplitMode" split="vertical"
                  :minPercent="panelPercentObj.minPercent"
                  :defaultPercent="panelPercentObj.defaultPercent">
        <template slot="paneL">
          <view-panel @map3dload="map3dload" @updateSenceId="updateSenceId"
                      :viewer="map3d"></view-panel>
        </template>
        <template slot="paneR">
          &lt;!&ndash;<map-panel @map2dload="map2dload"></map-panel>&ndash;&gt;
        </template>
      </split-pane>

      <scene-manage :viewer="map3d" :panel-active="menuActive" v-if="isVisible('sceneManage')"
                    @updateSenceId="updateSenceId"></scene-manage>
      <param-manage :viewer="map3d" :scene-id="senceId" :panel-active="menuActive" v-if="isVisible('paramManage')"
                    @paramManageRefresh="paramManageRefresh"></param-manage>
      <symbol-tool :panel-active="menuActive" :map2d="map2d" :map3d="map3d" :scene-id="senceId" v-if="isVisible('symbolTool')"></symbol-tool>
      <meta-manage :panel-active="menuActive"  v-if="isVisible('metaManage')"></meta-manage>

      <map-measure :panel-active="menuActive" :scene-id="senceId" :map2d="map2d" :map3d="map3d"  v-if="isVisible('mapMeasure')"></map-measure>
      <search-pos :viewer="map3d" :scene-id="senceId" :panel-active="menuActive" v-if="isVisible('searchPos')"></search-pos>
      <analysis-oppr :panel-active="menuActive" :scene-id="senceId" :map2d="map2d" :map3d="map3d" v-if="isVisible('analysisOppr')"></analysis-oppr>
      <under-line :viewer="map3d" :scene-id="senceId" :panel-active="menuActive" v-if="isVisible('underLine')"></under-line>
      <ele-line :viewer="map3d" :scene-id="senceId" :panel-active="menuActive" v-if="isVisible('eleLine')"></ele-line>
    </div>-->
  </div>

</template>

<script>
  /*import SideBar from './SideBar'
  import SplitPane from './../split-pane'
  import {mapGetters, mapState} from 'vuex'
  import viewPanel from './viewPanel'
  import mapPanel from './mapPanel'
  import sceneManage from '../scene/sceneManage'
  import paramManage from '../scene/paramManage'
  import symbolTool from '../scene/symbolTool'
  import metaManage from '../scene/metaManage'
  import mapMeasure from '../viewOppr/mapMeasure'
  import searchPos from '../searchAnalysis/searchPos'
  import analysisOppr from '../searchAnalysis/analysisOppr'
  import underLine from '../businessOperation/underLine'
  import eleLine from '../businessOperation/eleLine'*/

  export default {
    name: 'MapContainer',

    data () {
      return {
        menuActiveList:[],
        senceId: null,
        refreshParamFlag: 1,
        map2d: null,
        map3d: null,
        viewer: null
      }
    },
    watch: {
      /*menuActive: {
        handler: function (val) {

           if(val.menuActive==='zoomin'){
             if (this.map3d) {
                 this.viewer = this.map3d
               const self = this
               let pos = this.viewer.camera.position
               let carto = this.viewer.scene.globe.ellipsoid.cartesianToCartographic(pos,new Cesium.Cartographic())
               let amount = carto.height

               let dir = this.viewer.camera.direction
               let length =  Cesium.Cartesian3.multiplyByScalar(dir,-amount/5,new Cesium.Cartesian3())
               let endPos = Cesium.Cartesian3.add(pos,length,new Cesium.Cartesian3())
               this.viewer.camera.flyTo({
                 destination:endPos,
                 duration:1,
                 orientation:{
                   direction:self.viewer.camera.direction,
                   up:self.viewer.camera.up
                 }
               })
             }
           }else if(val.menuActive==='zoomout'){
             if (this.map3d) {
               this.viewer = this.map3d
               const self = this
               let pos = this.viewer.camera.position
               let carto = this.viewer.scene.globe.ellipsoid.cartesianToCartographic(pos, new Cesium.Cartographic())
               let amount = carto.height

               let dir = this.viewer.camera.direction
               let length = Cesium.Cartesian3.multiplyByScalar(dir, amount / 5, new Cesium.Cartesian3())
               let endPos = Cesium.Cartesian3.add(pos, length, new Cesium.Cartesian3())
               this.viewer.camera.flyTo({
                 destination: endPos,
                 duration: 1,
                 orientation: {
                   direction: self.viewer.camera.direction,
                   up: self.viewer.camera.up
                 }
               })
             }
           }else if(val.menuActive==='pan'){
               if(this.map3d){
                   this.map3d.trackedEntity = null
               }
           }

           if(val!==null){
             let copyMenuActive = Object.assign({},val);

             if(this.menuActiveList.length==0){
               this.menuActiveList.push(copyMenuActive);
             }else{
               let menuActiveList = this.menuActiveList;
               let isNotExist = false;
              menuActiveList.forEach(function (menuActiveItem, index) {
                if(copyMenuActive.menuActive !== menuActiveItem.menuActive){
                  isNotExist = true;
                }
              })
               if(isNotExist){
                 menuActiveList.push(copyMenuActive);
                 this.menuActiveList = menuActiveList;
               }

             }

           }
        },
        deep: true,
        immediate: true
      }*/
    },
    methods: {/*
      isVisible:function(panel){
        let result = false;
        this.menuActiveList.forEach(function (item, index) {
          if(item.menuActive== panel){
            result = true;
          }
        })
        return result;

      },
      updateSenceId(senceId){
        this.senceId = senceId
      },
      map3dload(mapItem){
        this.map3d = mapItem
      },
      map2dload(mapItem){
        this.map2d = mapItem
      },
      paramManageRefresh(){
        this.refreshParamFlag += this.refreshParamFlag
      }*/
    },
    computed: {
    /*  panelPercentObj: function () {
        if (this.isSplitMode) {
          return {
            minPercent: 0,
            defaultPercent: 50
          }
        } else {
          return {
            minPercent: 0,
            defaultPercent: 100
          }
        }
      },

      ...mapGetters([
        'isSplitMode'
      ]),*/
    },

    components: {
     /* SideBar: SideBar,
      SplitPane: SplitPane,
      sceneManage,
      symbolTool,
      metaManage,
      mapMeasure,
      searchPos,
      underLine,
      eleLine,
      analysisOppr,
      paramManage,
      mapPanel,
      viewPanel*/
    },
    props: ['menuActive']
  }
</script>


<style scoped>

  .sidebar {
    margin: 0 auto;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.3)
  }


</style>
