import { reqCategoryList } from "@/api";

// home组件的小仓库
const state = {
    // state中数据默认初始值bie'xia'xie
    categoryList:[],
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    }
};
const actions = {
    async categoryList({commit}){
        // 通过API里面的接口函数调用，向服务器发请求，获取服务器数据
        let result = await reqCategoryList();
        if(result.code == 200){
            commit('CATEGORYLIST',result.data);
        }
    }
};
const getters = {};
export default{
    state,
    mutations,
    actions,
    getters
}