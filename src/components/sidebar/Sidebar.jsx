import React from "react";

// SCSS file
import "./sidebar.scss";

// ICONS
import HomeIcon from "@mui/icons-material/Home";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="brand">
        <h1>TODO</h1>
      </div>
      <ul className="items">
        <p className="menuTitle">MAIN</p>
        <li className="item">
          <HomeIcon className="icon" />
          <p>Home</p>
        </li>
        <li className="item">
          <AlignHorizontalLeftIcon className="icon" />
          <p>All Task</p>
        </li>
        <li className="item">
          <CheckCircleOutlinedIcon className="icon" />
          <p>Done Tasks</p>
        </li>
        <li className="item">
          <ChecklistOutlinedIcon className="icon" />
          <p>Not Done Tasks</p>
        </li>
        <li className="item">
          <ErrorOutlineIcon className="icon" />
          <p>Expired Taks</p>
        </li>
        <p className="menuTitle">USER</p>
        <li className="item">
          <Person2OutlinedIcon className="icon" />
          <p>Profile</p>
        </li>
        <li className="item">
          <LogoutOutlinedIcon className="icon" />
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
