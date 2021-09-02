import React from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { BiUserCircle , BiWallet } from "react-icons/bi";
import {FaShopify} from "react-icons/fa";
import {GoDiffAdded} from "react-icons/go";

function Header() {
  $(window).scroll(function(){
    if($(window).scrollTop() > 50){
      $('.header , .btn-top').addClass('active')
    }
    else{
      $('.header , .btn-top').removeClass('active')
    }
  })
  // Header Trigger
  $('.trigger').click(function(){
    $(this).toggleClass('active');
    $('.gnb').togleClass('active');
  });

  $('.gnb a, section').click(function(){
    $('.gnb , .trigger').removeClass('active');
  })
  
    return (
      
        <div className="header">
          
          {/*header start */}
          
            <div className="header-inner">
              <div className="logo">
                <Link to="/"><img src="/images/logo1.png"></img></Link>
              </div>
              <div className='gnb'>
                <Link to="/create" ><GoDiffAdded className="gnb-1"/></Link>
                <Link to="/market" ><FaShopify className="gnb-2"/></Link>
                <Link to="/my" ><BiUserCircle className="gnb-3"/></Link>
                <Link to="/signin" ><BiWallet className="gnb-4"/></Link>
              </div>
            </div>
            {/* <div className="trigger"></div> */}
          

        {/* // <!-- Go to Top --> */}
        <a href="#" className="btn-top"><i className="xi-angle-up-thin"></i></a>
    </div>

    )
}

export default Header;
