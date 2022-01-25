import React, { useCallback } from "react";
import "../icons/icons.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  MdPalette,
  MdPersonAddAlt,
  MdOutlineArchive,
  MdAddAlert,
  MdCropOriginal,
} from "react-icons/md";
import axios from "axios";

const Icons = ({id,setfetch}) => {
   // console.log(id);
  const update = useCallback(async (type = "delete") => {
    let data = type === "delete" ? { isDeleted: true } : { isArhived: true };
    console.log(
        data
    );
    try {
        let result =await axios.patch(`/tasks/${id}`,data,{headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
            
        }});
        setfetch(prev=>!prev)
        console.log(result);
    }catch(e){
        console.log(e);
    }
   
  },[id,fetch]);
  return (
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
      <button onClick={()=>{update("archive")}}>//---------------------invalid updates-------------------------------------------------//
        <MdOutlineArchive />
      </button>
      <span>
        <BiDotsVerticalRounded />
      </span>
    </div>
  );
};

export default Icons;
