import React from 'react'
import { Link } from 'react-router-dom';
function Pending({data}) {
    const pending=data.data.filter(x=>x.typeprice==false);

    return (
        <div>
            {pending.map(x=>{
                return(
                    <div className="market-items-inner">
                    
                    <Link to={`/product/${x.user}/${x.num}`}><p className="market-items-title">{x.name}</p><img src={x.image}></img></Link>
                     </div>
                )
            })}
        </div>
    )
}

export default Pending
