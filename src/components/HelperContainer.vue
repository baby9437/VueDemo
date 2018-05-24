<template>
    <div>
      <!--<div class="res-sidebar-container">
        <help-side-bar class="sidebar-container" @goto="goto"></help-side-bar>
      </div>
      <div class="res-content-container">
        <div class="content-container">
          &lt;!&ndash;<router-view/>&ndash;&gt;
          <help-detail :tar-url="tarUrl"></help-detail>
        </div>
      </div>-->
     <!-- <help-banner></help-banner>

      <footer-comp></footer-comp>-->
    </div>
</template>


<script>
//   import HelpBanner from './helpComponent/HelpBanner'
//   import HelpSideBar from './helpComponent/HelperSideBar'
//   import helpDetail from './helpComponent/helpDetail'
//   import footerComp from './footerComp'

   export default{
      name:'HelperContainer',
     data(){
       return {tarUrl:"introduction"}
     },
      mounted(){
//          this.$router.push("/App/helper/0")
      },
     methods:{
        goto(url){
           this.tarUrl=url
        }
     },
      components:{
        /*  HelpSideBar,
          helpDetail*/
         /* HelpBanner,
          footerComp*/
      }
    }
</script>
<style scoped>
  .res-sidebar-container{
    width: 200px;
    background: #006f6a;
    top:61px;
    bottom: 0;
    position: fixed;
  }
  .res-content-container {
    left: 200px;
    position: fixed;
    right: 0;
    top: 61px;
    bottom: 0;
    background: #f3f3f4;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .content-container {
    border-radius: 4px;
    padding:10px;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
    background: #fff;
  }

</style>
