import React from 'react'
import Map from '../components/Map';
import Table from '../components/Table';
import MapForm from '../components/MapForm';
 import { Grid } from "@mui/material";

export default function Form4() {
  return (
    <>
    <Grid container spacing={2}>
    <Grid item xs={6}>
    <Map></Map>
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
