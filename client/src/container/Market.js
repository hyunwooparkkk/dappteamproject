import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from "react-redux";
import {spushdata,resetdata} from "../modules/marketdata"
import ipfs from '../utils/ipfs';
import List from '../components/List';
import { useHistory } from 'react-router-dom';
import {BiSearchAlt} from "react-icons/bi"
import Header from '../components/Header';
import marketcss from '../css/market.css'
import $ from 'jquery';
// import 'bootstrap';

function Market() {

      // sort by menu function
  const [isOpen, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(isOpen => !isOpen); // on,off 개념 boolean
}


    const [change,setchange]=useState(0);
    const [search,setsearch]=useState("");
    const dispatch=useDispatch();
    const conn = useSelector(state => state.conn);
    const data = useSelector(state => state.marketdata);
    const [init,setinit]=useState(false);
    const history = useHistory();


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
                <div className="market-container">
                <Header/>
                <section className="market">
                  <div className="market-inner">
                    <div className="market-search">
                      <input type="text" placeholder="search..." value={search} onChange={(e)=>{setsearch(e.target.value)}}></input>
                      <button className="search-icon" onClick={()=>{setchange(4)}}><BiSearchAlt/></button>
                      <span className="market-tools-trigger" onClick={toggleMenu}>Sort By</span>
                      <div className={isOpen ? "show-tools" : "hide-tools"}>
                        <button onClick={()=>{setchange(0)}}>Recently</button>
                        <button onClick={()=>{setchange(1)}}>Oldest</button>
                        <button onClick={()=>{setchange(2)}}>Fixed Price Only</button>
                        <button onClick={()=>{setchange(3)}}>Oction Price Only</button>
                      </div>
                    </div>
                    <List data={data} change={change} search={search} setchange={setchange}></List>
                  </div>
               </section>
              </div>
             : <div className="market-container">
             <Header/>
             <section className="market">
                <div className="empty-inner">
                    <div className="empty-box">
                        <p>아직 아무것도 등록되지 않았어요</p>
                        <img src="/images/artwork_1.jpg"></img>
                        <h3><button onClick={()=>{setchange(0)}}>Back</button></h3>
                    </div>
                </div>
            </section>
             </div>
            }
        </div>
    )
}

export default Market
