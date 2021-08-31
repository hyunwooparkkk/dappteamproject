import React from 'react'
import { Link } from 'react-router-dom';
function Search({data,search,setchange}) {
    const matchdata=data.data.filter(x=>x.name.indexOf(search)!=-1);
    console.log(matchdata.length)
    return (
        <div>
           {matchdata.length==0?
            <div>
            <div> No items found for this search</div>
            <button onClick={()=>{setchange(0)}}>돌아가기</button>
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
