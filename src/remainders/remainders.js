import React from "react";
import Addtask from "../addtask/addtask";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import "../remainders/remainders.css";
const Remainders = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="addtask">
        <Addtask />
      </div>
      <div className="remain"> Notes with Upcoming remaiders here</div>
    </>
  );
};

export default Remainders;
