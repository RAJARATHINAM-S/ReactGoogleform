import React from "react";
import Addtask from "../addtask/addtask";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import "../trash/trash.css";
const Trash = () => {
  return (
    <>

    <Navbar/>
    <Sidebar/>
      <div className="addtask">
        <h4>Notes in the trash delete in 7 days <button>Empty Trash</button></h4>
      </div>
    </>
  );
};

export default Trash;
