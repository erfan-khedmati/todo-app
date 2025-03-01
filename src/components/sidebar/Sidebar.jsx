import React from "react";

import { NavLink } from "react-router-dom";

// SCSS file
import "./sidebar.scss";
import DarkMode from "../darkmode/DarkMode"

// ICONS
import HomeIcon from "@mui/icons-material/Home";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="brand">
        <h1>TODO</h1>
      </div>
      <ul className="items">
        <p className="menuTitle">MAIN</p>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "item active" : "item")}
        >
          <HomeIcon className="icon" />
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/all-tasks"
          className={({ isActive }) => (isActive ? "item active" : "item")}
        >
          <AlignHorizontalLeftIcon className="icon" />
          <p>All Task</p>
        </NavLink>
        <NavLink
          to="/done-tasks"
          className={({ isActive }) => (isActive ? "item active" : "item")}
        >
          <CheckCircleOutlinedIcon className="icon" />
          <p>Done Tasks</p>
        </NavLink>
        <NavLink
          to="/not-done-task"
          className={({ isActive }) => (isActive ? "item active" : "item")}
        >
          <ChecklistOutlinedIcon className="icon" />
          <p>Not Done Tasks</p>
        </NavLink>
        <NavLink
          to="/expired-tasks"
          className={({ isActive }) => (isActive ? "item active" : "item")}
        >
          <ErrorOutlineIcon className="icon" />
          <p>Expired Taks</p>
        </NavLink>
        <p className="menuTitle">USER</p>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? "item active" : "item")}
        >
          <Person2OutlinedIcon className="icon" />
          <p>Profile</p>
        </NavLink>
        <li className="item">
          <LogoutOutlinedIcon className="icon" />
          <p>Logout</p>
        </li>
        <li>
          <DarkMode />
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
