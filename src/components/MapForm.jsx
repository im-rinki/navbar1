import React from "react";
import Select from "react-select";
import "./MapForm.css";
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
const impact = [
  { value: "data exposure", label: "data exposure" },
  { value: "Revenue loss", label: "Revenue loss" },
];

export default function MapForm() {
  return (
    <>
      <div className="MapForm">
        <div className="startdate">
          <label>Start Date</label>
          <input type="date" className="inputmap" name="date"></input>
        </div>
        <div className="enddate">
          <label>End Date</label>
          <input type="date" className="inputmap" name="date"></input>
        </div>
      </div>
      <div className="MapForm1">
        <div className="statemap">
          <label className="statemaplabel">State</label>
          <Select options={state} className="selectmap" name="" />
        </div>
        <div className="sitenamemap">
          <label className="statemaplabel">SiteName</label>
          <Select options={impact} className="selectmap" name="" />
        </div>
      </div>
      <div className="MapFormBtn">
        <button type="submit" className="mapformbutton">
          Submit
        </button>
      </div>
      <div className="mapformtable">
        <table className="table1">
          <tr>
            <th className="th1">Actual Revenue</th>
            <th className="th1">DSM Loss</th>
            <th className="th1">DSM Loss Percentage</th>
          </tr>

          <tr>
            <td className="td1">0.44 Cr.</td>
            <td className="td1">0.00 Cr</td>
            <td className="td1">0.20 %</td>
          </tr>
        </table>
      </div>
    </>
  );
}
