import React,{useState} from 'react'
import Web3 from 'web3';
import { useHistory } from 'react-router-dom'
import {useSelector } from "react-redux";
import { setmetaprice } from '../modules/upload';


function Product() {

    const data = useSelector(state => state.marketdata);
    const conn = useSelector(state => state.conn);

    const history = useHistory()
    const dodo =history.location.pathname;
    const momo=dodo.split('/');
    const compnum=Number(momo[3]);

    const [bidprice,setbidprice]=useState();

    const onhandlebuy= async(price,user,num)=>{
      await conn.shopInstance.transferFrom(conn.myAccount,user,num,{
        from: conn.myAccount,
        to: user,
            gas: 30000, 
            value: Web3.utils.toWei(price, 'ether')
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
        <div>
            제품상세page
            {
                data.data.map((x)=>x.num==compnum?
                <div>
                <img src={x.image} width="300px" height="300px"></img>
                <div>-작품명: {x.name}-</div>
                <div>설명: {x.description}</div>
         
                {
                    x.typeprice==false? 
                    <div>    
                    <div>지정가:{x.price}</div>
                    <div>발행날짜: {x.time}</div>
                    <div>창작자: {x.user}</div><button onClick={()=>{onhandlebuy(x.price,x.user,x.num)}}>구매하기</button>
                    </div>
                    :<div>
                    <div>입찰가: {x.price}</div>
                    <div>발행날짜: {x.time }</div>
                    <div>종료시간: {x.endDate}</div>
                    <div>창작자: {x.user}</div>
                    <input type="text" placeholder={x.price} value={bidprice} onChange={(e)=>{setbidprice(e.target.value)}}></input>
                    <button onClick={()=>{onhandlebid(bidprice,x.price)}}>입찰하기</button>
                    </div>
                }
                </div>
                :null)
            }
            
        </div>
    )
}

export default Product
