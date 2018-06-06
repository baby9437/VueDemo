<template>
  <div>
    <div class="title">系统对接</div>
    <div class="panelBody">
      <el-collapse accordion>
        <el-collapse-item title=" 规划一张图系统">
          <div>
            选择展示方式：
          </div>
          <el-button-group>
            <el-button type="primary">不分屏</el-button>
            <el-button type="primary">左右</el-button>
            <el-button type="primary">上下</el-button>
          </el-button-group>

          <div style="padding: 10px">
            <el-switch
              v-model="related"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
            二三维联动
          </div>

          <div style="padding: 10px">
            <el-switch
              v-model="overlay"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
            二三维叠加
          </div>

          <div class="button">
            <el-button type="primary">展示</el-button>
          </div>

        </el-collapse-item>
        <el-collapse-item title="规划综合应用平台">
          <div style="padding: 10px">
            <el-switch
              v-model="related"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
            叠加规划编制数据
          </div>

          <div style="padding: 10px">
            <el-switch
              v-model="overlay"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
            叠加规划审批红线
          </div>

          <div class="button">
            <el-button type="primary">展示</el-button>
          </div>
        </el-collapse-item>
        <el-collapse-item title="多规合一信息联动平台">
          <div style="padding: 10px">
            <el-switch
              v-model="overlay"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
            叠加多规合一控制线数据
          </div>

          <div class="button">
            <el-button type="primary">展示</el-button>
          </div>

        </el-collapse-item>
      </el-collapse>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'connect',
    data() {
      return {
        related: true,
        overlay: false
      }
    },
    methods: {
      handleEdit() {
        console.log('------')
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
<style scoped>
  .content {
    text-align: center;
    margin-bottom: 10px;
  }

  .item {
    display: inline-block;
    margin: 0 10px 0 10px;
  }

  .item img {
    width: 30px;
  }

  .button {
    float: right;
    padding-bottom: 10px
  }
</style>
