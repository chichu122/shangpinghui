import { reqCartList } from "@/api";

const state = {};
const mutations = {
    GETCARTLIST()
};
const action = {
    // huo'qu
    async getCartList({commit}){
        let result = await reqCartList();
        if(result.code==200){
            commit('GETCARTLIST',result.data)
        }
    }
};
const getters = {};
export default{
    state,
    mutations,
    action,
    getters
}