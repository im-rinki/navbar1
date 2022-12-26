import React from 'react'
 import { Map } from 'pigeon-maps'
import { stamenTerrain } from 'pigeon-maps/providers'


function Form2() {
  return (
    <>
    <div>Form2</div>
    <Map 
    provider={stamenTerrain}
    dprs={[1, 2]} // this provider supports HiDPI tiles
    height={500}
    width={500}
    defaultCenter={[50.879, 4.6997]}
    defaultZoom={11}
    marginLeft={50}
  />


  </>
  )
}

export default Form2