
import React, { useEffect } from 'react'
import { useDispatch,useSelector } from "react-redux";
import {sgetweb3} from "../modules/conn"

function Signin() {

    const dispatch = useDispatch();
    const conn = useSelector(state => state.conn);
  useEffect(() => {
    dispatch(sgetweb3());
    
 
  }, [sgetweb3])
  
    return (
        <div>
          
           <button onClick={()=>{window.location.replace("/signin")}}>Get MetaMask</button>

        </div>
    )
}

export default Signin
