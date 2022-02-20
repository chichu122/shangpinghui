import { reqAddressInfo, reqOrderInfo } from "@/api";

const state = {
    address : [],
};
const mutations = {
    GETUSERADDRESS(state,address){
        state.address = address;
    },
    GETORDERINFO(state,){}
};
const actions = {
    async getUserAddress({commit}){
        let result = await reqAddressInfo();
        if(result.code==200){
            commit('GETUSERADDRESS',result.data)
        }
    },
    async getOrderInfo({commit}){
        let result = await reqOrderInfo();
        if(result.code==200){
            commit('GETORDERINFO',res)
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