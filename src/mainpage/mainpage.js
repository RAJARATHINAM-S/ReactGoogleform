import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from "../dashboard/dashboard";
import Signin from "../signin/signin";
import Signup from "../signup/signup";

const Mainpage = () => {
  return (
    <Router>
      <Switch>
        <Route component={Signin} path="/signin" />
        <Route component={Signup} path="/signup" />
        <Route  component={Dashboard} path="/" />
      </Switch>
    </Router>
  );
};

export default Mainpage;
