import Vue from 'vue'
import Router from 'vue-router'
import MainContainer from '@/components/MainContainer'
import search from '@/components/panel/search'
import marks from '@/components/panel/marks'
import navigate from '@/components/panel/navigate'
import scale from '@/components/panel/scale'
import terrain from '@/components/panel/terrain'
import exportModel from '@/components/panel/exportModel'
import connect from '@/components/panel/connect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainContainer',
      component: MainContainer,
      children:[{
          path: "search",
          component: search
      },{
        path: "marks",
        component: marks
      },{
        path: "navigate",
        component: navigate
      },{
        path: "scale",
        component: scale
      },{
        path: "terrain",
        component: terrain
      },{
        path: "exportModel",
        component: exportModel
      },{
        path: "connect",
        component: connect
      }

      ]
    }
  ]
})
