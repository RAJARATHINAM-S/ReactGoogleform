import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import "../notes/notes.css";
import Tasknote from "../tasknote/tasknote";
import axios from "axios";
const Notes = () => {
  console.log("dfcgvhbjkghvb");
  const [data, setdata] = useState([]);
  const [fetch, setfetch] = useState(false);
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

  //console.log(task);
  return (
    <>
      <div>
        <div className="addtask">
          <h2>Notes in Tarsh are deleted in 7 days</h2>
          {/* <Addtask setfetch={setfetch} /> */}
        </div>
        <div className="taskbox">
          {data
            .filter((val) => {
              return val?.isDeleted === true;
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
                  key={_id || index}
                  setfetch={setfetch}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Notes;
