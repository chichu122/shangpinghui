//配置路由的地方
// 引入vue
import Vue from "vue";
// 引入vue-roouter路由插件
import VueRouter from 'vue-router';
import routes from './routes';
// 使用插件
Vue.use(VueRouter);
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

// 
router.beforeEach((to,from,next)=>{
    // to:
    // f
})