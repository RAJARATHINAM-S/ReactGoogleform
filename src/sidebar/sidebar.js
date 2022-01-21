import React from "react";
import { Link } from "react-router-dom";
import "../sidebar/sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebarmain">
     <Link to="/notes"> <div className="sb">
        <div>N</div>
        <div>Notes</div>
      </div></Link>
     <Link to="/remainders"> <div className="sb">
        <div>R</div>
        <div>Remainders</div>
      </div></Link>
      <div className="sb">
        <div>E</div>
        <div>Edit Lables</div>
      </div>
      <div className="sb">
        <div>A</div>
        <Link to="/archive">  <div>Archive</div></Link>
      </div>
      <Link to="/trash"> <div className="sb">
        <div>T</div>
        <div>Trash</div>
      </div></Link>
    </div>
  );
};

export default Sidebar;
