import { reqAddressInfo, reqOrderInfo } from "@/api";

const state = {
    address : [],
};
const mutations = {
    GETUSERADDRESS(state,address){
        state.address = address;
    }
};
const actions = {
    async getUserAddress({commit}){
        let result = await reqAddressInfo();
        if(result.code==200){
            commit('GETUSERADDRESS')
        }
    },
    async getOrderInfo({commit}){
        let result = await reqOrderInfo();
        
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters,
}