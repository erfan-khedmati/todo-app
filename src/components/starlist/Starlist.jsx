import React, { useState, useMemo } from "react";

// Import custom hook
import useFetch from "../../hook/useFetch";
import { getDate } from "../../hook/useDatehandeler";

import "./starlist.scss";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

function Starlist() {
  // Data Fetching
  const { data, loading, error } = useFetch("./data/data.json");

  // star counter
  const [starCounter, setStarCounter] = useState(0);

  // Get star data
  const starData = useMemo(() => {
    if (!loading) {
      return data.profiles[0].tasks.filter((task) => task.star);
    }
    return [];
  }, [loading]);

  // Handle slide changes
  function hadleNextSlide() {
    if (
      starCounter == starData.length - 1 ||
      starCounter > starData.length - 1
    ) {
      setStarCounter(0);
    } else {
      setStarCounter(starCounter + 2);
    }
  }

  function handlePrevSlide() {
    setStarCounter(starCounter - 2);
    if (starCounter <= 0) {
      setStarCounter(starData.length - 1);
    }
  }

  return (
    <>
      {!loading ? (
        <div className="star">
          <h1 className="title-section">STAR TASKS</h1>
          <div className="starList">
            <button className="actionBtn" onClick={handlePrevSlide}>
              <ArrowLeftIcon className="icon" />
            </button>
            <ul className="list">
              {/* Map the tow of the data */}
              {starData
                .slice(starCounter, starCounter + 2)
                .map((task, index) => (
                  <li className="item active" key={index}>
                    <h1 className="title">{task.title}</h1>
                    <p className="desc">{task.description}</p>
                    <div className="links">
                      <p className="limit">
                        limit date : {getDate(task.limit_time)}
                      </p>
                      <Link to={`/task/${task.id}`}>
                        <div className="link">SHOW TASK</div>
                      </Link>
                      <div className="starCircle">
                        <StarIcon className="icon" />
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
            <button className="actionBtn" onClick={hadleNextSlide}>
              <ArrowRightIcon className="icon" />
            </button>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

export default Starlist;
