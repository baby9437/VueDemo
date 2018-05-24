import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    appName:"",
    isLoading:true,
    mapdata:null,
    configdata:null,
    viewer:null,
    closePanelObj:null,
    extent:null
  },
  getters: {
    isLoading:state=> {
      return state.isLoading;
    },
    panelActiveObj:state =>{
      return state.mapdata&&state.mapdata.panelActiveObj?state.mapdata.panelActiveObj:{"menuActive":"",
        "visibleFlag":false}
    },
    appName:state=>{
      return state.appName
    },
    dynamicLayerVisible:state=>{
      return state.mapdata&&state.mapdata.dynamicLayerVisible?state.mapdata.dynamicLayerVisible:false;
    },
    isSplitMode:state=>{
      return state.mapdata&&state.mapdata.isSplitMode?state.mapdata.isSplitMode:false;
    },
    mapdata:state=>{
      return state.mapdata;
    },
    mapdata2:state=>{
      return state.mapdata2;
    },
    configdata:state=>{
      return state.configdata;
    },
    viewer:state=>{
      return state.viewer;
    },
    closePanelObj:state=>{
      return state.closePanelObj
    },
    extent:state=>{
      return state.extent
    },
    accessToken:state=>{
      return state.configdata&&state.configdata.accessToken?state.configdata.accessToken:null
    }
   /* mapCenter:state=>{
      return state.mapdata.mapCenter;
    },
    currentMapCenter:state=>{
      return state.configdata.currentMapCenter;
    },*/

  },
  mutations: {
/*    currentMapCenterMut(state,val){
      state.configdata.currentMapCenter= val;
    },
    updateYear(state,val){
      state.year = val;
    },*/
    toggleLoading(state){
      state.isLoading = !state.isLoading;
    },
    openPanel(state,val){
      // console.log(val,"---------------------")
      state.mapdata.panelActiveObj = {
        menuActive:val.panelName,
        visibleFlag:!state.mapdata.panelActiveObj.visibleFlag
      }
    },
    toggleDynamicLayerVisible(state,val){
      state.mapdata.dynamicLayerVisible = val
    },
    updateMapData(state,val){
      state.mapdata = val;
    },
    updateConfigData(state,config){
      state.mapdata = config.mapdata;
      state.appName = config.appName;
      state.mapdata2 = config.mapdata2;
      state.configdata=config.configdata;
     /* if(!sessionStorage.getItem("appName")){
        sessionStorage.setItem("appName",state.appName)
      }*/
    },
    closeMenuPanel(state,val){
      state.closePanelObj=val
    },
    changeSplitMode(state,val){
      state.mapdata.isSplitMode = val;
    },
    setViewer(state,val){
      state.viewer = val;
    },
    updateExtent(state,val){
      state.extent = val;
    }
   /* changeMapCenter(state,val){
      state.mapdata.mapCenter=val;
    },*/
  }/*,
  //新增模块
  modules:{
    geocoding
  }*/
})

export default store
