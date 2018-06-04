<template>
  <div>
    <div class="title">控制类分析</div>
    <el-collapse accordion>
      <el-collapse-item title="建筑间距分析">

        <div class="content">
          <div class="item">
            <img src="../../../static/img/png64/select.png" alt=""><br/>
            <span>选择两建筑</span>
          </div>
        </div>

        <div style="padding: 10px 0 10px 0">
          <el-form ref="form_distance" :model="form_distance" label-width="100px" >
            <el-form-item label="视野张角：">
              <el-input v-model="form_distance.angle"></el-input>度
            </el-form-item>
            <el-form-item label="垂直偏移：">
              <el-input v-model="form_distance.offset"></el-input>米
            </el-form-item>
          </el-form>
        </div>

        <el-row style="margin-bottom: 2px">
          <el-button>至观察点</el-button>
          <el-button>至目标点</el-button>
        </el-row>
        <el-row>
          <el-button>开始分析</el-button>
          <el-button>清除结果</el-button>
        </el-row>

      </el-collapse-item>
      <el-collapse-item title="沿路高点分析">
        <div style="padding: 10px 0 10px 0">
          <el-form ref="form_highPoint" :model="form_highPoint" label-width="100px" >
            <el-form-item label="分析宽度：">
              <el-input v-model="form_highPoint.offset"></el-input>米
            </el-form-item>
          </el-form>
        </div>

        <el-row>
          <el-button>框选范围</el-button>
          <el-button>开始分析</el-button>
        </el-row>
        <div style="text-align: center ;padding-top: 10px">
          <el-checkbox v-model="form_highPoint.labelBuilding">三维标注显示超高建筑</el-checkbox>
        </div>

        <div>
          <el-table ref="hp_buiInfoTable" :data="hp_buiInfoTable" highlight-current-row @current-change=""
                    style="width: 100%">
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column property="name" label="建筑名称" width="80"></el-table-column>
            <el-table-column property="name" label="高度（m）" width="120"></el-table-column>
          </el-table>
        </div>

      </el-collapse-item>
      <el-collapse-item title="区域控高分析">
        <div style="padding: 10px 0 10px 0">
          <el-form ref="form_highPoint" :model="form_highPoint" label-width="100px" >
            <el-form-item label="限制高度：">
              <el-input v-model="form_highPoint.offset"></el-input>米
            </el-form-item>
          </el-form>
        </div>

        <el-row>
          <el-button>沿路绘线</el-button>
          <el-button>开始分析</el-button>
        </el-row>
        <div style="text-align: center ;padding-top: 10px">
          <el-checkbox v-model="form_highPoint.labelBuilding">三维标注显示最高建筑</el-checkbox>
        </div>

        <div>
          <el-table ref="ch_buiInfoTable" :data="ch_buiInfoTable" highlight-current-row @current-change=""
                    style="width: 100%">
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column property="name" label="建筑名称" width="80"></el-table-column>
            <el-table-column property="name" label="高度（m）" width="120"></el-table-column>
          </el-table>
        </div>

      </el-collapse-item>
      <el-collapse-item title="城市限高模拟">
        <div style="padding-bottom: 10px">
          <el-table ref="planTable" :data="planTable" highlight-current-row @current-change=""
                    style="width: 100%">
            <el-table-column type="selection" width="55" property="checked"> </el-table-column>
            <el-table-column property="name" label="城市规划数据" width="160"></el-table-column>
          </el-table>
        </div>

        <el-row>
          <el-button>开始分析</el-button>
          <el-button>导出Excel</el-button>
        </el-row>
        <div style="text-align: center ;padding-top: 10px">
          <el-checkbox v-model="form_highPoint.labelBuilding">三维标注显示最高建筑</el-checkbox>
        </div>

        <div>
          <el-table ref="lh_buiInfoTable" :data="lh_buiInfoTable" highlight-current-row @current-change=""
                    style="width: 100%">
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column property="name" label="建筑名称" width="80"></el-table-column>
            <el-table-column property="height" label="高度（m）" width="120"></el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item title="挖填方分析">
        <div style="padding: 10px 0 10px 0">
          <el-form ref="form_distance" :model="form_distance" label-width="100px" >
            <el-form-item label="填挖目标高度：">
              <el-input v-model="form_distance.angle"></el-input>米
            </el-form-item>
            <el-form-item label="采样密度：">
              <el-input v-model="form_distance.offset"></el-input>米
            </el-form-item>
          </el-form>
        </div>

        <el-row style="margin-bottom: 2px">
          <el-button>框选范围</el-button>
          <el-button>开始分析</el-button>
        </el-row>

        <div style="padding: 10px 0 10px 0">
          <el-form ref="form_distance" :model="form_distance" label-width="100px" >
            <el-form-item label="开挖土方量：（红色）">
              <el-input v-model="form_distance.angle"></el-input>米
            </el-form-item>
            <el-form-item label="填补土方量：（蓝色）">
              <el-input v-model="form_distance.offset"></el-input>米
            </el-form-item>
          </el-form>
        </div>

      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>

  export default {
    name: 'control',
    data() {
      return {
        form_distance:{
          angle:'',
          offset:''
        },
        form_highPoint:{
         width:'',
          labelBuilding:''
        },
        lh_buiInfoTable:[],//limitHeight
        hp_buiInfoTable:[],//highPoint
        ch_buiInfoTable:[],
        planTable:[
          {checked:false,name:'三江口组团控规数据'},
          {checked:false,name:'滨海新区城市设计模型'},
          {checked:true,name:'南屿组团规划总平图'},
        ]
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
