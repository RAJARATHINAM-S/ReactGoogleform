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
  return token ? true: false;
};
const PublicRoute = ({ component : Component, ...res }) => {
  return (
    <Route
      {...res}
      render={(probs) =>
        islogin() ? <Redirect to="/" /> : <Component {...probs} />
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
    
    <Router forceRefresh={true}>
      <Switch>
        <PublicRoute component={Signin} exact path="/signin"/>
        <PublicRoute component={Signup}  exact path="/signup" />
        <PrivateRoute component={Dashboard} path="/" />
      </Switch>
    </Router>
  );
};

export default Mainpage;
