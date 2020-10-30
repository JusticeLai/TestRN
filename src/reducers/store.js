'use strict';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reduxs';
import  AsyncStorage from '@react-native-community/async-storage'; //缓存
// import storage from 'redux-persist/lib/storage';  //缓存
import { persistStore, persistReducer } from 'redux-persist';



const persistConfig = {
  key: 'milk', // 对于数据 key 的定义
  storage: AsyncStorage  // 选择的存储引擎
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  // 处理后的 reducers 需要作为参数传递在 createStore 中
  const store = createStore(persistedReducer, applyMiddleware(thunk))
  // 持久化 store
  let persistor = persistStore(store)
  return { store, persistor }
}



// 不需要缓存
// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// export default function configureStore(initialState) {
//     const store = createStoreWithMiddleware(rootReducer, initialState)
//     return store;
// }
