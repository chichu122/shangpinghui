import Vue from 'vue'
import App from './App.vue'
// 引入路由相关文件
import router from '@/router'
// 引入仓库进行注册
import store from '@/store'
// 三级联动组件注册-----全局组件，在入口文件注册一次后，在任何组件当中都可以使用
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
// 全局组件第一个参数：全局组件名字，第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel);
Vue.component(Pagination.name,Pagination);
//引入MockServer.js----mock数据
import '@/mock/mockServe';
// 引入swiper轮播图样式，因为多处使用到，所以放在入口文件，引入样式不需要import a from b，因为样式没有对外暴露
import 'swiper/css/swiper.css';

// 统一接口api
import * as API
new Vue({
  render: h => h(App),
  // 全局事件总线$bus配置
  beforeCreate(){
    Vue.prototype.$bus = this;
  },
  // 注册路由，下面KV一致省略V，此处router小写
  // 注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性
  // $route(路由):可以获取到路由信息（path、query、params）
  // $router：进行编程式导航路由跳转push||replace
  router,
  // 注册仓库：每一个组件实例的身上会多一个属性$store
  store
}).$mount('#app')
