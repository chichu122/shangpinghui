import { reqCartList } from "@/api";

const state = {};
const mutations = {};
const action = {
    a getCartList({commit}){
        let result = async reqCartList()
    }
};
const getters = {};
export default{
    state,
    mutations,
    action,
    getters
}