import React, { useState, useMemo } from "react";

// Import custom hook
import useFetch from "../../hook/useFetch";
import { getDate } from "../../hook/useDatehandeler";

import "./starlist.scss";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import StarIcon from "@mui/icons-material/Star";

function Starlist() {
  // Data Fetching
  const { data, loading, error } = useFetch("./data/data.json");

  // star counter
  const [starCounter, setStarCounter] = useState(0);

  // Get star data
  const starData = useMemo(() => {
    if (!loading) {
      return data.tasks.filter((task) => task.star);
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

  function handlePrevSlide () {
    setStarCounter(starCounter-2)
    if (starCounter <= 0) {
      setStarCounter(starData.length-1)
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
                      <div className="link">SHOW TASK</div>
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
        // <div className="star">
        //   <h1 className="title-section">STAR TASKS</h1>
        //   <div className="starList">
        //     <button className="actionBtn">
        //       <ArrowLeftIcon className="icon" />
        //     </button>
        //     <ul className="list">
        //       <li className="item active">
        //         <h1 className="title">{starRef.current[starCounter].title}</h1>
        //         <p className="desc">
        //           {starRef.current[starCounter].description}
        //         </p>
        //         <div className="links">
        //           <p className="limit">
        //             limit date :{" "}
        //             {getDate(starRef.current[starCounter].limit_time)}
        //           </p>
        //           <div className="link">SHOW TASK</div>
        //           <div className="starCircle">
        //             <StarIcon className="icon" />
        //           </div>
        //         </div>
        //       </li>
        //       <li className="item active">
        //         <h1 className="title">
        //           {starRef.current[starCounter + 1].title}
        //         </h1>
        //         <p className="desc">
        //           {starRef.current[starCounter + 1].description}
        //         </p>
        //         <div className="links">
        //           <p className="limit late">
        //             limit date :{" "}
        //             {getDate(starRef.current[starCounter + 1].limit_time)}
        //           </p>
        //           <div className="link">SHOW TASK</div>
        //           <div className="starCircle">
        //             <StarIcon className="icon" />
        //           </div>
        //         </div>
        //       </li>
        //       <li className="item">3</li>
        //       <li className="item">4</li>
        //     </ul>
        //     <button className="actionBtn" onClick={hadleNextSlide}>
        //       <ArrowRightIcon className="icon" />
        //     </button>
        //   </div>
        // </div>
        <div>Loading</div>
      )}
    </>
  );
}

export default Starlist;
