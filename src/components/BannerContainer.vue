<template>
  <div class="top-nav">
    <img src="static/img/Logo.png" alt=""  class="logo" @click="handleRoot"><span>{{appTitle}}</span>
        <slot name="main">

        </slot>
    <el-tooltip  effect="dark" content="点击全屏/取消全屏" placement="bottom">
      <!--<Screenfull class="full-screen"  style="position: absolute;right: 15px;top: 2px;"></Screenfull>-->
    </el-tooltip>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
//  import Screenfull from './Screenfull'

  export default {
  name: 'BannerContainer',
//    components: {Screenfull},
    data(){
      return {
          appTitle:'基于云架构的二三维一体化应用'
      }
    },
    methods: {
      handleRoot(){
          this.$router.push('/')
      }
    },
    computed:{
      ...mapGetters([
        'appName'
      ]),
    },
    watch:{
        appName:function (val) {

          if(val&&val!==""){
              this.appTitle = val
          }else{
            let appTitle = sessionStorage.getItem('appName')
            if(appTitle){
              this.appTitle = appTitle;
            }
          }
        }
    }

}
</script>
<style scoped>
  .logo {
    cursor: pointer;
  }
  .top-nav{
    position: relative;
    height: 61px;
    line-height: 61px;
    border-bottom: 1px solid #ebeef5;
    font-size: 22px;
    background-color: #006f6a;
    color: #ffff;
    padding-left: 10px;
    box-shadow: 2px 0 8px rgba(0,0,0,0.3);
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  .top-nav span {
    color:#fff;
  }
  .top-nav img{
    margin-right: 10px;
    vertical-align:middle;
    height: 60px;width:144px;margin-top: 0px;padding-top:0px;
  }



</style>
