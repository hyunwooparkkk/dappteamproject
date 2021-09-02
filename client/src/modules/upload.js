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
const METAHASH="upload/METAHASH";
const METAPRICE="upload/METAPRICE";
const TYPEPRICE="upload/TYPEPRICE";
const RESETUPLOAD="upload/RESETUPLOAD";

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
export const setmetaprice=createAction(METAPRICE,(input)=>input);
export const setmetatypeprice=createAction(TYPEPRICE,(input)=>input);
export const resetupload=createAction(RESETUPLOAD,(input)=>input);

const initialState={
    ipfsHash:null,
    ipfsMetaHash: null,
    buffer: '',
    files: [],
    imageUrl: null,
    flag: false,
    pond:null,
    metaName:"",
    metaDesc:"",
    metaHash:"",
    metatypeprice:false,
    metaprice:0, 
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
    [METAPRICE]:(state,{payload:input})=>
    produce(state,(draft)=>{
        draft.metaprice=input;
    }),
    [TYPEPRICE]:(state,{payload:input})=>
    produce(state,(draft)=>{
        draft.metatypeprice=input;
    }),
    [RESETUPLOAD]:(state,{payload:input})=>
    produce(state,(draft)=>{
        
        draft.ipfsMetaHash=null;
        draft.imageUrl=null;
        draft.metaName="";
        draft.metaDesc="";
        draft.files=[];
        draft.buffer='';
        draft.ipfsMetaHash='';
        draft.ipfsHash='';
        draft.metaHash='';
        draft.metaprice='';
    }),


    
},initialState)

export default upload;