import React, { useState, useEffect } from "react";
import Addtask from "../addtask/addtask";
import "../notes/notes.css";
import Tasknote from "../tasknote/tasknote";
import axios from "axios";
const Notes = () => {
  const [data, setdata] = useState([]);
  const [fetch, setfetch] = useState(false);
  // data.map(({ _id }) => {
  //   console.log(_id);
  // }); //........................................//
  useEffect(() => {
    const fetchdata = async () => {
      let result = await axios.get("/tasks?skip=0&limit=100", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(result);
      setdata(result.data);
      console.log(data);
    };
    fetchdata();
  }, [fetch]);

  return (
    <>
      <div className="addtask">
        <Addtask setfetch={setfetch} />
      </div>
      <div className="taskbox">
        {data
          .filter((val) => {
            return val?.isDeleted === false;
          })
          .filter((val) => {
            return val?.isArchived === false;
          })
          .map(({ title, description, color, _id }, index) => {
            return (
              <Tasknote
                title={title}
                description={description}
                color={color}
                id={_id || index}
                setfetch={setfetch}
              />
            );
          })}
      </div>
    </>
  );
};

export default Notes;
