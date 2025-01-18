import React from "react";
import "./navbar.scss"
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';

function Navbar() {
  return (
    <div className="frame">
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