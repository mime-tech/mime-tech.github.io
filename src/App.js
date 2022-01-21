import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';

function App() {
  return (
    <React.Fragment>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpeg'})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />

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
    </React.Fragment>
  );
}

export default App;
