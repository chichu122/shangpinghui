// search组件的小仓库
import { reqGetSearchInfo } from "@/api";

const state = {};
const mutations = {};
const actions = {
    async getSearchList({commit},params){
        // 当前这个reqGetSearchInfo这个函数在调用获取服务器数据的时候，至少传递一个参数（）
        await reqGetSearchInfo(params);
        if(result.code)
    }
};
const getters = {};
export default{
    state,
    mutations,
    actions,
    getters
}