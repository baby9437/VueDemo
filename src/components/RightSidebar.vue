<template>
  <div id="sideBar">
    <div >
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen"
               @close="handleClose" background-color="#00bcd4" @select="handleSelect"
               text-color="#fff" active-text-color="#ffd04b">
        <el-submenu v-for="submenu in menu" :index="submenu.id.toString()" :key="submenu.id" style="padding: 0">
          <span slot="title"><img class="subMenuImg" :src="getImageUrl(submenu.icon)" alt=""></span>
          <el-menu-item style="margin:0;padding: 0;height: 60px;line-height: 10px"
                        v-for="child in submenu.children" :index="child.id.toString()" :key="child.panelId">
            <div style="padding-top: 2px">
              <img class="subMenuItemImg" :src="getImageUrl(child.icon)" alt=""><br/>
              <div style="text-align: center;color: gray;margin-top: 2px;font-size: 10px">{{child.name}}</div>
            </div>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RightSideBar',
    data() {
      return {
        menu: [
        /*  {//第一组一级菜单
          id: 100,///用户管理
          name: '',//菜单图标下显示的文字，可以为空
          icon: '100user.png',//菜单所对应的图标
          hasChildren: true,//是否有子节点，即是否有下级菜单
          hasPanel: false,//点击是否滑出右侧面板，如果有弹出面板，还需指定面板id，即panelId的值
          children:
            [//子节点数组
              {
                id: 110,
                name: '用户中心',
                icon: '110usercenter.png',
                hasChildren: false,
                hasPanel: true,
                panelId: 'usercenter'
              }, //个人头像、密码修改、主题颜色
              {id: 120, name: '退出', icon: '120exit.png', hasChildren: false, hasPanel: false}
            ]
        },
          {//第二组一级菜单
            id: 200,/////工具栏
            name: '',//菜单图标下显示的文字，可以为空
            icon: '200toolslan.png',//菜单所对应的图标
            hasChildren: true,//是否有子节点，即是否有下级菜单
            hasPanel: false,//点击是否滑出右侧面板，如果有弹出面板，还需指定面板id，即panelId的值
            children:
              [//子节点数组
                {id: 210, name: '初始位置', icon: '210home.png', hasChildren: false, hasPanel: false},
                {id: 220, name: '全屏', icon: '220fullscreen.png', hasChildren: false, hasPanel: false},
                {id: 230, name: '平移', icon: '230pan.png', hasChildren: false, hasPanel: false},
                {id: 240, name: '步行模式', icon: '240walk.png', hasChildren: false, hasPanel: false},
                {
                  id: 250, name: '天气控制', icon: '250weather.png', hasChildren: true, hasPanel: false,
                  children:
                    [
                      {id: 251, name: '晴天', icon: '251sun.png', hasChildren: false, hasPanel: false},
                      {id: 252, name: '雨天', icon: '252rain.png', hasChildren: false, hasPanel: false},
                      {id: 253, name: '雪天', icon: '253snow.png', hasChildren: false, hasPanel: false}
                    ]
                },
                {id: 260, name: '顶视图', icon: '260lookdown.png', hasChildren: false, hasPanel: false},
                {id: 270, name: '环视', icon: '270huanshi.png', hasChildren: false, hasPanel: false},
                {id: 280, name: '前一视图', icon: '280left.png', hasChildren: false, hasPanel: false},
                {id: 290, name: '后一视图', icon: '290right.png', hasChildren: false, hasPanel: false}
              ]
          },*/
          {//第三组一级菜单
            id: 300,///常用工具
            name: '',//菜单图标下显示的文字，可以为空
            icon: '300tools.png',//菜单所对应的图标
            hasChildren: true,//是否有子节点，即是否有下级菜单
            hasPanel: false,//点击是否滑出右侧面板，如果有弹出面板，还需指定面板id，即panelId的值
            children:
              [//子节点数组
                {
                  id: 310, name: '搜索查询', icon: '310search.png', hasChildren: true, hasPanel: true,panelId:'search'
                },
                {
                  id: 320, name: '空间量测', icon: '320measure.png', hasChildren: true, hasPanel: false,
                  children:
                    [
                      {id: 321, name: '水平量距', icon: '321shuiping.png', hasChildren: false, hasPanel: false},
                      {id: 322, name: '垂直量距', icon: '322chuizhi.png', hasChildren: false, hasPanel: false},
                      {id: 323, name: '直线量距', icon: '323zhixian.png', hasChildren: false, hasPanel: false},
                      {id: 324, name: '地表量距', icon: '324dibiao.png', hasChildren: false, hasPanel: false},
                      {id: 325, name: '水平面积', icon: '325shuipingArea.png', hasChildren: false, hasPanel: false},
                      {id: 326, name: '地表面积', icon: '326dibiaoArea.png', hasChildren: false, hasPanel: false}
                    ]
                },
                {id: 330, name: '场景标签', icon: '330mark.png', hasChildren: false, hasPanel: true, panelId: 'marks'},
                {
                  id: 340,
                  name: '动画导航',
                  icon: '340movie.png',
                  hasChildren: false,
                  hasPanel: false,
                  panelId: 'navigate'
                },
                {
                  id: 350, name: '地形控制', icon: '350terrain.png', hasChildren: true, hasPanel: true,panelId: 'terrain',
                  children:
                    [
                      {id: 351, name: '高程开关', icon: '351kggaocheng.png', hasChildren: false, hasPanel: false},
                      {
                        id: 352,
                        name: '透明度',
                        icon: '352terraintrans.png',
                        hasChildren: false,
                        hasPanel: true,
                        panelId: 'panel-terrain'
                      }
                    ]
                },
                {
                  id: 360,
                  name: '比例尺',
                  icon: '360bilichi.png',
                  hasChildren: false,
                  hasPanel: true,
                  panelId: 'scale'
                },
                {id: 370, name: '模型导出', icon: '370export.png', hasChildren: false, hasPanel: true,panelId:'exportModel'},
                {id: 380, name: '系统对接', icon: 'disconnect.png', hasChildren: false, hasPanel: true,panelId:'connect'}
              ]
          },
          {//第四组一级菜单
            id: 400,///项目管理
            name: '',//菜单图标下显示的文字，可以为空
            icon: '400project.png',//菜单所对应的图标
            hasChildren: false,//是否有子节点，即是否有下级菜单
            hasPanel: true,//点击是否滑出右侧面板，如果有弹出面板，还需指定面板id，即panelId的值
            panelId: 'project'
          },
          {//第五组一级菜单
            id: 500,///方案调整
            name: '',//菜单图标下显示的文字，可以为空
            icon: '500tiaozheng.png',//菜单所对应的图标
            hasChildren: false,//是否有子节点，即是否有下级菜单
            hasPanel: true,//点击是否滑出右侧面板，如果有弹出面板，还需指定面板id，即panelId的值
            panelId: 'schema'
          },
          {//第六组一级菜单
            id: 600,///辅助分析
            name: '',//菜单图标下显示的文字，可以为空
            icon: '600fenxi.png',//菜单所对应的图标
            hasChildren: true,//是否有子节点，即是否有下级菜单
            hasPanel: false,//点击是否滑出右侧面板，如果有弹出面板，还需指定面板id，即panelId的值
            children:
              [//子节点数组
                {
                  id: 610,
                  name: '遮挡类',
                  icon: '610zhedang.png',
                  hasChildren: false,
                  hasPanel: true,
                  panelId: 'occlusion'
                },
                {id: 620, name: '控制类', icon: '620gaodu.png', hasChildren: false, hasPanel: true, panelId: 'control'},
                {id: 630, name: '统计类', icon: 'shuxingchaxun.png', hasChildren: false, hasPanel: true, panelId: 'staticAnalysis'},
                {
                  id: 640,
                  name: '综合类',
                  icon: '630zonghe.png',
                  hasChildren: false,
                  hasPanel: true,
                  panelId: 'compre'
                }
              ]
          },
          {//第七组一级菜单
            id: 700,///系统管理
            name: '',//菜单图标下显示的文字，可以为空
            icon: '700setting.png',//菜单所对应的图标
            hasChildren: true,//是否有子节点，即是否有下级菜单
            hasPanel: false,//点击是否滑出右侧面板，如果有弹出面板，还需指定面板id，即panelId的值
            children:
              [//子节点数组
                {
                  id: 710, name: '主题管理', icon: '710theme.png', hasChildren: true, hasPanel: false,
                  children:
                    [
                      {id: 711, name: '绿色', icon: 'theme-green.png', hasChildren: false, hasPanel: false},
                      {id: 712, name: '蓝色', icon: 'theme-blue.png', hasChildren: false, hasPanel: false},
                      {id: 713, name: '红色', icon: 'theme-red.png', hasChildren: false, hasPanel: false},
                      {id: 713, name: '灰色', icon: 'theme-grey.png', hasChildren: false, hasPanel: false}
                    ]
                },
                {
                  id: 720,
                  name: '用户管理',
                  icon: '720usermanage.png',
                  hasChildren: false,
                  hasPanel: true,
                  panelId: 'panel-usermanage'
                },
                {
                  id: 730,
                  name: '数据配置',
                  icon: '730datamanage.png',
                  hasChildren: false,
                  hasPanel: true,
                  panelId: 'panel-datamanage'
                },
              ]
          }],
        currentSelect: null
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log('open');
        console.log(key, keyPath);

        for(let item in this.menu){
          if(this.menu[item].id==key){
            this.currentSelect = this.menu[item].panelId
            break
          }
          else {
            for(let item2 in this.menu[item].children){
              if(this.menu[item].children[item2].id == key){
                this.currentSelect = this.menu[item].children[item2].panelId
                break
              }
            }
          }
        }
        console.log(this.currentSelect)
        this.$emit('menuClick', this.currentSelect)
      },
      handleClose(key, keyPath) {
        console.log('close');
        console.log(key, keyPath);

        for(let item in this.menu){
          if(this.menu[item].id==key){
            this.currentSelect = this.menu[item].panelId
            break
          }
          else {
            for(let item2 in this.menu[item].children){
              if(this.menu[item].children[item2].id == key){
                this.currentSelect = this.menu[item].children[item2].panelId
                break
              }
            }
          }
        }
        console.log(this.currentSelect)
        this.$emit('menuClick', this.currentSelect)
      },
      handleSelect(key, keyPath) {
       for(let item in this.menu){
         if(this.menu[item].id==key){
           this.currentSelect = this.menu[item].panelId
           break
         }
         else {
           for(let item2 in this.menu[item].children){
            if(this.menu[item].children[item2].id == key){
              this.currentSelect = this.menu[item].children[item2].panelId
              break
            }
           }
         }
       }
        console.log(this.currentSelect)
        this.$emit('menuClick', this.currentSelect)
      },
      getImageUrl(name) {
        return '../../static/img/png64/' + name
      }
    }
  }
</script>
<style scoped>
  #sideBar {
    background-color: #00bcd4;
    z-index: 1000;
    width: 70px;
    height: calc(100% - 40px);
    position: absolute;
    right: -18px;
    top: 40px;
    overflow: scroll;
    overflow-x:hidden;
    text-align: center;
  }
  >>> .el-submenu__title{
    padding-left: 0!important;
    padding-right: 0!important;
  }
  .el-menu-item {
    background-color: white !important;
    border-left: rgb(0, 188, 212) solid thin;
    border-right: rgb(0, 188, 212) solid thin;
  }

  .el-submenu .el-menu-item {
    min-width: 0;
    text-align: center;
  }

  .subMenuImg {
    width: 35px;
  }

  .subMenuItemImg {
    width: 30px;
    background-color: white;
  }

  >>> .el-submenu__icon-arrow{
    display: none;
  }
</style>
