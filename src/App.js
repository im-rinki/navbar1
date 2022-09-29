import React, { useEffect, useState } from 'react'
import { Routes,Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import Header from './components/Header';
import Error from "./components/Error";
export default function App() {
  // const [loading,setLoading] = useState(false);
  // useEffect(()=>{
  //  const url   = window.location.href;
  //  const array = url.split("/");

  //  if(array[3] === ""       ||
  //     array[3] === "home"   ||
  //     array[3] === "about"  || 
  //     array[3] === "contact"||
  //     array[3] === "service")
  //     setLoading(true);
  //   else setLoading(false);  
  // },[]);

  //   if(!loading){
  //     return (
  //       <Error/>
  //       )
  //   }else{
      return(
        <div>
      <Header />
      <Routes>
      <Route  path="/home" element={<Home />}/> 
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/service" element={<Service />}/>
      {/* <Route path="*" element={<Error />}/> */}
      </Routes>
      </div>
        )
    }

