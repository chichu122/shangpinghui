import { reqCategoryList } from "@/api";

// home组件的小仓库
const state = {};
const mutations = {};
const actions = {
    categoryList(){
        // tong'gu
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