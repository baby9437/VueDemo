<template>
  <div>
    <div class="title">项目管理</div>
    <div class="panelBody" style="width: 300px;">
      <el-tree :data="data5" show-checkbox node-key="id" default-expand-all :expand-on-click-node="false">
          <span class="custom-tree-node" slot-scope="{ node, data }" style="width: 100%;">
            <span style="font-size: 14px">{{ node.label }}</span>
            <span style="float: right">
              <el-button type="primary" size="mini" @click="" v-show="node.data.btn.nav">定位</el-button>
              <el-button type="danger" size="mini" @click="" v-show="node.data.btn.add"
                         @click="add(node)">添加</el-button>
              <el-button type="danger" size="mini" @click="" v-show="node.data.btn.edit">编辑</el-button>
              <el-button type="primary" size="mini" @click="" v-show="node.data.btn.newPro">新建项目</el-button>
            </span>
          </span>
      </el-tree>
    </div>

    <add-plane-data ref="addPlaneData"></add-plane-data>
  </div>
</template>

<script>
  import addPlaneData from '../dialog/addPlanData.vue'

  export default {
    name: 'project',
    data() {
      const data = [{
        id: 1,
        label: '城市现状数据',
        children: [],
        btn: {add: false, edit: false, nav: false, newPro: false}
      }, {
        id: 2,
        label: '城市规划设计',
        children: [{
          id: 21,
          label: '三江口组图控规数据',
          btn: {add: false, edit: true, nav: true, newPro: false}
        }, {
          id: 22,
          label: '滨海新区城市设计模型',
          btn: {add: false, edit: true, nav: true, newPro: false}
        }, {
          id: 23,
          label: '南屿组团规划总平图',
          btn: {add: false, edit: true, nav: true, newPro: false}
        }],
        btn: {add: true, edit: false, nav: false, newPro: false}
      }, {
        id: 3,
        label: '规划审批项目',
        children: [{
          id: 31,
          label: '规划项目A',
          children: [{
            id: 311,
            label: '范围红线',
            btn: {add: false, edit: false, nav: true, newPro: false}
          }, {
            id: 312,
            label: '规划素模',
            btn: {add: false, edit: false, nav: true, newPro: false}
          }, {
            id: 313,
            label: '竣工模型',
            btn: {add: false, edit: false, nav: true, newPro: false}
          }, {
            id: 314,
            label: '报件方案01',
            btn: {add: false, edit: true, nav: true, newPro: false}
          }, {
            id: 315,
            label: '报件方案02',
            btn: {add: false, edit: true, nav: true, newPro: false}
          }],
          btn: {add: true, edit: true, nav: true, newPro: false}
        }, {
          id: 32,
          label: '规划项目C',
          children: [{
            id: 321,
            label: '范围红线',
            btn: {add: false, edit: true, nav: true, newPro: false}
          }, {
            id: 322,
            label: '规划素模',
            btn: {add: false, edit: true, nav: true, newPro: false}
          }],
          btn: {add: true, edit: true, nav: true, newPro: false}
        }],
        btn: {add: false, edit: false, nav: false, newPro: true}
      }];
      return {
        data5: JSON.parse(JSON.stringify(data))
      }
    },
    watch: {},
    computed: {},
    methods: {
      add(node) {
        this.$refs.addPlaneData.centerDialogVisible = true
      }
    },
    mounted() {

    },
    components: {
      addPlaneData
    },
  }
</script>
<style scoped>

  .el-button + .el-button {
    margin-left: 0px;
  }

  .el-button--mini, .el-button--mini.is-round {
    padding: 3px 4px;
  }

</style>
