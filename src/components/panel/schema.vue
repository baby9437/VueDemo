<template>
  <div >

    <div class="title">方案调整</div>
    <el-collapse accordion>
      <el-collapse-item title=" 模型操作工具">
        <div class="content">
          <div class="item">
            <img src="../../../static/img/png64/select.png" alt=""><br/>
            <span>选择对象</span>
          </div>
          <div class="item">
            <img  src="../../../static/img/png64/104copy.png" alt=""><br/>
            <span>复制对象</span>
          </div>
          <div class="item">
            <img src="../../../static/img/png64/105delete.png" alt=""><br/>
            <span>删除对象</span>
          </div>
        </div>

      </el-collapse-item>
      <el-collapse-item title="模型调整工具">
        <div class="content">
          <div class="item">
            <img src="../../../static/img/png64/106move.png" alt=""><br/>
            <span>平移</span>
          </div>
          <div class="item">
            <img  src="../../../static/img/png64/107zoom.png" alt=""><br/>
            <span>缩放</span>
          </div>
          <div class="item">
            <img src="../../../static/img/png64/108rotate.png" alt=""><br/>
            <span>旋转</span>
          </div>

          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="X坐标值：">
              <el-input v-model="form.x"></el-input>米
            </el-form-item>
            <el-form-item label="Y坐标值：">
              <el-input v-model="form.y"></el-input>米
            </el-form-item>
            <el-form-item label="Z坐标值：">
              <el-input v-model="form.z"></el-input>米
            </el-form-item>

            <el-form-item label="水平缩放：">
              <el-input v-model="form.x"></el-input>倍
            </el-form-item>
            <el-form-item label="垂直缩放：">
              <el-input v-model="form.y"></el-input>倍
            </el-form-item>
            <el-form-item label="整体缩放：">
              <el-input v-model="form.z"></el-input>倍
            </el-form-item>

            <el-form-item label="红色轴旋转：">
              <el-input v-model="form.x"></el-input>度
            </el-form-item>
            <el-form-item label="绿色轴旋转：">
              <el-input v-model="form.y"></el-input>度
            </el-form-item>
            <el-form-item label="蓝色轴旋转：">
              <el-input v-model="form.z"></el-input>度
            </el-form-item>
          </el-form>

          <div class="item">
            <img  src="../../../static/img/png64/102save.png" alt=""><br/>
            <span>保存修改</span>
          </div>
          <div class="item">
            <img src="../../../static/img/png64/103cancle.png" alt=""><br/>
            <span>取消</span>
          </div>

        </div>
      </el-collapse-item>
      <el-collapse-item title="材质编辑工具">
        <div class="content">
          <div class="item">
            <img src="../../../static/img/png64/111replace.png" alt=""><br/>
            <span>纹理替换</span>
          </div>
          <div class="item">
            <img  src="../../../static/img/png64/102save.png" alt=""><br/>
            <span>保存修改</span>
          </div>
          <div class="item">
            <img src="../../../static/img/png64/103cancle.png" alt=""><br/>
            <span>取消</span>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>

  export default {
    name: 'schema',
    data(){
      return {
        tableData:[],
        form:{x:'',y:'',z:''}
      }
    },
    methods: {
      handleEdit(){
        console.log('------')
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      }
    }
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
  .el-form-item{
    margin-bottom: 2px;
  }
  .el-input{
    width: 80%;
  }
</style>
