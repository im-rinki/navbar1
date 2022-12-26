import React, { useState } from "react";
import "./service.css";
import Select from "react-select";
import DataTable from "react-data-table-component";
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
const connectivitytype = [
  { value: "shared", label: "shared" },
  { value: "standalone", label: "standalone" },
];
const dsmcriteria=[
  { value: "depooling", label: "depooling" },
  { value: "individual", label: "individual" },
  { value: "accuracy", label: "accuracy" },
  { value: "deepoling", label: "deepoling" },
];
const typesofagg = [
  { value: "aggregation", label: "aggregation" },
  { value: "non-aggregation", label: "non-aggregation" },
];


const columns = [
 
  {
   
     name: "Site Name",
     selector: (row) => row.SiteName,
    //  accessor: "sitename"
   
  },
  {
    name: "QCA",
    selector: (row) => row.QCA,
    // accessor: d => d.qca
  },

  {
    name: "Plant Type",
    selector: (row) => row.PlantType,
  },
  {
    name: "Scada Source",
    selector: (row) => row.ScadaSource,
  },
  {
    name: "Capacity",
    selector: (row) => row.Capacity,
  },
  {
    name: "State",
    selector: (row) => row.State,
  },
  {
    name: "Type Of Aggregation",
    selector: (row) => row.TypeOfAggregation,
  },
  {
    name: "DSM Criteria",
    selector: (row) => row.DSMCriteria,
  },
  {
    name: "Tariff",
    selector: (row) => row.Tariff,
  },
  {
    name: "Latitude",
    selector: (row) => row.Latitude,
  },
  {
    name: "Longitude",
    selector: (row) => row.Longitude,
  },
];
const data1 = [
  // {
  //   SiteID: 1,
  //   SiteName: "Ghostbusters8",
  //   QCA: "Ghostbusters8",
  //   PlantType: "catcher",
  //   ScadaSource: "Rye",
  //   Capacity: "David copperfield",
  //   State: "Wuthering",
  //   TypeOfAggregation: "version",
  //   Transmissionunit: "Atlassian",
  //   DSMCriteria: "development",
  //   Tariff: 56,
  //   Latitude: 78,
  //   Longitude: 89,
  // },
  {
  
    SiteName: "VP Venkaiah Naid",
    QCA: "Ghostbusters8",
    PlantType: "Decoding Indian Babudom",
    ScadaSource: " Maverick EffectRy",
    Capacity: " Philosophy",
    State: "Wuthering",
    TypeOfAggregation: "Bill Gates",
    Transmissionunit: "Biography ",
    DSMCriteria: "nationalist",
    Tariff: 34,
    Latitude: 23,
    Longitude: 45,
  },
  {
   
    SiteName: "VP Venkaiah Naid",
    QCA: "internationally",
    PlantType: "Decoding Indian Babudom",
    ScadaSource: " Maverick EffectRy",
    Capacity: " Philosophy",
    State: "Wuthering",
    TypeOfAggregation: "Things Fall Apart",
    Transmissionunit: "Biography ",
    DSMCriteria: "nationalist",
    Tariff: 12,
    Latitude: 54,
    Longitude: 23,
  },
];
export default function Service() {


  const [show, setShow] = useState(false);
  const [data, setData] = useState([
    {
      
      sitename: "",
      qca: "",
      planttype: "",
      scadasource: "",
      capacity: "",
      state: "",
      typeofagg: "",
      transmissionunit: "",
      dsmcriteria: "",
      tariff: "",
      latitude: "",
      longitude: "",
    },
  ]);
  const handleChangesitemaster=(e)=>{
    const {name,value}=e.target;
    const item = [...data];
    item[0][name] = value;
    setData(item);
  
  }
   const handleChangesitemaster2=(e,value)=>{
    // console.log(value);
    // console.log(value.name);
    // console.log(e.value);
  const item = [...data];
   item[0][value.name] = e.value;
        setData(item);
      // console.log(data);
  }
  function onsubmitsitemasterform(e){
   e.preventDefault();
   console.log(data);
}


  return (
    <>
    <div className="sitemasterheading">
      <h2 className="SiteMasterForm">SiteMaster Form</h2>
    </div>
     <form onSubmit={onsubmitsitemasterform}>
      <div className="grid-container">
     
        <div className="grid-item1">
          <label className="sitelabel" >Site Name</label>
          <input
            type="text"
            className="inputformfield"
            id="sitenameinput"
            name="sitename"
            autoComplete="off"
            placeholder="Enter the sitename"
            onChange={handleChangesitemaster}
          ></input>
         
        </div>
        <div className="grid-item2">
          <label className="sitelabel">State</label>
          <Select
            options={state}
            name="state"
            className="inputselectfield"
            id="stateinput"
           onChange={handleChangesitemaster2}
          />
            
        </div>
        <div className="grid-item3">
          <label className="sitelabel">Latitude</label>
          <input
            type="text"
            className="inputformfield"
            name="latitude"
            autoComplete="off"
            id="latitudeinput"
            placeholder="Enter the latitude"
            onChange={handleChangesitemaster}
            // onChange={(e) => handlelatitude(e)}
          ></input>
          
        </div>
        <div className="grid-item4">
          <label className="sitelabel">Longitude</label>
          <input
            type="text"
            className="inputformfield"
            name="longitude"
            autoComplete="off"
            id="longitudeinput"
            placeholder="Enter the longitude"
            onChange={handleChangesitemaster}
          //  onChange={(e) => handlelongitude(e)}
          ></input>
        </div>
        <div className="grid-item5">
          <label className="sitelabel">QCA</label>
          <Select
            options={state}
            name="qca"
            className="inputselectfield"
            id="qcaselect"
            onChange={handleChangesitemaster2}
            // onChange={(e) => handleqca(e)}
          />
        </div>
        <div className="grid-item6">
          <label className="sitelabel">Plant Type</label>
          <input
            type="radio"
            name="planttype"
            value=""
            className="radiobuttn"
          />{" "}
          <span>Solar</span>
          <input
            type="radio"
            name="planttype"
            value=""
            className="radiobuttn"
            id="planttyperadio"
          />
          <span> Wind</span>
        </div>
        <div className="grid-item7">
          <label className="sitelabel">Scada Source </label>
          <Select
            options={state}
            name="state"
            className="inputselectfield"
            id="scadaselect"
            // onChange={(e) => handlescadasource(e)}
          />
        </div>
        <div className="grid-item8">
          <label className="sitelabel">Capacity</label>
          <input
            type="text"
            className="inputformfield"
            name="capacity"
            autoComplete="off"
            id="capacityinput"
            onChange={handleChangesitemaster}
            // onChange={(e) => handlecapacity(e)}
            // onChange={(e) => handlelongitude(e)}
          ></input>
        </div>
        <div className="grid-item9">
          <label className="sitelabel">Types Of Aggregation</label>
          <Select
            options={typesofagg}
            name="typeofagg"
            className="inputselectfield"
            id="typesofselect"
            onChange={handleChangesitemaster2}
           
  />
        </div>
        <div className="grid-item10">
          <label className="sitelabel">Connectivity Type</label>
          <Select
            options={connectivitytype}
            name="connectivitytype"
            className="inputselectfield"
            id="connectivitytypeselect"
            onChange={handleChangesitemaster2}
           // onChange={(e) => handleconnectivitytype(e)}
          />
        </div>
        <div className="grid-item11">
          <label className="sitelabel">DSM Criteria</label>
          <Select
            options={dsmcriteria}
            name="dsmcriteria"
            className="inputselectfield"
            id="dsmselect"
            onChange={handleChangesitemaster2}
            // onChange={(e) => handledsmcriteria(e)}
          />
        </div>
        <div className="grid-item12">
          <label className="sitelabel">Tariff</label>
          <input
            type="text"
            className="inputformfield"
            name="tariff"
            // id="tariffinput"
            autoComplete="off"
            placeholder="Enter the tariff"
            
            onChange={handleChangesitemaster}
            // onChange={(e) => handletariff(e)}
          ></input>
        </div>
        
       
      </div>
      
      <div className="grid-item13">
            <button type="submit" className="gridsubmitbtn" >
              Submit
            </button>
          </div>
          </form>   
          <div className="grid-item14">
          <button onClick={() => setShow(!show)} className="griddaatablebtn">
          View Data Table
        </button>
     
      {show ? (
        <DataTable
          columns={columns}
           data={data1}
           selectableRows
          // expandableRows
          // expandableRowsComponent={ExpandedComponent}
        />
      ) : null}
      </div>
          
    </>
  );
}
