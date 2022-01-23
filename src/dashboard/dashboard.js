import React from "react";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import "../dashboard/dashboard.css";
import Addtask from "../addtask/addtask";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Archive from "../archive/archive";
import Trash from "../trash/trash";
import Remainders from "../remainders/remainders";
import Notes from "../notes/notes";

const Dashboard = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route component={Archive} path="/archive" />
          <Route component={Trash} path="/trash" />
          <Route component={Remainders} path="/remainders" />
          <Route component={Notes} path="/notes" />
        </Switch>
      </Router>
    </>
  );
};

export default Dashboard;
