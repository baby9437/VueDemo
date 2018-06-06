<template>
  <div>
    <div class="title">遮挡类分析</div>
    <div class="panelBody">
      <el-collapse accordion>
      <el-collapse-item title="通视分析">
        <el-row style="margin-bottom: 2px">
          <el-button>通视画线</el-button>
          <el-button>开始分析</el-button>
        </el-row>
        <el-row>
          <el-button>到观察点</el-button>
          <el-button>到目标点</el-button>
        </el-row>
        <div>分析结果：</div>
        <el-table ref="analysisResult" :data="resultTable" highlight-current-row @current-change=""
                  style="width: 100%">
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column property="name" label="对象名称" width="120"></el-table-column>
        </el-table>
      </el-collapse-item>
      <el-collapse-item title="视域分析">
        <div style="display: inline-block ;padding-bottom: 2px">
          视野张角：<el-input style="width: 120px" v-model="angle" placeholder="请输入内容"></el-input>度
        </div>
        <div style="display: inline-block;padding-bottom: 2px">
          垂直偏移：<el-input style="width: 120px" v-model="height" placeholder="请输入内容"></el-input> 米
        </div>

        <el-row style="margin-bottom: 2px">
          <el-button>开始分析</el-button>
          <el-button>清除结果</el-button>
        </el-row>
        <el-row>
          <el-button>到观察点</el-button>
          <el-button>到目标点</el-button>
        </el-row>

        <div>
          分析结果：
        </div>

      </el-collapse-item>
      <el-collapse-item title="日照模拟">
        <div >选择日期时间：
          <el-date-picker style="width: 210px" v-model="date" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </div>
        <el-row style="margin: 2px 0 2px 0">
          <el-button>选择范围</el-button>
          <el-button>动态模拟</el-button>
        </el-row>
        <el-row>
          <el-button>停止模拟</el-button>
          <el-button>清除结果</el-button>
        </el-row>

      </el-collapse-item>
      <el-collapse-item title="单点日照时长分析">
        <div>选择日期时间：
          <el-date-picker style="width: 210px" v-model="date" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </div>
        <el-row style="margin: 10px 0 10px 0">
          <el-button>选择目标点</el-button>
          <el-button>开始分析</el-button>
        </el-row>
        <div >日照时长：<el-input style="width: 100px"></el-input>分钟</div>
      </el-collapse-item>
      <el-collapse-item title="沿路通视分析">
        <div>节点个数：
          <el-select v-model="count" placeholder="请选择" style="width: 100px">
          <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>个</div>

        <div style="margin:10px 0 10px 0">
          <el-button>沿路画线</el-button>
          <el-button>选择目标点</el-button>
        </div>
        <div style="margin-bottom: 10px">
          <el-button>开始分析</el-button>
        </div>
        <div>分析结果：</div>
        <el-table ref="analysisResult" :data="resultTable" highlight-current-row @current-change=""
                  style="width: 100%">
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column property="name" label="对象名称" width="120"></el-table-column>
        </el-table>

      </el-collapse-item>
      <el-collapse-item title="沿路立面分析">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="分析深度:">
            <el-input v-model="form.depth" style="width: 100px"></el-input>米
          </el-form-item>
          <el-form-item label="生成背景色:">
            <el-color-picker v-model="form.color"></el-color-picker>
          </el-form-item>
          <el-form-item label="">
            <el-checkbox-group v-model="form.showList">
              <el-checkbox label="立面图中显示对象名称" name="type"></el-checkbox>
              <el-checkbox label="立面图中显示对象高度" name="type"></el-checkbox>
              <el-checkbox label="三维场景中显示对象名称" name="type"></el-checkbox>
              <el-checkbox label="三维场景中显示对象高度" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
        <el-button>开始分析</el-button>
      </el-collapse-item>
      <el-collapse-item title="天际线拟合分析">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="图片背景色:">
            <el-color-picker v-model="form.color"></el-color-picker>
          </el-form-item>
          <el-form-item label="">
            <el-checkbox-group v-model="form.showList">
              <el-checkbox label="图片中显示对象名称" name="type"></el-checkbox>
              <el-checkbox label="图片中显示对象高度" name="type"></el-checkbox>
              <el-checkbox label="三维场景中显示对象名称" name="type"></el-checkbox>
              <el-checkbox label="三维场景中显示对象高度" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>

        <div class="content">
          <div class="item">
            <img src="../../../static/img/png64/325shuipingArea.png" alt=""><br/>
            <span>选择范围</span>
          </div>
          <div class="item">
            <img  src="../../../static/img/png64/611curve.png" alt=""><br/>
            <span>天际线拟合</span>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'occlusion',
    data() {
      return {
        resultTable:[],
        angle:'',
        height:'',
        date:'',
        options: [5,10,20,30],
        count:'',

        form:{
          color:'',
          showList:[]
        }
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
