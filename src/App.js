import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Main } from "./components/main/main";
import { Products } from "./components/products/products";
import { FullDescr } from "./components/products/full-descr/fullDescr"

export default function App() {
  return (
    <>
    <Router>
      {/* <Categories/> */}
      <Switch>
      <Route path="/products/details/:slug" component={FullDescr}/>  
        <Route exact path="/" component={Main}/>

        <Route path="/products/" component={Products}/>
        <Route exact path="/products/:pageId" component={Products}/>
        
      </Switch>
    </Router>
    </>
  );
}
