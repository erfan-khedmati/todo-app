import React from "react";

// SCSS FILE
import "./notification.scss";

// Icons
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CancelIcon from "@mui/icons-material/Cancel";

function Notification({ notif }) {
  return (
    <>
      {notif.map((notification, index) => (
        <div
          className={
            notification.type == "success" ? "notification success" : "notification failed"
          }
          key={index}
        >
          {notification.type == "success" ? (
            <TaskAltIcon className="icon" />
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
