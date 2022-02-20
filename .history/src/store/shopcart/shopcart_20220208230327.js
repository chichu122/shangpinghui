import { reqCartList } from "@/api";

const state = {
    cartList = [],
};
const mutations = {
    GETCARTLIST(state,cartList){//在这里的cartList是形参，是随便起的名字
        state.cartList = cartList;
    }
};
const action = {
    // 获取购物车列表数据
    async getCartList({commit}){
        let result = await reqCartList();
        if(result.code==200){
            commit('GETCARTLIST',result.data)
        }
    },
    // 删除购物车某一个产品
    async deleteCartListBySkuId({commit})
};
const getters = {
    cartList(state){
        return state.cartList[0]||{}
    }
};
export default{
    state,
    mutations,
    action,
    getters
}