import React from 'react'
import { Link } from 'react-router-dom';
function Past({data}) {
    return (
        <div>
                  {data.data.map(x=>{
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

export default Past
