'use strict';

import { combineReducers } from 'redux';
import UserInfoRedux from './UserInfo/userInfoReducer';//注册个人信息Redux


const rootReducer = combineReducers({
  UserInfoRedux:UserInfoRedux,
});

export default rootReducer;



