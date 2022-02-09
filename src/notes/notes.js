import React, { useState, useEffect } from "react";
import Addtask from "../addtask/addtask";
import "../notes/notes.css";
import Tasknote from "../tasknote/tasknote";
import { useQuery } from "@apollo/client";
import { getAllTasks } from "../Graphql";
const Notes = () => {
  const{data,loading,error}=useQuery(getAllTasks)
  console.log(data);
  console.log(loading,error);
  const [fetch, setFetch] = useState(true);
  console.log(
    fetch
  );

  
  return (
    <>
      <div className="addtask">
        <Addtask setfetch={setFetch}/>
      </div>
      <div className="taskbox">
        {data && data.tasks
          .filter((val) => {
            return val?.isDeleted === false;
          })
          .filter((val) => {
            return val?.isArchived === false;
          })
          .filter((val)=>{
            return val?.isPinned === false;
          })
          .map(({ title, description, color, _id }, index) => {
            return (
              <Tasknote
                title={title}
                description={description}
                color={color}
                id={_id || index}
                setfetch={setFetch}
              />
            );
          })}
      </div>
    </>
  );
};

export default Notes;
