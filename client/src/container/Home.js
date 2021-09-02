import React,{useEffect}  from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Slider from "react-slick";
import WOW from 'wowjs';
import { useDispatch } from 'react-redux';
//import TypeIt from "typeit-react";
import HomePage from "../css/homepage.css";
import { BiUserCircle , BiWallet } from "react-icons/bi";
import {FaShopify} from "react-icons/fa";
import {GoDiffAdded} from "react-icons/go";
import Responsive from "../css/responsive.css";
import {resetupload} from '../modules/upload';
import Header from '../components/Header';
import Footer from '../components/Footer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {

    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(resetupload());
    }, [])


  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    pauseOnHover: false,
    arrows: false,
  };
  var reviews = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };


//   $(window).scroll(function(){
//     if($(window).scrollTop() > 50){
//       $('header , .btn-top').addClass('active')
//     }
//     else{
//       $('header , .btn-top').removeClass('active')
//     }
//   })
//   // Header Trigger
//   $('.trigger').click(function(){
//     $(this).toggleClass('active');
//     $('.gnb').togleClass('active');
//   });

//   $('.gnb a, section').click(function(){
//     $('.gnb , .trigger').removeClass('active');
//   })
  
  
  // Faq Accordion
  $('.faq-desc').eq(0).show();
  $('.faq-title').click(function(){
    $(this).next().stop().slideDown();
    $(this).parent().siblings().children('.faq-desc').stop().slideUp();
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
  }) 

    return (
      
        <div className="container">
          <Header/>
          {/*welcome start */}

          <section className="welcome">
            <div className="slideshow">
              <Slider {...settings}>

              <img src="/images/slide-welcome-01.png"/>
              <img src="/images/slide-welcome-02.png"/>
              <img src="/images/slide-welcome-03.png"/>
              </Slider>
            </div>
            <div className="welcome-heading">
              <span>
                
              </span>
              <h1>
                국내 유일 NFT 마켓<br></br>U1L
                {/* <em id="typing"></em> */}
                {/* <em id="typing"><TypeIt
                  options={{
                    strings: ["Business strategy.", "The Value in Blockchain", "Creative Idea."], // 타이핑 텍스트 입력
                    speed: 100, // 알파벳 타이핑 속도
                    autoStart: true, // 자동 재생 사용
                    breakLines: false, // 줄 바꿈 사용안함
                   }}
                /></em> */}
              </h1>
              <p>
                dApp based on Ethereum Network
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
                <div className="ceo-content">
                    <div className="ceo-left ltr wow">
                        <img src="/images/quotation-mark.png"/>
                        <h3>3 Pre-made Solutions for your Startup Business</h3>
                        <p>창의적인 아이디어를 가장 빠르게 창출할 수 있는 최고의 앱 솔루션을 제공합니다. 여러분의 스타트업을 더욱 성장시키기 위해 온 힘을 다할 것이며 U1L 라는 이름답게 항상 동반자가 되겠습니다. 감사합니다.                        </p>
                        <span>임병군 - U1L 대표이사</span>
                    </div>
                    <div className="ceo-right rtl wow">
                        <div className="ceo-msg">
                            <h3>Application Downloads<big>30,000+</big></h3>
                            <p>U1L은 앱 다운로드 30,000명 이상의 앱 사용자의 충분한 피드백을 통해 검증된 서비스를 제공합니다.</p>
                        </div>
                        <div className="ceo-photo">
                            <img src="/images/ceo-photo.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="access-inner">
                <div className="access-content">
                    <div className="access-left">
                        <h2>내 소중한 작품 이제 온라인으로 판매하자!</h2>
                        <p>언제나 어디서나. 즐겁고 편리한 액세스가 가능합니다.
                            회원 가입은 쉽고 간단합니다. 온라인 지갑 메타마스크 가입 후 연동하시면 U1L만의 다양한 작품들을 만나실 수 있습니다.</p>
                        <div className="btn-download">
                            <a href="#none"><img src="images/btn-appstore.png"/></a>
                            <a href="#none"><img src="images/btn-playstore.png"/></a>
                        </div>
                    </div>
                    <div className="access-right">
                        <img src="/images/access.png"/>
                    </div>
                </div>
            </div>
        </section>
        
        {/* <!-- banner Start --> */}
        <section className="banner">
            <div className="banner-inner">
                <div className="banner-content">
                  
                    <input type="radio" name="tabmenu" id="tab1"/>
                    <input type="radio" name="tabmenu" id="tab2"/>
                    <input type="radio" name="tabmenu" id="tab3"/>
                    <div className="tab-btn">
                        <label for="tab1">
                            <em><img src="/images/banner-icon-01.png"/></em>
                            <span>CEO를 위한 경영 전략을 위한 더 쉽은 방법</span>
                        </label>
                        <label for="tab2">
                            <em><img src="/images/banner-icon-02.png"/></em>
                            <span>개선된 검색 필터로 효율적인 전략 수립</span>    
                        </label>
                        <label for="tab3" class="tab3">
                            <em><img src="/images/banner-icon-03.png"/></em>
                            <span>CEO 오프라인 커뮤니티 활동 지원</span>
                        </label>
                    </div>
                    <div className="tabs">
                        <div className="tab tab1">
                            <h2>Fast management strategy</h2>
                            <p>어떤 상황에서든 기업의 리더는 불황기 생존 방안은 물론이고 미래에 성장할 수 있는 전략을 반드시 찾아야 합니다.</p>
                        </div>
                        <div className="tab tab2">
                            <h2>Efficient search filter</h2>
                            <p>스타트업 메이트는 비즈니스 모델 캔버스를 통해 가장 효율적인 경영전략 수립 방안을 스타트업 CEO에게 제시합니다.</p>  
                        </div>
                        <div className="tab tab3">
                            <h2>CEO Community Activities</h2>
                            <p>기업이 디지털과 물리적인 요소를 통합하여 비즈니스 모델을 변화시키는 새로운 방향을 정립하기 위한 오프라인 활동을 지원합니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- faq Start --> */}
        <section className="faq" id="feature4">
            <div className="faq-inner">
                <div className="headline-share">
                    <h1>서비스 이용이 궁금하신가요?</h1>
                    <p>스타트업메이트가 도와드리겠습니다.</p>
                </div>
                <div className="faq-content">
                    <div className="faq-accordion ltr wow">
                        <div className="faq-item active">
                            <div className="faq-title">스타트업 메이트 회원가입이 필수인가요?</div>
                            <div className="faq-desc">네. 회원가입은 필수입니다. <br/> 
                                스타트업 메이트 회원가입은 만 20세 이상 누구나 가입하실 수 있으며,
                                스타트업 메이트 앱 서비스를 이용하시기 위해서 회원가입은 필수입니다. <br/><br/>
                                스타트업 메이트 회원가입은 앱을 통해서 가입하실 수 있습니다. <br/>
                                가입 절차는 아래와 같습니다. <br/><br/>
                                ① 약관동의{"(서비스이용약관, 개인정보 취급방침)"} <br/>
                                ② 기본정보 입력{"(아이디, 이름, 비밀번호, 이메일, 휴대전화, 사업자 주소)"}</div>
                        </div>
                        <div className="faq-item">
                            <div className="faq-title">회원가입 시 주민등록번호가 포함되나요?</div>
                            <div className="faq-desc">스타트업 메이트 회원가입 시 주민등록번호는 입력받지 않습니다. <br/>
                                회원가입을 위한 최소한의 정보만으로 회원가입이 완료됩니다. <br/>
                                입력된 회원 정보는 스타트업 메이트 보안 시스템을 통해 안전하게 보호되며 법령에서 정하는 바에 최소한의 기간 동안 보관 후 모두 삭제되며, 고객 정보 보호에 최선을 다하고 있습니다.</div>
                        </div>
                        <div className="faq-item">
                            <div className="faq-title">개인정보 관리를 어떻게 하시나요?</div>
                            <div className="faq-desc">스타트업 메이트는 서비스 제공을 위해 회원의 개인정보를 최소화 하여 수집하며, 수집된 정보는 ＇개인정보 취급방침＇에 따라 엄격히 관리됩니다.

                                스타트업 메이트는 고객님의 개인정보를 소중하게 생각하며 서비스를 이용하시는 고객님의 개인정보 보호를 위해 관련 법령에서 규정하고 있는 개인정보보호 규정을 철저히 준수합니다. 개인정보보호와 관련한 자세한 내용은 '개인정보 취급방침'을 참고해주시기 바랍니다.</div>
                        </div>
                        <div className="faq-item">
                            <div className="faq-title">회원정보를 변경하고 싶은데 어떻게 하나요?</div>
                            <div className="faq-desc">스타트업 메이트 회원정보를 변경하기 위해서 로그인 후 [회원정보]에서 회원정보를 조회하거나 변경하실 수 있습니다.
                                회원정보 변경 방법은 아래와 같습니다. (단, 아이디는 수정하실 수 없습니다.)
                                <br/><br/>
                                ① [회원정보] 페이지 {'>'} 현재 사용중인 비밀번호 입력 <br/>
                                ② [정보수정] 버튼을 클릭합니다.</div>
                        </div>
                        <div className="faq-item">
                            <div className="faq-title">회원탈퇴 후 같은 아이디로 재가입 가능한가요?</div>
                            <div className="faq-desc">스타트업메이트 회원 탈퇴를 원하시나요?
                                동일 아이디는 스타트업 메이트 회원 정책에 따라 재가입이 일정 기간 불가합니다. <br/> 회원 탈퇴 시 기존 회원 정보를 포함한 모든 정보가 복구 불가능합니다. <br/>
                                탈퇴 시 이 점을 다시 한번 고려하신 후 진행해 주세요.
                                항상 최선을 다하는 스타트업메이트가 되겠습니다. 감사합니다.</div>
                        </div>
                    </div>
                    <div className="awards-content rtl wow">
                        <div className="award-image">
                            <img src="/images/faq-01.png"/>
                        </div>
                        <h2>Great apps win awards</h2>
                        <p>웹 및 모바일 개발자가 이끄는 Great apps win awards는 새로운 모바일 앱을 대중에게 주목을 받는 역할을 수행한 앱(App)에 수여됩니다.</p>
                        <a href="#none" class="btn-awards">view the awards</a>
                    </div>
                </div>
            </div>
            
        </section>   

        {/* <!-- review Start --> */}

        <section className="review">
      <div className="review-inner">
        <div className="headline-share">
          <h1>VIP들의 생생 리뷰</h1>
          <p>U1L market review</p>
        </div>
        <div className="review-content" id="feature5">
          <h1 className="slogan">한국 최대의 NFT 거래소, 유일한 당신의 NFT, U1L</h1>
          <Slider {...reviews}>
            <div>
              <p>
                스타트업 창업 후 조직관리에 관한 내용이 잘 만들어져 있어서 많은 도움이 됩니다. U1L의 CEO를 위한 특별한 서비스들 너무 좋습니다. CEO로서 U1L의 기본적인 가이드만 참고해도 원하는 방향으로 조직관리할 수 있을 것 같습니다. 조직관리의 시작을 명확하게 하고, 완성도를 높일 수 있어서 좋습니다.
              </p>
              <p>
                <span>임병군 대표</span>
                U1L 대표이사
              </p>
            </div>
            <div>
              <p>
                경영전략을 어떻게 기획해야 하는지 도무지 엄두가 나지 않았는데 U1L 앱을 통해서 그런 고민 해결이 많이 되었습니다. 안전성과 전문성이 검증된 U1L의 CEO 경영전략 서비스 추천해 드립니다.
                철저한 단계별 검증을 통해 새니기 CEO에게 경영전략 실패에 대한 위험부담을 낮출 수 있을 것 같습니다. 감사합니다.
              </p>
              <p>
                <span>김진우 대표</span>
                U1L 웹 에이전시 CEO
              </p>
            </div>
            <div>
              <p>
                처음 시작하는 CEO라서 전략기획이 뭔지 조직관리가 뭔지 정말 막막했습니다. 컨설팅도 합리적인 비용으로 해주기 때문에 이런 부분에 대한 고민해결도 충분히 되었습니다. U1L와 같은 CEO만을 위한 앱 서비스가 없어서 비교가 어렵겠지만 저는 정말 만족합니다. 번창하시길 기원합니다. 저도 화이팅~ U1L도 화이팅입니다.
              </p>
              <p>
                <span>박현우 총괄</span>
                U1L 개발 총괄
              </p>
            </div>
            <div>
                <p>
                  처음 시작하는 CEO라서 전략기획이 뭔지 조직관리가 뭔지 정말 막막했습니다. 컨설팅도 합리적인 비용으로 해주기 때문에 이런 부분에 대한 고민해결도 충분히 되었습니다. U1L와 같은 CEO만을 위한 앱 서비스가 없어서 비교가 어렵겠지만 저는 정말 만족합니다. 번창하시길 기원합니다. 저도 화이팅~ U1L도 화이팅입니다.
                </p>
                <p>
                  <span>제정원 팀장</span>
                  U1L 영업 총괄
                </p>
              </div>
            </Slider>
        </div>
      </div>
    </section>          
    {/* <!-- focus Start --> */}
        <section className="focus" id="feature6">
            <div className="focus-inner">
                <div className="headline-share">
                    <h1>국내 최대 및 유일 NFT 마켓</h1>
                </div>
                <div className="focus-content">
                    <div className="focus-item utd wow" data-wow-delay='0'>
                        <img src="images/focus-icon-01.png"/>
                        <h3>공들여 만든 내 작품 자랑!</h3>
                        <i className="xi-checkbox-blank"></i>
                        <p>경영, 트렌드, 리더십, 인문 분야 등 어려운 경영 전략을 키워줄 온라인 콘테츠를 제공합니다.</p>
                    </div>
                    <div className="focus-item utd wow" data-wow-delay='0.25s'>
                        <img src="images/focus-icon-02.png"/>
                        <h3>다른 사람 작품도 구경!</h3>
                        <i class="xi-checkbox-blank"></i>
                        <p>카테고리 별로 혹은 모임 검색을 통해 원하는 모임을 쉽고 빠르게 찾을 수 있습니다.</p>
                    </div>
                    <div className="focus-item utd wow" data-wow-delay='0.5s'>
                        <img src="images/focus-icon-03.png"/>
                        <h3>원하는 가격에! 경매로 싸게!</h3>
                        <i class="xi-checkbox-blank"></i>
                        <p>처음 시작하는 경영을 위해 고민 되는 부분을 다른 CEO들과 오프라인 모임에서 함께 하세요.</p>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- news Start --> */}
        <section className="news" id="feature7">
            <div className="news-inner">
                <div className="headline-share">
                    <h1>U1L 갤러리 미리보기</h1>
                </div>
                <div className="news-content">
                    <div className="news-left ltr wow">
                        <div className="news-big" onclick="location.href='https://www.naver.com/'">
                            {/* <!-- 새 탭에서 링크 열기 onclick="window.open('https://www.naver.com/','_blank')" --> */}
                            <img src="images/artwork_regular.jpg"/>
                            <div className="news-headline">
                                <h2>국내 최대 NFT Market<br></br> U1L</h2>
                                <p>
                                    자신의 작품을 U1L에 올려서 얼른 자랑해보세요!
                                    <small class="date">Dec 24, 2021</small>
                                </p>
                                <a href="#none" class="btn-view">자세히 보기</a>
                            </div>
                        </div>
                    </div>
                    <div className="news-right rtl wow">
                        <div className="news-items">
                            <div className="news-thum" onclick="location.href='https://www.naver.com/'">
                                <div class="news-photo">
                                    <img src="images/artwork_19.jpg"/>
                                    <span class="badge new">new issue</span>
                                </div>
                                <p>
                                    ✨방금 막 올라온 작품 구경하기✨
                                </p>
                                <small className="date">Aug 11, 2021</small>
                            </div>
                            <div className="news-thum" onclick="location.href='https://www.naver.com/'">
                                <div className="news-photo">
                                    <img src="images/artwork_22.jpg"/>
                                    <span className="badge new">new issue</span>
                                </div>
                                <p>
                                    ✨방금 막 올라온 작품 구경하기✨
                                </p>
                                <small className="date">Aug 11, 2021</small>
                            </div>
                        </div>
                        <div className="news-items">
                            <div className="news-thum" onclick="location.href='https://www.naver.com/'">
                                <div className="news-photo">
                                    <img src="images/artwork_17.jpg"/>
                                    <span className="badge hot">hot issue</span>
                                </div>
                                <p>
                                    🎇가장 핫한 작품 구경하기🎇
                                </p>
                                <small className="date">Aug 11, 2021</small>
                            </div>
                            <div className="news-thum" onclick="location.href='https://www.naver.com/'">
                                <div className="news-photo">
                                    <img src="images/artwork_21.jpg"/>
                                    <span className="badge hot">hot issue</span>
                                </div>
                                <p>
                                🎇가장 핫한 작품 구경하기🎇
                                </p>
                                <small className="date">Aug 11, 2021</small>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#none" className="btn-readmore">read more news</a>
            </div>
        </section>
        {/* <!-- footer Start --> */}
        <Footer/>
    </div>

    )
}

export default Home
