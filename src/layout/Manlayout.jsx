import React from "react";

import { Outlet } from "react-router-dom";

// SCSS file import
import "./mainlayout.scss";

// Components
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

// Notification
import {
  NotificationProvider,
} from "../hook/notificationContext";

function Manlayout() {
  return (
    <NotificationProvider>
      <div className="mainLayout">
        <Sidebar />
        <div className="content">
          <Navbar />
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
    </NotificationProvider>
  );
}

export default Manlayout;
