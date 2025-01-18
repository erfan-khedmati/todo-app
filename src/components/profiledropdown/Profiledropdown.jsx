import React from "react";

// Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Profileimg from "../../assets/images.png";

// SCSS file
import "./profiledropdown.scss";

function Profiledropdown({ username }) {
  return (
    <div className="profileDropDown">
      <input type="checkbox" id="toggle" className="toggle" />
      <label htmlFor="toggle">
        <div className="profBtn">
          <h1 className="title">{username}</h1>
          <ExpandMoreIcon className="icon" />
        </div>
      </label>
      <div>
        <div className="modal">
          <img src={Profileimg} />
          <h1 className="title">{username}</h1>
          <div className="oval">Show Profle</div>
        </div>
      </div>
    </div>
  );
}

export default Profiledropdown;
