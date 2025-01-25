import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

// Custom hooks
import SingleTaskModel from "../../models/SingleTaskModel";
import useFetch from "../../hook/useFetch";
import { getDate, checkPassedDate } from "../../hook/useDatehandeler";

// Import SCSS file
import "./singletask.scss";

// Components
import Editbutton from "../../components/editbutton/Editbutton";

// icon
import StarIcon from "@mui/icons-material/Star";

function Singletask() {
  // States
  const [taskModel, setTaskModel] = useState(null);
  const { data, loading, error } = useFetch("./data/data.json");
  const { taskID } = useParams();

  // Get the task Model
  useEffect(() => {
    if (!loading) {
      const task = SingleTaskModel.createFormData(data.tasks, taskID);
      setTaskModel(task);
    }
  }, [taskID, data, loading]);

  // components ref
  const titleRef = useRef();
  const descRef = useRef();
  const limitTimeRef = useRef();

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

  // handle Resize TextArea
  function handleResizeTextArea() {
    descRef.current.style.height = `${descRef.current.scrollHeight}px`;
  }

  function handleSubmitForm (e) {
    e.preventDefault()
    taskModel.updateData(titleRef.current.value, descRef.current.value, limitTimeRef.current.value)
    // console.log(titleRef.current.value);
  }

  if (!taskModel) {
    return <div>loading</div>;
  }


  if (taskModel !== null) {
    return (
      <div className="taskPage">
        <h1 className="title">TASK PAGE</h1>
        <form onSubmit={handleSubmitForm}>
          <ul className="items">
            <li className="item title-section">
              <h1 className="header">title : </h1>
              <input
                type="text"
                defaultValue={taskModel.title}
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
                defaultValue={taskModel.description}
                ref={descRef}
                onInput={handleResizeTextArea}
              ></textarea>
            </li>
            <li className="item">
              <div className="bottom-item">
                Added : {getDate(taskModel.addedDate)}
              </div>
              <div className="bottom-item">
                <p>Limit Date:</p>
                <input
                  type="textd"
                  ref={limitTimeRef}
                  defaultValue={getDate(taskModel.limit_time)}
                  readOnly
                />
                <div onClick={() => handleEditBtn("limit_time")}>
                  <Editbutton />
                </div>
              </div>
              <div className="bottom-item">
                <StarIcon className="icon" />
              </div>
              <button className="bottom-item" type="submit">
                SUBMIT
              </button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default Singletask;
