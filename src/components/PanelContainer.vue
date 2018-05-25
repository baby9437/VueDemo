<template>
  <div style="position: absolute;width: 300px;height: 100%;background-color: white;right: 46px;top: 51px;border: 1px solid lightgray;">
    <div id="header">
      <div style="text-align: center;display: block;font-size: 25px;color: white;">{{title}}</div>
      <div style="position: absolute;right: 0px;top: 0px;">
        <img style="width: 40px;" src="../../static/img/png64/101Close64.png" alt="">
      </div>

    </div>
    <div id="content">
     content
    </div>
  </div>
</template>

<script>

  export default {
    name: 'test',
    data(){
      return {
        title: 'title'
      }
    },
    methods: {

    }
  }
</script>
<style scoped>
#header{
  height: 40px;
  background-color: #00bcd4;
}
</style>
