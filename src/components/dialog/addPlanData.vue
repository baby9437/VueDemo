<template>
    <div>
      <el-dialog title="添加/编辑 城市规划设计数据" :visible.sync="centerDialogVisible" width="400px" center>
        <div>
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="方案名称：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="登记时间：">
              <el-input v-model="form.time"></el-input>
            </el-form-item>
            <el-form-item label="设计单位：">
              <el-input v-model="form.depart"></el-input>
            </el-form-item>
            <el-form-item label="联系电话：">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="三维模型数据：">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="1"
                :on-exceed="handleExceed"
                :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传.FDB文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
            <el-form-item label="二维矢量数据：">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="1"
                :on-exceed="handleExceed"
                :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip" style="color: red;line-height: 15px">只能上传.SHP文件，ObjType字段不得为空，其他字段类型和名称要保持一致。</div>
              </el-upload>
            </el-form-item>
          </el-form>
        </div>

        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="centerDialogVisible = false">设置最佳视角</el-button>
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">保存</el-button>
        </span>
      </el-dialog>
    </div>
</template>

<script>

    export default {
        name: 'addPlaneData',
        data() {
            return {
              form:{name:'',time:'',phone:'',depart:''},
              centerDialogVisible:false,
              fileList:[]
            }
        },
        watch: {},
        computed: {},
        methods: {
          handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePreview(file) {
            console.log(file);
          },
          handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
          },
          beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
          }

        },
        mounted() {

        },
        components: {},
    }
</script>
<style scoped>

</style>
