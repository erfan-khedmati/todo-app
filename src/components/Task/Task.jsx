import React, { useState, useRef, useMemo } from "react";

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
  const { taskID } = useParams();

  // Fetching API
  const { data, loading, error } = useFetch("./data/data.json");

  // form States
  const [title, setTitle] = useState("loading...");
  const [desc, setDesc] = useState("loading...");
  const [limitDate, setLimitDate] = useState("loading...");
  const [addedDate, setAddedDate] = useState("Loading...");

  // components ref
  const fromRef = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const limitTimeRef = useRef();

  // Find the task and setting
  const taskData = useMemo(() => {
    let task;
    if (!loading) {
      task = data.tasks.find((t) => t.id.toString() === taskID);
      setTitle(task.title);
      setDesc(task.description);
      setLimitDate(task.limit_time);
      setAddedDate(task.added_date);
    }
  }, [loading]);

  function handleChangetitle(e) {
    setTitle(e.target.value);
  }

  function handleChangeDesc(e) {
    setDesc(e.target.value);
  }

  function handleChangeDate(e) {
    setLimitDate(e.target.value);
  }

  // Handle edit
  function handleEditBtn(e) {
    switch (e.target.id) {
      case "title": {
        if (!titleRef.current.readOnly) {
          titleRef.current.readOnly = true;
          titleRef.current.classList.remove("activeEdit");
        } else {
          titleRef.current.classList.add("activeEdit");
          titleRef.current.readOnly = false;
        }
        break;
      }
      case "description": {
        if (!descRef.current.readOnly) {
          descRef.current.readOnly = true;
          descRef.current.classList.remove("activeEdit")
        } else {
          descRef.current.readOnly = false;
          descRef.current.classList.add("activeEdit")
        }
        break;
      }
      case "date": {
        if (!limitTimeRef.current.readOnly) {
          limitTimeRef.current.readOnly = true;
          limitTimeRef.current.classList.remove("activeEdit")
        } else {
          limitTimeRef.current.classList.add("activeEdit")
          limitTimeRef.current.readOnly = false;
        }
        break
      }
    }
  }

  // Handle Submit form
  function handleSubForm(e) {
    e.preventDefault();
  }

  return (
    <div className="task">
      <h1 className="sec-title">TASK PAGE</h1>
      <form className="content" onSubmit={handleSubForm}>
        <div className="item">
          <div className="top title">
            <h1>title : </h1>
            <input
              type="text"
              value={title}
              className="title"
              onChange={handleChangetitle}
              readOnly
              ref={titleRef}
            />
            <div className="edit title" id="title" onClick={handleEditBtn}>
              EDIT
            </div>
          </div>
        </div>
        <div className="item">
          <div className="top">
            <h1>Description</h1>
            <button className="edit" id="description" onClick={handleEditBtn}>
              EDIT
            </button>
          </div>
          <textarea
            value={desc}
            className="description"
            ref={descRef}
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
              ref={limitTimeRef}
              className={checkPassedDate(limitDate) ? "input passed" : "input"}
              readOnly
              value={getDate(limitDate)}
              onChange={handleChangeDate}
            />
            <div className="edit" id="date" onClick={handleEditBtn}>
              EDIT
            </div>
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
