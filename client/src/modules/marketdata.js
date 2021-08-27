import { createAction,handleActions } from "redux-actions";
import {put,call,takeEvery} from"@redux-saga/core/effects";
import produce from "immer";
import axios from "axios";

const PUSHDATA= "markgetdata/PUSHDATA";
const RESETDATA= "markgetdata/RESETDATA";

export const pushdata=createAction(PUSHDATA,(input)=>input);
export const resetdata=createAction(RESETDATA,(input)=>input);


const SPUSHDATA= "markgetdata/SPUSHDATA";

export const spushdata=createAction(SPUSHDATA,(input)=>input);

function* takemarketdata(params){
console.log("please",params.payload.ipfsdata)
  console.log(params.payload.ipfsdata[1])
  console.log("넘",params.payload.num)
    const {data}=yield call([axios,'get'],`https://gateway.ipfs.io/ipfs/${params.payload.ipfsdata[1]}`,JSON);
    console.log("이거",data);
    data.num=params.payload.num;
    yield put(pushdata(data))

  }

  export function* waitmarketdata(){
    yield takeEvery(SPUSHDATA,takemarketdata);
  }

const initialState={
    data:[],
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

    
  
},initialState)

export default marketdata;