import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
const impact = [
  { value: "data exposure", label: "data exposure" },
  { value: "Revenue loss", label: "Revenue loss" },
];
const criticality = [
  { value: "Low", label: "Low" },
  { value: "Medium", label: "Medium" },
  { value: "High", label: "High" },
];
const analyse = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];
const status = [
  { value: "Open", label: "Open" },
  { value: "Close", label: "Close" },
];

export default function Form5() {
  const [register, setRegister] = useState([
    {
      date: "",
      quarter: "",
      affectedmw: "",
      Connectivitylevel: "",
      state: "",
      requirmenttype: "",
      nodal: "",
      site: "",
      newchange: "",
      reference: "",
      analyse: "",
      impact: "",
      status: "",
      description: "",
      criticality: "",
      requirment: "",
      actiontaken: "",
      key: "",
      presentworking: "",
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const item = [...register];
    item[0][name] = value;
    setRegister(item);
  };
  const handleChange2 = (e, value) => {

    const item = [...register];
    item[0][value.name] = e.value;
    setRegister(item);
    console.log(register);
  };

  return (
    <>
      {/* <div className="container-grid"> */}
      <div className="sitemasterheading">
        <h2 className="SiteMasterForm">RegulatoryRegister Form</h2>
      </div>
      <div className="container-fluid mt-3 ">
         <div class="row col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xxl-12"> 
          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-6 col-xs-12">
            <label>Issue Date</label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-6 col-xs-12">
            <input
              type="date"
              className="form-control"
              name="date"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-6 col-xs-12">
            <label>Quarter</label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-6 col-xs-12">
            <input
              type="text"
              className="form-control"
              name="quarter"
              autoComplete="off"
              onChange={handleChange}
            />
            </div>
          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-6 col-xs-12">
            <label class >Affected MW</label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-6 col-xs-12">
            <input
              type="text"
              className="form-control"
              name="affectedmw"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-6 col-xs-12">
            <label>Connectivity Levels</label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-6 col-xs-12">
            <Select
              options={connectivitylevel}
              name="Connectivitylevel"
              className="selectdata"
              onChange={handleChange2}
            />
          </div>
         </div> 
     <div class="row col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xxl-12 ">
          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-6 col-xs-12">
            <label>State</label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-6 col-xs-12">
            <Select
              options={state}
              className="selectdata"
              name="state"
              onChange={handleChange2}
            />
          </div>

          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-6 col-xs-12">
            <label>Requirment Type</label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-6 col-xs-12">
            <Select
              options={requirmenttype}
              className="selectdata"
              name="requirmenttype"
              onChange={handleChange2}
            />
          </div>
          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-6 col-xs-12">
            <label>Nodal Agency</label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-6 col-xs-12">
            <input
              type="text"
              className="form-control"
              name="nodal"
              autoComplete="off"
              onChange={handleChange}
            ></input>
          </div>
          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-6 col-xs-12">
            <label>Site</label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-6 col-xs-12">
            <input
              type="text"
              className="form-control"
              name="site"
              autoComplete="off"
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div class="row col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xxl-12 mt-2">
          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-6 col-xs-12">
            <label>New Change</label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-6 col-xs-12">
            <input
              type="text"
              className="form-control"
              name="newchange"
              autoComplete="off"
              onChange={handleChange}
            ></input>
          </div>
          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-6 col-xs-12">
            <label>Reference Number</label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-6 col-xs-12">
            <input
              type="text"
              className="form-control"
              name="reference"
              autoComplete="off"
              onChange={handleChange}
            ></input>
          </div>
          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-6 col-xs-12">
            <label>Analyse</label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-6 col-xs-12">
            <Select
              options={analyse}
              className="selectdata"
              name="analyse"
              onChange={handleChange2}
            />
          </div>
          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-6 col-xs-12">
            <label>Impact</label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-6 col-xs-12">
            <Select
              options={impact}
              className="selectdata"
              name="impact"
              onChange={handleChange2}
            />
          </div>
          </div>
          <div class="row col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xxl-12 mt-2">
          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-6 col-xs-12 ">
          <label>Description</label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-6 col-xs-12">
            <input type="text"
              class="form-control col-xs-6"
              rows="3"
              name="description"
              autoComplete="off"
              onChange={handleChange}
            ></input>
          </div>
        <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-6 col-xs-12">
            <label>Criticality</label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-6 col-xs-12">
            <Select
              options={criticality}
              className="selectdata"
              name="criticality"
              onChange={handleChange2}
            />
          </div>
          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-6 col-xs-12">
            <label>Key responsible persons</label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-6 col-xs-12">
            <input
              type="text"
              className="form-control"
              name="Key"
              onChange={handleChange}
            ></input>
          </div>
        
          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-6 col-xs-12">
            <label>Requirment</label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-6 col-xs-12">
            <Select
              options={requirment}
              className="selectdata"
              name="requirment"
              onChange={handleChange2}
            />
          </div>
          </div>
        <div class="row col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xxl-12 mt-2">
          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-6 col-xs-12">
            <label>Action Taken</label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-6 col-xs-12">
            <Select
              options={actiontaken}
              className="selectdata"
              name ="actiontaken"
              onChange={handleChange2}
            /> 
          </div>

          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-6 col-xs-12">
            <label>Present working status</label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-6 col-xs-12">
            <input
              type="textarea"
              className="form-control"
              name="presentworking"
              onChange={handleChange}
            ></input>
          </div>
          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-6 col-xs-12">
            <label>Status</label>
          </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-6 col-xs-12">
            <Select
              options={status}
              className="selectdata"
              name="status"
              onChange={handleChange2}
            />
          </div>
      
         <div className="col-lg-12">
          <div className="col-md-1 col-lg-1 col-xxl-1 col-sm-6 col-xs-12">
          <label>Required/relevant document</label>
        </div>
          <div className="col-md-2 col-lg-2 col-xxl-2 col-sm-6 col-xs-12">
          <input type="file" className="form-control"></input>
        </div>
        </div>
       </div>
       <div className="form5button">
        <button  className="form5submitbutton" id="submitbutton">Submit</button>
       </div>
   </div>
        </>
  );
}


