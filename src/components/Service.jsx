import { useEffect, useState } from 'react';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Doughnut} from 'react-chartjs-2';
import { useRef } from 'react';
import { getElementAtEvent,getDatasetAtEvent,getElementsAtEvent   } from 'react-chartjs-2';
import axios from 'axios';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);

function Service() {
  const chartRef = useRef();
 const [data, setData] = useState({
    datasets: [{
        data: [10],
        backgroundColor:[
          'red',
        ],
         hoverOffset:20
    },
  ],
  labels: [
    'red',
  ], 
  options:{
   events:['click']
  }
});
const fetchData = () => {
axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
    const api=response.data;
    console.log(api);
    const label09 = [];
    const data234 = [];
    const filterdata=api;
    const result=filterdata.filter(item=> item.id>4)
        console.log(result);
    for(var i of result) {
            label09.push(i.name);
            data234.push(i.id)
          }
  setData(
          {
            datasets: [{
                data:data234,
                backgroundColor:[
                  'red',
                  'violet',
                  'blue',
                  'green'
                ]
            },
          ],
            labels:label09, 
        }
        )
    
      }).catch(e => {
        console.log("error", e)
      }) 
    }
    const onClick = (event) => {
      console.log(getElementAtEvent(chartRef.current, event));
      console.log(getDatasetAtEvent(chartRef.current, event));
      console.log(getElementsAtEvent(chartRef.current, event));
    }
   



 



  useEffect(()=> {
    fetchData();
  }, [])

  // useEffect(()=> {
  //   const fetchDataapi = () =>  {
  //     fetch('https://jsonplaceholder.typicode.com/users').then((data) => {
  //       const res = data.json();
  //       return res
  //     }).then((res) => {
  //       console.log("resss", res)
  //       const label = [];
  //       const data = [];
  //       for(var i of res) {
  //           label.push(i.name);
  //           data.push(i.id)
  //       }
  //       setDataapi(
  //         {
  //           datasets: [{
  //               data:data,
  //               backgroundColor:[
  //                 'pink',
  //                 'sky',
  //                 'orange ',
  //                 'yellow'
  //               ]
  //           },
  //         ],
  //         labels:label, 
  //       }
  //       )

  //     }).catch(e => {
  //       console.log("error", e)
  //     }) 
  //   }
  //   fetchDataapi();
  // }, [])
  return (
    <div className="App" style={{width:'30%', height:'30%',marginLeft:'30%'}}>
       <h1 style={{textAlign:"center"}}>Pie Chart</h1><hr></hr>
      <Pie ref={chartRef} data={data} options={{}} onClick={onClick}/>
      <h1 style={{textAlign:"center"}}>Doughnut Chart</h1><hr></hr>
      {/* <Doughnut data={dataapi}/> */}
      {/* <Bar data={} ></Bar> */}

    </div>
  );
  }

export default Service;
