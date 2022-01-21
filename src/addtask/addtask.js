import React, { useState } from "react";
import "../addtask/addtask.css";
import Icons from "../icons/icons";
const Addtask = () => {
  const [display, setDisplay] = useState(true);
  const [task, setTask] = useState({ title: "", note: "" });
  console.log(task);
  const Submit = () => {
    setDisplay(true);
    let notes={title:task.title,note:task.note}
    console.log(notes);
    setTask({title:"",note:""})
  };
  console.log(display);
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
          <button>5</button>
          <button>6</button>
          <button>7</button>
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
              <button>in</button>
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
              <button>l</button>
              <button>r</button>
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
