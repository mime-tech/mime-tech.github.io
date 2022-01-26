import * as React from 'react';

// mui import
import { Box } from '@mui/material';

// project import
import Hero from './components/Hero';

function App() {
  return (
    <React.Fragment>
      <Hero />

      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpeg'})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
    </React.Fragment>
  );
}

export default App;
