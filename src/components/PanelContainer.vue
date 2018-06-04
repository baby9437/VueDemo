<template>
  <div class="panel" :class="[{panelShow:panelVisible},{panelHidden:!panelVisible}]">
    <div id="header">
      <!--<div style="text-align: center;display: block;font-size: 25px;color: white;">{{title}}</div>-->
      <div style="position: absolute;right: 0px;top: 0px;" @click="handleClose">
        <img style="width: 40px;" src="../../static/img/png64/101Close64.png" alt="">
      </div>
    </div>
    <!--内容-->
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

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
    methods: {
      handleClose(){
        this.$emit('handleClose')
      },
      linkTo(){
        console.log('router',this.panel)
        this.$router.push({path:'/'+this.panel})
      }
    },
    components: {

    },
  }
</script>
<style scoped>
  .panel{
    position: absolute;width: 250px;background-color: white;right: 60px;top: 51px;border: 1px solid lightgray;
    max-height: calc(100% - 60px);
    overflow-x: hidden;
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

  >>> .title{
    position: absolute;
    text-align: center;
    display: inline-block;
    font-size: 25px;
    color: white;
    left: 40px;
    top: 2px;
    width: calc(100% - 80px);
  }
</style>
