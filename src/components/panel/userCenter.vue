<template>
  <div>
    <div class="title">用户中心</div>
    <el-collapse accordion>
      <el-collapse-item title="基本信息">
        <div>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="登 录 名">
              <el-input v-model="userInfo.name"></el-input>
            </el-form-item>
            <el-form-item label="中 文 名">
              <el-input v-model="userInfo.label"></el-input>
            </el-form-item>
            <el-form-item label="所属部门">
              <el-input v-model="userInfo.depart"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-collapse-item>

      <el-collapse-item title="系统主题">


      </el-collapse-item>
      <el-collapse-item title="密码修改">


      </el-collapse-item>
    </el-collapse>

  </div>
</template>

<script>

  export default {
    name: 'userCenter',
    data() {
      return {
        userInfo: {name: 'gh-llp', label: '赖良鹏', depart: '信息中心'},
        themeColor: '',
        password: '',
        newPassword: '',
        newPassword2: ''
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
