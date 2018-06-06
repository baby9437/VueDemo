<template>
<div>
  <div class="title">用户权限</div>
  <div class="panelBody" style="width: 500px;">
    <el-tabs v-model="activeTab" type="card" @tab-click="">
      <el-tab-pane label="数据库配置" name="">
        <div style="text-align: center;">
          <div style="display: inline-block;">
            <div>三维现状模型数据：</div>
            <div>
              <el-form ref="form_current" :model="form_current" label-width="80px">
                <el-form-item label="Server IP:">
                  <el-input v-model="form_current.ip"></el-input>
                </el-form-item>
                <el-form-item label="Port：">
                  <el-input v-model="form_current.port"></el-input>
                </el-form-item>
                <el-form-item label="Service：">
                  <el-input v-model="form_current.service"></el-input>
                </el-form-item>
                <el-form-item label="Password：">
                  <el-input v-model="form_current.psw"></el-input>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div style="display: inline-block;">
            <div>三维现状地形数据：</div>
            <div>
              <el-form ref="form_terrain" :model="form_current" label-width="80px">
                <el-form-item label="Server IP:">
                  <el-input v-model="form_terrain.ip"></el-input>
                </el-form-item>
                <el-form-item label="Port：">
                  <el-input v-model="form_terrain.port"></el-input>
                </el-form-item>
                <el-form-item label="数据源：">
                  <el-input v-model="form_terrain.dataSource"></el-input>
                </el-form-item>
                <el-form-item label="数据集：">
                  <el-input v-model="form_terrain.dataset"></el-input>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div style="display: inline-block;">
            <div>三维规划模型数据：</div>
            <div>
              <el-form ref="form_plan" :model="form_plan" label-width="80px">
                <el-form-item label="Server IP:">
                  <el-input v-model="form_plan.ip"></el-input>
                </el-form-item>
                <el-form-item label="Port：">
                  <el-input v-model="form_plan.port"></el-input>
                </el-form-item>
                <el-form-item label="Service：">
                  <el-input v-model="form_plan.service"></el-input>
                </el-form-item>
                <el-form-item label="Password：">
                  <el-input v-model="form_plan.psw"></el-input>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>

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
</div>

</template>

<script>

    export default {
        name: '',
        data() {
            return {
              activeTab:'',
              form_current:{ip:'',port:'',service:'',psw:''},
              form_terrain:{ip:'',port:'',dataSource:'',dataset:''},
              form_plan:{ip:'',port:'',service:'',psw:''}
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
