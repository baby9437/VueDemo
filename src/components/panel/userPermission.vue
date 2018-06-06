<template>
  <div>
      <div class="panelBody" style="width: 500px">
        <el-tabs v-model="activeTab" type="card" @tab-click="">
          <el-tab-pane label="角色表" name="first">角色表</el-tab-pane>
          <el-tab-pane label="部门表" name="second">部门表</el-tab-pane>
          <el-tab-pane label="用户表" name="third">用户表</el-tab-pane>
          <el-tab-pane label="系统日志表" name="fourth">系统日志表</el-tab-pane>
        </el-tabs>
      </div>
  </div>
</template>

<script>

  export default {
    name: 'userPermission',
    data() {
      return {
        activeTab:'',
        dialogVisible:true
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
