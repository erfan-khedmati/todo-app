import React, { useState,useRef, useMemo } from "react";

import { useParams } from "react-router-dom";

// import Custom HOOK
import useFetch from "../../hook/useFetch";

import { getDate, checkPassedDate } from "../../hook/useDatehandeler";

// import SCSS file
import "./task.scss";

// icon
import StarIcon from "@mui/icons-material/Star";

function Task() {
  // Task id
  const {taskID} = useParams();

  // Fetching API
  const { data, loading, error } = useFetch("./data/data.json");

  // form States
  const [title, setTitle] = useState("loading...");
  const [desc, setDesc] = useState(
    "loading..."
  );
  const [limitDate, setLimitDate] = useState("loading...");
  const [addedDate, setAddedDate] = useState("Loading...")

  // Find the task and setting
  const taskData = useMemo(()=>{
    let task;
    if (!loading) {
      task = data.tasks.find((t)=> t.id.toString() === taskID);
      setTitle(task.title)
      setDesc(task.description)
      setLimitDate(task.limit_time)
      setAddedDate(task.added_date)
    }
  }, [loading])
  

  function handleChangetitle(e) {
    setTitle(e.target.value);
  }

  function handleChangeDesc(e) {
    setDesc(e.target.value);
  }

  function handleChangeDate(e) {
    setLimitDate(e.target.value);
  }

  return (
    <div className="task">
      <h1 className="sec-title">TASK PAGE</h1>
      <form className="content">
        <div className="item">
          <div className="top title">
            <h1>title : </h1>
            <input
              type="text"
              value={title}
              className="title"
              onChange={handleChangetitle}
              readOnly
            />
            <div className="edit title">EDIT</div>
          </div>
        </div>
        <div className="item">
          <div className="top">
            <h1>Description</h1>
            <button className="edit">EDIT</button>
          </div>
          <textarea
            value={desc}
            className="description"
            readOnly
            onChange={handleChangeDesc}
          ></textarea>
        </div>
        <div className="item date">
          <div className="date-item">
            <p>Added time : </p>
            <p>{getDate(addedDate)}</p>
          </div>
          <div className="date-item">
            <p className="dateTitle">Limit date : </p>
            <input
              type="text"
              id="date"
              className={checkPassedDate(limitDate) ? "input passed" : "input"}
              value={getDate(limitDate)}
              onChange={handleChangeDate}
            />
            <div className="edit">EDIT</div>
          </div>
          <div className="date-item">
            <div className="circle">
              <StarIcon className="icon" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Task;
