<template>
    <div>
      <div class="title">统计类分析</div>
      <el-collapse accordion>
        <el-collapse-item title="建筑物分类分析">
          <div>
            <el-form ref="form_classify" :model="form_classify" label-width="100px" >
              <el-form-item label="分类字段：">
                <el-select v-model="form_classify.field"></el-select>
              </el-form-item>
            </el-form>
          </div>

          <el-row style="margin-bottom: 2px">
            <el-button>分 析 </el-button>
            <el-button>图表展示</el-button>
          </el-row>

        </el-collapse-item>
        <el-collapse-item title="拆迁量预估">


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
              form_classify:{field:''}

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
