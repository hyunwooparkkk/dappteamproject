import { createAction,handleActions } from "redux-actions";
import {put,call,takeEvery} from"@redux-saga/core/effects";
import produce from "immer";
import axios from "axios";

const PUSHDATA= "marketdata/PUSHDATA";
const RESETDATA= "marketdata/RESETDATA";
const FILTERMYDATA="marketdata/FILTERMYDATA";

export const pushdata=createAction(PUSHDATA,(input)=>input);
export const resetdata=createAction(RESETDATA,(input)=>input);
export const filtermydata=createAction(FILTERMYDATA,(input)=>input);

const SPUSHDATA= "markgetdata/SPUSHDATA";

export const spushdata=createAction(SPUSHDATA,(input)=>input);

function* takemarketdata(params){
console.log("please",params.payload.ipfsdata)
  console.log(params.payload.ipfsdata[1])
  console.log("넘",params.payload.num)
    const {data}=yield call([axios,'get'],`https://gateway.ipfs.io/ipfs/${params.payload.ipfsdata[1]}`,JSON);
    console.log("이거",data);
    data.num=params.payload.ipfsdata[0].words[0];
    yield put(pushdata(data));

  }

  export function* waitmarketdata(){
    yield takeEvery(SPUSHDATA,takemarketdata);
  }

const initialState={
    data:[],
    mydata:[],
}

const marketdata=handleActions({
    [PUSHDATA]:(state,{payload:input})=>
    produce(state,(draft)=>{
        draft.data.push(input);
    }),
    [RESETDATA]:(state,{payload:input})=>
    produce(state,(draft)=>{
        draft.data=[];
    }),
    [FILTERMYDATA]:(state,{payload:input})=>
    produce(state,(draft)=>{
        draft.data=draft.data.filter(x=>x.num!=input)
    }),

    
  
},initialState)

export default marketdata;