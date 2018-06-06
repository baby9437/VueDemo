<template>
    <div>
      <div class="title">比例尺</div>
      <div class="panelBody">
        <div>比例尺选择</div>
        <div style="padding: 10px 0 10px 10px">
          <el-select v-model="value" placeholder="请选择比例尺">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <el-button type="primary" style="float: right;margin-bottom: 10px">确定</el-button>
      </div>
    </div>
</template>

<script>

    export default {
        name: 'scale',
        data() {
            return {
              options:[
                {value:'0',label:'1:500'},
                {value:'1',label:'1:1000'},
                {value:'2',label:'1:2000'},
                {value:'3',label:'1:5000'},
                {value:'4',label:'1:10000'},
              ],
              value:''
            }
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

</style>
