import React,{useState} from 'react'
import Web3 from 'web3';
import { useHistory } from 'react-router-dom'
import {useSelector } from "react-redux";
import { setmetaprice } from '../modules/upload';
import Header from './Header';
import Footer from './Footer';
import productcss from '../css/product.css';

function Product() {

    const data = useSelector(state => state.marketdata);
    const conn = useSelector(state => state.conn);

    const history = useHistory()
    const dodo =history.location.pathname;
    const momo=dodo.split('/');
    const compnum=Number(momo[3]);

    const [bidprice,setbidprice]=useState();

    const onhandlebuy= async(price,user,num)=>{
      await conn.shopInstance.transferFrom(user,conn.myAccount,num,{
        from: conn.myAccount,
        value: Web3.utils.toWei(String(price),"ether")
        })
      }
 

    const onhandlebid =async(bidprice,initprice)=>{
        if(initprice>=bidprice){
            alert("입찰시작가보다 더높게 적으세요!");
        }else{
            await console.log("입찰가격",bidprice)
            

        }
    }

    return (
        <div className="product-container">
            <Header/>
            <section className="product">
            {
                data.data.map((x)=>x.num==compnum?
                <div className="product-inner">
                    <img src={x.image}></img>
                    <div className="product-info">
                        <div className="product-info-left">
                            <p>Title <span>:</span> </p>
                            <p>Desc <span>:</span> </p>
                        </div>
                        <div className="product-info-right">
                            <p>{x.name}</p>
                            <p>{x.description}</p>
                        </div>
                    </div>
                {
                    x.typeprice==false? 
                    <div className="product-fixed">  
                        <div className="product-fixed-left">
                        <p>지정가 <span>:</span></p>
                        <p>발행 날짜 <span>:</span></p>
                        <p>창작자 <span>:</span></p>
                        </div>  
                        <div className="product-fixed-right">
                            <p>{x.price} ETH</p>
                            <p>{x.time}</p>
                            <p>{x.user}</p>
                        <button className="product-fixed-btn" onClick={()=>{onhandlebuy(x.price,x.user,x.num)}}>구매하기</button>
                        </div>
                    </div>
                    :<div className="product-oction">
                        <div className="product-oction-left">
                            <p>입찰가 <span>:</span></p>
                            <p>발행 날짜 <span>:</span></p>
                            <p>종료 시간 <span>:</span></p>
                            <p>창작자 <span>:</span></p>
                            <p>희망 입찰가 <span>:</span></p>
                        </div>
                        <div className="product-oction-right">
                            <p>{x.price}</p>
                            <p>{x.time }</p>
                            <p>{x.endDate}</p>
                            <p>{x.user}</p>
                        <input type="text" placeholder={x.price} value={bidprice} onChange={(e)=>{setbidprice(e.target.value)}}></input>
                        <button className="product-oction-btn" onClick={()=>{onhandlebid(bidprice,x.price)}}>입찰하기</button>
                        </div>
                    </div>
                }
                </div>
                :null)
            }
            </section>
            <Footer/>
        </div>
    )
}

export default Product
