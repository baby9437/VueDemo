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
      <search></search>
    </div>
  </div>
</template>

<script>
  import search from './panel/search'

  export default {
    name: 'PanelContainer',
    data(){
      return {
        title: 'custom title',
        panelVisible:false
      }
    },
    props:['menuId','visible'],
    watch:{
      menuId(val,oldVal){
        this.panelVisible = !!val&&!!this.visible
      },
      visible(val,oldVal){
        this.panelVisible = !!val&&!!this.menuId
      },

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
      }
    },
    components: {
      search: search
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
