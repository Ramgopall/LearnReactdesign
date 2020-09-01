import React from "react";
import Login from "../component/layouts/Login";
import Home from "../component/layouts/Home";
import { Route, Switch } from "react-router-dom";
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
    </Switch>
  );
}
