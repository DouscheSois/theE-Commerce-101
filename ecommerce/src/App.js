import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";

import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <section className="container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
          </Switch>
        </section>
      </Router>
    </Fragment>
  );
};

export default App;
