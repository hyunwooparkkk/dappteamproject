import React from 'react'
import { Link } from 'react-router-dom';
function Pending({data}) {
    const pending=data.data.filter(x=>x.typeprice==false);

    return (
        <div>
            {pending.map(x=>{
                return(
                    <div>
                    <div>{x.name}</div>
                 <Link to={`/product/${x.user}/${x.num}`}><img src={x.image} width="300px" height="300px"></img></Link>
                  </div>
                )
            })}
        </div>
    )
}

export default Pending
