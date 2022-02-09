import React, { useEffect, useState } from "react";
import "../addtask/addtask.css";
import {
  MdBrush,
  MdCropOriginal,
  MdOutlineReviews,
  MdOutlineUndo,
  MdOutlineRedo,
} from "react-icons/md";
import Icons from "../icons/icons";
import { BsPin } from "react-icons/bs";
import { useMutation } from "@apollo/client";
import { addTask, getAllTasks } from "../Graphql";
import produce from "immer";
import { useCallback } from "react";
const Addtask = () => {
  const [display, setDisplay] = useState(true);
  const [task, setTask] = useState({ title: "", note: "" });
  const [addtask] = useMutation(addTask);
  const pressdown = (e) => {
    if (e.key === "Enter" && task) {
      Submit();
      setTask(!task);
    }
   
  };
  useEffect(() => {
    window.removeEventListener("keydown", pressdown);
    addTask && window.addEventListener("keydown", pressdown);
  }, []);
  const Submit = useCallback(async () => {
    setDisplay(true);
    let data = { title: task.title, description: task.note, color: "white" };
    // axios.post("/tasks", notes, {
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //   },
    // });
    // // console.log(notes);
    //
    // setfetch((prev) => !prev);
    // let max = data.tasks;
    // console.log(max);
    addtask({
      variables: { body: data },
      optimisticResponse: {
        __typename: "Mutation",
        addTask: {
          __typename: "Task",
          _id: Math.random(),
          title: data.title,
          description: data.description,
          labels: [],
          createdAt: "sss",
          color: "white",
        },
      },
      update: (store, { data: { addTask } }) => {
        const data = store.readQuery({
          query: getAllTasks,
        });
        const tempdata = {
          __typename: addTask.__typename,
          _id: addTask._id,
          title: addTask.title,
          description: addTask.description,
          createdAt: addTask.createdAt,
          color: addTask.color,
          completed: addTask.completed || false,
          isDeleted: addTask.isDeleted || false,
          isArchived: addTask.isArchived || false,
          isPinned: false,
        };
        const newdata = produce(data, (draftState) => {
          draftState.tasks.push(tempdata);
        });
        store.writeQuery({ query: getAllTasks, data: newdata });
      },
    });
    setTask({ title: "", note: "" });
  }, [task, addtask]);
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
                autoFocus={true}
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
                placeholder="Take a note..."
                onChange={(e) => {
                  setTask({ ...task, note: e.target.value });
                }}
              />
            </div>
            <div className="Addicons">
              <Icons />
              <span>
                <MdOutlineUndo />
              </span>
              <span>
                <MdOutlineRedo />
              </span>
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
