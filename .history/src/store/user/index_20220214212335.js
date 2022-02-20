// 登录与注册的模块
import {reqGetCode} from "@/api";
const state = {};
const mutations = {};
const actions = {
    // 获取验证码
    async getCode({commit},phone){
        // 获取验证码的这个接口：把验证码返回，但是正常情况，后台ba
        let result = await reqGetCode(phone);
        if(result.code==200){
            commit('GETCODE',result.data);
            return 'ok'
        }else{
            return Promise.reject(new Error('falie'));
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