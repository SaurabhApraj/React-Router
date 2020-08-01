import React from "react";
import "./Main.css";
import Home from "./Home";
import Gallery from "./Gallery";
import Services from "./Services";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";
import { Switch, Route } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="main">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/Gallery" component={Gallery}></Route>
          <Route path="/Services" component={Services}></Route>
          <Route path="/Contact" component={Contact}></Route>
          <Route path="/About" component={About}></Route>
          <Route component={Error}></Route>
        </Switch>
      </div>
    </>
  );
};

export default Main;
