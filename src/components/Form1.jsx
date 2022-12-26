import React, { useState } from "react";
import Select from "react-select";
import "./Form.css";

const options = [
  { value: "rinki", label: "rinki" },
  { value: "abc", label: "abc" },
  { value: "xyz", label: "xyz" },
];
const options1 = [
  { value: "hodal", label: "hodal" ,state:"rinki" },
  { value: "palwal", label: "palwal" ,state:"abc"},
  { value: "fbd", label: "fbd",state:"abc" },
  { value: "gurgaon", label: "gurgaon" ,state:"xyz"},
  { value: "delhi", label: "delhi" ,state:"xyz"},
];

export default function Form1() {
  
  const [input, setInput] = useState([
    { date: "", state: "", sitename: "", dms: "", dmsloss: "", revenue: "" },
  ]);
   const [date, setDate] = useState();
  // const [dms, setDms] = useState("");
  // const [state, setState] = useState("");
  // const [sitename, setSitename] = useState("");
  // const [dmsloss, setDmsloss] = useState("");
  // const [revenue, setRevnue] = useState("");
   const [error, setError] = useState(false);
  // const [number, setNumbererror] = useState(false);
     const handleDate = (e, index) => {
     const list = [...input];
      list[index]["date"] = e.target.value;
      console.log(list[index]["date"]);
      setInput(list);
     console.log("input", input);
   
     
  };

  const handleSitename = (e, index) => {
    const list = [...input];
    console.log("index", index);
    console.log("selectedoption", e);
    console.log(list);
    console.log(list[index]);
    list[index]["sitename"] = e.value;
    setInput(list);
    console.log("input", input);
    
  };
  const handleStatename = (e, index) => {
    const list = [...input];
    console.log("index", index);
    console.log("selectedoption", e);
    console.log(list);
    console.log(list[index]);
    list[index]["state"] = e.value;
    setInput(list);
    console.log("input", input);
  };
  const handleDms = (e, index) => {
    const list = [...input];
    list[index]["dms"] = e.target.value;
    console.log(list[index]["dms"]);
    setInput(list);
    console.log("input", input);
  };
  const handleDmsloss = (e, index) => {
    const list = [...input];
    list[index]["dmsloss"] = e.target.value;
    console.log(list[index]["dmsloss"]);
    setInput(list);
    console.log("input", input);
  };
  const handleRevenue = (e, index) => {
    const list = [...input];
    list[index]["revenue"] = e.target.value;
    console.log(list[index]["revenue"]);
    setInput(list);
    console.log("input", input);
  };

  function addinputField() {
    setInput([
      ...input,
      { date: "", state: "", sitename: "", dms: "", dmsloss: "", revenue: "" },
    ]);
  }
  function removeinputField(e, index) {
    const list = [...input];
    list.splice(index, 1);
    setInput(list);
  }
  function submitdata(e){
    e.preventDefault();
    console.log(input);
   }


  return (
    <>
   <div className="sitemasterheading">
        <h2 className="SiteMasterForm">Meter Data Form</h2>
      </div>
    <div className="dynamiclabel">
          <label className="d1">Date</label>
          <label className="st">State</label>
          <label className="sn">Sitename</label>
          <label className="dm">Dsm</label>
          <label className="dl">Dsm Loss %</label>
          <label className="r1">Revenue</label>
          </div>
      <form onSubmit={submitdata}>
        {input.map((x, i) => {
          return (
           <div className="form-inline" key={i}>
              <div className="date">
                <input
                id="formdate1"
                  type="date"
                  name="date"
                  className="inputdate"
                  autoComplete="off"
                  onChange={(e) => handleDate(e, i)}
                />
              </div>

              <div className="div2">
              <Select
               
                  id="select_1"
                  options={options}
                  name="state"
                  // className="select"
                  autoComplete="off"
                  onChange={(e) => handleStatename(e, i)}
                />
               
              </div>

             
              <div className="div3">
              
                <Select
                  id="select_2"
                  options={options1.filter((item)=>item.state===input[i].state)}
                  name="sitename"
                  // className="select"
                  autoComplete="off"
                  onChange={(e) => handleSitename(e, i)}
                ></Select>
              
              </div>
              <div className="div4">
                
                <input
                 id="formdate1"
                  type="text"
                  className="dms"
                  name="dms"
                  autoComplete="off"
                  placeholder="enter the dsm"
                  onChange={(e) => handleDms(e, i)}
                ></input>
                {error?<p>This field is require</p> :null}
                
              </div>

              <div className="div5">
                
                <input
                 id="formdate1"
                  type="text"
                  name="dmsloss"
                  className="dms"
                  autoComplete="off"
                  placeholder="enter the dsm loss"
                  onChange={(e) => handleDmsloss(e, i)}
                ></input>
              
              </div>
              <div className="div6">

               <input
                id="formdate1"
                  type="text"
                  className="dsm"
                  name="revenue"
                  autoComplete="off"
                  placeholder="enter the revenue"
                  onChange={(e) => handleRevenue(e, i)}
                ></input>
              
              </div>

              <div className="div7">
                {input.length !== 1 && (
                  <button
                    className="buttonremove"
                    type="button"
                    onClick={() => removeinputField(i)}
                  >
                    Remove
                  </button>
                )}
              </div>
              <div className="div8">
                {input.length - 1 === i && (
                  <button
                    className="buttonadd"
                    type="button"
                    onClick={() => addinputField()}
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          );
        })}
        <div className="button">
          <button
            className="buttonsubmit"
            type="submit"
            value="submit"
           
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

