import React,{useEffect}from 'react'
import { useDispatch,useSelector } from "react-redux";
import {spushdata,resetdata} from "../modules/marketdata"
import My from './filter/My';
function Mypage() {
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
            -mypage-
        <My data={data} conn={conn}></My>

        </div>
    )
}

export default Mypage