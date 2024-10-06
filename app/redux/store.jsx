import { configureStore,applyMiddleware } from "@reduxjs/toolkit"
import { persistStore,persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
 } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import AsyncStorage from "@react-native-async-storage/async-storage";
 const sagaMiddleware = createSagaMiddleware()
//import counterReducer from "./features/counter/couterSlice";
import { combineReducers } from "@reduxjs/toolkit";
import rootSaga from "./sagas";

import authReducer from "./reducers/slices/authSlice";

const rootReducer =combineReducers({auth: authReducer});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['counter'],
    blacklist: []
};
const middleWares = [sagaMiddleware];
const persistedReducer =persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware:getDefaultMiddleware =>
        getDefaultMiddleware({
          thunk: false,
          immutableCheck: false,
          serializableCheck: false
        }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);




// import { createStore, applyMiddleware } from "redux"
// import createSagaMiddleware from "redux-saga"
// //import AsyncStorage from '@react-native-community/async-storage';  
// import rootSaga from "./sagas"
// import rootReducer from "./reducer"
// import { persistStore, persistReducer } from 'redux-persist'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const sagaMiddleware = createSagaMiddleware()
// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//     //blacklist:[ 'auth'/*  'cart' */] //Add reducer if you don`t want to presist it
//   }
// const middleWares = [sagaMiddleware];

// //1
// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(persistedReducer, applyMiddleware(...middleWares))
// let persistor = persistStore(store)
// sagaMiddleware.run(rootSaga)

// export default {store,persistor}