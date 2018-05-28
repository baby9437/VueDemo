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
     content
    </div>
  </div>
</template>

<script>

  export default {
    name: 'PanelContainer',
    data(){
      return {
        title: 'custom title',
        panelVisible:true
      }
    },
    props:['menuId'],
    watch:{
      visible(val){
        this.panelVisible = val
      }
    },
    computed(){

    },
    methods: {
      handleClose(){
        this.panelVisible=false
      }
    }
  }
</script>
<style scoped>
  .panel{
    position: absolute;width: 300px;background-color: white;right: -300px;top: 51px;border: 1px solid lightgray;
  }
  .panelShow{
    color: red;
    transform: translateX(-370px);
    transition: transform 1s linear 0s;
  }
  .panelHidden{
    transform: translateX(370px);
    transition: transform 1s linear 0s;
  }
#header{
  height: 40px;
  background-color: #00bcd4;
}
</style>
