import React,{useEffect,useState}from 'react'
import { useDispatch,useSelector } from "react-redux";
import {spushdata,resetdata} from "../modules/marketdata"
import My from '../components/filter/My';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useHistory } from 'react-router-dom';
import mypage from '../css/mypage.css';

function Mypage() {
    const dispatch=useDispatch();
    const conn = useSelector(state => state.conn);
    const data = useSelector(state => state.marketdata);
    const history=useHistory();
    const [init,setinit]=useState(false);
    
    const handleGet = async() => {
        const length = await conn.shopInstance.getLength();
        console.log(length);
        if(length>0){
            setinit(false);
        for(let i = 0; i < length; i++){
            const ipfsdata = await conn.shopInstance.getAllNFTs(i);
            dispatch(spushdata({ipfsdata:ipfsdata,num:i}));
        }
        }
        else{
            setinit(true);
        }
    }
    useEffect(() => {
        if(conn.shopInstance==null){
            alert("로그인후 사용가능!")
            history.push("/signin");
        }
        else{
            dispatch(resetdata());
            handleGet();
        }
    }, [])

    return (
        <div>
        {
             init==false?  
             <div className="mypage-container">
             <Header/>
             <section className="mypage">
               <My data={data} conn={conn}></My>
             </section>
             <Footer/>
         </div>
     :

     <div className="mypage-container">
     <Header/>
     <section className="mypage">
     <div>등록하신 작품이 없습니다</div>
     </section>
     <Footer/>
        </div>      
     
        }
     </div>
    )
}

export default Mypage
