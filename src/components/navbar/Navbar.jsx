import React from "react";

import "./navbar.scss"
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';

// Components
import Profiledropdown from "../profiledropdown/Profiledropdown";

function Navbar() {

  // Window Actions
  function closeWindow() {
    window.close();
  }

  function minimizeWindow() {
    window.electronAPI.min()
  }

  return (
    <div className="frame">
      {/* Drag Area */}
      <div className="dragArea"></div>
      {/* Profile */}
      <Profiledropdown username="efdeveloper" />
      {/* Fram Action */}
      <div className='frameActions'>
        <button className='frameButton' onClick={minimizeWindow}>
          <RemoveIcon className="icon"/>
        </button>
        <button className='frameButton' onClick={closeWindow}>
          <CloseIcon className="icon"/>
        </button>
      </div>
    </div>
  )
}

export default Navbar