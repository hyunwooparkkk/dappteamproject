import React from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Slider from "react-slick";
import WOW from 'wowjs';
import TypeIt from "typeit-react";
import HomePage from "../css/homepage.css";
import { BiUserCircle , BiWallet } from "react-icons/bi";
import {FaShopify} from "react-icons/fa";
import {GoDiffAdded} from "react-icons/go";
import {BsFillCollectionFill, BsHeartFill,BsPencilSquare} from "react-icons/bs"
import {GiMagicLamp} from "react-icons/gi"

import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import mypage from '../css/mypage.css';
import Responsive from "../css/responsive.css";


function Mypage() {
    return (
        <div className="mypage-container">
            <Header/>
            <section className="mypage">
            {/* mypage-inner start */}
            <div className="mypage-inner">
              <div className="inner-top"></div>
              <img src="/images/artwork_1.jpg"></img>
              <div className="inner-name"><h2>User Name</h2><span><BsPencilSquare/></span></div>
            </div>
            {/* mypage-profile start */}
            <div className="mypage-profile">
              <div className="profile-left">
                <p className="profile-left-title">My Items</p>
                <ul className="categories">
                  <li>
                    <Link to="#none" className="categories-list1"><BsFillCollectionFill className="categories-icon"/>
                      <span className="categories-desc">Collected</span>
                    </Link>
                    <div className="categories-count">
                      <span>0</span>
                    </div>
                  </li>
                  <li>
                  <Link to="#none" className="categories-list2"><GiMagicLamp className="categories-icon"/>
                      <span className="categories-desc">Created</span>
                    </Link>
                    <div className="categories-count">
                      <span>0</span>
                    </div>
                  </li>
                    
                    <li>
                    <Link to="#none" className="categories-list3"><BsHeartFill className="categories-icon"/>
                      <span className="categories-desc">Favorited</span>
                    </Link>
                    <div className="categories-count">
                      <span>0</span>
                    </div>
                  </li>
                  
                </ul>
                
              </div>
              <div className="profile-right">
                <div className="profile-right-top">
                  <div className="search">
                    
                    <input type="text" placeholder="search.."></input>
                  </div>
                </div>
                <div className="profile-right-bottom">
                    <Card/>
                    {/* <p>No items to display</p> */}
                </div>
              </div>
            </div>
            </section>
            <Footer/>
        </div>   
        
    )
}

export default Mypage
