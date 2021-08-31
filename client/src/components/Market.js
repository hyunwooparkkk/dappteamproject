import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from "react-redux";
import {spushdata,resetdata} from "../modules/marketdata"
import ipfs from '../utils/ipfs';
import List from './List';
function Market() {
    const [change,setchange]=useState(0);
    const [search,setsearch]=useState("");
    const dispatch=useDispatch();
    const conn = useSelector(state => state.conn);
    const data = useSelector(state => state.marketdata);

    const handleGet = async() => {
        const length = await conn.shopInstance.getLength();
        console.log(length);

        for(let i = 0; i < length; i++){
            const ipfsdata = await conn.shopInstance.getAllNFTs(i);
            dispatch(spushdata({ipfsdata:ipfsdata,num:i}));
        }
    }

    useEffect(() => {
     dispatch(resetdata());
     handleGet();
    }, [])

    return (
        <div>
            <div>-markgetpage-</div>
            <input type="text" placeholder="작품명" value={search} onChange={(e)=>{setsearch(e.target.value)}}></input>
            <button onClick={()=>{setchange(4)}}>검색</button>
            <div>
            <button onClick={()=>{setchange(0)}}>최신순</button>
            <button onClick={()=>{setchange(1)}}>과거순</button>
            <button onClick={()=>{setchange(2)}}>지정가</button>
            <button onClick={()=>{setchange(3)}}>경쟁가만</button>
            </div>
         <List data={data} change={change} search={search} setchange={setchange}></List>
        </div>
    )
}

export default Market
