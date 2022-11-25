import React from 'react'
import { NavLink } from 'react-router-dom'
import error from './error.jpg'
export default function Error() {
   // console.log(window.location.href);
  return (
    <div className='errormain'>
    <img src={error} className="errorpage"></img>
    <div className='backonhome'>
    <NavLink to="/form1" style={{color:"white",textDecoration:"none",marginTop:20}}>GO To Home Page</NavLink>
    </div>
  </div>
  )
}
