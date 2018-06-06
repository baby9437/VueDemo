<template>
  <div>
    <div class="title">用户中心</div>
    <div class="panelBody">
       <el-collapse accordion>
      <el-collapse-item title="基本信息">
        <div>
          <el-form ref="userInfo" :model="userInfo" label-width="80px">
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
        <div style="text-align: center">
          <el-row>
            <el-button style="background-color: red ;width: 50px;height: 50px"></el-button>
            <el-button style="background-color: yellow;width: 50px;height: 50px"></el-button>
          </el-row>

        </div>
      </el-collapse-item>
      <el-collapse-item title="密码修改">
        <div class="content">
          原密码:
          <el-input v-model="password" placeholder="请输入内容" style="width: 150px;"></el-input>
        </div>
        <div class="content">
          新密码:
          <el-input v-model="newPassword" placeholder="请输入内容" style="width: 150px;"></el-input>
        </div>
        <div class="content">
          确认:
          <el-input v-model="newPassword2" placeholder="请输入内容" style="width: 150px;margin-left: 13px"></el-input>
        </div>
    <div style="text-align: center"><el-button>修  改</el-button></div>
      </el-collapse-item>
    </el-collapse>
    </div>
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
.content{
  padding: 5px 2px 5px 2px;
}

</style>
