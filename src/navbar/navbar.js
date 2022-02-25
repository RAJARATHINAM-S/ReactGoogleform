import React, { createContext, useContext, useState } from "react";
import "../navbar/navbar.css"; 
import { MdDehaze } from "react-icons/md";
import{MdOutlineRefresh} from "react-icons/md";
import{MdOutlineViewAgenda} from "react-icons/md";
import{FiSettings} from "react-icons/fi";
import{MdOutlineGridView} from "react-icons/md";
import{MdLightbulbOutline} from "react-icons/md";
import{MdTagFaces} from "react-icons/md";
import { context } from "../dashboard/dashboard";

const Navbar = () => {
 const {search,setSearch}=useContext(context)
  
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
            <input className="navsearch" type={"search"} value={search.value} placeholder="search" onChange={(e)=>{
              setSearch(e.target.value)
            }} />
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
