import React, { useState, useEffect, useContext } from "react";
import Addtask from "../addtask/addtask";
import "../notes/notes.css";
import Tasknote from "../tasknote/tasknote";
import { useQuery } from "@apollo/client";
import { getAllTasks } from "../Graphql";
import Load from "../loadingindicator/load";
import Context from "@mui/base/TabsUnstyled/TabsContext";
import { context } from "../dashboard/dashboard";
const Notes = () => {
  const { data, loading, error } = useQuery(getAllTasks);
  console.log(data);
  console.log(loading, error);
  const [fetch, setFetch] = useState(true);
  console.log(fetch);
  let reload = [];
  for (let index = 0; index <= 20; index++) {
    reload.push(index);
  }
  const { search } = useContext(context);
  console.log(search);
  // useEffect(() => {
  //   let tit = data?.tasks.map((val)=>{ return val.title});

  //   console.log(tit);
  //   if (search) {
  //     let del = tit.includes(search);
  //     console.log(del);
  //   }
  // });

  //  console.log(reload);

  return (
    <>
      <div className="addtask">
        <Addtask />
      </div>
      <div className="taskbox">
        {loading &&
          reload.map(() => {
            return <Load />;
          })}
        {search &&
          data &&
          data.tasks
            .filter((val) => {
              return val?.isDeleted === false;
            })
            .filter((val) => {
              return val?.isArchived === false;
            })
            .filter((val) => {
              return val?.isPinned === false;
            })
            .filter((val) => {
              return (val.title.includes(search) || val.description.includes(search))
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

        {data &&
          !search &&
          data.tasks
            .filter((val) => {
              return val?.isDeleted === false;
            })
            .filter((val) => {
              return val?.isArchived === false;
            })
            .filter((val) => {
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
