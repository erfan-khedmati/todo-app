import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

// Custom hooks
import SingleTaskModel from "../../models/SingleTaskModel";
import useFetch from "../../hook/useFetch";
import { getDate, checkPassedDate } from "../../hook/useDatehandeler";

import { useNotification } from "../../hook/notificationContext";

// Import SCSS file
import "./singletask.scss";

// Components
import Editbutton from "../../components/editbutton/Editbutton";
import Dateinput from "../../components/dateinput/Dateinput";

// icon
import StarIcon from "@mui/icons-material/Star";

function Singletask() {
  // States
  const [taskModel, setTaskModel] = useState(null);
  const { data, loading, error } = useFetch("./data/data.json");
  const { taskID } = useParams();

  // Notification function
  const { addNotif } = useNotification();

  // Star state
  const [isStared, setIsStared] = useState(true);

  // Get the task Model
  useEffect(() => {
    if (!loading) {
      const task = SingleTaskModel.createFormData(
        data.profiles[0].tasks,
        taskID
      );
      setTaskModel(task);
    }
  }, [taskID, data, loading]);

  // Change star value
  useEffect(() => {
    if (taskModel) {
      setIsStared(taskModel.star);
    }
  }, [taskModel]);

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

  function handleSubmitForm(e) {
    // Stay at form
    e.preventDefault();

    // Control input
    if (
      titleRef.current.value == taskModel.title &&
      descRef.current.value == taskModel.description &&
      limitTimeRef.current.value == taskModel.limit_time &&
      isStared == taskModel.star
    ) {
      addNotif("Nothing changed!", "warning");
    } else if (
      titleRef.current.value !== "" &&
      descRef.current.value !== "" &&
      !limitTimeRef.current.classList.contains("error")
    ) {
      taskModel.updateData(
        titleRef.current.value,
        descRef.current.value,
        limitTimeRef.current.value,
        isStared
      );
      addNotif("Task updated successfully", "success");
    } else {
      addNotif("Failed, enter the valid inputs!", "failed");
    }
  }

  // Handle CANCLE button
  function handleCancleButton() {
    window.location.reload();
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
                <Dateinput
                  ref={limitTimeRef}
                  defaultValue={getDate(taskModel.limit_time)}
                />
                <div onClick={() => handleEditBtn("limit_time")}>
                  <Editbutton />
                </div>
              </div>
              <input
                type="checkbox"
                id="star"
                checked={isStared}
                onChange={() => {
                  setIsStared(!isStared);
                }}
                className="starCheck"
              />
              <label htmlFor="star" className="bottom-item starLabel">
                <StarIcon className="icon" />
              </label>
              <div className="bottom-item">
                <button
                  className="buttonAction"
                  type="button"
                  onClick={handleCancleButton}
                >
                  CANCLE
                </button>
                <button
                  className="buttonAction"
                  type="submit"
                  onClick={handleSubmitForm}
                >
                  SUBMIT
                </button>
              </div>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default Singletask;
