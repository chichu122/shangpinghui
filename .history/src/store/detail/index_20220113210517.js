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
    } 
};
const getters = {
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || []
    },
    categoryView(state){
        // 注意细节，state.goodInfo初始状态空对象，空对象的categoryView属性值undefined
        return state.goodInfo.categoryView || {};
    },
    skuInfo(state){
        return state.goodInfo.skuInfo || {};
    }
};
export default{
    state,
    actions,
    mutations,
    getters
}