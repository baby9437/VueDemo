<template>
    <div>
      <div class="title">综合类分析</div>
      <el-collapse accordion>
        <el-collapse-item title="多方案比对分">

        </el-collapse-item>
        <el-collapse-item title="规划方案综合研判">

        </el-collapse-item>
      </el-collapse>
    </div>
</template>

<script>

    export default {
        name: 'compre',
        data() {
            return {}
        },
        watch: {},
        computed: {},
        methods: {},
        mounted() {

        },
        components: {},
    }
</script>
<style scoped>
  .content{
    text-align: center;
    margin-bottom: 10px;
  }
  .item{
    display: inline-block;
    margin:0 10px 0 10px;
  }
  .item img{
    width: 30px;
  }
  .el-input{
    width: 50%;
  }

  .button {
    float: right;
    padding-bottom: 10px
  }
  .el-checkbox+.el-checkbox{
    margin-left: 0;
  }
  .el-form-item{
    margin-bottom: 10px
  }
  >>> .el-form-item__content{
    line-height: 25px;
    margin-left:20px!important;
  }
</style>
