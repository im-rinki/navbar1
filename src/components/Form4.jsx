import React from 'react'
import Maprenew from '../components/Maprenew';
import Table from '../components/Table';
import MapForm from '../components/MapForm';
 import { Grid } from "@mui/material";

export default function Form4() {
  return (
    <>
     <div className="sitemasterheading">
      <h2 className="SiteMasterForm">Map MTD Site Details </h2>
    </div>
    <Grid container spacing={1}>
    <Grid item xs={6}>
    <Maprenew></Maprenew>
    </Grid>
    <Grid item xs={6}>
    <MapForm></MapForm>
    </Grid>
    <Grid item xs={12}>
    <Table></Table>
    </Grid>
    </Grid>
    </>
  )
}
