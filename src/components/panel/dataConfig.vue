<template>
    <div class="panelBody">
        <el-tabs v-model="activeTab" type="card" @tab-click="">
          <el-tab-pane label="数据库配置" name="">

            1
          </el-tab-pane>
          <el-tab-pane label="项目类型表" name="">

            2
          </el-tab-pane>
          <el-tab-pane label="项目状态表" name="">
            3

          </el-tab-pane>
          <el-tab-pane label="方案结构表" name="">


          </el-tab-pane>
          <el-tab-pane label="对象类型表" name="">


          </el-tab-pane>
          <el-tab-pane label="数据来源表" name="">


          </el-tab-pane>
          <el-tab-pane label="规划一张图系统" name="">


          </el-tab-pane>
          <el-tab-pane label="规划综合应用平台" name="">


          </el-tab-pane>
          <el-tab-pane label="多规合一信息联动平台" name="">


          </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>

    export default {
        name: '',
        data() {
            return {
              activeTab:''
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
