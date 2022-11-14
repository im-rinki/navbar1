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

//  function savedata(e,index) {
       
  //       if (
  //          date.length==0||
  //          state.length == 0 ||
  //          sitename.length==0||
  //          dms.length == 0 ||
  //          dmsloss.length == 0 ||
  //          revenue.length == 0
  //         //  startDate.length == 0
  //        ) {
  //         // alert("require");
  //          setError(true);
  //        }
  //  {
  //   setError(false)
  //  }
 
    //  e.preventDefault();
    //  console.log(" formdata ", input);
 //   console.log(date,input,  dms, dmsloss, revenue);
  //  }
  return (
    <>
      {/* <div className="headingbg">
        <div className="heading">
          <h2>Form</h2>
        </div>
      </div> */}
      <table>
        <thead>
          <tr>
          <th><label className="d1">Date</label></th>
          <th><label className="st">State</label></th>
          <th><label className="sn">Sitename</label></th>
          <th><label className="dm">Dms</label></th>
          <th><label className="dl">Dms Loss %</label></th>
          <th><label className="r1">Revenue</label></th>
          </tr>
          </thead>
      </table>
      <form>
        {input.map((x, i) => {
          return (
            <div className="form-inline" key={i}>
              <div className="date">
                {/* <label>Date</label> */}
                <input
                  type="date"
                  name="date"
                  className="inputdate"
                  onChange={(e) => handleDate(e, i)}
                />
                {/* {errors.date && touched.date ? (
                  <p className="errormsg">{errors.date}</p>
                ) : null} */}
                {/* <div className="errormsg">
                  {error ? 
                    <label className="vaildation">This field is require</label>
                   : 
                    ""
                  }
                </div> */}
                {error?<p>This field is require</p> :null}
              </div>

              <div className="div2">
                {/* <label>State</label> */}
                <Select
                  //isMulti
                  
                  options={options}
                  name="state"
                  className="select"
                  onChange={(e) => handleStatename(e, i)}
                />
                {error?<p>This field is require</p> :null}
                 {/* <div className="errormsg">
                {error && state.length <= 0 ? (
                  <label className="vaildation">This field is require</label>
                ) : (
                  ""
                )}
              </div> */}
              </div>

             
              <div className="div3">
                {/* <label>Sitename</label> */}
                <Select
                  options={options1.filter((item)=>item.state===input[i].state)}
                  name="sitename"
                  className="select"
                  onChange={(e) => handleSitename(e, i)}
                ></Select>
                {error?<p>This field is require</p> :null}
                {/* {errors.sitename && touched.sitename ? (
                  <p className="errormsg">{errors.sitename}</p>
                ) : null} */}
                {/* <div className="errormsg">
                  {error && sitename.length <= 0 ? (
                    <label className="vaildation">This field is require</label>
                  ) : (
                    ""
                  )}
                </div> */}
              </div>
              <div className="div4">
                {/* <label>DMS</label> */}
                <input
                  type="text"
                  className="dms"
                  name="dms"
                  placeholder="enter the dms"
                  onChange={(e) => handleDms(e, i)}
                ></input>
                {error?<p>This field is require</p> :null}
                {/* {errors.dms && touched.dms ? (
                  <p className="errormsg">{errors.dms}</p>
                ) : null} */}
                {/* <div className="errormsg">
                  {error && dms.length <= 0 ? (
                    <label className="vaildation">This field is require</label>
                  ) : (
                    ""
                  )}
                  <div className="errormsg">
                    {number && dms.length <= 0 ? (
                      <label className="vaildation">number require</label>
                    ) : (
                      ""
                    )}
                  </div>
                </div> */}
              </div>

              <div className="div5">
                {/* <label>DMS Loss %</label> */}
                <input
                  type="text"
                  name="dmsloss"
                  className="dms"
                  placeholder="enter the dms loss"
                  onChange={(e) => handleDmsloss(e, i)}
                ></input>
                {error?<p>This field is require</p> :null}
                {/* {errors.dmsloss && touched.dmsloss ? (
                  <p className="errormsg">{errors.dmsloss}</p>
                ) : null} */}
                {/* <div className="errormsg">
                  {error && dmsloss.length <= 0 ? (
                    <label className="vaildation">This field is require</label>
                  ) : (
                    ""
                  )}
                </div> */}
              </div>
              <div className="div6">
                {/* <label>Revenue</label> */}
                <input
                  type="text"
                  className="dms"
                  name="revenue"
                  placeholder="enter the revenue"
                  onChange={(e) => handleRevenue(e, i)}
                ></input>
                {error?<p>This field is require</p> :null}
                {/* {errors.revenue && touched.revenue ? (
                  <p className="errormsg">{errors.revenue}</p>
                ) : null} */}
                {/* <div className="errormsg">
                  {error && revenue.length <= 0 ? (
                    <label className="vaildation">This field is require</label>
                  ) : (
                    ""
                  )}
                </div> */}
              </div>

              <div className="div7">
                {input.length !== 1 && (
                  <button
                    className="buttonremove"
                    type="button"
                    onClick={() => removeinputField(i)}
                  >
                    -
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
                    +
                  </button>
                )}
              </div>
            </div>
          );
        })}
        <div className="button">
          <button
            className="button submit"
            type="submit"
            value="submit"
            //  onClick={savedata}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

