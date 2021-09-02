import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Create from './container/Create';
import Home from './container/Home';
import Market from './container/Market';
import Signin from './components/Signin';
import Product from './components/Product';
import Mypage from './container/Mypage';


function App() {
  return (
    <div>
       <BrowserRouter>
        <Switch>
         
          <Route path="/" exact component={Home}></Route>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/market" component={Market} />
          <Route exact path="/my" component={Mypage} />
          <Route exact path="/product/:key1?/:key2?" component={Product}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
