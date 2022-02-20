import { reqGoodsInfo } from "@/api";

const state = {
    goodInfo:{}
};
const mutations = {
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo;
    }
};
const actions = {
    //获取产品信息的action
    async getGoodInfo({commit},skuId){
        let result = await reqGoodsInfo(skuId);
        if(result.code===200){
            commit('GETGOODINFO',result.data)
        }
    }, 
    async addOrUpdateShopCart({commit},{skuId,skuNum}){//这么写在大括号里是解构赋值
        // 加入购物车返回的解构
        // 加入购物车以后（发请求），qian'tai'jiang'can'shu'dai'gei'fu'wu'qi
        let result = await reqAddOrUpdateShopCart(skuId,skuNum);
    }
};
// 为简化数据而生
const getters = {
    // 路径导航简化的数据
    categoryView(state){
        // 注意细节，state.goodInfo初始状态空对象，空对象的categoryView属性值undefined
        return state.goodInfo.categoryView || {};
    },
    // 简化产品信息的数据
    skuInfo(state){
        return state.goodInfo.skuInfo || {};
    },
    // 产品售卖属性的简化
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || []
    },
};
export default{
    state,
    actions,
    mutations,
    getters
}