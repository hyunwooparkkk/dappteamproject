import { createAction,handleActions } from "redux-actions";
import {put,call,takeEvery} from"@redux-saga/core/effects";
import produce from "immer";

const POND= "upload/POND";
const FILES= "upload/FILES";
const BUFFER="upload/BUFFER";
const IPFSMETAHASH="upload/IPFSMETAHASH";
const IPFSHASH="upload/IPFSHASH";
const RESET="upload/RESET";
const FLAG="upload/FLAG";
const METANAME="upload/METANAME";
const METADESC="upload/METADESC";
const METAHASH="uoload/METAHASH";

export const setpond=createAction(POND,(input)=>input);
export const setfiles=createAction(FILES,(input)=>input);
export const setbuffer=createAction(BUFFER,(input)=>input);
export const setipfsMetaHash=createAction(IPFSMETAHASH,(input)=>input);
export const setipfsHash=createAction(IPFSHASH,(input)=>input);
export const uploadreset=createAction(RESET,(input)=>input);
export const setflag=createAction(FLAG,(input)=>input);
export const setmetaname=createAction(METANAME,(input)=>input);
export const setmetadesc=createAction(METADESC,(input)=>input);
export const setmetahash=createAction(METAHASH,(input)=>input);


const initialState={
    ipfsHash: null,
    ipfsMetaHash: null,
    buffer: '',
    files: [],
    imageUrl: null,
    flag: false,
    pond:null,
    metaName:"",
    metaDesc:"",
    metaHash:"",
}

const upload=handleActions({
    [POND]:(state,{payload:input})=>
    produce(state,(draft)=>{
        draft.pond=input;
    }),
    [FILES]:(state,{payload:input})=>
    produce(state,(draft)=>{
        draft.files=input;
    }),
    [BUFFER]:(state,{payload:input})=>
    produce(state,(draft)=>{
        draft.buffer=input;
    }),
    [IPFSMETAHASH]:(state,{payload:input})=>
    produce(state,(draft)=>{
        draft.ipfsMetaHash=input;
    }),
    [IPFSHASH]:(state,{payload:input})=>
    produce(state,(draft)=>{
        draft.ipfsHash=input;
    }),
    [RESET]:(state,{payload:input})=>
    produce(state,(draft)=>{
        draft.ipfsMetaHash=input.ipfsMetaHash;
        draft.imageUrl=input.imageUrl;
        draft.flag=input.flag;
    }),
    [FLAG]:(state,{payload:input})=>
    produce(state,(draft)=>{
        draft.flag=input;
    }),
    [METANAME]:(state,{payload:input})=>
    produce(state,(draft)=>{
        draft.metaName=input;
    }),
    [METADESC]:(state,{payload:input})=>
    produce(state,(draft)=>{
        draft.metaDesc=input;
    }),
    [METAHASH]:(state,{payload:input})=>
    produce(state,(draft)=>{
        draft.metaHash=input;
    }),
},initialState)

export default upload;