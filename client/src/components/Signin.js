import React, { useEffect } from 'react'
import { useDispatch,useSelector } from "react-redux";
import {sgetweb3} from "../modules/conn"
import Header from './Header';
import Footer from './Footer';

import SigninCSS from "../css/Signin.css"
import responsive from "../css/responsive.css"

function Signin() {

    const dispatch = useDispatch();
    const conn = useSelector(state => state.conn);
  useEffect(() => {
    dispatch(sgetweb3());
  
  }, [sgetweb3])

    return (
        <div className = "signinContainer">
          <Header/>
          <section className = "signinInner">
            <p>Sign in to your wallet</p>
            <img src = "/images/metamask.png"></img>
            <p><button onClick={()=>{window.location.replace("/signin")}}>Get MetaMask</button></p>
          </section>
          <div className = "footer"><Footer/></div>
          
        </div>
    )
}

export default Signin
