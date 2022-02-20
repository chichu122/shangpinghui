import { reqCategoryList } from "@/api";

// home组件的小仓库
const state = {};
const mutations = {};
const actions = {
    asynccategoryList(){
        // 通过API里面的接口函数调用，向服务器发请求，获取服务器数据
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