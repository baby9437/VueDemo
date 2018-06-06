<template>
  <div>
    <div class="title">用户权限</div>
      <div class="panelBody" style="width: 400px">
        <el-tabs v-model="activeTab" type="card" @tab-click="">
          <el-tab-pane label="角色表" name="first">
            <el-table :data="tb_role" style="width: 100%">
              <el-table-column prop="id" label="ID" width="100"></el-table-column>
              <el-table-column prop="name" label="名称" width="100"></el-table-column>
              <el-table-column prop="desc" label="描述" width="100"></el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="部门表" name="second">
            <el-table :data="tb_depart" style="width: 100%">
              <el-table-column prop="id" label="ID" width="100"></el-table-column>
              <el-table-column prop="name" label="名称" width="100"></el-table-column>
              <el-table-column prop="desc" label="描述" width="100"></el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="用户表" name="third">
            <el-table :data="tb_user" style="width: 100%">
              <el-table-column prop="id" label="ID" width="100"></el-table-column>
              <el-table-column prop="name" label="名称" width="100"></el-table-column>
              <el-table-column prop="cnName" label="中文名" width="100"></el-table-column>
              <el-table-column prop="password" label="密码" width="100"></el-table-column>
              <el-table-column prop="createTime" label="创建时间" width="100"></el-table-column>
              <el-table-column prop="lastLoginTime" label="上次登录时间" width="100"></el-table-column>
              <el-table-column prop="depart" label="部门" width="100"></el-table-column>
              <el-table-column prop="role" label="角色" width="100"></el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="系统日志表" name="fourth">
            <el-table :data="tb_log" style="width: 100%">
              <el-table-column prop="id" label="日志ID" width="100"></el-table-column>
              <el-table-column prop="userId" label="用户ID" width="100"></el-table-column>
              <el-table-column prop="name" label="用户名" width="100"></el-table-column>
              <el-table-column prop="cnName" label="中文名" width="100"></el-table-column>
              <el-table-column prop="pc" label="电脑" width="100"></el-table-column>
              <el-table-column prop="ip" label="IP" width="100"></el-table-column>
              <el-table-column prop="time" label="时间" width="100"></el-table-column>
              <el-table-column prop="desc" label="操作内容" width="100"></el-table-column>
            </el-table>
          </el-tab-pane>
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
        tb_role:[],
        tb_depart:[],
        tb_user:[],
        tb_log:[]
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
