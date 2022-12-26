import React, { useEffect, useState } from "react";
//import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import _ from "lodash";
// import { Loadingpage } from "../../components/Loadingpage";
//import { format } from "date-fns";
// import "./Correction.css";
import { format } from "date-fns";
//import { ReactSelect } from "./ReactSelect";
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
const timeBlocks = [
  { value: 1, label: "00:00 - 00:15" },
  { value: 2, label: "00:15 - 00:30" },
  { value: 3, label: "00:30 - 00:45" },
  { value: 4, label: "00:45 - 01:00" },

  { value: 5, label: "01:00 - 01:15" },
  { value: 6, label: "01:15 - 01:30" },
  { value: 7, label: "01:30 - 01:45" },
  { value: 8, label: "01:45 - 02:00" },

  { value: 9, label: "02:00 - 02:15" },
  { value: 10, label: "02:15 - 02:30" },
  { value: 11, label: "02:30 - 02:45" },
  { value: 12, label: "02:45 - 03:00" },

  { value: 13, label: "03:00 - 03:15" },
  { value: 14, label: "03:15 - 03:30" },
  { value: 15, label: "03:30 - 03:45" },
  { value: 16, label: "03:45 - 04:00" },

  { value: 17, label: "04:00 - 04:15" },
  { value: 18, label: "04:15 - 04:30" },
  { value: 19, label: "04:30 - 04:45" },
  { value: 20, label: "04:45 - 05:00" },

  { value: 21, label: "05:00 - 05:15" },
  { value: 22, label: "05:15 - 05:30" },
  { value: 23, label: "05:30 - 05:45" },
  { value: 24, label: "05:45 - 06:00" },

  { value: 25, label: "06:00 - 06:15" },
  { value: 26, label: "06:15 - 06:30" },
  { value: 27, label: "06:30 - 06:45" },
  { value: 28, label: "06:45 - 07:00" },

  { value: 29, label: "07:00 - 07:15" },
  { value: 30, label: "07:15 - 07:30" },
  { value: 31, label: "07:30 - 07:45" },
  { value: 32, label: "07:45 - 08:00" },

  { value: 33, label: "08:00 - 08:15" },
  { value: 34, label: "08:15 - 08:30" },
  { value: 35, label: "08:30 - 08:45" },
  { value: 36, label: "08:45 - 09:00" },

  { value: 37, label: "09:00 - 09:15" },
  { value: 38, label: "09:15 - 09:30" },
  { value: 39, label: "09:30 - 09:45" },
  { value: 40, label: "09:45 - 10:00" },

  { value: 41, label: "10:00 - 10:15" },
  { value: 42, label: "10:15 - 10:30" },
  { value: 43, label: "10:30 - 10:45" },
  { value: 44, label: "10:45 - 11:00" },

  { value: 45, label: "11:00 - 11:15" },
  { value: 46, label: "11:15 - 11:30" },
  { value: 47, label: "11:30 - 11:45" },
  { value: 48, label: "11:45 - 12:00" },

  { value: 49, label: "12:00 - 12:15" },
  { value: 50, label: "12:15 - 12:30" },
  { value: 51, label: "12:30 - 12:45" },
  { value: 52, label: "12:45 - 13:00" },

  { value: 53, label: "13:00 - 13:15" },
  { value: 54, label: "13:15 - 13:30" },
  { value: 55, label: "13:30 - 13:45" },
  { value: 56, label: "13:45 - 14:00" },

  { value: 57, label: "14:00 - 14:15" },
  { value: 58, label: "14:15 - 14:30" },
  { value: 59, label: "14:30 - 14:45" },
  { value: 60, label: "14:45 - 15:00" },

  { value: 61, label: "15:00 - 15:15" },
  { value: 62, label: "15:15 - 15:30" },
  { value: 63, label: "15:30 - 15:45" },
  { value: 64, label: "15:45 - 16:00" },

  { value: 65, label: "16:00 - 16:15" },
  { value: 66, label: "16:15 - 16:30" },
  { value: 67, label: "16:30 - 16:45" },
  { value: 68, label: "16:45 - 17:00" },

  { value: 69, label: "17:00 - 17:15" },
  { value: 70, label: "17:15 - 17:30" },
  { value: 71, label: "17:30 - 17:45" },
  { value: 72, label: "17:45 - 18:00" },

  { value: 73, label: "18:00 - 18:15" },
  { value: 74, label: "18:15 - 18:30" },
  { value: 75, label: "18:30 - 18:45" },
  { value: 76, label: "18:45 - 19:00" },

  { value: 77, label: "19:00 - 19:15" },
  { value: 78, label: "19:15 - 19:30" },
  { value: 79, label: "19:30 - 19:45" },
  { value: 80, label: "19:45 - 20:00" },

  { value: 81, label: "20:00 - 20:15" },
  { value: 82, label: "20:15 - 20:30" },
  { value: 83, label: "20:30 - 20:45" },
  { value: 84, label: "20:45 - 21:00" },

  { value: 85, label: "21:00 - 21:15" },
  { value: 86, label: "21:15 - 21:30" },
  { value: 87, label: "21:30 - 21:45" },
  { value: 88, label: "21:45 - 22:00" },

  { value: 89, label: "22:00 - 22:15" },
  { value: 90, label: "22:15 - 22:30" },
  { value: 91, label: "22:30 - 22:45" },
  { value: 92, label: "22:45 - 23:00" },

  { value: 93, label: "23:00 - 23:15" },
  { value: 94, label: "23:15 - 23:30" },
  { value: 95, label: "23:30 - 23:45" },
  { value: 96, label: "23:45 - 00:00" },
];

