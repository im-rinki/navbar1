import logo from "../logo.svg";
import "../App.css";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
// import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Outlet } from "react-router-dom";
const Header = () =>{
  const navigate=useNavigate();
  function logobtn(){
    navigate("/form1")
 }
 function btnclick(){

 }
 

  return (

    <>
       <header>
          <nav className="nav">
              <div className='logo'>
                  <img src={logo} className='navbar-logo' onClick={logobtn} />
              </div>
              <div className='navbar'>
                  <NavLink to="/form1" style={({isActive})=>{return{backgroundColor:isActive?'green' : '' }}} className='abc' >Form1</NavLink>
                  <NavLink to="form2" style={({isActive})=>{return{backgroundColor:isActive?'green' : ''}}} className='abc' >Form2</NavLink>
                  <NavLink to="contact" style={({isActive})=>{return{backgroundColor:isActive?'green' : ''}}} className='abc'>Contact</NavLink>
                  <NavLink to="service" style={({isActive})=>{return{backgroundColor:isActive?'green' : ''}}}className='abc'>Service</NavLink>
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



