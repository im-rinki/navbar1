import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import { format } from "date-fns";
import _ from "lodash";
import enIN from "date-fns/locale/en-IN";
import "./performance.css";
import "bootstrap/dist/css/bootstrap.min.css";

const productTotalList = [
  { state: "RJ", site_name: "RJ1" },
  { state: "MP", site_name: "MP1" },
  { state: "MH", site_name: "Mh1" },
  { state: "GJ", site_name: "GJ1" },
  { state: "KA", site_name: "KA1" },
  { state: "TL", site_name: "TL1" },
  { state: "TS", site_name: "TS1" },
  { state: "GJ-ISTS", site_name: "GJ-ISTS1" },
  { state: "RJ-ISTS", site_name: "RJ-ISTS1" },
  { state: "KA-ISTS", site_name: "KA-ISTS1" },
  { value: "ALL", site_name: "ALL1" },
]

const now = new Date();

export const Performance = () => {
//  const [productTotalList, setProductTotalList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [startDate, setStartDate] = useState(
    new Date(now.getFullYear(), now.getMonth(), 1)
  );
  const [endDate, setEndDate] = useState(new Date());

  // const [stateOptions, setStateOptions] = useState([]);

  // const [stateSelected, setstateSelected] = useState("");
  // const [siteSelected, setsiteSelected] = useState("");
  // const [qcaSelected, setqcaSelected] = useState("");
  // const [connectivityselected, setConnectivityselected] = useState("");
  // const [planttypeSelected, setplanttypeSelected] = useState("");
  // const [gridconnectivitySelected, setgridconnectivitySelected] = useState("");
  // const [dsmcriteriaselected, setDSMCriteriaSelected] = useState("");

  const [inputData, setInputData] = useState([
    {
      start_date: format(startDate, "yyyy-MM-dd"),
      end_date: format(endDate, "yyyy-MM-dd"),
      state_selected: "",
      site_selected: "",
      qca_selected: "",
      connectivity_selected: "",
      planttype_selected: "",
      gridconnectivity_selected: "",
      dsmcriteria_selected: "",
    },
  ]);

  const [filteredData, setFilteredData] = useState([
    {
      start_date: format(startDate, "yyyy-MM-dd"),
      end_date: format(endDate, "yyyy-MM-dd"),
      state_selected: "",
      site_selected: "",
      qca_selected: "",
      connectivity_selected: "",
      planttype_selected: "",
      gridconnectivity_selected: "",
      dsmcriteria_selected: "",
    },
  ]);

  useEffect(() => {
    getproductsTotal();
  }, []);

  const getproductsTotal = async () => {
    try {
        // alert("hello");
        setLoading(true);
    //   await axios({
    //     method: "post",
    //     url: `http://localhost:8080/api/v1/renewpower/performance/sites/details`,
    //   }).then((response) => {
    //     setProductTotalList(response.data["0"]);
    //     setLoading(true);
    //   });
    } catch (error) {
      alert(error);
    }
  };

  const filterData = async (
    e
  ) => {
    e.preventDefault();
    // const data = [...filteredData];
    // //data[0].start_date = format(startDate, "yyyy-MM-dd");
    // //data[0].end_date = format(endDate, "yyyy-MM-dd");
    // data[0].state_selected = inputData[0].state_selected;
    // data[0].site_selected = inputData[0].site_selected;
    // data[0].qca_selected = inputData[0].qca_selected;
    // data[0].connectivity_selected = inputData[0].connectivity_selected;
    // data[0].planttype_selected = inputData[0].planttype_selected;
    // data[0].gridconnectivity_selected = inputData[0].gridconnectivity_selected;
    // data[0].dsmcriteria_selected = inputData[0].dsmcriteria_selected;
    // setFilteredData(data);
  };

  const clearFilter = async (
    e
  ) => {
    e.preventDefault();
    // console.log("1", loading);
    setLoading(false);
    await getproductsTotal();
    const sD = new Date(now.getFullYear(), now.getMonth(), 1);
    const eD = new Date();
    const data = [...filteredData];
    data[0].start_date = format(sD, "yyyy-MM-dd");
    data[0].end_date = format(eD, "yyyy-MM-dd");
    data[0].state_selected = "";
    data[0].site_selected = "";
    data[0].qca_selected = "";
    data[0].connectivity_selected = "";
    data[0].planttype_selected = "";
    data[0].gridconnectivity_selected = "";
    data[0].dsmcriteria_selected = "";
    setInputData(data);
    setFilteredData(data);
    console.log(data);
    // console.log("2", loading);
    // setstateSelected("");
    // console.log("3", stateSelected);
    // setsiteSelected("");
    // console.log("4", siteSelected);
    // setqcaSelected("");
    // console.log("5", qcaSelected);
    // setConnectivityselected("");
    // console.log("6", connectivityselected);
    // setplanttypeSelected("");
    // console.log("7", planttypeSelected);
    // setgridconnectivitySelected("");
    // console.log("8", gridconnectivitySelected);
    // setDSMCriteriaSelected("");
    // console.log("9", dsmcriteriaselected);
    // //  setLoading(true);
    // console.log("10", loading);
  };

  return (
    <>
      {loading && (
        <>
          <h2 className="h4 text-center mt-3 bg-primary text-white p-2">KPI Performance</h2>
          <div className="container mt-3">
          <fieldset>
            <legend>New Data</legend>
            <div className="row p-3 col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xxl-12">
           
              <div className="text-center col-sm-12 col-xs-12 col-md-4 col-lg-4 col-xxl-4">
                <label className="form-label">Start Date</label>
                <DatePicker
                  id="performance_datepicker_1"
                  selected={startDate}
                  dateFormat="yyyy-MM-dd"
                  locale={enIN}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  maxDate={new Date()}
                />
              </div>
              <div className="text-center col-sm-12 col-xs-12 col-md-4 col-lg-4 col-xxl-4">
                <label className="form-label">End Date</label>
                <DatePicker
                  id="performance_datepicker_2"
                  selected={endDate}
                  dateFormat="yyyy-MM-dd"
                  locale={enIN}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                />
              </div>
              <div className="text-center mt-3 align-self-center col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
                <input
                  className="btn btn-outline-secondary mt-2 "
                  type="button"
                  value="new data"
                  id="performance_newdata_button"
                  onClick={(e) => {
                    e.preventDefault();
                    //  filterData(e);
                    let data = [...inputData];
                    //console.log(state);
                    data[0].start_date = format(startDate, "yyyy-MM-dd");
                    data[0].end_date = format(endDate, "yyyy-MM-dd");
                    //data[0].site_selected = "";
                    setInputData(data);
                    setFilteredData(data);
                  }}
                />
              </div>
              
            </div>
            </fieldset>
           
          </div>
          <hr></hr>
          <div className="container mt-2">
            <fieldset>
              <legend> Filter Data</legend> 
            <div className="row p-3 col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xxl-12">
              {/* <div className="text-center col-md-4 col-lg-4 col-xxl-4 col-sm-12 col-xs-12"> */}
              <div className="text-center col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
                <label className="form-label">State</label>
                <Select
                  //defaultValue={_.uniqBy(productTotalList, "state")[0]}
                  isClearable={true}
                  // isSearchable={true}
                  // placeholder="State"
                  getOptionLabel={(option) => option["state"]}
                  getOptionValue={(option) => option["state"]}
                  onChange={(option) => {
                    //setstateSelected(option.state);
                    let data = [...inputData];
                    //console.log(state);
                    data[0].state_selected = option.state;
                    //data[0].site_selected = "";
                    setInputData(data);
                    //inputData[0].state_selected = option.state;
                  }}
                  options={_.uniqBy(productTotalList, "state")}
                />
              </div>
              <div className="text-center col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
                <label className="form-label">Site Name</label>
                <Select
                  //isClearable
                  //isSearchable
                  //  defaultValue={siteSelected}
                  getOptionLabel={(option) => option["site_name"]}
                  getOptionValue={(option) => option["site_name"]}
                  onChange={(option) => {
                    //  setsiteSelected(option.label);
                    let data = [...inputData];
                    //console.log(state);
                    data[0].site_selected = option.label;
                    setInputData(data);
                    //inputData[0].site_selected = option.label;
                  }}
                  options={productTotalList.filter(
                    //(item) => item["state"] === stateSelected
                    (item) => item["state"] === inputData[0].state_selected
                  )}
                />
              </div>
              <div className="text-center col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
                <label className="form-label">QCA</label>
                <Select
                  //isClearable
                  //isSearchable
                  //  defaultValue={stateSelected}
                  getOptionLabel={(option) => option["qca_name"]}
                  getOptionValue={(option) => option["qca_name"]}
                  onChange={(option) => {
                    //  setqcaSelected(option.qca_name);
                    let data = [...inputData];
                    //console.log(state);
                    data[0].qca_selected = option.qca_name;
                    setInputData(data);
                    //inputData[0].qca_selected = option.qca_name
                  }}
                  options={_.uniqBy(productTotalList, "qca_name")}
                />
              </div>
            {/* </div> */}
            {/* <div className="row p-3 col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xxl-12"> */}
              <div className="text-center col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
                <label className="form-label">Connectivity Type</label>
                <Select
                  //isClearable
                  //isSearchable
                  //  defaultValue={stateSelected}
                  getOptionLabel={(option) => option["Connectivity"]}
                  getOptionValue={(option) => option["Connectivity"]}
                  onChange={(option) => {
                    //  setConnectivityselected(option.Connectivity);
                    let data = [...inputData];
                    //console.log(state);
                    data[0].connectivity_selected = option.Connectivity;
                    setInputData(data);
                    //inputData[0].connectivity_selected = option.Connectivity;
                  }}
                  options={_.uniqBy(productTotalList, "Connectivity")}
                />
              </div>
              <div className="text-center col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
                <label className="form-label">Plant Type</label>
                <Select
                  //isClearable
                  //isSearchable
                  //  defaultValue={stateSelected}
                  getOptionLabel={(option) => option["plant_type"]}
                  getOptionValue={(option) => option["plant_type"]}
                  onChange={(option) => {
                    //  setplanttypeSelected(option.plant_type);
                    let data = [...inputData];
                    //console.log(state);
                    data[0].planttype_selected = option.plant_type;
                    setInputData(data);
                    //inputData[0].planttype_selected = option.plant_type;
                  }}
                  options={_.uniqBy(productTotalList, "plant_type")}
                />
              </div>
              <div className="text-center col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
                <label className="form-label">Grid Connectivity</label>
                <Select
                  //isClearable
                  //isSearchable
                  //  defaultValue={stateSelected}
                  getOptionLabel={(option) => option["transmission_unit"]}
                  getOptionValue={(option) => option["transmission_unit"]}
                  onChange={(option) => {
                    //  setgridconnectivitySelected(option.transmission_unit);
                    let data = [...inputData];
                    //console.log(state);
                    data[0].gridconnectivity_selected =
                      option.transmission_unit;
                    setInputData(data);
                    //inputData[0].gridconnectivity_selected = option.transmission_unit;
                  }}
                  options={_.uniqBy(productTotalList, "transmission_unit")}
                />
              </div>
            </div>
            <div className="row p-3 col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xxl-12">
              <div className="text-center col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
                <label className="form-label">DSM Criteria</label>
                <Select
                  //isClearable
                  //isSearchable
                  //  defaultValue={stateSelected}
                  getOptionLabel={(option) => option["DSM_Criteria"]}
                  getOptionValue={(option) => option["DSM_Criteria"]}
                  onChange={(option) => {
                    //  setDSMCriteriaSelected(option.transmission_unit);
                    let data = [...inputData];
                    //console.log(state);
                    data[0].dsmcriteria_selected = option.DSM_Criteria;
                    setInputData(data);
                    // inputData[0].dsmcriteria_selected = option.DSM_Criteria
                  }}
                  options={_.uniqBy(productTotalList, "DSM_Criteria")}
                />
              </div>
              <div className="text-center mt-4 align-self-center col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
                <label></label>
                <input
                  className="btn btn-outline-secondary"
                  type="button"
                  value="filter"
                  id="performance_search_button_1"
                  onClick={(e) => {
                    filterData(e);
                  }}
                />
              </div>
              <div className="text-left mt-4 align-self-center col-md-2 col-lg-2 col-xxl-2 col-sm-12 col-xs-12">
                <label></label>
                <input
                  className="btn btn-outline-secondary"
                  type="button"
                  value="Clear Filter"
                  id="performance_search_button_2"
                  onClick={(e) => {
                    clearFilter(e);
                  }}
                />
              </div>
            </div>
            </fieldset>
          </div>
        </>
      )}
    </>
  );
};
