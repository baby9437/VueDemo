<template>
  <banner-container>
    <template slot="main">
      <div style="display: inline-block;position: absolute;right: 0">
      <div class="top-btn" @click="onClick()">
          <img class="top-btn-img" src="/static/img/png64/dog_house-64.png" alt="">
        </div>
      <div class="top-btn" @click="onClick()">
        <img class="top-btn-img" src="../../static/img/png64/220fullscreen.png" alt="">
      </div>
      <div class="top-btn" @click="onClick()">
        <img class="top-btn-img" src="../../static/img/png64/pan1.png" alt="">
      </div>
      <div class="top-btn" @click="onClick()">
        <img class="top-btn-img" src="../../static/img/png64/311info.png" alt="">
      </div>
      <div class="top-btn" @click="onClick()">
        <img class="top-btn-img" src="../../static/img/png64/340movie.png" alt="">
      </div>
      <div class="top-btn" @click="onClick()">
        <img class="top-btn-img" src="../../static/img/png64/240walk.png" alt="">
      </div>
      <div class="top-btn" @click="onClick()">
        <img class="top-btn-img" src="../../static/img/png64/251sun.png" alt="">
      </div>
      <div style="width: 50px;display: inline-block"></div>

        <!--用户侧边栏按钮-->
      <div class="top-btn" @click="onClick()">
        <img class="top-btn-img" src="../../static/img/png64/100user1.png" alt="">
        <div style="display: inline-block;">Admin</div>
      </div>
      <div class="top-btn" @click="onMenuClick()">
        <img class="top-btn-img" src="../../static/img/png64/menu.svg" alt="">
      </div>

      </div>
    </template>
  </banner-container>
</template>

<script>
  import {mapGetters} from 'vuex'
  import BannerContainer from './BannerContainer'

  export default {
    name: 'AppBanner',
    components: {BannerContainer},
    data(){
      return {
        activeIndex: ''
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        if (key == "") {
          this.$message({
            message: '未设置菜单路径',
            type: 'warning'
          });
          return;
        }
        this.$emit("openMenu",{
            panelName: key,
            type: key == "helper" ? "helper" : "map"
          })
        /* if(key=="Helper"){
         this.$router.push({path:'/Helper'});
         }else{
         this.$emit("openMenu",key)
         }*/
      },
      onClick(){
        console.log('--------')
      },
      onMenuClick(){
        this.$emit('handleSidebar')
      }
    },
    watch: {
      closePanelObj: {
        handler: function (val) {
          this.activeIndex = `${Date.now()}`
        },
        immediate: true
      }
    },
    computed: {
      ...mapGetters([
        'appName',
        'closePanelObj'
      ])
    }

  }
</script>
<style scoped>
  .el-menu-demo {
    margin: 0px;
    list-style: none;
    position: absolute;
    right: 70px;
    top: 0;
    border-bottom: none;
    font-weight: 500;
    font-family: 'Microsoft YaHei';
    font-size: 15px;
  }
  .top-btn{
    display: inline-block
  }
  .top-btn .top-btn-img{
    width: 35px;height: 35px;cursor: pointer;
  }
  .menuRotate{

  }
</style>
