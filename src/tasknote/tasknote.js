import React from "react";
import Icons from "../icons/icons";
import "../tasknote/tasknote.css";
import { BsFillPinFill } from "react-icons/bs";
const Tasknote = ({title,description,id,setfetch}) => {
  //console.log(title);
  //console.log(description);
  //console.log(id);
  return (
    <div className="box">
      <span>
        {" "}
        <input className="fs" type="text" value={title}  placeholder="title" />{" "}
        <BsFillPinFill/>
      </span>
      <input className="fs" type="text"  value={description} placeholder="take a note..." />
      <Icons id={id} setfetch={setfetch} />
      
    </div>
  );
  
};

export default Tasknote;
