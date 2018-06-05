<template>
  <div>
    <div>
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="角色表" name="first"></el-tab-pane>
        <el-tab-pane label="部门表" name="second"></el-tab-pane>
        <el-tab-pane label="用户表" name="third"></el-tab-pane>
        <el-tab-pane label="系统日志表" name="fourth"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>

  export default {
    name: '',
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

</style>
