import React from 'react'
import { Link } from 'react-router-dom';
// import $ from 'jquery';
import Slider from "react-slick";
import WOW from 'wowjs';
import TypeIt from "typeit-react";
import HomePage from "../css/homepage.css";
// import Custom from "../utils/custom.js"
import Logo from "../images/logo.png";

function Home() {
    return (
        <body>
            <div className="container">
                <header>
                    <div className="header-inner">
                        <div className="logo">
                            <Link to="/"><img src={Logo}></img></Link>
                        </div>
                        <div className='gnb'>
                        <Link to="/Create">Create</Link>
                        <Link to="/Market">Create</Link>
                        <Link to="/Mypage">Create</Link>
                        <Link to="/Signin">Create</Link>
                        </div>
                    </div>
                </header>
            </div>
        </body>
    )
}

export default Home
