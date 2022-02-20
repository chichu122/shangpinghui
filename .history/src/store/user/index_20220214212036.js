// 登录与注册的模块
import {reqGetCode} from "@/api";
const state = {};
const mutations = {};
const actions = {
    async getCode(){
        let result = await reqGetCode(phone);
        if(result.code==200){
            commit('GETCODE',result.data);
            
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