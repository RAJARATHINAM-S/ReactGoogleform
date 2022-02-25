import React, { useMemo, useState } from "react";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import "../dashboard/dashboard.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Archive from "../archive/archive";
import Trash from "../trash/trash";
import Remainders from "../remainders/remainders";
import Notes from "../notes/notes";
import { Link } from "react-router-dom";
import { createContext } from "react";
export const context=createContext();
const Dashboard = () => {
  // const[val,setVal]=useState(true);
  // const url=window.location.href;
  const urlpath=window.location.pathname;
let del;
  // console.log(url,urlpath);
  if (urlpath == "/") {
   
    del=true;
  }
  const welcome=()=>{
    // setVal((prev)=>!prev)
    console.log(`welcome to ${urlpath}`);
  }
  console.log("dashboard");
  const[search,setSearch]=useState('');
  console.log(search);
  
  return (
    <context.Provider value={{search,setSearch}}>
      <Navbar />
      <Sidebar />


      <Router forceRefresh={true}>
        <Switch>
          <Route component={Archive} exact path="/archive" />
          <Route component={Trash} exact path="/trash" />
          <Route component={Remainders} exact path="/remainders" />
          <Route component={Notes} exact path="/notes" />
        </Switch>
      </Router>
      {del &&
        <Link to="/notes">
          {" "}
          <div className="wel">
            <h2 onClick={welcome}>welcome</h2>
          </div>
        </Link>
      }
    </context.Provider>
  );
};

export default Dashboard;
