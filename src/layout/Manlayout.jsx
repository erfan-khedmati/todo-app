import React from "react";

import { Outlet } from "react-router-dom";

// SCSS file import
import "./mainlayout.scss"

// Components
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

function Manlayout() {
  return (
    <div className="mainLayout">
      <Sidebar />
      <div>
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Manlayout;
