import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "../dashboard/dashboard";
import Signin from "../signin/signin";
import Signup from "../signup/signup";

const islogin = () => {
  let token = localStorage.getItem("token") || "";
  return token ? true : false;
};
const PublicRoute = ({ component : Component, ...res }) => {
  return (
    <Route
      {...res}
      render={(probs) =>
        islogin() ? <Redirect to="/notes" /> : <Component {...probs} />
      }
    />
  );
};
const PrivateRoute = ({ component: Component, ...res }) => {
  return (
    <Route
      {...res}
      render={probs => 
        islogin() ? <Component {...probs}/>:<Redirect to="/signin" />  
      }
    />
  );
};
const Mainpage = () => {
  return (
    
    <Router>
      <Switch>
        <PublicRoute exact component={Signin} path="/signin"/>
        <PublicRoute exact component={Signup} path="/signup" />
        <PrivateRoute exact component={Dashboard} path="/notes" />
      </Switch>
    </Router>
  );
};

export default Mainpage;
