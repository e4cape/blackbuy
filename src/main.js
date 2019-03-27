import Vue from 'vue'
import App from './App.vue'

//导入全局的样式
// import style from './assets/statics/site/css/style.css'
import './assets/statics/site/css/style.css'


//导入路由
import VueRouter from 'vue-router'

//使用路由
Vue.use(VueRouter)


//导入主页组件
import index from './components/index.vue'


//新建路由规则
let routes =[
  {path:'/',component:index},
  {path:'/index',component:index}
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
