import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Create from './container/Create';
import Home from './container/Home';
import Signin from './container/Signin';
import Mypage from './container/Mypage';
import Market from './container/Market';

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
          <Route exact path="/Mypage" component={Mypage} />
          <Route exact path="/Market" component={Market} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
