import React from "react";
import Icons from "../icons/icons";
import "../tasknote/tasknote.css";
import { BsFillPinFill } from "react-icons/bs";
const Tasknote = ({title,description}) => {
  
  return (
    <div className="box">
      <span>
        {" "}
        <input className="fs" type="text" value={title}  placeholder="title" />{" "}
        <BsFillPinFill/>
      </span>
      <input className="fs" type="text"  value={description} placeholder="take a note..." />
      <Icons/>
    </div>
  );
};

export default Tasknote;
