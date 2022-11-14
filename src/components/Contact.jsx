// // import logo from '../logo.svg';
// import '../App.css';
// import { Link } from 'react-router-dom';
// import { useFormik } from 'formik';
// import {ResponsiveContainer,LineChart,Line,XAxis, 
//        YAxis, CartesianGrid, Legend,
//        Tooltip,AreaChart,Area} from 'recharts';
// import { useEffect, useState } from 'react';
// import { array } from 'yup';
// const mydata=[
//   {
//     name:'python',
//     student:70,
//     fees:20
//   },
//   {
//     name:'javascript',
//     student:20,
//     fees:40
//   },
//   {
//     name:'Reactjs',
//     student:10,
//     fees:10
//   },
//   {
//     name:'Html',
//     student:50,
//     fees:20
//   },
// ]
// // chart-js
// // react-chartjs-2
// // project structure
// // parent-child
// // pigeon

// // array --> manipulating 
// // pigeon-maps --> 0.21.0 --> image
// // chart.js --> 3.8.0
// // react-chartjs-2 --> 4.2.0


// function Contact() {
//   const[api,setApi]=useState();
//   useEffect(()=>{
//     const arr=[];
//     fetch('https://jsonplaceholder.typicode.com/todos')
//      .then(response => response.json())
//      .then(json => console.log("json",json))
//      json.map((item,index)=>
//     {
//       arr.push(item.id)
//     })
//     console.log("arr",arr)
//   })
//    return (
//   <>
//     <h1 className="linechart">Line Chart</h1>
//     <ResponsiveContainer width="100%" aspect={3}>
//       <LineChart data={mydata} width={500} height={300} margin={{right:300,top:5,left:30}}>
//         <CartesianGrid />
//         <Legend />
//         <Tooltip contentStyle={{backgroundColor:'yellow'}}/>
//         <XAxis dataKey="name" interval={'preserveStartEnd'}></XAxis>
//         < YAxis />
//         <Line dataKey="arr" stroke="red" activeDot={{r:6}}></Line>
//         {/* <Line dataKey="fees" activeDot={{r:6}}></Line> */}
//       </LineChart>
//     </ResponsiveContainer>

//     <h1 className="areachart">Area Chart</h1>
//     <ResponsiveContainer width="100%" aspect={3}>
//       <AreaChart data={mydata} width={500} height={300} margin={{right:300,top:5,left:30}}>
//         <CartesianGrid />
//         <Legend />
//         <Tooltip contentStyle={{backgroundColor:'yellow'}}/>
//         <XAxis dataKey="name" interval={'preserveStartEnd'}></XAxis>
//         < YAxis />
//         <Area dataKey="student" stroke="red" activeDot={{r:6}}></Area>
//         {/* <Area dataKey="fees" activeDot={{r:6}}></Area> */}
//       </AreaChart>
//     </ResponsiveContainer>
//     {/* <form action="">

//     <h2>Sign up</h2>
//     <div className='Form'>
//     <div>
//       <label htmlfor="username">UserName</label>
//       <input type="text" name="username" id="username"></input>
//     </div><br></br>
//     <div>
//       <label htmlfor="email">Email</label>
//       <input type="text" name="email" id="email"></input>
//     </div><br></br>
   
//     <div>
//       <label htmlfor="password">Password</label>
//       <input type="Password" name="pass" id="pass"></input>
//     </div><br></br>
//     <div>
//       <label htmlfor="Phone">Confirm Password</label>
//       <input type="text" name="cpass" id="cpass"></input>
//     </div><br></br>
//     <button type="submit">Registration</button>
//     </div>
//     </form>*/}
//       </> 
//        );
//     }
    


      
// export default Contact;
