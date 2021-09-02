import React from 'react'
import { Link } from 'react-router-dom';
function Latest({data}) {

   return(
    <div>
        {data.data.slice().reverse().map(x=>{
                return(
                    <div className="market-items-inner">
                    
                 <Link to={`/product/${x.user}/${x.num}`}><p className="market-items-title">{x.name}</p><img src={x.image}></img></Link>
                  </div>
                )
            })}
    </div>
   )
}

export default Latest
