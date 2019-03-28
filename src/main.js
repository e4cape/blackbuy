import Vue from 'vue'
import App from './App.vue'


//导入饿了么UI组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

//导入全局的样式
// import style from './assets/statics/site/css/style.css'
import './assets/statics/site/css/style.css'


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


Vue.config.productionTip = false


//导入路由js
import router from './router.js'


new Vue({
 
  render: h => h(App),
   //挂载到顶级Vue对象中
   router
}).$mount('#app')
