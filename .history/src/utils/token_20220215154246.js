// 存储token
export const setToken = (token)=>{
    localStorage.setItem('TOKEN',token);
};
// 获取
export const getToken = () => {
    return localStorage.getItem('TOKEN');
};