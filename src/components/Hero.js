import React from 'react';
import { Grid, Typography } from '@mui/material';

const Hero = () => {
  return (
    <Grid
      container
      direction='column'
      justifyContent='space-evenly'
      alignItems='center'
      spacing={0}
      sx={{ minHeight: '100vh' }}
    >
      <Grid item>
        <Typography variant='h1'>Hello</Typography>
      </Grid>
    </Grid>
  );
};

export default Hero;
