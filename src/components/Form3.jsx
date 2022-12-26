import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
//import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import _ from "lodash";
// import { Loadingpage } from "../../components/Loadingpage";
import { enIN } from "date-fns/locale";
import "bootstrap/dist/css/bootstrap.min.css";
import monthsToQuarters from "date-fns/monthsToQuarters";
import "./Form3.css";

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

export default function Form3  ()  {
  const [productTotalList, setProductTotalList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [siteID, setSiteID] = useState(0);
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  // useEffect(() => {
  //   getproductsTotal();
  // }, []);

  const requirementType = [
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

  // const getproductsTotal = async () => {
  //   try {
  //     await axios({
  //       method: "post",
  //       url: `http://localhost:8080/api/v1/renewpower/meterdata/site/details`,
  //     }).then((response) => {
  //       setProductTotalList(response.data["0"]);
  //       const site = response.data["0"].reduce(
  //         (prev, current) =>
  //           prev["site_id"] > current["site_id"] ? prev : current
  //       );
  //       //  console.log("site", site);
  //       setSiteID(site["site_id"]);
  //       //  console.log("site id", siteID);
  //       setLoading(true);
  //     });
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  const [dataFields, setDataFields] = useState([
    {
      // site_id: "",
      date: new Date(),
      quarter: "",
      affectedMW: "",
      state: "",
      site_name: "",
      Connectivity: "",
      requirement_type: "",
      nodal_agency: "",
      new_change: "",
      reference_number: "",
      analyse: "",
      impact: "",
      criticality: "",
      requirement: "",
      action_taken: "",
      key_responsible_person: "",
      present_working_status: "",
      description: "",
      fileName: "",
    },
  ]);

  const handleDate = (dateSelected, index) => {
    const data = [...dataFields];
    data[index]["date"] = dateSelected;
    const result = monthsToQuarters(dateSelected.getMonth());
    console.log(result);
    data[index]["quarter"] = result + "";
    setDataFields(data);
  };
  const handleAffectedMW = (
    e,
    index
  ) => {
    const data = [...dataFields];
    data[index]["affectedMW"] = e.target.value;
    setDataFields(data);
  };
  const handleConnectivitySelect = (connectivity, index) => {
    let data = [...dataFields];
    data[index].Connectivity = connectivity;
    setDataFields(data);
  };
  const handleStateSelect = (state, index) => {
    let data = [...dataFields];
    data[index].state = state;
    setDataFields(data);
  };
  const handleSiteSelect = (site, index) => {
    let data = [...dataFields];
    //console.log(site);
    data[index].site_name = site;
    setDataFields(data);
  };

  const handleRequirementTypeSelect = (
    selectedOption,
    index
  ) => {
    console.log(selectedOption);
    let data = [...dataFields];
    //console.log(site);
    data[index].requirement_type = selectedOption.value;
    setDataFields(data);
    console.log(dataFields);
  };

  const handleNodalAgency = (
    e,
    index
  ) => {
    const data = [...dataFields];
    data[index]["nodal_agency"] = e.target.value;
    setDataFields(data);
  };

  const handleNewChange = (
    e,
    index
  ) => {
    const data = [...dataFields];
    data[index]["new_change"] = e.target.value;
    setDataFields(data);
  };

  const handleReferenceNumber = (
    e,
    index
  ) => {
    const data = [...dataFields];
    data[index]["reference_number"] = e.target.value;
    setDataFields(data);
  };

  const handleAnalyseSelect = (
    selectedOption,
    index
  ) => {
    console.log(selectedOption);
    let data = [...dataFields];
    //console.log(site);
    data[index].analyse = selectedOption.value;
    setDataFields(data);
    console.log(dataFields);
  };

  const handleImpactSelect = (
    selectedOption,
    index
  ) => {
    console.log(selectedOption);
    let data = [...dataFields];
    //console.log(site);
    data[index].impact = selectedOption.value;
    setDataFields(data);
    console.log(dataFields);
  };

  const handleCriticalitySelect = (
    selectedOption,
    index
  ) => {
    console.log(selectedOption);
    let data = [...dataFields];
    //console.log(site);
    data[index].criticality = selectedOption.value;
    setDataFields(data);
    console.log(dataFields);
  };

  const handleRequirementSelect = (
    selectedOption,
    index
  ) => {
    console.log(selectedOption);
    let data = [...dataFields];
    //console.log(site);
    data[index].requirement = selectedOption.value;
    setDataFields(data);
    console.log(dataFields);
  };
  const handleActionTakenSelect = (
    selectedOption,
    index
  ) => {
    console.log(selectedOption);
    let data = [...dataFields];
    //console.log(site);
    data[index].action_taken = selectedOption.value;
    setDataFields(data);
    console.log(dataFields);
  };

  const handleKeyResposiblePersonChange = (
    e,
    index
  ) => {
    const data = [...dataFields];
    data[index]["key_responsible_person"] = e.target.value;
    setDataFields(data);
  };

  const handlePresentWorkingStatusChange = (
    e,
    index
  ) => {
    const data = [...dataFields];
    data[index]["present_working_status"] = e.target.value;
    setDataFields(data);
  };

  const handleDescriptionChange = (
    e,
    index
  ) => {
    const data = [...dataFields];
    data[index]["description"] = e.target.value;
    setDataFields(data);
  };

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    // const formData = new FormData();
    // formData.append("file", file);
    // formData.append("fileName", fileName);
    // try {
    //   const res = await axios.post(
    //     "http://localhost:8080/api/v1/renewpower/meterdata/regulatory/upload",
    //     formData
    //   );
    //   console.log(res);
    // } catch (ex) {
    //   console.log(ex);
    // }
  };

 
    return (
      <>
       <div className="sitemasterheading">
        <h2 className="SiteMasterForm">RegulatoryRegister Form</h2>
      </div>
        <div>
          {/* <h2 className="h4 text-center mt-3">Adding a New Regulatory Issue</h2> */}
          <div className="container mt-3">
            <div className="row p-3 col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xxl-12">
              <div className="text-center col-md-3 col-lg-3 col-xxl-3 col-sm-12 col-xs-12">
                <label className="form-label">Date</label>
                <DatePicker
                  id="regulatory_datepicker_1"
                  selected={dataFields["0"]["date"]}
                  dateFormat="yyyy-MM-dd"
                  locale={enIN}
                  onChange={(date) => handleDate(date, 0)}
                  selectsStart
                  maxDate={new Date()}
                />
              </div>
              <div className="text-center col-md-3 col-lg-3 col-xxl-3 col-sm-12 col-xs-12">
                <label className="form-label">Quarter</label>
                <input
                  className="form-control text-center"
                  type="input"
                  name="quarter"
                  value={dataFields["0"]["quarter"]}
                  disabled
                  // onChange={(e) => {
                  //   handleTime_block(e, index);
                  // }}
                />
              </div>
              <div className="text-center col-md-3 col-lg-3 col-xxl-3 col-sm-12 col-xs-12">
                <label className="form-label">Affected MW</label>
                <input
                  className="form-control text-center"
                  placeholder=" enter the affected MW"
                  type="input"
                  name="affectedMW"
                  value={dataFields["0"]["affectedMW"]}
                  onChange={(e) => {
                    handleAffectedMW(e, 0);
                  }}
                />
              </div>
              <div className="text-center col-md-3 col-lg-3 col-xxl-3 col-sm-12 col-xs-12">
                <label className="form-label">Connectivity Type</label>
                <Select
                  getOptionLabel={(option) => option["Connectivity"]}
                  getOptionValue={(option) => option["Connectivity"]}
                  onChange={(option) => {
                    handleConnectivitySelect(option.Connectivity, 0);
                  }}
                  options={_.uniqBy(productTotalList, "Connectivity")}
                />
              </div>
            </div>
            <div className="row p-3 col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xxl-12">
              <div className="text-center col-md-3 col-lg-3 col-xxl-3 col-sm-12 col-xs-12">
                <label className="form-label">State</label>
                <Select
                  getOptionLabel={(option) => option["state"]}
                  getOptionValue={(option) => option["state"]}
                  onChange={(option) => {
                    handleStateSelect(option.state, 0);
                  }}
                 // options={_.uniqBy(productTotalList, "state")}
                 options={state}
                />
              </div>
              <div className="text-center col-md-3 col-lg-3 col-xxl-3 col-sm-12 col-xs-12">
                <label className="form-label">Site Name</label>
                <Select
                  getOptionLabel={(option) => option["site_name"]}
                  getOptionValue={(option) => option["site_name"]}
                  onChange={(option) => {
                    handleSiteSelect(option.site_id, 0);
                  }}
                  options={productTotalList.filter(
                    (item) => item["state"] === dataFields["0"].state
                  )}
                />
              </div>
              <div className="text-center col-md-3 col-lg-3 col-xxl-3 col-sm-12 col-xs-12">
                <label className="form-label">Requirement Type</label>
                <Select
                  onChange={(option) => {
                    handleRequirementTypeSelect(option, 0);
                  }}
                  options={requirementType}
                />
              </div>
              <div className="text-center col-md-3 col-lg-3 col-xxl-3 col-sm-12 col-xs-12">
                <label className="form-label">Nodal Agency</label>
                <input
                  className="form-control"
                  placeholder=" enter the nodal agency"
                  type="input"
                  name="nodal_agency"
                  value={dataFields["0"]["nodal_agency"]}
                  onChange={(e) => {
                    handleNodalAgency(e, 0);
                  }}
                />
              </div>
            </div>
            <div className="row p-3 col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xxl-12">
              <div className="text-center col-md-3 col-lg-3 col-xxl-3 col-sm-12 col-xs-12">
                <label className="form-label ">New Change</label>
                <input
                  className="form-control text-center"
                  placeholder=" enter the new change"
                  type="input"
                  name="new_change"
                  value={dataFields["0"]["new_change"]}
                  onChange={(e) => {
                    handleNewChange(e, 0);
                  }}
                />
              </div>
              <div className="text-center col-md-3 col-lg-3 col-xxl-3 col-sm-12 col-xs-12">
                <label className="form-label">Reference Number</label>
                <input
                  className="form-control text-center"
                  placeholder=" enter the reference number"
                  type="input"
                  name="nodal_agency"
                  value={dataFields["0"]["reference_number"]}
                  onChange={(e) => {
                    handleReferenceNumber(e, 0);
                  }}
                />
              </div>
              <div className="text-center col-md-3 col-lg-3 col-xxl-3 col-sm-12 col-xs-12">
                <label className="form-label">Analyse</label>
                <Select
                  onChange={(option) => {
                    handleAnalyseSelect(option, 0);
                  }}
                  options={analyse}
                />
              </div>
              <div className="text-center col-md-3 col-lg-3 col-xxl-3 col-sm-12 col-xs-12">
                <label className="form-label">Impact</label>
                <Select
                  onChange={(option) => {
                    handleImpactSelect(option, 0);
                  }}
                  options={impact}
                />
              </div>
            </div>
            <div className="row p-3 col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xxl-12">
              <div className="text-center col-md-3 col-lg-3 col-xxl-3 col-sm-12 col-xs-12">
                <label className="form-label">Criticality</label>
                <Select
                  onChange={(option) => {
                    handleCriticalitySelect(option, 0);
                  }}
                  options={criticality}
                />
              </div>
              <div className="text-center col-md-3 col-lg-3 col-xxl-3 col-sm-12 col-xs-12">
                <label className="form-label">Requirement</label>
                <Select
                  onChange={(option) => {
                    handleRequirementSelect(option, 0);
                  }}
                  options={requirment}
                />
              </div>
              <div className="text-center col-md-3 col-lg-3 col-xxl-3 col-sm-12 col-xs-12">
                <label className="form-label">Action Taken</label>
                <Select
                  onChange={(option) => {
                    handleActionTakenSelect(option, 0);
                  }}
                  options={actiontaken}
                />
              </div>
              <div className="text-center col-md-3 col-lg-3 col-xxl-3 col-sm-12 col-xs-12">
                <label className="form-label">Key Responsible Person</label>
                <input
                  className="form-control text-center"
                  placeholder=" enter the key responsible person"
                  type="input"
                  name="key_responsible_person"
                  value={dataFields["0"]["key_responsible_person"]}
                  onChange={(e) => {
                    handleKeyResposiblePersonChange(e, 0);
                  }}
                />
              </div>
            </div>
            <div className="row p-3 col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xxl-12">
              <div className="text-center col-md-3 col-lg-3 col-xxl-3 col-sm-12 col-xs-12">
                <label className="form-label">Present Working Status</label>
                <input
                  className="form-control"
                  placeholder=" enter the present working status"
                  type="input"
                  name="present_working_status"
                  value={dataFields["0"]["present_working_status"]}
                  onChange={(e) => {
                    handlePresentWorkingStatusChange(e, 0);
                  }}
                />
              </div>
              <div className="text-center col-md-3 col-lg-3 col-xxl-3 col-sm-12 col-xs-12">
                <label className="form-label">Description</label>
                <input
                  className="form-control"
                  placeholder=" enter description"
                  type="input"
                  name="description"
                  value={dataFields["0"]["description"]}
                  onChange={(e) => {
                    handleDescriptionChange(e, 0);
                  }}
                />
              </div>
              <div className="text-center col-md-3 col-lg-3 col-xxl-3 col-sm-12 col-xs-12">
                <label className="form-label">Upload</label>
                <input type="file" name="file" onClick={saveFile}></input>
              </div>
              <div className="text-center align-self-center col-md-3 col-lg-3 col-xxl-3 col-sm-12 col-xs-12">
                <input
                  className="btn btn-outline-secondary"
                  type="button"
                  value="submit"
                   id="regulatory_submit_button"
                  onClick={(e) => {
                    e.preventDefault();
                    uploadFile(e);
                  }}
                />
              </div>
            </div>
          </div>
          {/* <button className="form_button" onClick={addFields}>
              Add More..
            </button> */}
          {/* <button className="form_button" onClick={submit}>
            Submit
          </button> */}
        </div>
      </>
    );
  }

