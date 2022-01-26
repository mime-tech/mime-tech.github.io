import * as React from 'react';

// mui import
import { Box } from '@mui/material';

// project import
import Hero from './components/Hero';
import Copyright from './components/Copyright';
import Header from './components/navigation/Header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />

      {/* placeholder */}
      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpeg'})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />

      <Copyright />
    </React.Fragment>
  );
}

export default App;