export default function Form6() {
  const [productTotalList, setProductTotalList] = useState([]);
  const [loading, setLoading] = useState(false);
  ///const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
     getproductsTotal();
  }, []);

  const getproductsTotal = async () => {
    try {
    //   await axios({
    //     method: "post",
    //     url: `http://localhost:8080/api/v1/renewpower/performance/sites/details`,
    //   }).then((response) => {
    //     setProductTotalList(
    //       response.data["0"].filter(
    //         (item) => item["plant_type"] === "Solar"
    //       )
    //     );
        setLoading(true);
    //   });
    } 
    catch (error) {
      alert(error);
    }
   };

  const [dataFields, setDataFields] = useState([
    {
      date: "",
      state: "",
      site: 0,
      scada_source: "",
      time_block: "",
      actual_generation: "",
    },
  ]);

  const handleTime_block = (
    // e: React.ChangeEvent<HTMLInputElement>,
    // index: number
    option,
    index
  ) => {
    // let data = [...dataFields];
    // //console.log(e.target.name);
    // data[index]["time_block"] = e.target.value;
    // setDataFields(data);
    //console.log(option);

    let data = [...dataFields];
    //console.log(e.target.name);
    data[index]["time_block"] = option.value;
    setDataFields(data);
    //console.log(dataFields);
  };
  const handleActual_generation = (
    e,
    index
  ) => {
    let data = [...dataFields];
    //console.log(e.target.name);
    data[index]["actual_generation"] = e.target.value;
    setDataFields(data);
  };

  const handleStateSelect = (state, index) => {
    let data = [...dataFields];
    //console.log(state);
    data[index].state = state;
    setDataFields(data);
  };
  const handleSiteSelect = (site, index) => {
    let data = [...dataFields];
    //console.log(site);
    data[index].site = site;
    setDataFields(data);
  };

  const handleScadaSourceSelect = (scadaSource, index) => {
    let data = [...dataFields];
    //console.log(site);
    data[index].scada_source = scadaSource;
    setDataFields(data);
  };

  const handleDate = (
    e,
    index
  ) => {
    let data = [...dataFields];
    //console.log(site);
    data[index]["date"] = e.target.value;
    setDataFields(data);
  };

  const submit = async (e) => {
    e.preventDefault();
    const array = [];
    for (let i = 0; i < dataFields.length; i++) {
      //  if (item["state"] === "") {
      // console.log(dataFields[i]);
      if (
        dataFields[i].state === "" ||
        dataFields[i].site === 0 ||
        dataFields[i].time_block === "" ||
        dataFields[i].actual_generation === "" ||
        isNaN(+dataFields[i].time_block) ||
        isNaN(+dataFields[i].actual_generation) ||
        +dataFields[i].time_block < 0 ||
        +dataFields[i].time_block > 96
      ) {
        alert(`data missing for the row ${i + 1}`);
        break;
      } else if (i === dataFields.length - 1) {
        array.push(dataFields[i]);
        await axios({
          method: "post",
          url: `http://localhost:8080/api/v1/renewpower/meterdata/sites/coorecteddata`,
          data: array,
        }).then((response) => {
          //  console.log(" post response ", response);
          alert("data submitted successfully");
        });
        //console.log(" array ", array);
      } else {
        //console.log(dataFields);
        array.push(dataFields[i]);

        //console.log(format(dataFields[i].birthDate, "yyyy-MM-dd"));
      }
    }
  };

  const addFields = () => {
    let object = {
      //date: new Date(),
      date: "",
      state: "",
      site: 0,
      scada_source: "",
      time_block: "",
      actual_generation: "",
    };

    setDataFields([...dataFields, object]);
  };

  const removeFields = (index) => {
    let data = [...dataFields];
    data.splice(index, 1);
    setDataFields(data);
  };

  if (!loading) {
    // return <Loadingpage />;
    //return <ReactSelect />;
  } else {
    return (
      <>
        {/* <div> */}
        {/* <DatePicker
            selected={startDate}
            //selected={new Date()}
            onChange={(selected_date: Date) => {
              console.log(selected_date);
              setStartDate(selected_date);
              handleStartDate(selected_date, 0);
              //handleStartDate(selected_date, index);
              // console.log(startDate);
            }}
          /> */}
        {/* <h2 id="Correction_heading">Correction/Missing Meter Data</h2>
          <form onSubmit={submit}>
            {dataFields.map((data, index) => {
              return (
                <div key={index} className="Correction_form">
                  <div className="Correction_form_div_1">
                    <label >Date</label> */}
        {/* <DatePicker
                      selected={dataFields[index].date}
                      //selected={new Date()}
                      onChange={(selected_date: Date) => {
                        console.log(selected_date);sss
                        handleStartDate(selected_date, index);
                        // console.log(startDate);
                      }}
                    /> */}
        {/* <input
                      type="date"
                      name="date"
                      value={data.date}
                      max={format(new Date(), "yyyy-MM-dd")}
                      className={`input_dsmloss_${index}`}
                      onChange={(e) => handleDate(e, index)}
                    />
                  </div>
                  <div className="Correction_form_div_2">
                    <label>State</label>
                    <Select
                      className="Correction_form_select_1"
                      getOptionLabel={(option) => option["state"]}
                      getOptionValue={(option) => option["state"]}
                      onChange={(option: any) => {
                        handleStateSelect(option.state, index);
                      }}
                      options={_.uniqBy(productTotalList, "state")}
                    />
                  </div>
                  <div className="Correction_form_div_3">
                    <label>Site Name</label>
                    <Select
                      className="Correction_form_select_2"
                      getOptionLabel={(option) => option["site_name"]}
                      getOptionValue={(option) => option["site_name"]}
                      onChange={(option: any) => {
                        handleSiteSelect(option.site_id, index);
                        handleScadaSourceSelect(option.scada_source, index);
                      }}
                      options={productTotalList.filter(
                        (item) => item["state"] === dataFields[index].state
                      )}
                    />
                  </div>
                  <div className="Correction_form_div_4">
                    <label>Time Block</label>
                    <input
                      placeholder="enter the time block"
                      type="input"
                      name="time_block"
                      value={data.time_block}
                      className={`input_time_block_${index}`}
                      onChange={(e) => {
                        handleTime_block(e, index);
                      }}
                    />
                  </div>
                  <div className="Correction_form_div_5">
                    <label>Actual Generation</label>
                    <input
                      placeholder="enter the new value"
                      type="input"
                      name="actual_generation"
                      value={data.actual_generation}
                      className={`input_actual_generation_${index}`}
                      onChange={(e) => {
                        handleActual_generation(e, index);
                      }}
                    />
                  </div>

                  <button
                    className="Correction_form_div_6"
                    onClick={() => removeFields(index)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </form> */}
        {/* <div className="Correction_form_class">
            <button className="Correction_form_button" onClick={addFields}>
              Add More..
            </button>
            <button className="Correction_form_button" onClick={submit}>
              Submit
            </button>
          </div>
        </div> */}

        <div>
            
          <h2 className="h4 text-center mt-3 h-10 text-white">Correction/Missing Meter Data</h2>
          
          <div className="container-xl mt-2">
            {dataFields.map((data, index) => {
              return (
                <div
                  key={index}
                  className="row col-sm-12 mt-2 col-xs-12 col-md-12 col-lg-12 col-xxl-12"
                >
                  <div className="text-center mt-2 form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
                    <label className="form-label">Date</label>
                    <input
                      className="form-control"
                      type="date"
                      name="date"
                      value={data.date}
                      max={format(new Date(), "yyyy-MM-dd")}
                      onChange={(e) => handleDate(e, index)}
                    />
                  </div>
                  <div className="text-center mt-2 form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
                    <label className="form-label">State</label>
                    <Select
                      getOptionLabel={(option) => option["state"]}
                      getOptionValue={(option) => option["state"]}
                      onChange={(option) => {
                        handleStateSelect(option.state, index);
                      }}
                    //    options={_.uniqBy(productTotalList, "state")}
                       options={state}
                    />
                  </div>
                  <div className="text-center mt-2 form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
                    <label className="form-label">Site Name</label>
                    <Select
                      getOptionLabel={(option) => option["site_name"]}
                      getOptionValue={(option) => option["site_name"]}
                      onChange={(option) => {
                        handleSiteSelect(option.site_id, index);
                        handleScadaSourceSelect(option.scada_source, index);
                      }}
                      options={productTotalList.filter(
                        (item) => item["state"] === dataFields[index].state
                      )}
                    />
                  </div>
                  <div className="text-center mt-2 form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
                    <label className="form-label">Time Block</label>
                    {/* <input
                      placeholder="enter the time block"
                      type="input"
                      name="time_block"
                      value={data.time_block}
                      onChange={(e) => {
                      handleTime_block(e, index);
                      }}
                    /> */}
                    <Select
                      isSearchable={true}
                      placeholder={"Select"}
                      onChange={(option) => {
                        handleTime_block(option, index);
                      }}
                      // options={productTotalList.filter(
                      //   (item) => item["state"] === dataFields[index].state
                      // )}
                      options={timeBlocks}
                    />
                  </div>
                  <div className="text-center mt-2 form-group col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
                    <label className="form-label">Actual Generation</label>
                    <input
                      placeholder="enter the new value"
                      className="form-control"
                      type="input"
                      name="actual_generation"
                      value={data.actual_generation}
                      onChange={(e) => {
                        handleActual_generation(e, index);
                      }}
                    />
                  </div>
                  <div className="text-center mt-3 col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
                    <div>&nbsp;</div>
                    <input
                      className="btn bg-danger color-dark text-white"
                      style={{ width: "150px", float: "right" }}
                      type="button"
                      value="Remove"
                      onClick={() => removeFields(index)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="container-xl mt-2">
            <div
              className="row col-sm-12 mt-2 col-xs-12 col-md-4 col-lg-4 col-xxl-4"
              style={{ float: "right" }}
            >
              <div className="text-center mt-2 col-md-6 col-lg-6 col-xxl-6 col-sm-12 col-xs-12">
                <div>&nbsp;</div>
                <input
                  className="btn  bg-primary text-white"
                  style={{ width: "100px", float: "right" }}
                  type="button"
                  value="Add More.."
                  onClick={addFields}
                />
              </div>
              <div className="text-center mt-2 col-md-6 col-lg-6 col-xxl-6 col-sm-12 col-xs-12">
                <div>&nbsp;</div>
                <input
                  className="btn bg-success text-white"
                  style={{ width: "100px", float: "left" }}
                  type="button"
                  value="Submit"
                  onClick={submit}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

