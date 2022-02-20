// 登录与注册的模块
import {reqGetCode} from "@/api";
const state = {};
const mutations = {};
const actions = {
    // 获取验证码
    async getCode({commit},phone){
        // huo'qu'yan'zheng'ma
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