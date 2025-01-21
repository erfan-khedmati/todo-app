import React, { useState } from "react";

// import Custom HOOK
import useFetch from "../../hook/useFetch";

import { getDate, checkPassedDate } from "../../hook/useDatehandeler";

// import SCSS file
import "./task.scss";

// icon
import StarIcon from "@mui/icons-material/Star";

function Task() {
  const { data, loading, error } = useFetch("./data/data.json");

  // form States
  const [title, setTitle] = useState("Heart participant there military.");
  const [desc, setDesc] = useState(
    "Fund arm staff discuss medical PM. Keep baby water hospital seek reveal available. Be explain energy bad."
  );
  const [date, setDate] = useState("2025-01-13T21:13:29");

  if (!loading) {
    console.log(data.tasks);
  }

  function handleChangetitle(e) {
    setTitle(e.target.value);
  }

  function handleChangeDesc(e) {
    setDesc(e.target.value);
  }

  function handleChangeDate(e) {
    setDate(e.target.value);
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
          {/* <input type="text" value={desc} onChange={handleChangeDesc}  /> */}
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
            <p>{getDate("2025-01-07T21:13:29")}</p>
          </div>
          <div className="date-item">
            <p className="dateTitle">Limit date : </p>
            <input
              type="text"
              id="date"
              className={checkPassedDate(date) ? "input passed" : "input"}
              value={getDate(date)}
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
