import React from 'react'
import { Link } from 'react-router-dom';

function Search({data,search,setchange}) {
    const matchdata=data.data.filter(x=>x.name.indexOf(search)!=-1);
    console.log(matchdata.length)
    return (
        <div className="empty-inner">
        {matchdata.length==0?
         <div className="empty-box">
             <p> No items found for this search</p>
             <img src="./images/empty-search.jpg"></img>
             <h3><button onClick={()=>{setchange(0)}}>Back</button></h3>
         </div>
        :
        matchdata.map(x=>{
            return(
                <div>
                <div>{x.name}</div>
             <Link to={`/product/${x.user}/${x.num}`}><img src={x.image} width="300px" height="300px"></img></Link>
              </div>
            )
        })
        
        }
          
        </div>
    )
}

export default Search
