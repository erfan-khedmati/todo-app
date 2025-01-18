import React from "react";
import "./navbar.scss"
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';

// Components
import Profiledropdown from "../profiledropdown/Profiledropdown";

function Navbar() {
  return (
    <div className="frame">
      {/* Drag Area */}
      <div className="dragArea"></div>
      {/* Profile */}
      <Profiledropdown username="efdeveloper" />
      {/* Fram Action */}
      <div className='frameActions'>
        <button className='frameButton'>
          <RemoveIcon className="icon"/>
        </button>
        <button className='frameButton'>
          <CloseIcon className="icon"/>
        </button>
      </div>
    </div>
  )
}

export default Navbar