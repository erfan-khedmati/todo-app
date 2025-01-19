import React from "react";

// Import custom hook
import useFetch from "../../hook/useFetch";

import "./starlist.scss";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import StarIcon from "@mui/icons-material/Star";

function Starlist() {
  // Data Fetching
  const { data, loading, error } = useFetch("./data/data.json");

  return (
    <div className="star">
        <h1 className="title-section">STAR TASKS</h1>
      <div className="starList">
        <button className="actionBtn">
          <ArrowLeftIcon className="icon" />
        </button>
        <ul className="list">
          <li className="item active">
            <h1 className="title">Consumer economy stuff firm.</h1>
            <p className="desc">
              Prevent side far house half reason part could. Build believe six.
            </p>
            <div className="links">
              <p className="limit">limit date : 2025/01/31</p>
              <div className="link">SHOW TASK</div>
              <div className="starCircle">
                <StarIcon className="icon" />
              </div>
            </div>
          </li>
          <li className="item active">
            <h1 className="title">Consumer economy stuff firm.</h1>
            <p className="desc">
              Prevent side far house half reason part could. Build believe six.
            </p>
            <div className="links">
              <p className="limit late">limit date : 2025/01/31</p>
              <div className="link">SHOW TASK</div>
              <div className="starCircle">
                <StarIcon className="icon" />
              </div>
            </div>
          </li>
          <li className="item">3</li>
          <li className="item">4</li>
        </ul>
        <button className="actionBtn">
          <ArrowRightIcon className="icon" />
        </button>
      </div>
    </div>
  );
}

export default Starlist;
