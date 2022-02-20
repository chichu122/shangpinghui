import { reqAddressInfo } from "@/api";

const state = {};
const mutations = {
    GETUSERADDRESS(state,){}
};
const actions = {
    async getUserAddress({commit}){
        let result = await reqAddressInfo();
        if(result.code==200){
            commit('GETUSERADDRESS')
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters,
}