import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Create from './components/Create';
import First from './components/Home';
import Market from './components/Market';
import Signin from './components/Signin';
import Product from './components/Product';
import Home from './container/Home';
import Mypage from './container/Mypage';

import WOW from 'wowjs';
import Slider from "react-slick";


function App() {
  return (
    <div>
       <BrowserRouter>
        <Switch>
         
          <Route path="/" exact component={Home}></Route>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/market" component={Market} />
          <Route exact path="/product/:key1?/:key2?" component={Product}/>
          <Route exact path="/Mypage" component={Mypage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
