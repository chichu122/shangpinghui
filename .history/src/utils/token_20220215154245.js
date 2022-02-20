// 存储token
export const setToken = (token)=>{
    localStorage.setItem('TOKEN',token);
};
// huo'qu
export const getToken = () => {
    return localStorage.getItem('TOKEN');
};