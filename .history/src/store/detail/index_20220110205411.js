import { reqGoodsInfo } from "@/api";

const state = {};
const mutations = {};
const actions = {
    //获取产品信息的action
    async getGoodInfo({commit},skuId){
        let result = await reqGoodsInfo(skuId);
        if(re)
    } 
};
const getters = {};
export default{
    state,
    actions,
    mutations,
    getters
}