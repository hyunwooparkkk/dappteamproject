import React,{useState} from 'react'

import Latest from './filter/Latest'
import Past from './filter/Past'
import Pending from './filter/Pending';
import Bid from './filter/Bid';
import Search from './filter/Search';

function List({data,change,search,setchange}) {
     //0->최신순
     //1->등록순
     //2->지정가
     //3->경매가
     if (change==0){
        return(
            <div>
          
            <Latest data={data}></Latest>
            </div>
       );
    }
    else if(change==1){
        return( 
            <div>
   
            <Past data={data}></Past>
            </div>
        )
    }
    else if(change==2){
        return (
            <div>
        
            <Pending data={data}></Pending>
            </div>
      );
    }
    else if(change==3){
        return(
            <div>

            <Bid data={data}></Bid>
            </div>
      );
    }
    else if(change==4){
        return(
            <div>

            <Search data={data} search={search} setchange={setchange}></Search>
            </div>
      );
    }

}

export default List
