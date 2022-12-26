import logo from "../logo.svg";
import "../App.css";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { GiHamburgerMenu } from "react-icons/gi";
import renewlogo from "./renewlogo.jpg"

const Header = () =>{
  const navigate=useNavigate();
  function logobtn(){
    navigate("/form1")
 }
 
 

  return (

    <>
       <header>
          <nav className="nav">
              <div className='logo'>
                  <img src={renewlogo} className='navbar-logo' onClick={logobtn} />
              </div>
              <div className='navbar'>
                  <NavLink to="/form1" style={({isActive})=>{return{backgroundColor:isActive?'green' : '' }}} className='abc' >Form1</NavLink>
                  <NavLink to="form2" style={({isActive})=>{return{backgroundColor:isActive?'green' : ''}}} className='abc' >Form2</NavLink>
                  <NavLink to="form3" style={({isActive})=>{return{backgroundColor:isActive?'green' : ''}}} className='abc'>Form3</NavLink>
                  <NavLink to="service" style={({isActive})=>{return{backgroundColor:isActive?'green' : ''}}}className='abc'>Service</NavLink>
                  <NavLink to="Form4" style={({isActive})=>{return{backgroundColor:isActive?'green' : ''}}}className='abc'>Form4</NavLink>
                  <NavLink to="Form5" style={({isActive})=>{return{backgroundColor:isActive?'green' : ''}}}className='abc'>Form5</NavLink>
                  <NavLink to="Performance" style={({isActive})=>{return{backgroundColor:isActive?'green' : ''}}}className='abc'>Performance</NavLink>
                  <NavLink to="Form6" style={({isActive})=>{return{backgroundColor:isActive?'green' : ''}}}className='abc'>Form6</NavLink>
                  <a href="#" id="nav_icon"><GiHamburgerMenu /></a>
                  </div>
          </nav>
     

      </header>
    
    
    </>
    
  );
  
}


export default Header;



