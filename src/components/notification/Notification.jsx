import React from "react";

// SCSS FILE
import "./notification.scss";

// Icons
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CancelIcon from "@mui/icons-material/Cancel";
import ErrorIcon from "@mui/icons-material/Error";

function Notification({ notif }) {
  return (
    <>
      {notif.map((notification, index) => (
        <div
          className={
            notification.type == "success"
              ? "notification success"
              : notification.type == "warning"
              ? "notification warning"
              : "notification failed"
          }
          key={index}
        >
          {notification.type == "success" ? (
            <TaskAltIcon className="icon" />
          ) : notification.type == "warning" ? (
            <ErrorIcon className="icon" />
          ) : (
            <CancelIcon className="icon" />
          )}
          <p>{notification.message}</p>
        </div>
      ))}
    </>
  );
}

export default Notification;
