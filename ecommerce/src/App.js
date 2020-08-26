import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import ShoppingCart from "./components/ShoppingCart";
import Footnote from "./components/Footnote";

import { StoreProvider } from "./contextAPI/store";

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
            </Switch>
          </section>
          <Footnote />
        </Router>
      </Fragment>
    </StoreProvider>
  );
};

export default App;
