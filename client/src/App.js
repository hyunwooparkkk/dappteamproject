import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Create from './components/Create';
import First from './components/Home';
import Market from './components/Market';
import Signin from './components/Signin';
import Product from './components/Product';
function App() {
  return (
    <div>
       <BrowserRouter>
        <Switch>
         
          <Route path="/" exact component={First}></Route>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/market" component={Market} />
          <Route exact path="/product/:key1?/:key2?" component={Product}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
