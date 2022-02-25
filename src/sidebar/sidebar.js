import React from "react";
import { Link } from "react-router-dom";
import "../sidebar/sidebar.css";
import { MdLightbulbOutline,MdAddAlert,MdOutlineModeEditOutline,MdOutlineArchive ,MdOutlineRestoreFromTrash} from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebarmain">
     <Link to="/notes"> <div className="sb">
       <div> <MdLightbulbOutline/></div>
        <div>Notes</div>
      </div></Link>
     <Link to="/remainders"> <div className="sb">
        <div><MdAddAlert/></div>
        <div>Remainders</div>
      </div></Link>
      <div className="sb">
        <div><MdOutlineModeEditOutline/></div>
        <div>Edit Lables</div>
      </div>
      <div className="sb">
        <div><MdOutlineArchive/></div>
        <Link to="/archive">  <div>Archive</div></Link>
      </div>
      <Link to="/trash"> <div className="sb">
        <div><MdOutlineRestoreFromTrash/></div>
        <div>Trash</div>
      </div></Link>
    </div>
  );
};

export default Sidebar;
