<template>
  <div>
    <div class="title">综合类分析</div>
    <div class="panelBody">
      <el-collapse accordion>
        <el-collapse-item title="多方案比对分析">
          <div>
            <div class="demo-input-suffix">
              项目搜索：
              <el-input
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="search">
              </el-input>
            </div>
            <div>
              <ul>
                <li v-for="item in projects">{{item}}</li>
              </ul>
            </div>
            <div>
              选择分屏显示方式：
            </div>
            <div>
              <el-button-group>
                <el-button type="primary">左右</el-button>
                <el-button type="primary">上下</el-button>
                <el-button type="primary">左中右</el-button>
                <el-button type="primary">四分屏</el-button>
              </el-button-group>
            </div>
            <div style="text-align: center;padding: 5px">
              <div style="padding: 5px">
                <el-select v-model="schema" placeholder="请选择">
                  <el-option
                    v-for="item in schemas"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div style="padding: 5px">
                <el-select v-model="schema" placeholder="请选择">
                  <el-option
                    v-for="item in schemas"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div>
                <el-button>开始分析</el-button>
              </div>

            </div>


          </div>
        </el-collapse-item>
        <el-collapse-item title="规划方案综合研判">
          <div>
            <div class="demo-input-suffix">
              项目搜索：
              <el-input
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="search">
              </el-input>
            </div>
            <div>
              <ul>
                <li v-for="item in projects">{{item}}</li>
              </ul>
            </div>
            <div>
              选择方案：
              <el-select v-model="schema" placeholder="请选择">
                <el-option
                  v-for="item in schemas"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div>
              设计单位：
              <el-select v-model="orga" placeholder="请选择">
                <el-option
                  v-for="item in orgas"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div>
              方案描述:
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="schemaDesc">
              </el-input>
            </div>
            <div style="padding-top: 10px">
              <el-row>
                <el-button>综合研判</el-button>
                <el-button>保存意见</el-button>
              </el-row>
            </div>

            <div>
              经办意见:
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="schemaDesc">
              </el-input>
            </div>
            <div>
              领导意见：
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="schemaDesc">
              </el-input>
            </div>
            <div>
              专家意见：
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="schemaDesc">
              </el-input>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'compre',
    data() {
      return {
        search: '',
        projects: ['项目1', '项目2'],
        schemas: [
          {label: '1', value: '1'},
          {label: '2', value: '2'},
          {label: '3', value: '3'}
        ],
        orgas: [
          {label: '1', value: '1'},
          {label: '2', value: '2'},
          {label: '3', value: '3'}
        ],
        schema: '',
        orga: '',
        schemaDesc: ''
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

  .el-input {
    width: 50%;
  }

  .el-select {
    width: 120px;
  }

  .button {
    float: right;
    padding-bottom: 10px
  }

  .el-button {
    padding: 10px;
  }

  .el-checkbox + .el-checkbox {
    margin-left: 0;
  }

  .el-form-item {
    margin-bottom: 10px
  }

  > > > .el-form-item__content {
    line-height: 25px;
    margin-left: 20px !important;
  }
</style>
