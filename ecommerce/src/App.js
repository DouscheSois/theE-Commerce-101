import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import ShoppingCart from "./components/cart/ShoppingCart";
import Footnote from "./components/Footnote";
import Confirmation from "./components/cart/Confirmation";

import { StoreProvider } from "./contextAPI/Store";

import "./App.css";

const App = () => {
  return (
    <StoreProvider>
      <Fragment>
        <Router>
          <Navbar />
          <section className="container">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/about" component={About} />
              <Route exact path="/shopping-cart" component={ShoppingCart} />
              <Route exact path="/confirmation" component={Confirmation} />
            </Switch>
          </section>
          <Footnote />
        </Router>
      </Fragment>
    </StoreProvider>
  );
};

export default App;
