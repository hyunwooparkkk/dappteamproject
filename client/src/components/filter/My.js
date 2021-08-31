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
        <div>
                <div>
                   내주소: {conn.myAccount}
                </div>
               {my.map(x=>{
                return(
                <div>
                    <div>{x.name}</div>
                    <Link to={`/product/${x.user}/${x.num}`}><img src={x.image} width="300px" height="300px"></img></Link>
                    <button onClick={ddel} data-name={x.name} data-id={x.num}>등록 취소하기</button>
                </div>
                )
            })}
        </div>
    )
}

export default My