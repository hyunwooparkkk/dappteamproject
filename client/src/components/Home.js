import React from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Slider from "slick-slider";
import WOW from 'wowjs';
import TypeIt from "typeit-react";
import HomePage from "../css/homepage.css";
// import Custom from "../utils/custom"

// Images 와 난 병신이였다
import Logo from "../images/logo.png";
import Slide1 from "../images/slide-welcome-01.png";
import Slide2 from "../images/slide-welcome-02.png";
import Slide3 from "../images/slide-welcome-03.png";
import QuestionImage from "../images/quotation-mark.svg";
import CeoImage from "../images/icon-face-ceo.png";
import AppStore from "../images/btn-appstore.png";
import Playstore from "../images/btn-playstore.png"





function Home() {
    return (
      <body>
        <div className="container">
          
          {/*header start */}
          <header>
            <div className="header-inner">
              <div className="logo">
                <Link to="/"><img src={Logo}></img></Link>
              </div>
              <div className='gnb'>
                <Link to="/Create" >Create</Link>
                <Link to="/Market" >Market</Link>
                <Link to="/Mypage" >My Page</Link>
                <Link to="/Signin" >Sign-In</Link>
              </div>
            </div>
            <div className="trigger"></div>
          </header>

          {/*welcome start */}

          <section className="welcome">
            <div className="slideshow">
              <img src={Slide1}/>
              {/* <img src={Slide2}/>
              <img src={Slide3}/> */}
            </div>
            <div className="welcome-heading">
              <span>
                창의적인 아이디어를 만드는 가장 빠른 방법
              </span>
              <h1>
                An idea solution of startup for your
                <em id="typing"></em>
              </h1>
              <p>
                on the KOREA's largest NFT marketplace
              </p>
              <div className="welcome-btns">
                <Link to="/Create" className="btn start">Create NFT</Link>
                <Link to="/Market" className="btn guide">Go to Market</Link>
              </div>
            </div>
            <div className="mause">
              <span className="wheele"></span>
            </div>
          </section>

          {/*ceo-access start */}
          
          <section className="ceo-access" id="feature1">
              <div className="ceo-inner">
                <div className="ceo-left ltr wow">
                  <img src={QuestionImage}/>
                  <h3>3 Pre-made Solutions for your Startup Business</h3>
                  <p>창의적인 아이디어를 가장 빠르게 창출할 수 있는 최고의 앱 솔루션을 제공합니다. 여러분의 스타트업을 더욱 성장시키기 위해 온 힘을 다할 것이며 U1L 라는 이름답게 항상 동반자가 되겠습니다. 감사합니다.</p>
                  <span>임병군 - U1L 대표이사</span>
                </div>
                <div className="ceo-right rtl wow">
                  <div className="ceo-msg">
                    <h3>Application Downloads<big>30,000+</big></h3>
                    <p>U1L는 앱 다운로드 30,000명 이상의 앱 사용자의 충분한 피드백을 통해 검증된 서비스를 제공합니다.</p>
                  </div>
                  <div className="ceo-photo">
                    <img src={CeoImage}/>
                  </div>
                </div>
              </div>
              <div className="access-inner">
                <div className="access-content">
                  <div className="access-left">
                    <h2>언제나 어디서나 즐겁고 편리한 액세스 스타트업 CEO들의 커뮤니티</h2>
                    <p>언제나 어디서나. 즐겁고 편리한 액세스가 가능합니다.
                        회원 가입은 쉽고 간단합니다. 무료 회원 가입 후 로그인하시면 업데이트 된 스타트업 메이트의 서비스를 받으실 수 있습니다.</p>
                    <div className="btn-download">
                      <img src={AppStore}/>
                      <img src={Playstore}/>
                    </div>
                  </div>
                </div>
              </div>
          </section>

                       
        </div>
        </body>
    )
}

export default Home
