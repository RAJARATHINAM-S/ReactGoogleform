import React from "react";
import "../icons/icons.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  MdPalette,
  MdPersonAddAlt,
  MdOutlineArchive,
  MdAddAlert,
  MdCropOriginal,
} from "react-icons/md";


const Icons = ({ setOption,update}) => {
  
 
  return (
    <>
      <div className="micons">
        <span className="inc">
          <MdAddAlert />
        </span>
        <span>
          <MdPersonAddAlt />
        </span>
        <span>
          <MdPalette />
        </span>
        <span>
          <MdCropOriginal />
        </span>
        <button
          onClick={() => {
            update("Archive");
          }}
        >
          <MdOutlineArchive />
        </button>
        <span
          onClick={() => {
            setOption(prev=>!prev);
          }}
          onMouseLeave={()=>{setTimeout(()=>setOption(false),3000)}}
          
        >
       <BiDotsVerticalRounded />
       
        </span>
      </div>
    </>
  );
};

export default Icons;
