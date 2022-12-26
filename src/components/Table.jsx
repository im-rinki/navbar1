import React from 'react'
import DataTable from "react-data-table-component";
const ExpandedComponent = ({ data1 }) => (
    <pre>{JSON.stringify(data1, null, 2)}</pre>
  );

const columns = [
    
    {
      name: "Project Name",
      selector: (row) => row.ProjectName,
     
    },
    {
      name: "Capacity Mw",
      selector: (row) => row.CapacityMw,
    },
    {
      name: "Plant Type",
      selector: (row) => row.PlantType,
    },
    {
      name: "DSM in INR",
      selector: (row) => row.DSMinINR,
    },
    {
      name: "DSM loss %",
      selector: (row) => row.DSMloss,
    },
];

const maptabledata = [
    {
       
ProjectName  : "Mehbubnagar-2",
CapacityMw   : "100.00",
PlantType: "Solar",
DSMinINR: "c39756296.25000000",
DSMloss : "27.522133010556 %",
    
    },
    {
       
        ProjectName  : "Mehbubnagar-2",
        CapacityMw   : "100.00",
        PlantType: "Solar",
        DSMinINR: "c39756296.25000000",
        DSMloss : "27.522133010556 %",
            
            },
            {
       
                ProjectName  : "Mehbubnagar-2",
                CapacityMw   : "100.00",
                PlantType: "Solar",
                DSMinINR: "c39756296.25000000",
                DSMloss : "27.522133010556 %",
                    
                    },
                    {
       
                        ProjectName  : "Mehbubnagar-2",
                        CapacityMw   : "100.00",
                        PlantType: "Solar",
                        DSMinINR: "c39756296.25000000",
                        DSMloss : "27.522133010556 %",
                            
                            },
                            {
       
                              ProjectName  : "Mehbubnagar-2",
                              CapacityMw   : "100.00",
                              PlantType: "Solar",
                              DSMinINR: "c39756296.25000000",
                              DSMloss : "27.522133010556 %",
                                  
                                  },
                                  {
       
                                    ProjectName  : "Mehbubnagar-2",
                                    CapacityMw   : "100.00",
                                    PlantType: "Solar",
                                    DSMinINR: "c39756296.25000000",
                                    DSMloss : "27.522133010556 %",
                                        
                                        },
                                        {
       
                                          ProjectName  : "Mehbubnagar-2",
                                          CapacityMw   : "100.00",
                                          PlantType: "Solar",
                                          DSMinINR: "c39756296.25000000",
                                          DSMloss : "27.522133010556 %",
                                              
                                              },
                                              {
       
                                                ProjectName  : "Mehbubnagar-2",
                                                CapacityMw   : "100.00",
                                                PlantType: "Solar",
                                                DSMinINR: "c39756296.25000000",
                                                DSMloss : "27.522133010556 %",
                                                    
                                                    },
                                                    {
       
                                                      ProjectName  : "Mehbubnagar-2",
                                                      CapacityMw   : "100.00",
                                                      PlantType: "Solar",
                                                      DSMinINR: "c39756296.25000000",
                                                      DSMloss : "27.522133010556 %",
                                                          
                                                          },
                                                          {
       
                                                            ProjectName  : "Mehbubnagar-2",
                                                            CapacityMw   : "100.00",
                                                            PlantType: "Solar",
                                                            DSMinINR: "c39756296.25000000",
                                                            DSMloss : "27.522133010556 %",
                                                                
                                                                },
                                                    {
       
                                                      ProjectName  : "Mehbubnagar-2",
                                                      CapacityMw   : "100.00",
                                                      PlantType: "Solar",
                                                      DSMinINR: "c39756296.25000000",
                                                      DSMloss : "27.522133010556 %",
                                                          
                                                          },
                            {
       
                                ProjectName  : "Mehbubnagar-2",
                                CapacityMw   : "100.00",
                                PlantType: "Solar",
                                DSMinINR: "c39756296.25000000",
                                DSMloss : "27.522133010556 %",
                                    
                                    }]
export default function Table() {
  return (
    <>
    <div className="headingtable">
    {/* <span>Top 10 DSM loss making sites for the current month</span> */}
    </div>
    <div className='formtable'>
    <DataTable
    title= "Top 10 DSM loss making sites for the current month"
          columns={columns}
           data={maptabledata}
           highlightOnHover
		       pointerOnHover
		       pagination
          selectableRows
        //   expandableRows
        //   expandableRowsComponent={ExpandedComponent}
         className='datatb'
        />
    </div>
    <div className='downloadbtn'>
        <button type="button" className='downloadbutton'>Download</button>
    </div>
    </>
  )
}
