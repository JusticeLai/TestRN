import *as types from './userInfoTypes';


//登录成功
export function loginIn(userInfo) {
    return {
        // type是必要参数，通过type值判断
        type: types.LOGIN_IN,
        userInfo:userInfo
    }
};

//登录成功---更新数据
export function loginInUpdate(userInfo) {
    return {
        // type是必要参数，通过type值判断
        type: types.LOGIN_IN_UPDATE,
        userInfo:userInfo
    }
};

//退出登录---清除数据
export function loginOut() {
    return {
        // type是必要参数，通过type值判断
        type: types.LOGIN_OUT_UPDATE,
    }
};
