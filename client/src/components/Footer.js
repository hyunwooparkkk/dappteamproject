import React from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Slider from "react-slick";
// import WOW from 'wowjs';
// import TypeIt from "typeit-react";
import HomePage from "../css/homepage.css";
import { BiUserCircle , BiWallet } from "react-icons/bi";
import {FaShopify} from "react-icons/fa";
import {GoDiffAdded} from "react-icons/go";
import Responsive from "../css/responsive.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-inner">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="images/logo.png"/>
                    </div>
                    <div className="copyright">
                        <div className="policy-sns">
                            <div className="policy">
                                <span>
                                    <a href="#none">개인정보취급방침</a>
                                    <em>|</em>
                                    <a href="#none">이용약관</a>
                                </span>
                                <span>Copyright STARTUP MATE. All right reserved.</span>
                            </div>
                            <div className="sns">
                                <a href="#none"><i class="xi-facebook-official"></i></a>
                                <a href="#none"><i class="xi-instagram"></i></a>
                                <a href="#none"><i class="xi-kakaostory"></i></a>
                                <a href="#none"><i class="xi-naver-square"></i></a>
                                <a href="#none"><i class="xi-youtube-play"></i></a>
                            </div>
                        </div>
                        <div className="address">
                            <span>(주)U1L | 대표자 : 김진우 | 사업자번호 : 123-5-67890 사업자 정보 확인 | 개인정보보호책임자 : 임병군 </span>
                            <span>주소 : 서울시 서대문구 연희동 123-14 U1L 빌딩 2층 ㅣ 이메일: info@uil.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
