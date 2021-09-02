import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {filtermydata,resetdata} from "../../modules/marketdata"

function My({data,conn}) {
    const dispatch=useDispatch();
    let my=data.data.filter(x=>x.user==conn.myAccount);

    const ddel=(e)=>{   
        console.log(e.target.dataset.name);
        dispatch(filtermydata(e.target.dataset.id));
        conn.shopInstance.burn(e.target.dataset.id,{
            from: conn.myAccount
        });
    }
    


    return (
        <div className="mypage-inner">
        <div className="mypage-address">
           <span className="address-title">내주소:</span><span className="address-desc">{conn.myAccount}</span>
           <p>Created Items</p>
        </div>
        <div className="myitems-wrapper">
       {my.map(x=>{
        return(
        
            <div className="myitems-inner">
                <Link to={`/product/${x.user}/${x.num}`}><p className="myitems-title">{x.name}</p><img src={x.image}></img></Link>
                <button onClick={ddel} data-name={x.name} data-id={x.num} className="myitem-del-btn">등록 취소하기</button>
            </div>
        
        )
    })}
    </div>
</div>
    )
}

export default My