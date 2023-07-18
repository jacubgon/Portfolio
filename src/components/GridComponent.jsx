import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function GridComponent() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} xl={12}>
        <Paper>Contenido 1</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper>Contenido 2</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper>Contenido 3</Paper>
      </Grid>
    </Grid>
  );
}

export default GridComponent;
