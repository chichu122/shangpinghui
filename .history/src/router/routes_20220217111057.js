//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySucce
// 第一：路径的前面需要有/（不是二级路由）
// 路径中单词都是小写的
// component右侧不加单引号【字符串：组件是对象（Vuecomponent类的实例）】
export default [
    {
        path: '/paysuccess',
        component: Pay,
        meta: {
            show: true
        }
    },
    {
        path: '/pay',
        component: Pay,
        meta: {
            show: true
        }
    },
    {
        path: '/trade',
        component: Trade,
        meta: {
            show: true
        }
    },
    {
        path: '/shopcart',
        component: ShopCart,
        meta: {
            show: true
        }
    },
    {
        path: '/addcartsuccess',
        name:'addcartsuccess',
        component: AddCartSuccess,
        meta: {
            show: true
        }
    },
    {
        path: '/detail/:skuid',
        component: Detail,
        meta: {
            show: true
        }
    },
    {
        path: '/home',
        component: Home,
        meta: {
            show: true
        }
    },
    {
        path: '/search/:keyword?',
        component: Search,
        meta: {
            show: true
        },
        name: 'search',
        // props:true,
        props: {
            a: 1,
            b: 2
        },
        props: ($route) => {
            return { keyword: $route.params.keyword, k: $route.query.k };
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            show: false
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            show: false
        }
    },
    //重定向，在项目跑起来的时候，访问/，立马让他定向到首页
    {
        path: '',
        redirect: '/home'
    }
]