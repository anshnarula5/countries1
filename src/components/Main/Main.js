import React from "react";
import { Route, Switch } from "react-router";
import Country from "./Country";
import Detail from "./Detail";
import Map from "./Map";
import "./Main.css"
import Home from "./Home";

const Main = () => {
  return (
    <div className = "main" >
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/country" component={Country} />
        <Route path="/detail/:name" component={Detail} />
      </Switch>
    </div>
  );
};

export default Main;
