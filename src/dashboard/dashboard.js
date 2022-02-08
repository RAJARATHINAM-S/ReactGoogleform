import React from "react";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import "../dashboard/dashboard.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Archive from "../archive/archive";
import Trash from "../trash/trash";
import Remainders from "../remainders/remainders";
import Notes from "../notes/notes";

const Dashboard = () => {
  console.log("dashboard");
  return (
    <>
      <Navbar />
      <Sidebar />
      
      <Router forceRefresh={true}>
        <Switch>
          <Route component={Archive} exact path="/archive" />
          <Route component={Trash}exact path="/trash" />
          <Route  component={Remainders}exact path="/remainders" />
          <Route component={Notes}exact path="/notes" />
        </Switch>
      </Router>
    </>
  );
};

export default Dashboard;
