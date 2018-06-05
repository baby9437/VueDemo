<template>
  <div class="top-nav">
    <span style="margin-left: 0px">{{appTitle}}</span>
        <slot name="main">

        </slot>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
//  import Screenfull from './Screenfull'

  export default {
  name: 'BannerContainer',
    data(){
      return {
          appTitle:'福州市三维规划辅助决策支持系统'
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
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ebeef5;
    font-size: 22px;
    background-color: #00bcd4;
    color: #ffff;
    padding-left: 10px;
    box-shadow: 2px 0 8px rgba(0,0,0,0.3);
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  .top-nav span {
    color:#fff;
  }
  .top-nav img{
    margin-right: 7px;
    vertical-align:middle;
    height: 60px;width:144px;margin-top: 0px;padding-top:0px;
  }



</style>
