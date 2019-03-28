import Vue from 'vue'
import App from './App.vue'


//导入饿了么UI组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

//导入全局的样式
// import style from './assets/statics/site/css/style.css'
import './assets/statics/site/css/style.css'


//导入路由
import VueRouter from 'vue-router'

//使用路由
Vue.use(VueRouter)


//统一导入axios
import axios from 'axios'
Vue.prototype.$axios = axios
//设置基地址
axios.defaults.baseURL='http://111.230.232.110:8899'

//导入moment
import moment from 'moment'
//全局过滤器
Vue.filter('globalFormatTime',function(value,formatT){
  if(formatT) {
    return moment(value).format(formatT);
  }else {
    return moment(value).format('YYYY-MM-DD');
  }
})




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
      {path:'userDetail',component:userDetail}
    ]
}
]

//新建路由实例
let router = new VueRouter({
  routes
})


Vue.config.productionTip = false


new Vue({
 
  render: h => h(App),
   //挂载到顶级Vue对象中
   router
}).$mount('#app')
