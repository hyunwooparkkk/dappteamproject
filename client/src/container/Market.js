import React from 'react'
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Card from '../components/Card';
import market from '../css/market.css';


function Market() {
    return (
      <div className="market-container">
        <Header/>
        <section className='market'>
          <div className="market-top">
            <div className="top-search"></div>
            <div></div>
          </div>
        </section>
            
            
      </div>
    )
}

export default Market
