//配置路由的地方
// 引入vue
import Vue from "vue";
// 引入vue-roouter路由插件
import VueRouter from 'vue-router';
import routes from './routes';
// 使用插件
Vue.use(VueRouter);
// 引入store
import store from '@/store'
// 需要重写VueRouter.prototype原型对象身上的push|replace方法
// 先把VueRouter.prototype身上的push|replace方法进行保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写VueRouter.prototype身上的push方法了
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
// 重写VueRouter.prototype身上的replace方法
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}

//配置路由组件
// 对外暴露VueRouter类的实例
let router = new VueRouter({
    //配置路由组件
    routes,
    // 滚动行为
    scrollBehavior (to, from, savedPosition) {
        // 返回的这个y=0，代表的滚动条在最上方
        return {y:0}
    },
});

//全局守卫：前置守卫（在路由跳转之间进行判断）
router.beforeEach((to,from,next)=>{
    // to:可以获取到你要跳转到的那个路由信息
    // from:可以获取到你从哪个路由而来的信息
    // next:放行函数  next（）放行   next（path）放行到指令路由         next(false);
    // 为了测试先全部放行
    // next();
    // 用户登录了，才会有token，未登录一定不会有token
    let token = store.state.user.token;
    // 用户信息
    let userInfo = store.state.user.userInfo;
    console
});

export default router;