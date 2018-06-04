<template>
  <div>
    <div style="position: absolute;left:0px;top: 0px;" @click="dialogFormVisible = true">
      <img style="width: 40px;" src="../../../static/img/png64/add.png" alt="">
    </div>
    <div class="title">场景标签</div>

    <div>
      <el-table :data="markTable" >
        <el-table-column prop="name" label="名称" width="80" ></el-table-column>
        <el-table-column  label="快捷" width="50">
          <template slot-scope="scope">
            <div>
              <el-checkbox v-model="scope.row.checked"></el-checkbox>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="定位" width="50">
          <template slot-scope="scope">
            <div>
              <img style="width: 25px" src="../../../static/img/png64/pos.png" alt="">
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

    <el-dialog title="添加/编辑场景标签" :visible.sync="dialogFormVisible" style="width: 1000px" center>
      <div>
        <el-form :model="editingForm" label-width="100px">
          <el-form-item label="名称：">
            <el-input v-model="editingForm.name" auto-complete="off" style="display: inline-block;width: 100px"></el-input>
            <el-button style="margin-left: 50px">更新位置</el-button>
          </el-form-item>
          <h3>位置信息：</h3>
          <div style="width: 200px;display: inline-block">
            <el-form-item label="X坐标：">
              <el-input v-model="editingForm.x" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Y坐标：">
              <el-input v-model="editingForm.y" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Z坐标：">
              <el-input v-model="editingForm.z" auto-complete="off"></el-input>
            </el-form-item>
          </div>
          <div style="width: 200px;display: inline-block">
            <el-form-item label="Heading：">
              <el-input v-model="editingForm.h" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Pitch：">
              <el-input v-model="editingForm.p" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Roll：">
              <el-input v-model="editingForm.r" auto-complete="off"></el-input>
            </el-form-item>
          </div>
        </el-form>

      </div>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

  export default {
    name: 'marks',
    data(){
      return {
        dialogFormVisible:false,
        editingForm:{
          name:'',
          checked:true,
          x:'1',
          y:'2',
          z:'3',
          h:'4',
          p:'5',
          r:'6'
        },
        markTable:[{
          name:'mark1',
          checked:true,
          x:'1',
          y:'2',
          z:'3',
          h:'4',
          p:'5',
          r:'6'
        },
          {
            name:'mark2',
            checked:false,
            x:'1',
            y:'2',
            z:'3',
            h:'4',
            p:'5',
            r:'6'
          },
          {
            name:'mark3',
            checked:true,
            x:'1',
            y:'2',
            z:'3',
            h:'4',
            p:'5',
            r:'6'
          }
        ]
      }
    },
    methods: {
      handleEdit(row){
        this.editingForm = row
        this.dialogFormVisible=true
      }
    }
  }
</script>
<style scoped>

</style>
