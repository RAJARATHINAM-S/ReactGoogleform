import React from 'react';
import "../icons/icons.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdPalette,MdPersonAddAlt,MdOutlineArchive,MdAddAlert ,MdCropOriginal} from "react-icons/md";

const Icons = () => {
    return (
        <div className='micons'>
            
            
            <span className='inc'><MdAddAlert/></span>
            <span><MdPersonAddAlt/></span>
            <span><MdPalette/></span>
            <span><MdCropOriginal/></span>
            <span><MdOutlineArchive/></span>
            <span><BiDotsVerticalRounded/></span>
        </div>
    );
};

export default Icons;