<template>
  <div >
    <el-collapse accordion>
      <el-collapse-item title=" 模型属性查询与编辑">
        <div class="content">
          <div class="item">
            <img src="../../../static/img/png64/select.png" alt=""><br/>
            <span>选择对象</span>
          </div>
          <div class="item">
            <img  src="../../../static/img/png64/102save.png" alt=""><br/>
            <span>保存编辑</span>
          </div>
          <div class="item">
            <img src="../../../static/img/png64/103cancle.png" alt=""><br/>
            <span>取消编辑</span>
          </div>
        </div>
          <el-table ref="singleTable" :data="tableData" highlight-current-row
                    border style="width: 100%">
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column property="date" label="属性" width="110"> </el-table-column>
            <el-table-column property="name" label="值" width="119"> </el-table-column>
          </el-table>

      </el-collapse-item>
      <el-collapse-item title="坐标查询">
        <div class="content">
          <div class="item">
            <img  src="../../../static/img/png64/geo_fence-64.png" alt="">
            <span>坐标显示</span>
          </div>
          <div >----------------------------------------</div>
          <el-form ref="formCoor" :model="formCoor" label-width="80px">
            <el-form-item label="横坐标X：">
              <el-input v-model="formCoor.x"></el-input>
            </el-form-item>
            <el-form-item label="纵坐标Y：">
              <el-input v-model="formCoor.y"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="">定位</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-collapse-item>
      <el-collapse-item title="对象搜索">
        <div>
          <el-form ref="formSea" :model="formSea" label-width="100px">
            <el-form-item label="搜索类型：">
              <el-select v-model="formSea.type" placeholder="全部">
                <el-option label="模型名称" value="shanghai"></el-option>
                <el-option label="POI热点" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="关键字：">
              <el-input v-model="formSea.keywords"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="">搜索</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>

  export default {
    name: 'search',
    data(){
      return {
        tableData:[],
        formCoor:{x:'',y:''},
        formSea:{type:'',keywords:''}
      }
    },
    methods: {
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
</style>
