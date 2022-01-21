import React from "react";
import Addtask from "../addtask/addtask";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import "../notes/notes.css";
const Notes = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="addtask">
          <Addtask/>
      </div>
    </>
  );
};

export default Notes;
