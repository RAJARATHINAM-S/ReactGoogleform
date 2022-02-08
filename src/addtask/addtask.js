import axios from "axios";
import React, { useState } from "react";
import "../addtask/addtask.css";
import { MdBrush, MdCropOriginal, MdOutlineReviews,MdOutlineUndo,MdOutlineRedo } from "react-icons/md";
import Icons from "../icons/icons";
import { BsPin } from "react-icons/bs";
const Addtask = ({ setfetch }) => {
  const [display, setDisplay] = useState(true);
  const [task, setTask] = useState({ title: "", note: "" });

  const Submit = () => {
    setDisplay(true);
    let notes = { title: task.title, description: task.note, color: "white" };
    axios.post("/tasks", notes, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    // console.log(notes);
    setTask({ title: "", note: "" });
    setfetch((prev) => !prev);
  };
  // console.log(display);
  return (
    <div>
      {display ? (
        <div className="addnote">
          <input
            className="addnote1"
            autoFocus={true}
            onClick={() => {
              setDisplay(false);
            }}
            onChange={() => {
              setDisplay(false);
            }}
            placeholder="Take a note"
          />
          <button>
            <MdOutlineReviews />
          </button>
          <button>
            <MdBrush />
          </button>
          <button>
            <MdCropOriginal />
          </button>
        </div>
      ) : (
        <div>
          <div className="addtask2">
            <div className="in1  ">
              <input
                className="in"
                placeholder="Title"
                value={task.value}
                onChange={(e) => {
                  setTask({ ...task, title: e.target.value });
                }}
              />
              <div>
                <BsPin />
              </div>
            </div>
            <div>
              <input
                className="in"
                autoFocus={true}
                placeholder="Take a note..."
                onChange={(e) => {
                  setTask({ ...task, note: e.target.value });
                }}
              />
            </div>
            <div className="Addicons">
              <Icons />
              <span><MdOutlineUndo/></span>
              <span><MdOutlineRedo/></span>
              <span className="close">
                {" "}
                <button onClick={Submit}>close</button>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Addtask;
