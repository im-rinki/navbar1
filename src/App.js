import React, { useEffect, useState } from 'react'
import { Routes,Route } from "react-router-dom";
import Form1 from './components/Form1';
import {Form2} from './components/Form2';
//import Contact from './components/Contact';
import Service from './components/Service';
import Header from './components/Header';

import Error from "./components/Error";
export default function App() {
//   const getColor = (curr)=>{
//     console.log(history)
// if(history.location.pathname===curr){
//   return "pink";
// }
//   }
  
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
      <Route  path="/form1" element={<Form1 />} /> 
      <Route  path="/form2" element={<Form2 />}/>
      {/* <Route path="/contact" element={<Contact />}/> */}
      <Route path="/service" element={<Service />}/>
      <Route path="*" element={<Error />}/>
      </Routes>
      </div>
        )
    }

