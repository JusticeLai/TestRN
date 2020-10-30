import *as types from './userInfoTypes';

const initialState = {
    // count: 0,
    userInfo: {
        backgroundColor:'white',
    },
}

export default function ShopCarRedux(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_IN:
            return {
                ...state,
                userInfo: action.userInfo ? JSON.parse(JSON.stringify(action.userInfo)) :initialState.userInfo,
            }
            break;
        case types.LOGIN_IN_UPDATE:
            return {
                ...state,
                userInfo: action.userInfo ? JSON.parse(JSON.stringify(action.userInfo)) :initialState.userInfo,
            }
            break;
        case types.LOGIN_OUT_UPDATE:
            return {
                ...state,
                userInfo: null,
            }
            break;
        default:
            return state;
    }
}


