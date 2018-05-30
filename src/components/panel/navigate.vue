<template>
  <div>
    <div style="position: absolute;left:0px;top: 0px;" @click="dialogFormVisible = true">
      <img style="width: 40px;" src="../../../static/img/png64/add.png" alt="">
    </div>
    <div>
      <el-table :data="navigateTable" >
        <el-table-column prop="name" label="名称" width="80" ></el-table-column>
        <el-table-column  label="快捷" width="50">
          <template slot-scope="scope">
            <div>
              <el-checkbox v-model="scope.row.checked"></el-checkbox>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="播放" width="50">
          <template slot-scope="scope">
            <div>
              <img style="width: 25px" src="../../../static/img/png64/112play.png" alt="">
            </div>
          </template>
        </el-table-column>
        <el-table-column label="编辑" width="50">
          <template slot-scope="scope">
            <div @click="handleEdit(scope.row)">
              <img style="width: 25px" src="../../../static/img/png64/edit.png" alt="">
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="添加/编辑飞行导航" :visible.sync="dialogFormVisible" width="60%">
      <el-form :model="editingForm" label-width="100px">
        <el-form-item label="名称：">
          <el-input v-model="editingForm.name" auto-complete="off" style="display: inline-block;width: 100px"></el-input>
        </el-form-item>
        <el-form-item label="导航文件：">
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
            <div slot="tip" class="el-upload__tip">只能上传xml文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

  export default {
    name: 'navigate',
    data(){
      return {
        fileList:[],
        dialogFormVisible:false,
        editingForm:{
          name:'',
          checked:true,
          url:''
        },
        navigateTable:[{
          name:'导航1',
          checked:true,
          url:''
        },
          {
            name:'导航2',
            checked:false,
            url:''
          },
          {
            name:'导航3',
            checked:true,
            url:''
          }
        ]
      }
    },
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
      },
      handleEdit(row){
        this.editingForm = row
        this.dialogFormVisible=true
      }
    }
  }
</script>
<style scoped>

</style>
