import logo from "../logo.svg";
import "../App.css";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
// import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const Header = () =>{
  const navigate=useNavigate();
  function logobtn(){
    navigate("/home")
 }
  return (

    <>
       <header>
          <nav className="nav">
              <div className='logo'>
                  <img src={logo} className='navbar-logo' onClick={logobtn} />
              </div>
              <div className='navbar'>
                  <NavLink to="Home" className='abc'>Home</NavLink>
                  <NavLink to="about" className='abc'>About</NavLink>
                  <NavLink to="contact" className='abc'>Contact</NavLink>
                  <NavLink to="service" className='abc'>Service</NavLink>
                  <a href="#" id="nav_icon"><GiHamburgerMenu /></a>
                  {/* <select id="nav_icon"> 
                    <GiHamburgerMenu />
                   </select> */}
                
              </div>
          </nav>
      </header>
    
    
    </>
    
  );
  
}


export default Header;



