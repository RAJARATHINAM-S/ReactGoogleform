import React from "react";
import Addtask from "../addtask/addtask";
import "../navbar/navbar.css";
import Sidebar from "../sidebar/sidebar";
const Navbar = () => {
  return (
    <>
      <div  className="navmain">
        <div className="nav ng">
          <div>W</div>
          <div>B</div>
          <button>Keep</button>
        </div>
        <div className="nav nav2">
          <div>
            <input className="navsearch" type={"search"} placeholder="search" />
          </div>
          <div className="ng">
              <button>6</button>
              <button>7</button>
              <button>8</button>
          </div>
        </div>
        <div className="nav ng">
            <button>;;</button>
            <div>O</div>
        </div>
      </div>
      

    </>
  );
};

export default Navbar;
