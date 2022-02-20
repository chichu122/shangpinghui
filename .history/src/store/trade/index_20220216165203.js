import { reqAddressInfo } from "@/api";

const state = {};
const mutations = {};
const actions = {
    async getUserAddress({commit}){
        let result = await reqAddressInfo();
        if(result.code)
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters,
}