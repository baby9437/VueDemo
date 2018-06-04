<template>
    <div>
      <div class="title">统计类分析</div>
      <el-collapse accordion>
        <el-collapse-item title="建筑物分类分析">
          <div>
            <el-form ref="form_classify" :model="form_classify" label-width="100px" >
              <el-form-item label="分类字段：">
                <el-select v-model="form_classify.field">
                  <el-option
                    v-for="item in classifyItems"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>

          <el-row style="margin-bottom: 2px">
            <el-button>分 析 </el-button>
            <el-button>图表展示</el-button>
          </el-row>

          <div style="text-align: center ;padding-top: 10px">
            <el-checkbox v-model="form_classify.areaUpper">数值代表大于或等于该值的范围</el-checkbox>
            <el-checkbox v-model="form_classify.areaLower">数值代表小于或等于该值的范围</el-checkbox>
          </div>

          <div>
            <el-table ref="table_classify" :data="table_classify" highlight-current-row @current-change=""
                      style="width: 100%">
              <el-table-column type="index" width="50"></el-table-column>
              <el-table-column property="region" label="值/范围" width="80"></el-table-column>
              <el-table-column property="color" label="颜色" width="120"></el-table-column>
            </el-table>
          </div>

        </el-collapse-item>
        <el-collapse-item title="拆迁量预估">
          <el-row style="margin-bottom: 2px">
            <el-button>拆迁范围</el-button>
            <el-button>开始分析</el-button>
          </el-row>

          <div>
            <el-table ref="table_demolition" :data="table_demolition" highlight-current-row @current-change=""
                      style="width: 100%">
              <el-table-column type="index" width="50"></el-table-column>
              <el-table-column property="type" label="类型" width="80"></el-table-column>
              <el-table-column property="data" label="数值" width="120"></el-table-column>
            </el-table>

          </div>

        </el-collapse-item>
        <el-collapse-item title="规划推演及指标计算">


        </el-collapse-item>
      </el-collapse>
    </div>
</template>

<script>

    export default {
        name: 'staticAnalysis',
        data() {
            return {
              classifyItems:[
                {label: '结构',value:'structure'},
                {label:  '年代',value:'time'},
                {label: '高度',value:'height'},
                { label: '用途',value:'use' }
              ],
              form_classify:{field:'',areaUpper:'',areaLower:""},
              table_classify:[],
              table_demolition:[]

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
    text-align: center;
    margin-bottom: 10px;
  }
  .item{
    display: inline-block;
    margin:0 10px 0 10px;
  }
  .item img{
    width: 30px;
  }
  .el-input{
    width: 50%;
  }

  .button {
    float: right;
    padding-bottom: 10px
  }
  .el-checkbox+.el-checkbox{
    margin-left: 0;
  }
  .el-form-item{
    margin-bottom: 10px
  }
  >>> .el-form-item__content{
    line-height: 25px;
    margin-left:20px!important;
  }
</style>
