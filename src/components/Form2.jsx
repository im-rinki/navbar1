import DataTable from "react-data-table-component";
import React, { useState } from "react";
import Select from "react-select";
import "./Form2.css";
const ExpandedComponent = ({ data1 }) => (
  <pre>{JSON.stringify(data1, null, 2)}</pre>
);
const columns = [
  {
    name: "Site ID",
    selector: (row) => row.SiteID,
  },
  {
    name: "Site Name",
    selector: (row) => row.SiteName,
  },
  {
    name: "QCA",
    selector: (row) => row.QCA,
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
const qcadata = [
  { value: " Select... ", label: " Select... " },
  { value: " manikaran ", label: " manikaran " },
  { value: " climate connect ", label: " climate connect " },
  { value: " re connect ", label: " re connect " },
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
    SiteID: 2,
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
    SiteID: 3,
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

export default function Form2  () {
  const [siteIdError, setSiteIdError] = useState(false);
  const [sitenameError, setSitenameError] = useState(false);
  const [qcaError, setqcaError] = useState(false);
  const [planttypeError, setplanttypeError] = useState(false);
  const [scadasoureError, setscadasourceError] = useState(false);
  const [typeofaggError, settypeofaggError] = useState(false);
  const [transmissionunitError, settransmissionunitError] = useState(false);
  const [dsmcriteriaError, setdsmcriteriaError] = useState(false);
  const [stateError, setstateError] = useState(false);
  const [capacityError, setcapacityError] = useState(false);
  const [tariffError, settariffError] = useState(false);
  const [latitudeError, setlatitudeError] = useState(false);
  const [longitudeError, setlongitudeError] = useState(false);
  const [number, setnumbererror] = useState(false);
  const [tariffnumber, setnumbertarifferror] = useState(false);
  const [latitudenumber, setlatitudenumbererror] = useState(false);
  const [longitudenumber, setlongitudenumbererror] = useState(false);

  const [data, setData] = useState([
    {
      siteid: "",
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
  const [show, setShow] = useState(false);
  function submitform(e){
   e.preventDefault();
   console.log(data);
}

  const handleSiteid = (e) => {
    let siteidvalidate = e.target.value;
    if (siteidvalidate ==
      
      "") {
      setnumbererror(false);
      setSiteIdError(true);
      const item = [...data];
      item[0]["siteid"] = " ";
      // console.log(item[0]["siteid"]);
      setData(item);
      //alert("value entered is not correct");
      console.log(siteidvalidate);
      return;
    } else {
      if (isNaN(siteidvalidate)) {
        setnumbererror(siteidvalidate);
        setSiteIdError(false);
        return;
      } else {
        setnumbererror(false);
        setSiteIdError(false);
        const item = [...data];
        item[0]["siteid"] = e.target.value;
        //  console.log(item[0]["siteid"]);
        setData(item);
        console.log("data", data);
        //  console.log(siteIdError);
      }
    }
  };

  const handleSitename = (e) => {
    let sitenamevalidate = e.target.value;
    if (sitenamevalidate == "") {
      setSitenameError(true);
    } else {
      setSitenameError(false);
      const item = [...data];
      item[0]["sitename"] = e.target.value;
      // console.log(item[0]["sitename"]);
      setData(item);
      // console.log("data", data);
    }
  };
  const handleqca = (e) => {
    let qcavalidate = e.value;
    if (qcavalidate == "" || qcavalidate == " Select... "){
      setqcaError(true);
    } else {
      setqcaError(false);
      const item = [...data];
      //  console.log("selectedoption", e);
      //  console.log(item);
      item[0]["qca"] = e.value;
      //  console.log(item[0]["qca"]);
      setData(item);
      // console.log("data", data);
    }
  };
  const handleplanttype = (e) => {
    let planttypevalidate = e.value;
    if (planttypevalidate == "" || planttypevalidate == " Select... ") {
      setplanttypeError(true);
    } else {
      setplanttypeError(false);
      const item = [...data];
      //  console.log("selectedoption", e);
      //  console.log(item);
      item[0]["planttype"] = e.value;
      //  console.log(item[0]["planttype"]);
      setData(item);
      //  console.log("data", data);
    }
  };
  const handlescadasource = (e) => {
    let scadasourcevalidate = e.value;
    if (scadasourcevalidate == "" || scadasourcevalidate == " Select... ") {
      setscadasourceError(true);
    } else {
      setscadasourceError(false);
      const item = [...data];

      //  console.log("selectedoption", e);
      //  console.log(item);
      item[0]["scadasource"] = e.value;
      //  console.log(item[0]["scadasource"]);
      setData(item);
      //  console.log("data", data);
    }
  };
  const handlecapacity = (e) => {
    let capacityvalidate = e.target.value;
    if (capacityvalidate == "") {
      setcapacityError(true);
    } else {
      setcapacityError(false);
      const item = [...data];
      // console.log("selectedoption", e);
      // console.log(item);
      item[0]["capacity"] = e.value;
      //console.log(item[0]["capacity"]);
      setData(item);
      // console.log("data", data);
    }
  };
  const handlestate = (e) => {
    let statevalidate = e.value;
    if (statevalidate == "" || statevalidate == " Select... ") {
      setstateError(true);
    } else {
      setstateError(false);
      const item = [...data];
      //  console.log("selectedoption", e);
      //  console.log(item);
      item[0]["state"] = e.value;
      //  console.log(item[0]["state"]);
      setData(item);
      //  console.log("data", data);
    }
  };
  const handletyoeofaggregation = (e) => {
    let typeofaggvalidate = e.value;
    if (typeofaggvalidate == "" || typeofaggvalidate == " Select... ") {
      settypeofaggError(true);
    } else {
      settypeofaggError(false);

      const item = [...data];
      //  console.log("selectedoption", e);
      //  console.log(item);
      item[0]["typeofagg"] = e.value;
      //  console.log(item[0]["typeofagg"]);
      setData(item);
      //  console.log("data", data);
    }
  };
  const handletransmissionunit = (e) => {
    let transmissionunitvalidate = e.value;
    if (
      transmissionunitvalidate == "" ||
      transmissionunitvalidate == " Select... "
    ) {
      settransmissionunitError(true);
    } else {
      settransmissionunitError(false);
      const item = [...data];
      //  console.log("selectedoption", e);
      //  console.log(item);
      item[0]["transmissionunit"] = e.value;
      //  console.log(item[0]["transmissionunit"]);
      setData(item);
      //  console.log("data", data);
    }
  };

  const handledsmcriteria = (e) => {
    let dsmcriteriavalidate = e.value;
    if (dsmcriteriavalidate == "" || dsmcriteriavalidate == " Select... ") {
      setdsmcriteriaError(true);
    } else {
      setdsmcriteriaError(false);
      const item = [...data];
      //  console.log("selectedoption", e);
      //  console.log(item);
      item[0]["dsmcriteria"] = e.value;
      //  console.log(item[0]["dsmcriteria"]);
      setData(item);
      //  console.log("data", data);
    }
  };
  const handletariff = (e) => {
    let tariffvalidate = e.target.value;
    if (tariffvalidate == "") {
      settariffError(true);
      setnumbertarifferror(false);
    } else {
      if (isNaN(tariffvalidate)) {
        setnumbertarifferror(tariffvalidate);
        settariffError(false);
        return;
      } else {
        settariffError(false);
        setnumbertarifferror(false);
        const item = [...data];
        item[0]["tariff"] = e.target.value;
        // console.log(item[0]["tariff"]);
        setData(item);
        //  console.log("data", data);
      }
    }
  };
  const handlelatitude = (e) => {
    let latitudevalidate = e.target.value;
    if (latitudevalidate == "") {
      setlatitudeError(true);
      setlatitudenumbererror(false);
    } else {
      if (isNaN(latitudevalidate)) {
        setlatitudenumbererror(latitudevalidate);
        setlatitudeError(false);
        return;
      } else {
        setlatitudeError(false);

        const item = [...data];
        item[0]["latitude"] = e.target.value;
        //  console.log(item[0]["latitude"]);
        setData(item);
        //  console.log("data", data);
     }
    }
  };
  const handlelongitude = (e) => {
    let longitudevalidate = e.target.value;
    if (longitudevalidate == "") {
      setlongitudeError(true);
      setlongitudenumbererror(false);
    } else {
      if (isNaN(longitudevalidate)) {
        setlongitudenumbererror(longitudevalidate);
        setlongitudeError(false);
        return;
      } else {
        setlongitudeError(false);
        const item = [...data];
        item[0]["longitude"] = e.target.value;
        //  console.log(item[0]["longitude"]);
        setData(item);
        //  console.log("data", data);
      }
    }
  };

  return (
    <>
      <div className="main">
        <form onSubmit={submitform}>
          <div className="main1">
            <div className="siteid">
              <label>Site ID</label>
              <input
                type="text"
                className="siteinput"
                id="input"
                name="siteid"
                autoComplete="off"
                onChange={(e) => handleSiteid(e)}
              ></input>
              <div className="errormsg">
                {siteIdError ? (
                  <label className="vaildation">This field is required</label>
                ) : (
                  ""
                )}
                {number ? (
                  <label className="vaildation">
                    please enter numeric value
                  </label>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="sitename">
              <label>Site Name</label>
              <input
                type="text"
                className="sitenameinput"
                id="input"
                name="sitename"
                autoComplete="off"
                onChange={(e) => handleSitename(e)}
              ></input>

              <div className="errormsg">
                {sitenameError ? (
                  <label className="vaildation">This field is required</label>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="qca">
              <label className="a">QCA</label>
              <Select
                options={qcadata}
                name="qca"
                className="selectfield"
                onChange={(e) => handleqca(e)}
                //  onChange={handlechange2}
              />
              <div className="errormsg">
                {qcaError ? (
                  <label className="vaildation">This field is required</label>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="planttype">
              <label className="a">Plant Type</label>
              <Select
                options={qcadata}
                name="planttype"
                className="selectfield"
                onChange={(e) => handleplanttype(e)}
              />
              <div className="errormsg">
                {planttypeError ? (
                  <label className="vaildation">This field is required</label>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="scada">
              <label className="a">Scada Source</label>
              <Select
                options={qcadata}
                name="scada"
                className="selectfield"
                onChange={(e) => handlescadasource(e)}
              />
              <div className="errormsg">
                {scadasoureError ? (
                  <label className="vaildation">This field is required</label>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="capacity">
              <label>Capacity</label>
              <input
                type="text"
                className="capacityinput"
                id="input"
                name="capacity"
                autoComplete="off"
                onChange={(e) => handlecapacity(e)}
              ></input>
              <div className="errormsg">
                {capacityError ? (
                  <label className="vaildation">This field is required</label>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="state1">
              <label>State</label>
              <Select
                options={qcadata}
                name="state"
                className="selectfield"
                onChange={(e) => handlestate(e)}
              />
              <div className="errormsg">
                {stateError ? (
                  <label className="vaildation">This field is required</label>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="main2">
            <div className="typeof">
              <label className="a">Type Of Aggregation</label>
              <Select
                options={qcadata}
                name="typeofaggregation"
                className="selectfield"
                onChange={(e) => handletyoeofaggregation(e)}
                // id="input"
              />
              <div className="errormsg">
                {typeofaggError ? (
                  <label className="vaildation">This field is required</label>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="transmissionunit">
              <label className="a">Transmission Unit</label>
              <Select
                options={qcadata}
                name="transmissionselect"
                className="selectfield"
                onChange={(e) => handletransmissionunit(e)}
              />
              <div className="errormsg">
                {transmissionunitError ? (
                  <label className="vaildation">This field is required</label>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="dsm">
              <label className="a">DSM Criteria</label>
              <Select
                options={qcadata}
                name="dsmselect"
                className="selectfield"
                onChange={(e) => handledsmcriteria(e)}
              />
              <div className="errormsg">
                {dsmcriteriaError ? (
                  <label className="vaildation">This field is required</label>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="tariff">
              <label>Tariff</label>
              <input
                type="text"
                className="tariffinput"
                id="input"
                name="tariff"
                autoComplete="off"
                onChange={(e) => handletariff(e)}
              ></input>
              <div className="errormsg">
                {tariffError ? (
                  <label className="vaildation">This field is required</label>
                ) : (
                  ""
                )}
                {tariffnumber ? (
                  <label className="vaildation">
                    please enter numeric value
                  </label>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="latitude">
              <label>Latitude</label>
              <input
                type="text"
                className="latitudeinput"
                id="input"
                name="latitude"
                autoComplete="off"
                onChange={(e) => handlelatitude(e)}
              ></input>
              <div className="errormsg">
                {latitudeError ? (
                  <label className="vaildation">This field is required</label>
                ) : (
                  ""
                )}
                {latitudenumber ? (
                  <label className="vaildation">
                    please enter numeric value
                  </label>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="longitude">
              <label>Longitude</label>
              <input
                type="text"
                className="longitudeinput"
                id="input"
                name="longitude"
                autoComplete="off"
                onChange={(e) => handlelongitude(e)}
              ></input>
              <div className="errormsg">
                {longitudeError ? (
                  <label className="vaildation">This field is required</label>
                ) : (
                  ""
                )}
                {longitudenumber ? (
                  <label className="vaildation">
                    please enter numeric value
                  </label>
                ) : (
                  ""
                )}
              </div>
            </div>
            
          </div>
          <div className="submitbutton">
              <button
                type="submit"
                className="submitbtn"
                // onClick={submitClick}

                // onClick={handlesubmit}
              >
                Submit
              </button>
            </div>
        </form>
      </div>
      <div className="togglebtn">
        {/* <button onClick={()=>setShow(true)}>true</button> */}
        <button onClick={() => setShow(!show)} className="btnclick">
          Click Me
        </button>
      </div>
      {show ? (
        <DataTable
          columns={columns}
          data={data1}
          selectableRows
          expandableRows
          expandableRowsComponent={ExpandedComponent}
        />
      ) : null}
      {/* <div>
        <button onClick={setShow(true)}>Hide</button>
        <button type="submit" onClick={setShow(false)}>show</button>
        </div> */}
    </>
  );
};
