import React from 'react';

import { Typography, Link } from '@mui/material';

const Logo = (props) => {
  const logoText = 'M';

  return (
    <Link color='inherit' underline='none' href='https://mime-tech.github.io/'>
      <Typography
        variant='h3'
        noWrap
        component='div'
        sx={{ display: 'flex', fontFamily: 'Zen Tokyo Zoo', ...props }}
      >
        {logoText}
      </Typography>
    </Link>
  );
};

export default Logo;
