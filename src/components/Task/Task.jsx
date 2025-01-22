import React, { useState, useRef, useMemo } from "react";

import { useParams } from "react-router-dom";

// import Custom HOOK
import useFetch from "../../hook/useFetch";

import { getDate, checkPassedDate } from "../../hook/useDatehandeler";

// import SCSS file
import "./task.scss";

// Component
import Editbutton from "../editbutton/Editbutton";

// icon
import StarIcon from "@mui/icons-material/Star";

function Task() {
  const { taskID } = useParams();

  // Fetching API
  const { data, loading, error } = useFetch("./data/data.json");

  // form States
  const [title, setTitle] = useState("loading...");
  const [desc, setDesc] = useState("loading...");
  const [limitDate, setLimitDate] = useState("loading...");
  const [addedDate, setAddedDate] = useState("Loading...");

  // components ref
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

  // Handle change form on edit----------------
  function handleChangetitle(e) {
    setTitle(e.target.value);
  }

  function handleChangeDesc(e) {
    setDesc(e.target.value);
  }

  function handleChangeDate(e) {
    setLimitDate(e.target.value);
  }

  // Handle edit -----------------------
  function handleEditBtn(ID) {
    switch (ID) {
      case "title": {
        if (titleRef.current.readOnly) {
          titleRef.current.readOnly = false;
          titleRef.current.classList.add("editting");
        } else {
          titleRef.current.readOnly = true;
          titleRef.current.classList.remove("editting");
        }
        break;
      }
      case "description": {
        if (descRef.current.readOnly) {
          descRef.current.readOnly = false;
          descRef.current.classList.add("editting");
        } else {
          descRef.current.readOnly = true;
          descRef.current.classList.remove("editting");
        }
        break;
      }
      case "limit_time": {
        if (limitTimeRef.current.readOnly) {
          limitTimeRef.current.readOnly = false;
          limitTimeRef.current.classList.add("editting");
        } else {
          limitTimeRef.current.readOnly = true;
          limitTimeRef.current.classList.remove("editting");
        }
        break;
      }
    }
  }

  // Handle Submit form
  function handleSubForm(e) {
    e.preventDefault();
  }

  // handle Resize TextArea
  function handleResizeTextArea() {
    descRef.current.style.height = `${descRef.current.scrollHeight}px`;
  }

  return (
    <div className="taskPage">
      <h1 className="title">TASK PAGE</h1>
      <form onSubmit={handleSubForm}>
        <ul className="items">
          <li className="item title-section">
            <h1 className="header">title : </h1>
            <input
              type="text"
              value={title}
              onChange={handleChangetitle}
              readOnly
              ref={titleRef}
            />
            <div id="title" onClick={() => handleEditBtn("title")}>
              <Editbutton />
            </div>
          </li>
          <li className="item desc">
            <div className="top">
              <h1 className="header">Description : </h1>
              <div onClick={() => handleEditBtn("description")}>
                <Editbutton />
              </div>
            </div>
            <textarea
              readOnly
              value={desc}
              onChange={handleChangeDesc}
              ref={descRef}
              onInput={handleResizeTextArea}
            ></textarea>
          </li>
          <li className="item">
            <div className="bottom-item">Added : {getDate(addedDate)}</div>
            <div className="bottom-item">
              <p>Limit Date:</p> <input type="textd" ref={limitTimeRef} value={getDate(limitDate)} readOnly onChange={handleChangeDate} />
              <div onClick={()=> handleEditBtn("limit_time")}>
                <Editbutton />
              </div>
            </div>
            <div className="bottom-item"><StarIcon className="icon" /></div>
            <div className="bottom-item">
              SUBMIT
            </div>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Task;
