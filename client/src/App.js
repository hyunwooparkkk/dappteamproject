import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Create from './components/Create';
import Home from './container/Home';
import Signin from './components/Signin';
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
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
