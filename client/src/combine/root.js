import { combineReducers } from 'redux';
import upload from '../modules/upload'

import { all } from '@redux-saga/core/effects';
import conn,{waitconn} from '../modules/conn';
 import { persistReducer } from "redux-persist";
 import storage from "redux-persist/lib/storage";

  const persistConfig = {
    key: "root",
    // localStorage에 저장합니다.
    storage,
    // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
    whitelist: ["login"]
    // blacklist -> 그것만 제외합니다
  };

const rootreducer = combineReducers({
    conn,upload

});

export function* rootsaga() {
    yield all([waitconn()]);
}
export default persistReducer(persistConfig, rootreducer);
