import React from "react";
import { useState } from "react";
import Select from "react-select";
import "./Form3.css";
const connectivitylevel = [
  { value: "STU", label: "STU" },
  { value: "CTU", label: "CTU" },
  { value: "ALL", label: "ALL" },
];
const state = [
  { value: "RJ", label: "RJ" },
  { value: "MP", label: "MP" },
  { value: "MH", label: "Mh" },
  { value: "GJ", label: "GJ" },
  { value: "KA", label: "KA" },
  { value: "TL", label: "TL" },
  { value: "TS", label: "TS" },
  { value: "GJ-ISTS", label: "GJ-ISTS" },
  { value: "RJ-ISTS", label: "RJ-ISTS" },
  { value: "KA-ISTS", label: "KA-ISTS" },
  { value: "ALL", label: "ALL" },
];
const requirmenttype = [
  { value: "New Regulation", label: "New Regulation" },
  { value: "New Amendment", label: "New Amendment" },
  { value: "Procedural", label: "Procedural" },
  { value: "Notice", label: "Notice" },
  { value: "Order", label: "Order" },
  { value: "Operational Issues", label: "Operational Issues" },
];
const requirment = [
  { value: "Implementation requirment", label: "Implementation requirment" },
  { value: "Dispute requirment", label: "Dispute requirment" },
];
const actiontaken = [
  { value: "Challenge", label: "Challenge" },
  { value: "Implement", label: "Implement" },
  { value: "To be reviewed", label: "To be reviewed" },
];
const impact=[
  { value: "data exposure", label: "data exposure" },
  { value: "Revenue loss", label: "Revenue loss" },
];
const criticality=[
  { value: "Low", label: "Low" },
  { value: "Medium", label: "Medium" },
  { value: "High", label: "High" },
];
const analyse=[ 
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
  
];
const status=[
  { value: "Open", label: "Open" },
  { value: "Close", label: "Close" },
];

export default function Form3() {
  const[register,setRegister]=useState([{date:"",quarter:"",affectedmw:"",Connectivitylevel:"",state:"",requirmenttype:"",
  nodal:"",site:"",newchange:"",reference:"",analyse:"",impact:"",status:"",description:"",criticality:"",
  requirment:"",actiontaken:"",key:"",presentworking:""},]);

  const handleChange=(e)=>{
  const {name,value}=e.target;
  const item = [...register];
  item[0][name] = value;
  setRegister(item);

}
 const handleChange2=(e,value)=>{
  // console.log(value);
  // console.log(value.name);
  // console.log(e.value);
const item = [...register];
 item[0][value.name] = e.value;
      setRegister(item);
   console.log(register);
}
 
  const onformsubmit=(e)=>{
    e.preventDefault();
  console.log(register);
     } 
    
  return (
    <> 
     <form onSubmit={onformsubmit}>
         <div className="form">
         <div className="issuedate">
          <label>Issue Date</label>
          <input type="date" className="inputbox" name="date" onChange={handleChange}></input>
          </div>
          <div className="quarter">
          <label>Quarter</label>
          <input type="text" className="inputbox" name="quarter" onChange={handleChange}></input>
          </div>
          <div className="affectedmw">
          <label>Affected MW</label>
          <input type="text" className="inputbox" name="affectedmw" onChange={handleChange}></input>
          </div>
          <div className="connectivitylevel">
          <label>Connectivity Levels</label>
          <Select options={connectivitylevel} name="Connectivitylevel" className="selectdata" onChange={handleChange2}/>
          </div>
          <div className="state">
          <label>State</label>
          <Select options={state} className="selectdata" name="state" onChange={handleChange2}/>
          </div>
          </div>
           {/* ..............form2................. */}
          <div className="form2">
         <div className="requirmenttype">
          <label>Requirment Type</label>
          <Select options={requirmenttype} className="selectdata" name="requirmenttype" onChange={handleChange2} />
          </div>
          <div className="nodalagency">
          <label>Nodal Agency</label>
          <input type="text" className="inputbox" name="nodal" onChange={handleChange}></input>
          </div>
          
         
            <div className="site">
          <label>Site</label>
          <input type="text" className="inputbox" name="site" onChange={handleChange}></input>
          </div>
          <div className="newchange">
          <label>New Change</label>
           <input type="text" className="inputbox" name="newchange" onChange={handleChange}></input>
          </div>
          <div className="referencenumber">
          <label>Reference Number</label>
          <input type="text" className="inputbox" name="reference"onChange={handleChange}></input>
          </div>
          </div>
          <div className="form3">
          <div className="analyse">
          <label>Analyse</label>
          {/* <div className="yesno">
          <input type="radio" value="yes" name="analyse" className="yesanalyse" onChange={handleChange}></input>Yes
          <input type="radio" value="no" name="analyse" className="noanalyse" onChange={handleChange}></input>No 
          </div> */}
           <Select options={analyse} className="selectdata" name="analyse" onChange={handleChange2} />
         </div>
         <div className="impact">
          <label>Impact</label>
         <Select options={impact} className="selectdata" name="impact" onChange={handleChange2} />
          </div>
          <div className="description">
          <label>Description</label>
          <input type="text" className="inputbox" name="description" onChange={handleChange}></input>
          </div>
         <div className="Criticality">
          <label>Criticality</label>
          <Select options={criticality} className="selectdata" name="criticality" onChange={handleChange2} />
          </div>
         
          
          <div className="key">
          <label>Key responsible persons</label>
          <input type="text" className="inputbox" name="Key" onChange={handleChange}></input>
          </div>
          </div>
          {/* ................row3............ */}
          <div className="row3">
          <div className="requirment">
          <label>Requirment</label> 
          <Select options={requirment} className="selectdata" name="requirment" onChange={handleChange2}/>
          </div>
          <div className="actiontaken">
          <label>Action Taken</label>
          <Select options={actiontaken} className="selectdata" name="actiontaken" onChange={handleChange2}/>
          </div>
          <div className="presentworking">
          <label>Present working status</label>
          <input type="textarea" className="inputbox" name="presentworking" onChange={handleChange}></input>
          </div>
          <div className="status">
            <label>Status</label>
            {/* <div className="openclose">
            <input type="radio" value="open"  name="status" onChange={handleChange}></input>Open
            <input type="radio" value="close" name="status" className="close" onChange={handleChange}></input>Close
          </div> */}
          <Select options={status} className="selectdata" name="status" onChange={handleChange2}/>
          </div>
          <div className="documentupload">
          <label>Required/relevant document</label>
          <div className="file">
          <input type="file" className="choosefile"></input>
           </div>
           </div>
           </div>
           <div className="savebtn">
          <button type="submit" className="savedata">Submit</button>
           </div>
        </form> 
    </>
  
  );

}
