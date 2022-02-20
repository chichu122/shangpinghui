import { reqCategoryList } from "@/api";

// home组件的小仓库
const state = {};
const mutations = {};
const actions = {
    categoryList(){
        // 通过API里面的接口函数di'o'a'yong
        let result = reqCategoryList();
    }
};
const getters = {};
export default{
    state,
    mutations,
    actions,
    getters
}