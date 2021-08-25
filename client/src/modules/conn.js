import { createAction, handleActions } from "redux-actions";
import {put,call,delay,takeLatest,takeEvery,} from "@redux-saga/core/effects";
import produce from "immer";

import getWeb3 from "../getWeb3";
import DeedIPFSContract from "../contracts/DeedIPFSToken.json";


const CONNWEB="conn/CONNWEB";
const CONNINSTANCE="conn/CONNINSTANCE"; 

export const connweb=createAction(CONNWEB,(input)=>input);
export const conninstance=createAction(CONNINSTANCE,(input)=>input);

const SGETWEB3="conn/SGETWEB3";
const SGETINSTANCE="conn/SGETINSTANCE";

export const sgetweb3=createAction(SGETWEB3,(input)=>input);
export const sgetinstance=createAction(SGETINSTANCE,(input)=>input);

function* takeconn(){
  console.log("this")
  console.log(getWeb3)
  const results = yield call(getWeb3);
  yield console.log("왜",results);
  yield put(connweb(results));
  yield put(sgetinstance(results))
}

function* takeinstance(params){
  console.log(params.payload)
  const contract =yield require("@truffle/contract");
  const deedipfs= yield contract(DeedIPFSContract);
  if(params.payload==null){
   console.log("연결안됨")
  }
  else{
    yield deedipfs.setProvider(params.payload.currentProvider);
    const accounts=yield params.payload.eth.getAccounts()
    const instance= yield deedipfs.deployed()
    yield put(conninstance({shopInstance:instance,myAccount:accounts[0]}))
  }
}

export function* waitconn(){
  yield takeEvery(SGETWEB3,takeconn);
  yield takeEvery(SGETINSTANCE,takeinstance);
}


const initialState={
  shopInstance:null,
  myAccount:null,
  web3:null,
};

const conn=handleActions(
  {
    [CONNWEB]:(state,{payload:input})=>
    produce(state,(draft)=>{
      draft.web3=input;
    }),
    [CONNINSTANCE]:(state,{payload:input})=>
    produce(state,(draft)=>{
      draft.shopInstance=input.shopInstance;
      draft.myAccount=input.myAccount;
    }),
  },initialState
)

export default conn;




