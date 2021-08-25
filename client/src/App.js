import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Create from './components/Create';
import First from './components/Home';
import Signin from './components/Signin';
function App() {
  return (
    <div>
       <BrowserRouter>
        <Switch>
         
          <Route path="/" exact component={First}></Route>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/create" component={Create} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
