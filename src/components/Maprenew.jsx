import React, { useState } from "react"
import { Map, Marker,Overlay  } from "pigeon-maps"
import logo from "../logo.svg";
import logo2 from "../components/solar.jpg"
import "./MapForm.css";
export default function Maprenew() {
  const [hue, setHue] = useState(0)
  const color = `hsl(${hue % 360}deg 39% 70%)`

  return (
    <>
     <div className="mapbtn">
      <button type="button" className="solar">Solar</button>
      <button type="button" className="wind">Wind</button>
      <button type="button" className="both">Both</button>
     
    </div>
   
    <div className="map">
    
     <Map height={400} defaultCenter={[50.879, 4.6997]} defaultZoom={11} width={400} marginLeft={50}> 
      {/* <Marker 
        width={50}
        anchor={[50.879, 4.6997]} 
       color={color} 
        onClick={() => setHue(hue + 20)} 
      /> */}
     
          {/* <CustomIcon /> */}
          
          <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
          <img src={logo2} alt="W3Schools.com" width={40} height={30}/>
      </Overlay> 
    </Map>
    </div>
    {/* <div className="mapbtn">
      <button type="button" className="solar">Solar</button>
      <button type="button" className="wind">Wind</button>
      <button type="button" className="both">Both</button>
     
    </div>
    */}
  
   </>
  )
}