import React from "react";
import "../navbar/navbar.css";
import { MdDehaze } from "react-icons/md";
import{MdOutlineRefresh} from "react-icons/md";
import{MdOutlineViewAgenda} from "react-icons/md";
import{FiSettings} from "react-icons/fi";
import{MdOutlineGridView} from "react-icons/md";
import{MdLightbulbOutline} from "react-icons/md";
import{MdTagFaces} from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <div  className="navmain">
        <div className="nav ng">
          <div><MdDehaze className="ic"/></div>
          <span><MdLightbulbOutline className="ic"/></span>
          <button>Keep</button>
        </div>
        <div className="nav nav2">
          <div>
            <input className="navsearch" type={"search"} placeholder="search" />
          </div>
          <div className="ng">
              <span><MdOutlineRefresh className="ic"/></span>
              <span><MdOutlineViewAgenda className="ic"/></span>
              <span><FiSettings className="ic"/></span>
          </div>
        </div>
        <div className="nav ng">
            <span><MdOutlineGridView className="ic"/></span>
            <span><MdTagFaces className="ic"/></span>
        </div>
      </div>
      

    </>
  );
};

export default Navbar;
