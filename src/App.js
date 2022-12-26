import React, { useEffect, useState } from 'react'
import { Routes,Route } from "react-router-dom";
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import Service from './components/Service';
import Form4 from './components/Form4';
import Form5 from './components/Form5';
import Header from './components/Header';
import Form6 from './components/Form6';
import Error from "./components/Error";
import { Performance } from './PerfomanceTable';
export default function App() {

      return(

        <div>
         
       <Header /> 
     
      <Routes>
      <Route  path="/form1" element={<Form1 />} /> 
      <Route  path="/form2" element={<Form2 />}/>
       <Route path="/form3" element={<Form3 />}/> 
       <Route path="/service" element={<Service />}/>
      <Route path="/Form4" element={<Form4 />}/>
      <Route path="/Form5" element={<Form5 />}/> 
      <Route path="/Performance" element={<Performance/>}/>
      <Route path="/Form6" element={<Form6 />}/> 
      <Route path="*" element={<Error />}/>
      </Routes>
      </div>
        )
    }

