<template>
  <div class="panel" :class="[{panelShow:panelVisible},{panelHidden:!panelVisible}]">
    <div id="header">
      <div style="text-align: center;display: block;font-size: 25px;color: white;">{{title}}</div>
      <div style="position: absolute;right: 0px;top: 0px;" @click="handleClose">
        <img style="width: 40px;" src="../../static/img/png64/101Close64.png" alt="">
      </div>
    </div>
    <!--内容-->
    <div id="content">
      <!--<search></search>-->
      <!--<marks></marks>-->
      <!--<navigate></navigate>-->
      <!--<terrain></terrain>-->
      <!--<scale></scale>-->
      <!--<export-model></export-model>-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import search from './panel/search'
  import marks from './panel/marks'
  import navigate from './panel/navigate'
  import terrain from './panel/terrain'
  import scale from './panel/scale'
  import exportModel from './panel/exportModel'

  export default {
    name: 'PanelContainer',
    data(){
      return {
        title: 'custom title',
        panelVisible:false
      }
    },
    props:['panel','visible'],
    watch:{
      panel(val,oldVal){
        this.panelVisible = !!val&&!!this.visible
        if(this.panelVisible){
          this.linkTo();
        }
      },
      visible(val,oldVal){
        this.panelVisible = !!val&&!!this.panel
        if(this.panelVisible){
          this.linkTo();
        }
      }
    },
   /* computed:{
      getPanelState: function (){
        this.panelVisible = !!(this.menuId&&this.visible)
        console.log('panelVisible',this.panelVisible)
        return this.panelVisible
      }
    },*/
    methods: {
      handleClose(){
        this.$emit('handleClose')
      },
      linkTo(){
        this.$router.push({path:'/'+this.panel})
      }
    },
    components: {
      search: search,
      marks: marks,
      navigate: navigate,
      terrain:terrain,
      scale:scale,
      exportModel:exportModel
    },
  }
</script>
<style scoped>
  .panel{
    position: absolute;width: 250px;background-color: white;right: 60px;top: 51px;border: 1px solid lightgray;
  }
  .panelShow{
    display: block;
   /* color: red;
    transform: translateX(-370px);
    transition: transform 1s linear 0s;*/
  }
  .panelHidden{
    display: none;
   /* transform: translateX(370px);
    transition: transform 1s linear 0s;*/
  }
#header{
  height: 40px;
  background-color: #00bcd4;
}
  #content{
    padding: 10px;
  }
</style>
