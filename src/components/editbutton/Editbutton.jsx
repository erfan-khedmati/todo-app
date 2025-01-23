import React from 'react'

// Scss file
import "./editbutton.scss"

// Icon
import EditIcon from '@mui/icons-material/Edit';

function Editbutton() {
    // function handleChangeIcon() {
        
    // }
  return (
    <button className='edit' type='button'>
        <EditIcon className='icon' />
    </button>
  )
}

export default Editbutton