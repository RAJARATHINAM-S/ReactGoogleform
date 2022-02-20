import React, { useState ,useCallback } from "react";
import Icons from "../icons/icons";
import "../tasknote/tasknote.css";
import { BsFillPinFill } from "react-icons/bs";
import { useQuery } from "@apollo/client";
import { getAllTasks } from "../Graphql";

import { UpdateTask } from "../Graphql";
import { useMutation } from "@apollo/client";
const Tasknote = ({ title, description, id, setfetch }) => {
  //console.log(title);
  //console.log(description);
  //console.log(id);
  const [option, setOption] = useState(false);
   const [updatetask] = useMutation(UpdateTask);
  const update = useCallback(
    
    async (type = "delete") => {
      setOption(false)
      let data =
        type === "delete"
          ? {
              isDeleted: true,
            }
          : type === "pinned"
          ? {
              isPinned: true,
            }
          : {
              isArchived: true,
            };

      updatetask({
        variables: {
          id,
          body: data,
        },
        optimisticResponse: {
          __typename: "Mutation",
          updateTask: {
            __typename: "Task",
            _id: Math.random(),
            isDeleted: data?.isDeleted || false,
            isArchived: data?.isArchived || false,
            isPinned: data?.isPinned || false,
          },
        },
        update: (store, { data: { updateTask } }) => {
          if (updateTask.isDeleted) {
            store.modify({
              id: store.identify({ id:id, __typename: "Task" }),
              fields: {
                isDeleted() {
                  return updateTask.isDeleted;
                },
              },
            });
          } else if (updateTask.isArchived) {
            store.modify({
              id: store.identify({ id: id, __typename: "Task" }),
              fields: {
                isArchived() {
                  return updateTask.isArchived;
                },
              },
            });
          } else {
            store.modify({
              id: store.identify({ id: id, __typename: "Task" }),
              fields: {
                isPinned() {
                  return updateTask.isPinned;
                },
              },
            });
          }
        },
      });
      setfetch((prev) => !prev);
    },
    [id, updatetask, setfetch]
  );

  return (
    <><span className="boxex">
      <div className="box">
        <span>
          {" "}
          <input
            className="fs"
            type="text"
            value={title}
            placeholder="title"
          />{" "}
          <BsFillPinFill />
        </span>
        <input
          className="fs"
          type="text"
          value={description}
          placeholder="take a note..."
        />
        <Icons id={id}  setOption={setOption} update={update}/>
      </div>
      {option && (
        <div className="options">
          <option onClick={update} >delete</option>
          <option>Archive</option>
        </div>
      )}</span>
    </>
  );
};

export default Tasknote;
