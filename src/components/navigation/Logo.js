import React from 'react';

import { Typography, Link } from '@mui/material';

const Logo = (props) => {
  const logoText = 'M';

  return (
    <Typography
      variant='h3'
      noWrap
      component='div'
      sx={{ display: 'flex', fontFamily: 'Zen Tokyo Zoo', ...props }}
    >
      <Link
        color='inherit'
        underline='none'
        href='https://mime-tech.github.io/'
      >
        {logoText}
      </Link>
    </Typography>
  );
};

export default Logo;
