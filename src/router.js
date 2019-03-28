//main.js中所有关于路由的代码全部写在这里


//因为Vue.use,所以要导入Vue
import Vue from 'vue'

//导入路由
import VueRouter from 'vue-router'

//使用路由
Vue.use(VueRouter)

//导入所有组件
import index from './components/index.vue'
import cart from './components/cart.vue'
import detail from './components/detail.vue'
import userContainer from './components/userContainer.vue'
import userIndex from './components/userIndex.vue'
import userOrder from './components/userOrder.vue'
import userDetail from './components/userDetail.vue'



//新建路由规则
let routes =[
  {path:'/',component:index},
  {path:'/index',component:index},
  {path:'/cart',component:cart},
  {path:'/detail/:id',component:detail},
  {path:'/userContainer',component:userContainer,
  //嵌套路由,路径不要加斜杠
    children:[
      {path:'userIndex',component:userIndex},
      {path:'userOrder',component:userOrder},
      {path:'userDetail',component:userDetail},
      // 一进个人中心就默认渲染首页的组件
      {path:'',component:userIndex}
    ]
}
]

//新建路由实例
let router = new VueRouter({
  routes
})


//将路由实例暴露出去
export default router